import UserDashboardFooter from "@/components/UserDashboardFooter";
import UserDashboardHeader from "@/components/UserDashboardHeader";
import ChoosePlan from "@/components/ChoosePlan";

export default function page() {
  const content = (
    <>
      <UserDashboardHeader />
      <main>
        <ChoosePlan />
      </main>
      <UserDashboardFooter />
    </>
  );

  return content;
}
