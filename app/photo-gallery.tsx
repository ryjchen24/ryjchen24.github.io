"use client";

import { useState } from "react";

export default function PhotoGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex w-full max-w-3xl flex-col items-center gap-5">
      <div className="relative aspect-[16/10] w-full">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={index === active ? alt : ""}
            className={`absolute inset-0 h-full w-full rounded-lg object-cover shadow-2xl transition-all duration-300 ${
              index === active ? "z-20 scale-100 opacity-100" : "z-10 scale-95 opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          aria-label="Previous image"
          onClick={() => setActive((active + images.length - 1) % images.length)}
          className="rounded bg-black/30 px-4 py-2 text-xl transition hover:bg-black/50"
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Next image"
          onClick={() => setActive((active + 1) % images.length)}
          className="rounded bg-black/30 px-4 py-2 text-xl transition hover:bg-black/50"
        >
          →
        </button>
      </div>
    </div>
  );
}
