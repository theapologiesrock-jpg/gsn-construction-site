import { Phone } from "lucide-react";
import { PHONE_NUMBERS } from "../lib/constants";

/** Split pill: two tel: links of equal weight sharing one button footprint. */
export function CallSplitButton({
  className = "",
  variant = "glass",
  prefix,
}: {
  className?: string;
  variant?: "glass" | "solid";
  prefix?: string;
}) {
  const wrapperClass =
    variant === "glass"
      ? "divide-white/20 border-white/25 bg-white/5 backdrop-blur-sm hover:border-white/40"
      : "divide-white/15 border-transparent bg-navy-900 hover:bg-navy-800";
  const linkClass = variant === "glass" ? "text-white hover:bg-white/10" : "text-white hover:bg-white/5";
  const size = variant === "solid" ? "px-5 sm:px-6 py-3.5 text-sm" : "px-5 sm:px-6 py-4 text-sm sm:text-base";

  return (
    <div className={`inline-flex items-stretch divide-x rounded-full border transition-all ${wrapperClass} ${className}`}>
      {PHONE_NUMBERS.map((p, i) => (
        <a
          key={p.href}
          href={p.href}
          className={`flex items-center justify-center gap-2 ${size} font-semibold transition-colors first:rounded-l-full last:rounded-r-full ${linkClass}`}
        >
          <Phone size={16} />
          {i === 0 && prefix ? `${prefix} — ${p.label}` : p.label}
        </a>
      ))}
    </div>
  );
}

/** Stacked list: used where vertical space is available (mobile menu, footer). */
export function CallStack({ className = "", linkClassName = "" }: { className?: string; linkClassName?: string }) {
  return (
    <div className={className}>
      {PHONE_NUMBERS.map((p) => (
        <a key={p.href} href={p.href} className={linkClassName}>
          <Phone size={16} />
          {p.label}
        </a>
      ))}
    </div>
  );
}
