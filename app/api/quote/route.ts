// app/api/quote/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type FormState = {
  name: string; email: string; phone: string; moveDate?: string; flexible?: boolean;
  fromCity: string; fromState: string; fromZip: string;
  toCity: string; toState: string; toZip: string;
  bedrooms: "Studio" | "1" | "2" | "3" | "4" | "5+";
  originFloor: string; destFloor: string;
  elevatorOrigin: "Yes" | "No"; elevatorDest: "Yes" | "No";
  stairsFlightsOrigin: number; stairsFlightsDest: number;
  longCarry: "Yes" | "No"; bigItems: string[]; notes?: string;
  packing: "None" | "Partial" | "Full"; disassembly: "Yes" | "No"; approxMiles?: number;
  company?: string; // honeypot
};

function estimateCrewAndHours(s: FormState) {
  let crew = 2;
  switch (s.bedrooms) { case "Studio": case "1": crew = 2; break; case "2": case "3": crew = 3; break; default: crew = 4; }
  let baseHours = 2;
  switch (s.bedrooms) { case "Studio": baseHours = 3; break; case "1": baseHours = 4; break; case "2": baseHours = 5.5; break; case "3": baseHours = 7; break; case "4": baseHours = 8.5; break; default: baseHours = 10; }
  const hours = baseHours
    + (Math.min(2, s.stairsFlightsOrigin) + Math.min(2, s.stairsFlightsDest)) * 0.5
    + (s.longCarry === "Yes" ? 1 : 0) * 0.75
    + (s.packing === "Full" ? 2 : s.packing === "Partial" ? 1 : 0);
  const min = Math.max(3, Math.round((hours - 0.75) * 10) / 10);
  const max = Math.round((hours + 0.75) * 10) / 10;
  let milesHint = "";
  if (typeof s.approxMiles === "number" && s.approxMiles > 0) {
    milesHint = s.approxMiles <= 30 ? "Local-ish (≤30 miles)" :
                s.approxMiles <= 150 ? "Short interstate (≤150 miles)" :
                "Longer interstate (>150 miles)";
  }
  return { crew, hoursRange: `${min}–${max} hrs`, milesHint };
}

export async function POST(req: Request) {
  try {
    const data = await req.json() as Partial<FormState>;

    // Honeypot
    if (data.company && String(data.company).trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Validación mínima
    const required = ["name","email","phone","fromCity","fromState","fromZip","toCity","toState","toZip","bedrooms","originFloor","destFloor","elevatorOrigin","elevatorDest","stairsFlightsOrigin","stairsFlightsDest","longCarry","packing","disassembly"] as const;
    for (const k of required) {
      if (data[k] === undefined || data[k] === null || String(data[k]).trim() === "") {
        return NextResponse.json({ ok: false, error: `Missing field: ${k}` }, { status: 400 });
      }
    }
    if (!/\S+@\S+\.\S+/.test(String(data.email))) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    const form = {
      bigItems: [], notes: "", approxMiles: undefined, flexible: false, moveDate: "", ...data,
    } as FormState;

    const { crew, hoursRange, milesHint } = estimateCrewAndHours(form);

    // Gmail SMTP (App Password)
    const user = process.env.GMAIL_USER!;
    const pass = process.env.GMAIL_APP_PASSWORD!;
    if (!user || !pass) {
      return NextResponse.json({ ok: false, error: "Missing GMAIL_USER or GMAIL_APP_PASSWORD" }, { status: 500 });
    }
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
    });

    const TO = process.env.GMAIL_TO || "support@mdinterstatemoving.com";
    const CC = process.env.GMAIL_CC; // opcional
    const FROM = process.env.GMAIL_FROM || `MD Interstate Moving <${user}>`;

    const subject = `New Quote — ${form.name} — ${form.moveDate || "Date TBA"}`;
    const text = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Move date: ${form.moveDate || "TBA"} ${form.flexible ? "(flexible)" : ""}`,
      ``,
      `From: ${form.fromCity}, ${form.fromState} ${form.fromZip}`,
      `To:   ${form.toCity}, ${form.toState} ${form.toZip}`,
      ``,
      `Bedrooms: ${form.bedrooms}`,
      `Origin floor: ${form.originFloor} (Elevator: ${form.elevatorOrigin}) | Stairs: ${form.stairsFlightsOrigin}`,
      `Destination floor: ${form.destFloor} (Elevator: ${form.elevatorDest}) | Stairs: ${form.stairsFlightsDest}`,
      `Long carry (>100ft): ${form.longCarry}`,
      `Big items: ${form.bigItems.length ? form.bigItems.join(", ") : "—"}`,
      ``,
      `Packing: ${form.packing} | Disassembly: ${form.disassembly}`,
      `Approx miles: ${form.approxMiles ?? "—"}`,
      ``,
      `Notes: ${form.notes || "—"}`,
      ``,
      `Quick estimate (non-binding): crew ${crew}, ${hoursRange}. ${milesHint}`,
    ].join("\n");

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial">
        <h2>New Quote Request</h2>
        <p><strong>${form.name}</strong> — ${form.email} — ${form.phone}</p>
        <p><strong>Date:</strong> ${form.moveDate || "TBA"} ${form.flexible ? "(flexible)" : ""}</p>
        <hr />
        <p><strong>From:</strong> ${form.fromCity}, ${form.fromState} ${form.fromZip}<br/>
           <strong>To:</strong> ${form.toCity}, ${form.toState} ${form.toZip}</p>
        <p><strong>Bedrooms:</strong> ${form.bedrooms}</p>
        <p><strong>Origin:</strong> floor ${form.originFloor}, elevator ${form.elevatorOrigin}, stairs ${form.stairsFlightsOrigin}<br/>
           <strong>Destination:</strong> floor ${form.destFloor}, elevator ${form.elevatorDest}, stairs ${form.stairsFlightsDest}</p>
        <p><strong>Long carry:</strong> ${form.longCarry}</p>
        <p><strong>Big items:</strong> ${form.bigItems.length ? form.bigItems.join(", ") : "—"}</p>
        <p><strong>Packing:</strong> ${form.packing} — <strong>Disassembly:</strong> ${form.disassembly}<br/>
           <strong>Approx miles:</strong> ${form.approxMiles ?? "—"}</p>
        <p><strong>Notes:</strong><br/>${(form.notes || "—").replace(/\n/g, "<br/>")}</p>
        <hr />
        <p><strong>Quick estimate:</strong> crew ${crew}, ${hoursRange}. ${milesHint}</p>
      </div>
    `;

    const info = await transporter.sendMail({
      from: FROM,
      to: TO,
      cc: process.env.GMAIL_CC || undefined,
      replyTo: form.email,
      subject,
      text,
      html,
    });

    if (!info.messageId) {
      return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 500 });
    }
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || "Unknown error" }, { status: 500 });
  }
}
