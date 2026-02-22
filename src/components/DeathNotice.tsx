import { deathNotice } from "@/data/content";

export function DeathNotice() {
  return (
    <div className="text-center">
      <p className="font-[family-name:var(--font-playfair-display)] text-3xl md:text-4xl font-bold">
        {deathNotice.name}
      </p>
      <p className="text-lg text-muted mt-1 tracking-widest">
        {deathNotice.years}
      </p>
      <div className="mt-6 space-y-4 text-lg leading-relaxed max-w-xl mx-auto">
        {deathNotice.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
