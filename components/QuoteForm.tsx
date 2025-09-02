// app/components/QuoteForm.tsx
"use client";

import * as React from "react";

type Step = 1 | 2 | 3;

type FormState = {
  name: string;
  email: string;
  phone: string;
  moveDate: string;
  flexible: boolean;
  fromCity: string;
  fromState: string;
  fromZip: string;
  toCity: string;
  toState: string;
  toZip: string;

  bedrooms: "Studio" | "1" | "2" | "3" | "4" | "5+";
  originFloor: string;
  destFloor: string;
  elevatorOrigin: "Yes" | "No";
  elevatorDest: "Yes" | "No";
  stairsFlightsOrigin: number;
  stairsFlightsDest: number;
  longCarry: "Yes" | "No";
  bigItems: string[];
  notes: string;

  packing: "None" | "Partial" | "Full";
  disassembly: "Yes" | "No";
  approxMiles?: number;
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
  let crew = 2;
  switch (s.bedrooms) {
    case "Studio":
    case "1": crew = 2; break;
    case "2":
    case "3": crew = 3; break;
    default: crew = 4; break;
  }
  let baseHours = 2;
  switch (s.bedrooms) {
    case "Studio": baseHours = 3; break;
    case "1": baseHours = 4; break;
    case "2": baseHours = 5.5; break;
    case "3": baseHours = 7; break;
    case "4": baseHours = 8.5; break;
    default: baseHours = 10; break;
  }
  const stairsImpact = Math.min(2, s.stairsFlightsOrigin) + Math.min(2, s.stairsFlightsDest);
  const longCarryImpact = s.longCarry === "Yes" ? 1 : 0;
  const packingImpact = s.packing === "Full" ? 2 : s.packing === "Partial" ? 1 : 0;
  const hours = baseHours + stairsImpact * 0.5 + longCarryImpact * 0.75 + packingImpact;
  const min = Math.max(3, Math.round((hours - 0.75) * 10) / 10);
  const max = Math.round((hours + 0.75) * 10) / 10;

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
  const to = "admin@mdinterstatemoving.com";
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
  function next() { setStep((s) => (s < 3 ? ((s + 1) as Step) : s)); }
  function back() { setStep((s) => (s > 1 ? ((s - 1) as Step) : s)); }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = buildMailto(form);
  }

  const requiredStep1 =
    form.name.trim() &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.phone.trim() &&
    form.fromCity.trim() && form.fromState.trim() && form.fromZip.trim() &&
    form.toCity.trim() && form.toState.trim() && form.toZip.trim();

  // Progress %
  const progress = step === 1 ? 33 : step === 2 ? 66 : 100;

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[1fr_380px]">
      {/* LEFT */}
      <div className="space-y-8">
        {/* Stepper limpio */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <div className="flex items-center justify-between text-sm text-white/70 mb-3">
            <span className={step >= 1 ? "font-semibold text-white" : ""}>Basics</span>
            <span className={step >= 2 ? "font-semibold text-white" : ""}>Home & Access</span>
            <span className={step >= 3 ? "font-semibold text-white" : ""}>Services & Review</span>
          </div>
          <div className="h-1 w-full rounded-full bg-white/10">
            <div className="h-1 rounded-full bg-yellow-400 transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 space-y-6">
            <h3 className="text-xl font-bold">Basics</h3>

            {/* contacto */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-white/80">Full name*</label>
                <input className="input mt-1" placeholder="John Appleseed" value={form.name} onChange={(e) => update("name", e.target.value)} required />
              </div>
              <div>
                <label className="text-sm text-white/80">Email*</label>
                <input type="email" className="input mt-1" placeholder="you@example.com" value={form.email} onChange={(e) => update("email", e.target.value)} required />
              </div>
              <div>
                <label className="text-sm text-white/80">Phone*</label>
                <input className="input mt-1" placeholder="(555) 555-5555" value={form.phone} onChange={(e) => update("phone", e.target.value)} required />
              </div>
              <div>
                <label className="text-sm text-white/80">Move date</label>
                <input type="date" className="input mt-1" value={form.moveDate} onChange={(e) => update("moveDate", e.target.value)} />
              </div>
            </div>

            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={form.flexible} onChange={(e) => update("flexible", e.target.checked)} />
              <span className="text-sm text-white/80">Date flexible</span>
            </label>

            {/* ubicaciones */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="sm:col-span-3 text-sm font-semibold text-white/85">From</div>
              <input className="input" placeholder="City" value={form.fromCity} onChange={(e) => update("fromCity", e.target.value)} />
              <input className="input" placeholder="State" value={form.fromState} onChange={(e) => update("fromState", e.target.value)} />
              <input className="input" placeholder="ZIP" value={form.fromZip} onChange={(e) => update("fromZip", e.target.value)} />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="sm:col-span-3 text-sm font-semibold text-white/85">To</div>
              <input className="input" placeholder="City" value={form.toCity} onChange={(e) => update("toCity", e.target.value)} />
              <input className="input" placeholder="State" value={form.toState} onChange={(e) => update("toState", e.target.value)} />
              <input className="input" placeholder="ZIP" value={form.toZip} onChange={(e) => update("toZip", e.target.value)} />
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-white/60">* Required</span>
              <button type="button" onClick={next} disabled={!requiredStep1} className="btn-primary disabled:opacity-40">Continue</button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 space-y-6">
            <h3 className="text-xl font-bold">Home & Access</h3>

            {/* Bedrooms: botones segmentados */}
            <div>
              <div className="mb-2 text-sm text-white/80">Bedrooms</div>
              <div className="flex flex-wrap gap-2">
                {(["Studio","1","2","3","4","5+"] as FormState["bedrooms"][]).map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => update("bedrooms", b)}
                    className={`rounded-xl px-3 py-2 text-sm border transition ${
                      form.bedrooms === b
                        ? "border-yellow-400/60 bg-yellow-400/15 text-yellow-100"
                        : "border-white/10 bg-white/5 text-white/80 hover:border-white/20"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Access quick toggles */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <div className="mb-2 text-sm text-white/80">Long carry (&gt;100ft)</div>
                <div className="flex gap-2">
                  {(["No","Yes"] as const).map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => update("longCarry", v)}
                      className={`rounded-xl px-3 py-2 text-sm border transition ${
                        form.longCarry === v
                          ? "border-yellow-400/60 bg-yellow-400/15 text-yellow-100"
                          : "border-white/10 bg-white/5 text-white/80 hover:border-white/20"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-2 text-sm text-white/80">Elevator (origin)</div>
                <div className="flex gap-2">
                  {(["No","Yes"] as const).map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => update("elevatorOrigin", v)}
                      className={`rounded-xl px-3 py-2 text-sm border transition ${
                        form.elevatorOrigin === v
                          ? "border-yellow-400/60 bg-yellow-400/15 text-yellow-100"
                          : "border-white/10 bg-white/5 text-white/80 hover:border-white/20"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-2 text-sm text-white/80">Elevator (destination)</div>
                <div className="flex gap-2">
                  {(["No","Yes"] as const).map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => update("elevatorDest", v)}
                      className={`rounded-xl px-3 py-2 text-sm border transition ${
                        form.elevatorDest === v
                          ? "border-yellow-400/60 bg-yellow-400/15 text-yellow-100"
                          : "border-white/10 bg-white/5 text-white/80 hover:border-white/20"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm text-white/80">Origin floor</label>
                  <input className="input mt-1" value={form.originFloor} onChange={(e) => update("originFloor", e.target.value)} />
                </div>
                <div>
                  <label className="text-sm text-white/80">Destination floor</label>
                  <input className="input mt-1" value={form.destFloor} onChange={(e) => update("destFloor", e.target.value)} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm text-white/80">Stairs flights (origin)</label>
                  <input type="number" min={0} className="input mt-1" value={form.stairsFlightsOrigin} onChange={(e) => update("stairsFlightsOrigin", Number(e.target.value))} />
                </div>
                <div>
                  <label className="text-sm text-white/80">Stairs flights (destination)</label>
                  <input type="number" min={0} className="input mt-1" value={form.stairsFlightsDest} onChange={(e) => update("stairsFlightsDest", Number(e.target.value))} />
                </div>
              </div>
            </div>

            {/* Big items */}
            <div>
              <div className="mb-2 text-sm text-white/80">Big items</div>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {BIG_ITEMS.map((item) => {
                  const active = form.bigItems.includes(item);
                  return (
                    <button
                      type="button"
                      key={item}
                      onClick={() => toggleBigItem(item)}
                      className={`rounded-xl px-3 py-2 text-sm border text-left transition ${
                        active
                          ? "border-yellow-400/60 bg-yellow-400/15 text-yellow-100"
                          : "border-white/10 bg-white/5 text-white/80 hover:border-white/20"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="text-sm text-white/80">Notes</label>
              <textarea
                className="input mt-1 min-h-[96px]"
                placeholder="Anything else we should know?"
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
              />
            </div>

            <div className="flex justify-between">
              <button type="button" onClick={back} className="btn-ghost">Back</button>
              <button type="button" onClick={next} className="btn-primary">Continue</button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 space-y-6">
            <h3 className="text-xl font-bold">Services & Review</h3>

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <div className="mb-2 text-sm text-white/80">Packing</div>
                <div className="flex gap-2">
                  {(["None","Partial","Full"] as const).map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => update("packing", v)}
                      className={`rounded-xl px-3 py-2 text-sm border transition ${
                        form.packing === v
                          ? "border-yellow-400/60 bg-yellow-400/15 text-yellow-100"
                          : "border-white/10 bg-white/5 text-white/80 hover:border-white/20"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-2 text-sm text-white/80">Disassembly</div>
                <div className="flex gap-2">
                  {(["No","Yes"] as const).map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => update("disassembly", v)}
                      className={`rounded-xl px-3 py-2 text-sm border transition ${
                        form.disassembly === v
                          ? "border-yellow-400/60 bg-yellow-400/15 text-yellow-100"
                          : "border-white/10 bg-white/5 text-white/80 hover:border-white/20"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm text-white/80">Approx. miles (optional)</label>
                <input
                  type="number"
                  min={0}
                  className="input mt-1"
                  value={form.approxMiles ?? ""}
                  onChange={(e) => update("approxMiles", e.target.value === "" ? undefined : Number(e.target.value))}
                  placeholder="e.g., 120"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <button type="button" onClick={back} className="btn-ghost">Back</button>
              <button type="submit" className="btn-primary">Send quote request</button>
            </div>
          </div>
        )}
      </div>

      {/* RIGHT summary (solo desktop para no parecer “tabla”) */}
      <aside className="hidden lg:block rounded-2xl border border-white/10 bg-white/[0.04] p-6 h-fit sticky top-24">
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
