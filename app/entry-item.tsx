"use client";

import { Fragment, useEffect, useRef, useState } from "react";

export type Entry = {
  title: string;
  meta: string;
  description: string;
  links: { label: string; href: string }[];
  images?: string[];
};

function Links({ links }: { links: Entry["links"] }) {
  if (links.length === 0) return null;
  return (
    <p className="paper-actions">
      {links.map((link, index) => (
        <Fragment key={link.href}>
          {index > 0 && <span aria-hidden="true">·</span>}
          {/* Don't let a link click also open the modal */}
          <a href={link.href} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>
            {link.label}
          </a>
        </Fragment>
      ))}
    </p>
  );
}

// One row in the Experience / Projects / Hackathons lists. Clicking it opens a
// modal with the full description and a screenshot slider.
export default function EntryItem({ entry }: { entry: Entry }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const images = entry.images ?? [];

  const open = () => {
    setActive(0);
    document.body.classList.add("modal-open");
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = (delta: number) => setActive((current) => (current + delta + images.length) % images.length);

  // Lock page scroll while the modal is up.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const unlock = () => document.body.classList.remove("modal-open");
    dialog.addEventListener("close", unlock);
    return () => dialog.removeEventListener("close", unlock);
  }, []);

  return (
    <li className="paper-item entry-item" onClick={open}>
      <p className="paper-meta">{entry.meta}</p>
      <h3>
        <button type="button" className="entry-open" aria-haspopup="dialog">
          {entry.title}
        </button>
      </h3>
      <p className="paper-desc">{entry.description}</p>
      <Links links={entry.links} />

      <dialog
        ref={dialogRef}
        className="entry-modal"
        aria-label={entry.title}
        onClick={(event) => {
          event.stopPropagation();
          // A click on the backdrop lands on the <dialog> element itself.
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (images.length < 2) return;
          if (event.key === "ArrowLeft") step(-1);
          if (event.key === "ArrowRight") step(1);
        }}
      >
        <div className="entry-modal-body">
          <div className="entry-modal-header">
            <p className="paper-meta">{entry.meta}</p>
            <button type="button" className="link-button entry-modal-close" onClick={close}>
              Close
            </button>
          </div>
          <h3>{entry.title}</h3>

          {images.length > 0 && (
            <div className="slider">
              <div className="slider-frame">
                <img src={images[active]} alt={`${entry.title} screenshot ${active + 1} of ${images.length}`} />
              </div>
              {images.length > 1 && (
                <div className="slider-controls">
                  <button type="button" className="link-button" aria-label="Previous image" onClick={() => step(-1)}>
                    ← Prev
                  </button>
                  <span className="slider-count">
                    {active + 1} / {images.length}
                  </span>
                  <button type="button" className="link-button" aria-label="Next image" onClick={() => step(1)}>
                    Next →
                  </button>
                </div>
              )}
            </div>
          )}

          <p className="paper-desc">{entry.description}</p>
          <Links links={entry.links} />
        </div>
      </dialog>
    </li>
  );
}
