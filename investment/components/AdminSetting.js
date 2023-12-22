import { FaUserCircle } from 'react-icons/fa';
import { MdOutlineMenuBook } from 'react-icons/md';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import Link from 'next/link';

export default function AdminSetting() {
  // admin route protection

  // end of admin route protection

  const content = (
    <main className='min-h-screen w-full  bg-black text-white '>
      <section>
        <Link href='#'>
          <div className='flex flex-col-2 bg-[#03045e] mx-5 rounded-lg mb-4 space-between text-start items-center gap-[2em]  '>
            <FaUserCircle className='  text-[3.2em] text-start rounded-lg mt-4 lg:ml-7 mb-5 text-white p-2 bg-[#03045e] lg:text-[4em]' />
            <div>
              <h1>adminbullharvest@gmail.com</h1>
              <p>+1 388 7333 838</p>
            </div>
          </div>
        </Link>
      </section>

      <section>
        <Link href='/terms'>
          <div className='flex flex-col-2 bg-[#03045e] mb-2 mx-5 rounded-lg space-between text-start items-center gap-[3em] '>
            <MdOutlineMenuBook className='  text-[2.8em] text-start rounded-lg mt-4 lg:ml-7 mb-5 text-white p-2 bg-[#03045e] lg:text-[4em]' />
            <h1>Terms and Conditions</h1>
          </div>
        </Link>
      </section>

      <section>
        <Link href='/privacy'>
          <div className='flex flex-col-2 bg-[#03045e] mx-5 mb-6 rounded-lg space-between text-start items-center gap-[3em]'>
            <MdOutlinePrivacyTip className='  text-[2.8em] text-start rounded-lg mt-4 lg:ml-7 mb-5 text-white p-2 bg-[#03045e] lg:text-[4em]' />
            <h1>Privacy Policy</h1>
          </div>
        </Link>
      </section>

      <section class='flex justify-center'>
        <button class='bg-blue-800 text-white px-4 py-2 rounded'>LOGOUT</button>
      </section>
    </main>
  );

  return content;
}
