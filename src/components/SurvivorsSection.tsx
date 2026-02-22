import { ObituarySection } from "@/components/ObituarySection";
import { survivors } from "@/data/content";

export function SurvivorsSection() {
  return (
    <ObituarySection heading="The Boom Is Survived By">
      <ul className="space-y-3 text-lg leading-relaxed">
        {survivors.map((survivor, i) => (
          <li key={i}>
            <strong className="font-[family-name:var(--font-playfair-display)]">
              {survivor.bold}
            </strong>{" "}
            <span className="text-muted">{survivor.detail}</span>
          </li>
        ))}
      </ul>
    </ObituarySection>
  );
}
