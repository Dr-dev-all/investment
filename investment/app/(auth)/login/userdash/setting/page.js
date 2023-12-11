import UserDashboadHeader from "@/components/UserDashboardHeader";
import UserDashboardFooter from "@/components/UserDashboardFooter";
import Setting from "@/components/Setting";

export default function page() {
  const content = (
    <main className="">
      <UserDashboadHeader />
      <Setting />
      <UserDashboardFooter />
    </main>
  );

  return content;
}
