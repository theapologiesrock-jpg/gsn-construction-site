import { MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { PHONE_NUMBERS } from "../lib/constants";

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-gray-50 py-24 sm:py-28">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <span className="text-xs font-bold tracking-[0.2em] text-blue-600">SERVICE AREA</span>
          <h2 className="mt-4 font-display font-bold text-navy-900 text-3xl sm:text-4xl lg:text-[2.6rem] text-balance">
            Proudly Serving the Seattle Area
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
            Serving Seattle and surrounding communities throughout the Puget Sound region.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white border border-gray-100 px-6 py-4 shadow-card">
            <span className="flex items-center justify-center h-11 w-11 rounded-full bg-blue-50 text-blue-600">
              <MapPin size={20} />
            </span>
            <div>
              <p className="font-display font-bold text-navy-900 text-lg leading-none">Seattle, Washington</p>
              <p className="mt-1 text-sm text-gray-500">Primary service region</p>
            </div>
          </div>

          <p className="mt-8 text-base text-gray-500">
            Not sure if we service your area? Call us at{" "}
            {PHONE_NUMBERS.map((p, i) => (
              <span key={p.href}>
                {i > 0 && " or "}
                <a href={p.href} className="inline-flex items-center gap-1.5 font-semibold text-blue-600 hover:text-blue-700">
                  <Phone size={15} />
                  {p.label}
                </a>
              </span>
            ))}
            .
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative aspect-[4/3] rounded-[1.75rem] bg-navy-900 overflow-hidden shadow-elevated">
            <div className="absolute inset-0 blueprint-grid opacity-30" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(22,136,255,0.16),transparent_70%)]" />

            <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
              <path
                d="M0 0 H400 V90 C 360 110, 330 80, 300 100 C 270 120, 260 160, 230 150 C 200 140, 190 180, 160 175 C 130 170, 120 210, 90 205 C 60 200, 40 230, 0 220 Z"
                fill="rgba(7,24,43,0.55)"
              />
              <path
                d="M0 300 H400 V210 C 360 230, 330 200, 300 220 C 270 240, 260 280, 230 270 C 200 260, 190 300, 160 295 Z"
                fill="rgba(7,24,43,0.4)"
              />

              {[70, 105, 140].map((r) => (
                <circle
                  key={r}
                  cx="200"
                  cy="150"
                  r={r}
                  fill="none"
                  stroke="rgba(140,197,255,0.35)"
                  strokeWidth="1.5"
                  strokeDasharray="5 7"
                />
              ))}

              <circle cx="200" cy="150" r="7" fill="#1688ff" className="animate-pulse-glow" />
              <circle cx="200" cy="150" r="14" fill="none" stroke="#1688ff" strokeWidth="1.5" opacity="0.5" />
            </svg>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(100%+18px)] flex flex-col items-center">
              <span className="rounded-full bg-white px-4 py-1.5 text-xs font-bold text-navy-900 shadow-md whitespace-nowrap">
                Seattle, WA
              </span>
              <span className="mt-1 h-3 w-px bg-white/70" />
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
              {["Seattle", "Surrounding Areas"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 backdrop-blur-sm border border-white/15 px-3.5 py-1.5 text-xs font-semibold text-white/85"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
