import UserdashboadHeader from "@/components/UserdashboardHeader";
import UserdashboardFooter from "@/components/UserdashboardFooter";
// import Setting from "@/components/Setting";
import AdminSetting from "@/components/AdminSetting";

export default function page() {
  const content = (
    <main className="">
      <UserdashboadHeader />
      <AdminSetting />
      <UserdashboardFooter />
    </main>
  );

  return content;
}
