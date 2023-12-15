import AdminSetting from "@/components/AdminSetting";
import AdminFooter from "@/components/AdminFooter";
import AdminHeader from "@/components/AdminHeader";

export default function page() {
  const content = (
    <>
      <AdminHeader />{" "}
      <main>
        <AdminSetting />
      </main>
      <AdminFooter />
    </>
  );

  return content;
}
