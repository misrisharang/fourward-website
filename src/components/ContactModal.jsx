import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useSite } from "../context/site";
import { OBJECTIVES, CONTACT } from "../data/content";
import { EASE } from "./Reveal";

const API = `${import.meta.env.VITE_BACKEND_URL}/api`;

const EMPTY = {
  name: "",
  work_email: "",
  company: "",
  website: "",
  role: "",
  objective: "",
  target_metric: "",
  timeline: "",
  message: "",
};

const inputCls =
  "w-full border border-hairline bg-transparent px-4 py-3.5 text-sm text-paper placeholder:text-paper/30 outline-none transition-colors duration-300 focus:border-accent";
const labelCls = "mb-2 block font-grotesk text-[10px] font-medium uppercase tracking-[0.25em] text-paper/50";

const Field = ({ id, label, error, children }) => (
  <div>
    <label htmlFor={id} className={labelCls}>
      {label}
      {error && <span className="ml-2 normal-case tracking-normal text-red-400">{error}</span>}
    </label>
    {children}
  </div>
);

export const ContactModal = () => {
  const { contactOpen, closeContact, lenisRef } = useSite();
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (contactOpen) {
      document.body.style.overflow = "hidden";
      lenisRef.current?.stop();
    } else {
      document.body.style.overflow = "";
      lenisRef.current?.start();
    }
  }, [contactOpen, lenisRef]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeContact();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeContact]);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.work_email)) er.work_email = "Valid work email required";
    if (!form.company.trim()) er.company = "Required";
    if (!form.objective) er.objective = "Pick one";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      await axios.post(`${API}/leads`, form);
      setStatus("done");
    } catch (err) {
      setStatus("error");
    }
  };

  const reset = () => {
    setForm(EMPTY);
    setErrors({});
    setStatus("idle");
  };

  return (
    <AnimatePresence>
      {contactOpen && (
        <motion.div
          data-testid="contact-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[90] flex justify-end bg-ink/70 backdrop-blur-sm"
          onClick={closeContact}
          role="dialog"
          aria-modal="true"
          aria-label="Start a conversation"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.55, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="h-full w-full overflow-y-auto border-l border-hairline bg-ink sm:max-w-[720px]"
          >
            <div className="flex items-center justify-between border-b border-hairline px-6 py-5 sm:px-10">
              <p className="font-grotesk text-[11px] font-medium uppercase tracking-[0.3em] text-paper/50">
                Fourward — New brief
              </p>
              <button
                data-testid="contact-modal-close"
                onClick={closeContact}
                aria-label="Close contact form"
                className="px-2 py-1 font-grotesk text-[11px] uppercase tracking-[0.25em] text-paper/70 transition-colors hover:text-accent"
              >
                Close ✕
              </button>
            </div>

            {status === "done" ? (
              <div data-testid="contact-success" className="flex min-h-[70vh] flex-col justify-center px-6 py-20 sm:px-10">
                <span className="block h-3 w-3 rotate-45 bg-accent" aria-hidden="true" />
                <h3 className="mt-8 font-grotesk text-6xl font-bold tracking-tight text-paper sm:text-7xl">
                  RECEIVED.
                </h3>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-fog">
                  We'll review the brief and come back with a written 30-day plan within three working days.
                </p>
                <button
                  data-testid="contact-success-close"
                  onClick={() => {
                    closeContact();
                    setTimeout(reset, 400);
                  }}
                  className="link-line mt-10 w-max font-grotesk text-xs font-semibold uppercase tracking-[0.2em] text-paper/80 hover:text-accent"
                >
                  Back to the site →
                </button>
              </div>
            ) : (
              <form data-testid="contact-form" onSubmit={submit} noValidate className="px-6 py-10 sm:px-10">
                <h3 className="font-grotesk text-4xl font-bold leading-none tracking-tight text-paper sm:text-5xl">
                  WHAT DO YOU
                  <br />
                  NEED TO MOVE<span className="text-accent">?</span>
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-fog">
                  Tell us the number. Within three working days you get a written 30-day plan and what it would
                  cost — free.
                </p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  <Field id="f-name" label="Name *" error={errors.name}>
                    <input id="f-name" data-testid="contact-input-name" className={inputCls} value={form.name} onChange={set("name")} placeholder="Your name" />
                  </Field>
                  <Field id="f-email" label="Work email *" error={errors.work_email}>
                    <input id="f-email" data-testid="contact-input-email" type="email" className={inputCls} value={form.work_email} onChange={set("work_email")} placeholder="you@company.com" />
                  </Field>
                  <Field id="f-company" label="Company *" error={errors.company}>
                    <input id="f-company" data-testid="contact-input-company" className={inputCls} value={form.company} onChange={set("company")} placeholder="Company" />
                  </Field>
                  <Field id="f-website" label="Website">
                    <input id="f-website" data-testid="contact-input-website" className={inputCls} value={form.website} onChange={set("website")} placeholder="https://" />
                  </Field>
                  <Field id="f-role" label="Role">
                    <input id="f-role" data-testid="contact-input-role" className={inputCls} value={form.role} onChange={set("role")} placeholder="CMO, Founder, Head of Growth…" />
                  </Field>
                  <Field id="f-objective" label="Primary objective *" error={errors.objective}>
                    <select id="f-objective" data-testid="contact-select-objective" className={`${inputCls} bg-ink`} value={form.objective} onChange={set("objective")}>
                      <option value="" disabled>
                        Select a lane
                      </option>
                      {OBJECTIVES.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field id="f-metric" label="Target metric / business objective">
                    <input id="f-metric" data-testid="contact-input-metric" className={inputCls} value={form.target_metric} onChange={set("target_metric")} placeholder="Signups, pipeline, AI citations…" />
                  </Field>
                  <Field id="f-timeline" label="Timeline">
                    <input id="f-timeline" data-testid="contact-input-timeline" className={inputCls} value={form.timeline} onChange={set("timeline")} placeholder="This quarter, next 6 months…" />
                  </Field>
                </div>

                <div className="mt-6">
                  <Field id="f-message" label="Message">
                    <textarea id="f-message" data-testid="contact-input-message" rows={4} className={`${inputCls} resize-none`} value={form.message} onChange={set("message")} placeholder="Context, constraints, anything useful." />
                  </Field>
                </div>

                {status === "error" && (
                  <p data-testid="contact-error" className="mt-6 border border-red-400/40 px-4 py-3 text-sm text-red-300">
                    Something went wrong sending the brief. Please try again — or write to {CONTACT.email}.
                  </p>
                )}

                <button
                  data-testid="contact-submit"
                  type="submit"
                  disabled={status === "sending"}
                  className="group mt-10 flex w-full items-center justify-center gap-3 bg-accent px-7 py-4 font-grotesk text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 sm:py-5"
                >
                  {status === "sending" ? "Sending…" : "Send my brief"}
                  {status !== "sending" && (
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  )}
                </button>

                <p className="mt-6 text-xs leading-relaxed text-paper/35">
                  Prefer email? {CONTACT.email} · {CONTACT.location} · {CONTACT.reach}
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
