import useLogout from '@/hooks/useLogout';

const signOut = async () => {
  await logout();
  navigate('/linkpage');
};

export default function Logout() {
  const content = (
    <main className='main-style bg-[#03045e]'>
      <section>
        <h1> Do you wish to logout </h1>
      </section>
      <button
        onClick={() => {
          signOut;
        }}>
        confirm logout
      </button>
    </main>
  );

  return content;
}
