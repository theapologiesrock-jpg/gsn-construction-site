import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { ServiceId } from "../lib/constants";

interface ServiceSelectionValue {
  selected: ServiceId | null;
  selectAndScroll: (id: ServiceId) => void;
}

const ServiceSelectionContext = createContext<ServiceSelectionValue | null>(null);

export function ServiceSelectionProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<ServiceId | null>(null);

  const selectAndScroll = useCallback((id: ServiceId) => {
    setSelected(id);
    const form = document.getElementById("contact");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <ServiceSelectionContext.Provider value={{ selected, selectAndScroll }}>
      {children}
    </ServiceSelectionContext.Provider>
  );
}

export function useServiceSelection() {
  const ctx = useContext(ServiceSelectionContext);
  if (!ctx) throw new Error("useServiceSelection must be used within ServiceSelectionProvider");
  return ctx;
}
