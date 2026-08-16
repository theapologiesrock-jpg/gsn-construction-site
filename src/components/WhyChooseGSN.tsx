import { PhoneCall, Layers, Focus, MapPin, FileCheck2 } from "lucide-react";
import Reveal from "./Reveal";

const REASONS = [
  {
    icon: PhoneCall,
    title: "Direct Communication",
    text: "Work directly with the contractor responsible for your project.",
  },
  {
    icon: Layers,
    title: "Multiple Services",
    text: "One company for several home improvement needs.",
  },
  {
    icon: Focus,
    title: "Attention to Detail",
    text: "Every project is approached with care and attention to craftsmanship.",
  },
  {
    icon: MapPin,
    title: "Local Service",
    text: "Serving homeowners throughout Seattle and surrounding communities.",
  },
  {
    icon: FileCheck2,
    title: "Clear Estimates",
    text: "Straightforward project discussions and estimates before work begins.",
  },
];

export default function WhyChooseGSN() {
  return (
    <section className="relative bg-navy-900 py-24 sm:py-28 overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="container-px mx-auto max-w-7xl relative">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold tracking-[0.2em] text-blue-400">THE GSN DIFFERENCE</span>
          <h2 className="mt-4 font-display font-bold text-white text-3xl sm:text-4xl lg:text-[2.6rem] text-balance">
            Why Homeowners Choose GSN Construction
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal
                key={reason.title}
                delay={i * 60}
                className={`bg-navy-900 p-8 ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="h-full flex flex-col hover:bg-white/[0.03] transition-colors -m-8 p-8">
                  <Icon size={26} strokeWidth={1.8} className="text-blue-400" />
                  <h3 className="mt-5 font-display font-bold text-white text-base">{reason.title}</h3>
                  <p className="mt-2.5 text-sm text-white/60 leading-relaxed">{reason.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
