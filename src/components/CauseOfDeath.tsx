import { ObituarySection } from "@/components/ObituarySection";
import { causeOfDeath } from "@/data/content";

export function CauseOfDeathSection() {
  return (
    <ObituarySection heading="Cause of Death" variant="clinical">
      <p className="text-lg leading-relaxed mb-4">{causeOfDeath.cause}</p>
      <div className="mb-4">
        <p className="font-bold text-sm uppercase tracking-widest mb-2">
          Contributing Factors
        </p>
        <ul className="space-y-2 text-lg leading-relaxed list-disc list-outside ml-5 text-muted">
          {causeOfDeath.factors.map((factor, i) => (
            <li key={i}>{factor}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6 border-t border-border-light pt-4">
        <p className="text-sm uppercase tracking-widest font-bold mb-1">
          Note from the Examiner
        </p>
        <p className="text-lg leading-relaxed italic">
          {causeOfDeath.examinerNote}
        </p>
      </div>
    </ObituarySection>
  );
}
