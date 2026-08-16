import { HardHat, Sparkles, MessageSquare, MapPinned } from "lucide-react";

const ITEMS = [
  { icon: HardHat, label: "Professional Construction" },
  { icon: Sparkles, label: "Quality Craftsmanship" },
  { icon: MessageSquare, label: "Clear Communication" },
  { icon: MapPinned, label: "Seattle Area Service" },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="container-px mx-auto max-w-7xl py-8 sm:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {ITEMS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 justify-center sm:justify-start">
              <span className="flex items-center justify-center h-11 w-11 rounded-full bg-blue-50 text-blue-600 shrink-0">
                <Icon size={20} strokeWidth={2} />
              </span>
              <span className="text-sm font-semibold text-navy-900 leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
