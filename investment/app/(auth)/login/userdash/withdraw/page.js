import UserDashboardFooter from "@/components/UserDashboardFooter";
import UserDashboardHeader from "@/components/UserDashboardHeader";
import Withdraw from "@/components/Withdraw";

export default function page() {
  const content = (
    <main className="bg-green-500 h-screen">
      <UserDashboardHeader />
      <Withdraw />
      <UserDashboardFooter />
    </main>
  );

  return content;
}
