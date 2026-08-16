import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { ProjectPhoto } from "../lib/projects";

interface LightboxProps {
  photos: ProjectPhoto[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  const photo = photos[index];

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + photos.length) % photos.length);
  }, [index, photos.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((index + 1) % photos.length);
  }, [index, photos.length, onNavigate]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, goPrev, goNext]);

  if (!photo) return null;

  const statusLabel = photo.status === "completed" ? "Completed" : "In Progress";

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-navy-950/96 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`${photo.title} — image viewer`}
    >
      <div className="flex items-center justify-between px-5 py-4 sm:px-8">
        <div className="text-white">
          <p className="text-sm font-semibold">{photo.title}</p>
          <p className="text-xs text-white/50">
            {photo.category} &middot; {statusLabel} &middot; {index + 1} / {photos.length}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <X size={22} />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-2 pb-6 sm:px-6">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous image"
          className="absolute left-2 sm:left-6 z-10 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <ChevronLeft size={24} />
        </button>

        <img
          key={photo.id}
          src={photo.src}
          alt={photo.title}
          className="max-h-full max-w-full rounded-lg object-contain shadow-elevated animate-fade-in"
        />

        <button
          type="button"
          onClick={goNext}
          aria-label="Next image"
          className="absolute right-2 sm:right-6 z-10 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
