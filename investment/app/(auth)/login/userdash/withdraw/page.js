import UserdashboardFooter from "@/components/UserdashboardFooter";
import UserdashboardHeader from "@/components/UserdashboardHeader";
import Withdraw from "@/components/Withdraw";

export default function page() {
  const content = (
    <main>
      <UserdashboardHeader />
      <Withdraw />
      <UserdashboardFooter />
    </main>
  );

  return content;
}
