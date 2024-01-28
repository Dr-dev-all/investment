'use client';
import { MdSpaceDashboard } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa6';
import { FaUsersCog } from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5';
import { IoChatbubblesSharp } from 'react-icons/io5';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {useState, useEffect } from "react"

export default function AdminFooter() {



  const pathname = usePathname()
  const [dboard, setDboard] = useState(false)
  const [users, setUsers] = useState(false)
  const [settings, setSettings] = useState(false)


// useEffect(() => {

//   const changeStyle = () => {

//     if (pat)
//   }


//   return () => {}
// }, [])







  const content = (
    <main className="min-h-[3rem] w-full text-black fixed bottom-0 bg-white border-t-2 py-1 ">
      <section className="flex justify-between items-center min-h-[3rem]  mx-auto text-center w-full px-4">
        <div className={`center-with-flex    w-[33%]        ${pathname === "/login/adminDash" ? 'border-4 border-black p-1 rounded-[1rem]  shadow-2xl shadow-gray-900 shadow-inner' : ''}`}>
          <Link href="/login/adminDash">
            <MdSpaceDashboard className="text-[1.7rem]" />
            <h1  className='font-bold font-[1.2rem] '>D-board</h1>
          </Link>
        </div>
        <div className={`center-with-flex    w-[33%]   ${pathname === "/login/adminDash/userspage" ? 'border-4 border-black p-1 rounded-[1rem]  shadow-2xl shadow-gray-900 shadow-inner' : ''}`}>
          <Link href="/login/adminDash/userspage">
            <FaUsers className="text-[1.7rem]" />
            <h1   className='font-bold font-[1.2rem] '  >Users</h1>
          </Link>
        </div>
        <div className={`center-with-flex    w-[33%]      ${pathname === "/login/adminDash/adminsetting" ? 'border-4 border-black p-1 rounded-[1rem]  shadow-2xl shadow-gray-900 shadow-inner' : ''}`}>
          <Link href="/login/adminDash/adminsetting">
            <IoSettings className="text-[1.7rem]" />
            <h1  className='font-bold font-[1.2rem] '   >Setting</h1>
          </Link>
        </div>
      </section>
    </main>
  );

  return content;
}
