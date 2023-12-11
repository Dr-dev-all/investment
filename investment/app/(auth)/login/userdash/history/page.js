import UserDashboardHeader from "@/components/UserDashboardHeader";
import UserDashboardFooter from "@/components/UserDashboardFooter";
import History from "@/components/History";

export default function page() {
  const content = (
    <main>
      <UserDashboardHeader />
      <History />
      <UserDashboardFooter />
    </main>
  );

  return content;
}
