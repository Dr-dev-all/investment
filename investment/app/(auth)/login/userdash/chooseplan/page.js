import UserdashboardFooter from "@/components/UserdashboardFooter";
import UserdashboardHeader from "@/components/UserdashboardHeader";
import ChoosePlan from "@/components/ChoosePlan";

export default function page() {
  const content = (
    <>
      <UserdashboardHeader />
      <main>
        <ChoosePlan />
      </main>
      <UserdashboardFooter />
    </>
  );

  return content;
}
