import { Hero } from "@/components/sections/Hero";
import { DashboardSection } from "@/components/sections/DashboardSection";
import { CategoriesTable } from "@/components/sections/CategoriesTable";
import { MobileAppsSection } from "@/components/sections/MobileAppsSection";
import { InsightsSection } from "@/components/sections/InsightsSection";

export default function Home() {
  return (
    <div className="page-wrap">
      <Hero />
      <DashboardSection />
      <CategoriesTable />
      <MobileAppsSection />
      <InsightsSection />
    </div>
  );
}
