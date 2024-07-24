'use client';
import { FaUserCircle } from 'react-icons/fa';
import { MdOutlineMenuBook } from 'react-icons/md';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';

export default function AdminSetting() {
  const axiosPrivate = useAxiosPrivate();

  const pathname = usePathname();
  const router = useRouter();

  const logout = async () => {
    try {
      const response = await axiosPrivate('/auths/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200) {
        localStorage.clear();
        router.push('/login');
      }
    } catch (error) {
      router.push('/login');
    }
  };

  // admin route protection

  // end of admin route protection

  const content = (
    <main className='center-with-flex       min-h-screen w-full  bg-black text-white '>
      <section>
        <section className='   center-with-flex   p-3   h-full  w-full  mt-[4rem]'>
          <Link href='#'>
            <div className='flex  bg-[#03045e] mx-2 rounded-lg mb-4 justify-between text-start items-center gap-2  px-3 '>
              <FaUserCircle className='  text-[3.2em] text-start rounded-lg mt-4 lg:ml-7 mb-5 text-white p-2 bg-[#03045e] lg:text-[4em]' />
              <div className=''>
                <h1>support@BullHarvest.com</h1>
                <p>+1 388 74333 838</p>
              </div>
            </div>
          </Link>
        </section>

        <section className='   center-with-flex    p-3   h-full  w-full  '>
          <Link href='/login/userdash/userterms'>
            <div className='flex  bg-[#03045e] mx-1  px-3 w-full  rounded-lg justify-between text-start items-center  '>
              <MdOutlineMenuBook className='  text-[2.8em] text-start rounded-lg mt-4 lg:ml-7 mb-5 text-white p-2 bg-[#03045e] lg:text-[4em]' />
              <h1>Terms and Conditions</h1>
            </div>
          </Link>
        </section>

        <section className='   center-with-flex    p-3   h-full  w-full  '>
          <Link href='/login/userdash/privacy'>
            <div className='flex  bg-[#03045e] mx-1 px-3 rounded-lg justify-between text-start items-center '>
              <MdOutlinePrivacyTip className='  text-[2.8em] text-start rounded-lg mt-4 lg:ml-7 mb-5 text-white p-2 bg-[#03045e] lg:text-[4em]' />
              <h1>Privacy Policy</h1>
            </div>
          </Link>
        </section>

        <section className='flex justify-center'>
          <button
            onClick={() => {
              logout();
            }}
            className='bg-blue-800 text-white px-4 py-2 rounded'>
            LOGOUT
          </button>
        </section>
      </section>
    </main>
  );

  return content;
}
