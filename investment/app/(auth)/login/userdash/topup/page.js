import UserDashboardFooter from "@/components/UserDashboardHeader";
import UserDashboardHeader from "@/components/UserDashboardFooter";
import TopUp from "@/components/TopUp";

export default function page() {
  const content = (
    <>
      <UserDashboardHeader />
      <main>
        <TopUp />
      </main>
      <UserDashboardFooter />
    </>
  );

  return content;
}
