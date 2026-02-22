import { ObituarySection } from "@/components/ObituarySection";
import { attendanceStats, attendanceFootnote } from "@/data/content";

export function AttendanceBox() {
  return (
    <ObituarySection heading="Attendance at the Service" variant="boxed">
      <ul className="space-y-3 text-lg leading-relaxed">
        {attendanceStats.map((stat, i) => (
          <li key={i} className="flex gap-2">
            <span className="font-[family-name:var(--font-playfair-display)] font-bold text-xl shrink-0 w-16 text-right">
              {stat.percentage}
            </span>
            <span className="text-muted">{stat.description}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-muted italic text-center">
        {attendanceFootnote}
      </p>
    </ObituarySection>
  );
}
