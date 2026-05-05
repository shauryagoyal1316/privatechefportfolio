import { useState } from "react";
import { z } from "zod";


const schema = z.object({
  name: z.string().trim().min(2, "Please share your name.").max(80),
  email: z.string().trim().email("That email looks off.").max(160),
  phone: z.string().trim().min(6, "Add a contact number.").max(40),
  eventType: z.enum(["Tasting Menu", "Dinner Party", "Special Occasion"]),
  guests: z.coerce.number().min(2, "Minimum 2 guests.").max(40, "I cap private dinners at 40."),
  date: z.string().min(1, "Pick a date."),
  notes: z.string().max(600).optional(),
});

type Form = {
  name: string; email: string; phone: string;
  eventType: "Tasting Menu" | "Dinner Party" | "Special Occasion";
  guests: string; date: string; notes: string;
};

const initial: Form = { name: "", email: "", phone: "", eventType: "Tasting Menu", guests: "", date: "", notes: "" };

export default function Booking() {
  const [form, setForm] = useState<Form>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validateField = (name: keyof Form) => {
    const result = schema.safeParse({ ...form, guests: form.guests || "0" });
    if (result.success) {
      setErrors((e) => ({ ...e, [name]: undefined }));
      return;
    }
    const issue = result.error.issues.find((i) => i.path[0] === name);
    setErrors((e) => ({ ...e, [name]: issue?.message }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse({ ...form, guests: form.guests });
    if (!result.success) {
      const errs: any = {};
      result.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setDone(true);
  };

  const set = (k: keyof Form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <section
      id="book"
      className="bg-primary text-primary-foreground relative overflow-hidden"
      style={{ paddingTop: 96, paddingBottom: 96 }}
    >
      {/* decorative gold corner */}
      <div
        aria-hidden
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full"
        style={{ background: "hsl(var(--gold) / 0.08)", filter: "blur(40px)" }}
      />
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="font-label text-xs2 text-primary-foreground/70 mb-4">
            <span className="text-[hsl(var(--gold))]">06 ·</span> Reservations
          </p>
          <h2 className="font-display text-primary-foreground" style={{ fontSize: 49 }}>
            Pick a night. I'll handle the rest.
          </h2>
          <p className="font-body text-md2 text-primary-foreground/80 mt-8 max-w-md">
            Tell me a little about the dinner you have in mind. I usually reply within a day, sometimes two if I'm at the market.
          </p>
          <div className="mt-12 space-y-3 font-body text-base2 text-primary-foreground/80">
            <p>123 Anywhere Street</p>
            <p>hello@julienmarceau.example</p>
          </div>
        </div>

        <div className="lg:col-span-7">
          {done ? (
            <div className="bg-primary-foreground/5 border border-primary-foreground/15 p-10 animate-fade-up">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-8"
                style={{ background: "hsl(var(--gold))" }}
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="hsl(var(--gold-foreground))" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path
                    d="M5 12.5l4.5 4.5L19 7"
                    style={{ strokeDasharray: 24, strokeDashoffset: 24, animation: "draw-check 600ms cubic-bezier(0.16, 1, 0.3, 1) 150ms forwards" }}
                  />
                </svg>
              </div>
              <h3 className="font-display text-primary-foreground" style={{ fontSize: 31 }}>
                Thank you, {form.name.split(" ")[0]}.
              </h3>
              <p className="font-body text-md2 text-primary-foreground/80 mt-4 max-prose">
                Your request is in. I'll be in touch shortly to confirm the date and walk through the menu with you.
              </p>
              <button
                onClick={() => { setDone(false); setForm(initial); setErrors({}); }}
                className="btn-base btn-ghost-light mt-10"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {[
                { k: "name", label: "Name", type: "text", auto: "name" },
                { k: "email", label: "Email", type: "email", auto: "email" },
                { k: "phone", label: "Phone", type: "tel", auto: "tel" },
                { k: "guests", label: "Number of Guests", type: "number" },
              ].map((f) => (
                <div key={f.k} className={f.k === "name" ? "sm:col-span-2" : ""}>
                  <label className="font-label text-xs2 text-primary-foreground/70 block mb-2">{f.label}</label>
                  <input
                    type={f.type}
                    autoComplete={f.auto}
                    inputMode={f.k === "guests" ? "numeric" : undefined}
                    value={(form as any)[f.k]}
                    onChange={(e) => set(f.k as keyof Form)(e.target.value)}
                    onBlur={() => validateField(f.k as keyof Form)}
                    aria-invalid={!!errors[f.k as keyof Form]}
                    className="field-dark"
                  />
                  {errors[f.k as keyof Form] && (
                    <p className="font-body text-xs2 text-[hsl(0_70%_82%)] mt-2">{errors[f.k as keyof Form]}</p>
                  )}
                </div>
              ))}

              <div>
                <label className="font-label text-xs2 text-primary-foreground/70 block mb-2">Event Type</label>
                <select
                  value={form.eventType}
                  onChange={(e) => set("eventType")(e.target.value)}
                  className="field-dark appearance-none cursor-pointer"
                  style={{ backgroundImage: "linear-gradient(45deg, transparent 50%, hsl(var(--background) / 0.7) 50%), linear-gradient(135deg, hsl(var(--background) / 0.7) 50%, transparent 50%)", backgroundPosition: "calc(100% - 12px) 50%, calc(100% - 6px) 50%", backgroundSize: "6px 6px", backgroundRepeat: "no-repeat", paddingRight: 24 }}
                >
                  <option className="bg-primary text-primary-foreground">Tasting Menu</option>
                  <option className="bg-primary text-primary-foreground">Dinner Party</option>
                  <option className="bg-primary text-primary-foreground">Special Occasion</option>
                </select>
              </div>

              <div>
                <label className="font-label text-xs2 text-primary-foreground/70 block mb-2">Preferred Date</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => set("date")(e.target.value)}
                  onBlur={() => validateField("date")}
                  aria-invalid={!!errors.date}
                  className="field-dark"
                  style={{ colorScheme: "dark" }}
                />
                {errors.date && <p className="font-body text-xs2 text-[hsl(0_70%_82%)] mt-2">{errors.date}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="font-label text-xs2 text-primary-foreground/70 block mb-2">Additional Notes</label>
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={(e) => set("notes")(e.target.value)}
                  className="field-dark resize-none"
                  placeholder="Allergies, the occasion, who's coming…"
                />
              </div>

              <div className="sm:col-span-2 mt-4 flex flex-wrap items-center gap-6">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-base font-label text-xs2 relative overflow-hidden disabled:cursor-wait"
                  style={{ background: "hsl(var(--gold))", color: "hsl(var(--gold-foreground))" }}
                >
                  <span className="relative z-10">{submitting ? "Sending…" : "Request a Date"}</span>
                  {submitting && (
                    <span
                      aria-hidden
                      className="absolute inset-0 z-0"
                      style={{
                        background: "linear-gradient(90deg, transparent, hsl(var(--gold-foreground) / 0.2), transparent)",
                        animation: "shimmer-strip 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite",
                      }}
                    />
                  )}
                </button>
                <p className="font-body text-xs2 text-primary-foreground/60">
                  No payment taken — this is a request, not a booking.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
