import { HardHat } from "lucide-react";
import Reveal from "./Reveal";
import Logo from "./Logo";
import { BUSINESS } from "../lib/constants";
import { CallSplitButton } from "./CallButtons";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-24 sm:py-28">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-600/15 to-navy-900/5 blur-2xl" />
            <div className="relative rounded-[1.75rem] bg-navy-900 p-10 sm:p-12 shadow-elevated overflow-hidden">
              <div className="absolute inset-0 blueprint-grid opacity-20" />
              <div className="relative flex flex-col items-center text-center">
                <span className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-300">
                  <HardHat size={34} strokeWidth={1.6} />
                </span>
                <Logo className="mt-8 w-40 opacity-90" />
                <p className="mt-6 text-xs tracking-[0.25em] text-blue-300 font-semibold">
                  OWNER &amp; CONTRACTOR
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal delay={100}>
            <span className="text-xs font-bold tracking-[0.2em] text-blue-600">MEET YOUR CONTRACTOR</span>
            <h2 className="mt-4 font-display font-bold text-navy-900 text-3xl sm:text-4xl lg:text-[2.6rem] text-balance">
              {BUSINESS.contractor}
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              GSN Construction LLC is led by Gilberto da Silva Neto, providing homeowners
              throughout the Seattle area with a direct and straightforward approach to
              construction and home improvement projects.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-xl">
              Gilberto works directly with clients to understand their needs and find the right
              solution for each project, from a single room refresh to multiple improvements
              around the home.
            </p>
          </Reveal>

          {/* No transform wrapper here: see note in Hero.tsx about iOS Safari blocking tel: taps mid-animation. */}
          <div className="mt-9">
            <CallSplitButton variant="solid" prefix="Talk to Gilberto" className="hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </section>
  );
}
