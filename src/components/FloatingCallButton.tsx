import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { PHONE_NUMBERS } from "../lib/constants";

export default function FloatingCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`hidden lg:flex fixed bottom-8 right-8 z-40 flex-col items-end gap-2.5 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {PHONE_NUMBERS.map((p) => (
        <a
          key={p.href}
          href={p.href}
          aria-label={`Call GSN Construction at ${p.label}`}
          className="inline-flex items-center gap-2.5 rounded-full bg-navy-900 hover:bg-blue-600 pl-4 pr-5 py-3 text-sm font-semibold text-white shadow-elevated transition-all duration-300 hover:-translate-y-1"
        >
          <span className="flex items-center justify-center h-7 w-7 rounded-full bg-blue-600/90">
            <Phone size={13} />
          </span>
          {p.label}
        </a>
      ))}
    </div>
  );
}
