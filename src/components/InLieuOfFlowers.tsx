import { ObituarySection } from "@/components/ObituarySection";
import { inLieuOfFlowers, adoptionLayers } from "@/data/content";

export function InLieuOfFlowersSection() {
  return (
    <ObituarySection heading="In Lieu of Flowers">
      <p className="text-lg leading-relaxed font-bold italic mb-4">
        {inLieuOfFlowers.intro}
      </p>
      <div className="space-y-4 text-lg leading-relaxed">
        {inLieuOfFlowers.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <p className="text-lg leading-relaxed mt-6 mb-3">
        {inLieuOfFlowers.layersIntro}
      </p>
      <ol className="space-y-2 text-lg leading-relaxed ml-5 list-decimal">
        {adoptionLayers.map((layer) => (
          <li key={layer.number}>
            <strong className="font-[family-name:var(--font-playfair-display)]">
              {layer.name}
            </strong>{" "}
            — {layer.status}
          </li>
        ))}
      </ol>
      <div className="space-y-4 text-lg leading-relaxed mt-6">
        {inLieuOfFlowers.closingParagraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </ObituarySection>
  );
}
