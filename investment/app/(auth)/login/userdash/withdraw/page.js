import UserDashboardFooter from '@/components/UserDashboardFooter';
import UserDashboardHeader from '@/components/UserDashboardHeader';
import Withdraw from '@/components/Withdraw';

export default function page() {
  const content = (
    <main>
      <UserDashboardHeader />
      <Withdraw />
      <UserDashboardFooter />
    </main>
  );

  return content;
}
