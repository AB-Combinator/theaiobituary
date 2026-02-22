import { closingLine } from "@/data/content";

export function ClosingCTA() {
  const shareText = encodeURIComponent(
    "\"The AI Boom didn\u2019t die. It just hasn\u2019t been born yet for most of the world.\"\n\nRead the full obituary:"
  );
  const shareUrl = encodeURIComponent("https://theaiobituary.vercel.app");

  return (
    <div className="text-center">
      <p className="font-[family-name:var(--font-playfair-display)] text-2xl md:text-3xl font-bold leading-snug max-w-lg mx-auto">
        {closingLine}
      </p>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href={`https://x.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-foreground px-6 py-2 font-bold text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
        >
          Share This Obituary
        </a>
        <a
          href="https://x.com/openprototyper"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-border-light px-6 py-2 text-sm uppercase tracking-widest text-muted hover:text-foreground hover:border-foreground transition-colors"
        >
          More from OpenPrototype
        </a>
      </div>
      <footer className="mt-16 pb-8 text-sm text-dim">
        <p>
          Published by OpenPrototype. All adoption statistics sourced from
          publicly available global AI usage research.
        </p>
      </footer>
    </div>
  );
}
