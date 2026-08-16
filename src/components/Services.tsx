import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "../lib/constants";
import { useServiceSelection } from "../context/ServiceSelectionContext";
import Reveal from "./Reveal";

export default function Services() {
  const { selectAndScroll } = useServiceSelection();

  return (
    <section id="services" className="relative bg-gray-50 py-24 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold tracking-[0.2em] text-blue-600">WHAT WE DO</span>
          <h2 className="mt-4 font-display font-bold text-navy-900 text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight text-balance">
            Construction & Home Improvement Services
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            One contractor. Multiple solutions for your home.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delay={i * 60}>
                <div className="group relative h-full overflow-hidden rounded-2xl bg-white border border-gray-100 p-8 shadow-[0_2px_16px_-8px_rgba(7,24,43,0.1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-20px_rgba(7,24,43,0.25)] hover:border-blue-200">
                  <span className="pointer-events-none absolute -right-4 -top-6 font-display font-bold text-[5.5rem] leading-none text-navy-900/[0.035] select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="relative flex items-center justify-center h-14 w-14 rounded-xl bg-navy-900 text-blue-300 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_10px_24px_-8px_rgba(8,102,217,0.6)]">
                    <Icon size={26} strokeWidth={1.8} />
                  </span>

                  <h3 className="relative mt-6 font-display font-bold text-navy-900 text-xl">
                    {service.name}
                  </h3>
                  <p className="relative mt-3 text-[15px] text-gray-500 leading-relaxed">
                    {service.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => selectAndScroll(service.id)}
                    className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Request an Estimate
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
