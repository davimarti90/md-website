// app/components/QuoteForm.tsx
"use client";

import * as React from "react";

type Step = 1 | 2 | 3;

type FormState = {
  // Step 1 — contacto + fechas + ubicaciones
  name: string;
  email: string;
  phone: string;
  moveDate: string; // ISO yyyy-mm-dd
  flexible: boolean;
  fromCity: string;
  fromState: string;
  fromZip: string;
  toCity: string;
  toState: string;
  toZip: string;

  // Step 2 — vivienda + acceso + bultos
  bedrooms: "Studio" | "1" | "2" | "3" | "4" | "5+";
  originFloor: string;
  destFloor: string;
  elevatorOrigin: "Yes" | "No";
  elevatorDest: "Yes" | "No";
  stairsFlightsOrigin: number;
  stairsFlightsDest: number;
  longCarry: "Yes" | "No"; // > 100 ft desde camión a puerta
  bigItems: string[]; // piano, safe, treadmill, etc.
  notes: string;

  // Step 3 — servicios + distancia (opcional)
  packing: "None" | "Partial" | "Full";
  disassembly: "Yes" | "No";
  approxMiles?: number; // opcional si el cliente sabe la distancia
};

const BIG_ITEMS = [
  "Piano",
  "Gun safe",
  "Treadmill",
  "Pool table",
  "Large TV (65”+)",
  "Fridge/Range",
  "Washer/Dryer",
  "King bed",
  "Sectional sofa",
];

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  moveDate: "",
  flexible: false,
  fromCity: "",
  fromState: "",
  fromZip: "",
  toCity: "",
  toState: "",
  toZip: "",

  bedrooms: "2",
  originFloor: "1",
  destFloor: "1",
  elevatorOrigin: "No",
  elevatorDest: "No",
  stairsFlightsOrigin: 0,
  stairsFlightsDest: 0,
  longCarry: "No",
  bigItems: [],
  notes: "",

  packing: "None",
  disassembly: "No",
  approxMiles: undefined,
};

function estimateCrewAndHours(s: FormState) {
  // Crew size by bedrooms (simple heuristic)
  let crew = 2;
  switch (s.bedrooms) {
    case "Studio": crew = 2; break;
    case "1": crew = 2; break;
    case "2": crew = 3; break;
    case "3": crew = 3; break;
    case "4": crew = 4; break;
    case "5+": crew = 4; break;
  }

  // Base hours by bedrooms
  let baseHours = 2;
  switch (s.bedrooms) {
    case "Studio": baseHours = 3; break;
    case "1": baseHours = 4; break;
    case "2": baseHours = 5.5; break;
    case "3": baseHours = 7; break;
    case "4": baseHours = 8.5; break;
    case "5+": baseHours = 10; break;
  }

  // Stairs impact (cap at +2 per side)
  const stairsImpact = Math.min(2, s.stairsFlightsOrigin) + Math.min(2, s.stairsFlightsDest);
  // Long carry impact
  const longCarryImpact = s.longCarry === "Yes" ? 1 : 0;
  // Packing impact
  const packingImpact = s.packing === "Full" ? 2 : s.packing === "Partial" ? 1 : 0;

  const hours = baseHours + stairsImpact * 0.5 + longCarryImpact * 0.75 + packingImpact;
  const min = Math.max(3, Math.round((hours - 0.75) * 10) / 10);
  const max = Math.round((hours + 0.75) * 10) / 10;

  // Optional miles hint (if user provides)
  let milesHint = "";
  if (typeof s.approxMiles === "number" && s.approxMiles > 0) {
    if (s.approxMiles <= 30) milesHint = "Local-ish (≤30 miles).";
    else if (s.approxMiles <= 150) milesHint = "Short interstate (≤150 miles).";
    else milesHint = "Longer interstate (>150 miles).";
  }

  return { crew, hoursRange: `${min}–${max} hrs`, milesHint };
}

function buildMailto(s: FormState) {
  const { crew, hoursRange, milesHint } = estimateCrewAndHours(s);

  const subject = `Quote Request — ${s.name} — ${s.moveDate || "Date TBA"}`;
  const bodyLines = [
    `Name: ${s.name}`,
    `Email: ${s.email}`,
    `Phone: ${s.phone}`,
    `Move date: ${s.moveDate || "TBA"} ${s.flexible ? "(flexible)" : ""}`,
    "",
    `From: ${s.fromCity}, ${s.fromState} ${s.fromZip}`,
    `To:   ${s.toCity}, ${s.toState} ${s.toZip}`,
    "",
    `Bedrooms: ${s.bedrooms}`,
    `Origin floor: ${s.originFloor} (Elevator: ${s.elevatorOrigin}) | Stairs flights: ${s.stairsFlightsOrigin}`,
    `Destination floor: ${s.destFloor} (Elevator: ${s.elevatorDest}) | Stairs flights: ${s.stairsFlightsDest}`,
    `Long carry (>100ft): ${s.longCarry}`,
    `Big items: ${s.bigItems.length ? s.bigItems.join(", ") : "—"}`,
    "",
    `Packing: ${s.packing} | Disassembly: ${s.disassembly}`,
    `Approx miles: ${s.approxMiles ?? "—"}`,
    "",
    `Notes:\n${s.notes || "—"}`,
    "",
    `Quick estimate (non-binding): crew ${crew}, ${hoursRange}. ${milesHint}`,
  ].join("\n");

  const to = "admin@mdinterstatemoving.com"; // cambia si quieres
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines)}`;
}

export default function QuoteForm() {
  const [step, setStep] = React.useState<Step>(1);
  const [form, setForm] = React.useState<FormState>(initialState);

  const { crew, hoursRange, milesHint } = estimateCrewAndHours(form);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleBigItem(item: string) {
    setForm((prev) => {
      const exists = prev.bigItems.includes(item);
      const next = exists ? prev.bigItems.filter((x) => x !== item) : [...prev.bigItems, item];
      return { ...prev, bigItems: next };
    });
  }

  function next() {
    setStep((s) => (s < 3 ? ((s + 1) as Step) : s));
  }
  function back() {
    setStep((s) => (s > 1 ? ((s - 1) as Step) : s));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // v1: mailto (sin envs)
    const url = buildMailto(form);
    window.location.href = url;
  }

  const requiredStep1 =
    form.name.trim() &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.phone.trim() &&
    form.fromCity.trim() && form.fromState.trim() && form.fromZip.trim() &&
    form.toCity.trim() && form.toState.trim() && form.toZip.trim();

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[1fr_380px]">
      {/* LEFT: Steps */}
      <div className="space-y-8">
        {/* Step nav (simple) */}
        <ol className="flex items-center gap-3 text-sm text-white/70">
          <li className={step >= 1 ? "font-semibold text-white" : ""}>1. Basics</li>
          <span className="opacity-40">/</span>
          <li className={step >= 2 ? "font-semibold text-white" : ""}>2. Home & Access</li>
          <span className="opacity-40">/</span>
          <li className={step >= 3 ? "font-semibold text-white" : ""}>3. Services & Review</li>
        </ol>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-xl font-bold">Basics</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1">
                <span className="text-sm text-white/80">Full name*</span>
                <input
                  className="input"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="John Appleseed"
                  required
                />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-white/80">Email*</span>
                <input
                  type="email"
                  className="input"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-white/80">Phone*</span>
                <input
                  className="input"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="(555) 555-5555"
                  required
                />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-white/80">Move date</span>
                <input
                  type="date"
                  className="input"
                  value={form.moveDate}
                  onChange={(e) => update("moveDate", e.target.value)}
                />
              </label>

              <label className="inline-flex items-center gap-2 sm:col-span-2 mt-2">
                <input
                  type="checkbox"
                  checked={form.flexible}
                  onChange={(e) => update("flexible", e.target.checked)}
                />
                <span className="text-sm text-white/80">Date flexible</span>
              </label>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="sm:col-span-3 text-sm font-semibold text-white/80">From</div>
              <input className="input" placeholder="City" value={form.fromCity} onChange={(e) => update("fromCity", e.target.value)} />
              <input className="input" placeholder="State" value={form.fromState} onChange={(e) => update("fromState", e.target.value)} />
              <input className="input" placeholder="ZIP" value={form.fromZip} onChange={(e) => update("fromZip", e.target.value)} />
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="sm:col-span-3 text-sm font-semibold text-white/80">To</div>
              <input className="input" placeholder="City" value={form.toCity} onChange={(e) => update("toCity", e.target.value)} />
              <input className="input" placeholder="State" value={form.toState} onChange={(e) => update("toState", e.target.value)} />
              <input className="input" placeholder="ZIP" value={form.toZip} onChange={(e) => update("toZip", e.target.value)} />
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-white/60">* Required</span>
              <button
                type="button"
                onClick={next}
                disabled={!requiredStep1}
                className="btn-primary disabled:opacity-40"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-6">
            <h3 className="text-xl font-bold">Home & Access</h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1">
                <span className="text-sm text-white/80">Bedrooms</span>
                <select
                  className="input"
                  value={form.bedrooms}
                  onChange={(e) => update("bedrooms", e.target.value as FormState["bedrooms"])}
                >
                  <option>Studio</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5+</option>
                </select>
              </label>

              <label className="grid gap-1">
                <span className="text-sm text-white/80">Long carry (&gt; 100ft)</span>
                <select
                  className="input"
                  value={form.longCarry}
                  onChange={(e) => update("longCarry", e.target.value as "Yes" | "No")}
                >
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </label>

              <label className="grid gap-1">
                <span className="text-sm text-white/80">Origin floor</span>
                <input
                  className="input"
                  value={form.originFloor}
                  onChange={(e) => update("originFloor", e.target.value)}
                  placeholder="1"
                />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-white/80">Destination floor</span>
                <input
                  className="input"
                  value={form.destFloor}
                  onChange={(e) => update("destFloor", e.target.value)}
                  placeholder="1"
                />
              </label>

              <label className="grid gap-1">
                <span className="text-sm text-white/80">Elevator (origin)</span>
                <select
                  className="input"
                  value={form.elevatorOrigin}
                  onChange={(e) => update("elevatorOrigin", e.target.value as "Yes" | "No")}
                >
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-white/80">Elevator (destination)</span>
                <select
                  className="input"
                  value={form.elevatorDest}
                  onChange={(e) => update("elevatorDest", e.target.value as "Yes" | "No")}
                >
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </label>

              <label className="grid gap-1">
                <span className="text-sm text-white/80">Stairs flights (origin)</span>
                <input
                  type="number"
                  min={0}
                  className="input"
                  value={form.stairsFlightsOrigin}
                  onChange={(e) => update("stairsFlightsOrigin", Number(e.target.value))}
                />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-white/80">Stairs flights (destination)</span>
                <input
                  type="number"
                  min={0}
                  className="input"
                  value={form.stairsFlightsDest}
                  onChange={(e) => update("stairsFlightsDest", Number(e.target.value))}
                />
              </label>
            </div>

            <div>
              <div className="mb-2 text-sm font-semibold text-white/80">Big items</div>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {BIG_ITEMS.map((item) => (
                  <label key={item} className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={form.bigItems.includes(item)}
                      onChange={() => toggleBigItem(item)}
                    />
                    <span className="text-sm text-white/85">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="grid gap-1">
                <span className="text-sm text-white/80">Notes</span>
                <textarea
                  className="input min-h-[96px]"
                  placeholder="Anything else we should know?"
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                />
              </label>
            </div>

            <div className="flex justify-between">
              <button type="button" onClick={back} className="btn-ghost">Back</button>
              <button type="button" onClick={next} className="btn-primary">Continue</button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-6">
            <h3 className="text-xl font-bold">Services & Review</h3>

            <div className="grid gap-4 sm:grid-cols-3">
              <label className="grid gap-1">
                <span className="text-sm text-white/80">Packing</span>
                <select
                  className="input"
                  value={form.packing}
                  onChange={(e) => update("packing", e.target.value as FormState["packing"])}
                >
                  <option>None</option>
                  <option>Partial</option>
                  <option>Full</option>
                </select>
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-white/80">Disassembly</span>
                <select
                  className="input"
                  value={form.disassembly}
                  onChange={(e) => update("disassembly", e.target.value as "Yes" | "No")}
                >
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-white/80">Approx. miles (optional)</span>
                <input
                  type="number"
                  min={0}
                  className="input"
                  value={form.approxMiles ?? ""}
                  onChange={(e) => update("approxMiles", e.target.value === "" ? undefined : Number(e.target.value))}
                  placeholder="e.g., 120"
                />
              </label>
            </div>

            <div className="flex justify-between">
              <button type="button" onClick={back} className="btn-ghost">Back</button>
              <button type="submit" className="btn-primary">Send quote request</button>
            </div>
          </div>
        )}
      </div>

      {/* RIGHT: Summary */}
      <aside className="rounded-2xl border border-white/10 bg-white/5 p-6 h-fit sticky top-24">
        <h4 className="text-lg font-bold">Quick Estimate</h4>
        <p className="mt-1 text-sm text-white/70">Non-binding, for scheduling/crew sizing.</p>

        <dl className="mt-4 grid gap-2 text-sm">
          <div className="flex items-center justify-between">
            <dt className="text-white/80">Crew</dt>
            <dd className="font-semibold">{crew} movers</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-white/80">Hours</dt>
            <dd className="font-semibold">{hoursRange}</dd>
          </div>
          {milesHint && (
            <div className="flex items-center justify-between">
              <dt className="text-white/80">Distance</dt>
              <dd className="font-semibold">{milesHint}</dd>
            </div>
          )}
        </dl>

        <hr className="my-6 border-white/10" />

        <div className="text-sm text-white/75 space-y-1">
          <div><span className="text-white/90 font-semibold">From:</span> {form.fromCity || "—"}, {form.fromState || "—"} {form.fromZip || ""}</div>
          <div><span className="text-white/90 font-semibold">To:</span> {form.toCity || "—"}, {form.toState || "—"} {form.toZip || ""}</div>
          <div><span className="text-white/90 font-semibold">Date:</span> {form.moveDate || "TBA"} {form.flexible ? "(flexible)" : ""}</div>
          <div><span className="text-white/90 font-semibold">Bedrooms:</span> {form.bedrooms}</div>
          {!!form.bigItems.length && (
            <div><span className="text-white/90 font-semibold">Big items:</span> {form.bigItems.join(", ")}</div>
          )}
        </div>

        <p className="mt-6 text-xs text-white/60">
          Final pricing depends on onsite conditions, inventory and distance. We’ll confirm details before scheduling.
        </p>
      </aside>
    </form>
  );
}
