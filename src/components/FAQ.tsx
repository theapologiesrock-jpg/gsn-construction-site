import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import { BUSINESS } from "../lib/constants";

const FAQS = [
  {
    q: "What areas does GSN Construction serve?",
    a: `GSN Construction LLC serves Seattle, Washington and surrounding communities. If you're unsure whether we cover your area, call us at ${BUSINESS.phone} or ${BUSINESS.phone2} and we'll be happy to confirm.`,
  },
  {
    q: "What types of projects do you handle?",
    a: "We handle a range of construction and home improvement projects, including roofing, interior and exterior painting, flooring, bathroom remodeling, landscaping, and door and window installation.",
  },
  {
    q: "Can I request multiple services for the same project?",
    a: "Yes. If your project involves more than one type of work, select \"Multiple Services\" on the estimate form and describe what you need — we'll discuss all the details with you directly.",
  },
  {
    q: "How do I request an estimate?",
    a: `You can request a free estimate by filling out the form on this page, or by calling us directly at ${BUSINESS.phone} or ${BUSINESS.phone2}. We'll reach out to discuss your project and next steps.`,
  },
  {
    q: "Can I speak directly with the contractor?",
    a: `Yes. ${BUSINESS.contractor} works directly with clients throughout the project, from the initial conversation to completion.`,
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="container-px mx-auto max-w-3xl">
        <Reveal className="text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-blue-600">FAQ</span>
          <h2 className="mt-4 font-display font-bold text-navy-900 text-3xl sm:text-4xl text-balance">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-12 divide-y divide-gray-100 rounded-2xl border border-gray-100 overflow-hidden">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="w-full flex items-center justify-between gap-4 px-6 sm:px-8 py-6 text-left hover:bg-gray-50/70 transition-colors"
                  >
                    <span className="font-display font-semibold text-navy-900 text-base sm:text-lg">
                      {item.q}
                    </span>
                    <span
                      className={`flex items-center justify-center h-8 w-8 rounded-full bg-blue-50 text-blue-600 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <Plus size={16} />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 sm:px-8 pb-6 text-gray-500 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
