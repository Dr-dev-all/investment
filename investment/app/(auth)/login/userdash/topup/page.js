import UserDashboardFooter from "@/components/UserDashboardHeader";
import UserDashboardHeader from "@/components/UserDashboardFooter";
import TopUp from "@/components/TopUp";

export default function page() {
  const content = (
    <main>
      <UserDashboardHeader />
      <TopUp />
      <UserDashboardFooter />
    </main>
  );

  return content;
}
