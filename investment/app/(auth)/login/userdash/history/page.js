import UserdashboardHeader from "@/components/UserdashboardHeader";
import UserdashboardFooter from "@/components/UserdashboardFooter";
import History from "@/components/History";

export default function page() {
  const content = (
    <main>
      <UserdashboardHeader />
      <History />
      <UserdashboardFooter />
    </main>
  );

  return content;
}
