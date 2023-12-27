import UserDashboadHeader from "@/components/UserDashboardHeader";
import UserDashboardFooter from "@/components/UserDashboardFooter";
// import Setting from "@/components/Setting";
import AdminSetting from "@/components/AdminSetting";

export default function page() {
  const content = (
    <main className="">
      <UserDashboadHeader />
      <AdminSetting />
      <UserDashboardFooter />
    </main>
  );

  return content;
}
