import { Masthead } from "@/components/Masthead";
import { DeathNotice } from "@/components/DeathNotice";
import { AttendanceBox } from "@/components/AttendanceBox";
import { SurvivorsSection } from "@/components/SurvivorsSection";
import { CauseOfDeathSection } from "@/components/CauseOfDeath";
import { PreviouslyDeclaredSection } from "@/components/PreviouslyDeclared";
import { InLieuOfFlowersSection } from "@/components/InLieuOfFlowers";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Divider } from "@/components/Divider";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-6 pb-16">
        <Masthead />
        <Divider />
        <DeathNotice />
        <Divider />
        <AttendanceBox />
        <Divider />
        <SurvivorsSection />
        <Divider />
        <CauseOfDeathSection />
        <Divider />
        <PreviouslyDeclaredSection />
        <Divider />
        <InLieuOfFlowersSection />
        <Divider />
        <ClosingCTA />
      </div>
    </main>
  );
}
