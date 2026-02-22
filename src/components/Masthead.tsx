export function Masthead() {
  return (
    <header className="text-center pt-12 pb-8">
      <div className="border-t-2 border-b border-foreground pt-4 pb-3">
        <h1 className="font-[family-name:var(--font-playfair-display)] text-5xl md:text-6xl font-bold tracking-tight uppercase">
          The AI Obituary
        </h1>
      </div>
      <div className="border-b-2 border-foreground pt-2 pb-3 flex items-center justify-between text-sm text-muted">
        <span className="italic">
          &ldquo;A Record of What Was Lost — And What Was Never Found&rdquo;
        </span>
        <span>February 2026</span>
      </div>
    </header>
  );
}
