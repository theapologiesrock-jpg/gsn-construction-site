import { ClipboardList, FileSpreadsheet, CalendarCheck, HardHat } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Tell Us About Your Project",
    text: "Choose the service you need and tell us what you're looking to improve.",
  },
  {
    n: "02",
    icon: FileSpreadsheet,
    title: "Get Your Estimate",
    text: "We'll discuss the project details and determine the appropriate next steps.",
  },
  {
    n: "03",
    icon: CalendarCheck,
    title: "Schedule Your Project",
    text: "Choose a convenient time to begin the work.",
  },
  {
    n: "04",
    icon: HardHat,
    title: "Get It Done",
    text: "Our focus is completing the work with attention to quality and detail.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold tracking-[0.2em] text-blue-600">HOW IT WORKS</span>
          <h2 className="mt-4 font-display font-bold text-navy-900 text-3xl sm:text-4xl lg:text-[2.6rem] text-balance">
            A Simple Process From Estimate to Completion
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.n} delay={i * 90} className="relative">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                    <span className="relative z-10 flex items-center justify-center h-14 w-14 shrink-0 rounded-full bg-navy-900 text-white shadow-card">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <span className="font-display font-bold text-2xl text-gray-200 lg:hidden">
                      {step.n}
                    </span>
                  </div>
                  <span className="hidden lg:block mt-5 font-display font-bold text-3xl text-gray-200">
                    {step.n}
                  </span>
                  <h3 className="mt-3 font-display font-bold text-navy-900 text-lg">{step.title}</h3>
                  <p className="mt-2 text-[15px] text-gray-500 leading-relaxed max-w-xs">{step.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
