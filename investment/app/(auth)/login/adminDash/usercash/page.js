'use client';
import AdminHeader from '@/components/AdminHeader';
import AdminFooter from '@/components/AdminFooter';
import Cashout from '@/components/Cashout';

export default function page() {
  const content = (
    <>
      <AdminHeader />
      <Cashout />
      <AdminFooter />
    </>
  );

  return content;
}
