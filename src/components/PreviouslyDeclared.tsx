import { ObituarySection } from "@/components/ObituarySection";
import {
  previouslyDeclared,
  previouslyDeclaredFootnote,
} from "@/data/content";

export function PreviouslyDeclaredSection() {
  return (
    <ObituarySection heading="Previously Declared Dead" variant="boxed">
      <div className="space-y-6">
        {previouslyDeclared.map((item, i) => (
          <div key={i}>
            <p className="font-[family-name:var(--font-playfair-display)] font-bold text-lg">
              {item.name}{" "}
              <span className="font-normal text-muted">({item.year})</span>
            </p>
            <p className="italic text-muted mt-1">{item.quote}</p>
            <p className="text-sm mt-1">
              {item.statLabel}:{" "}
              <span className="font-bold">{item.statValue}</span>
            </p>
            <p className="text-sm">
              Current status:{" "}
              <span className="font-bold">{item.currentStatus}</span>
            </p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center italic text-muted border-t border-border-light pt-4">
        {previouslyDeclaredFootnote}
      </p>
    </ObituarySection>
  );
}
