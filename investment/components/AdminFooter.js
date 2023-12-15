"use client";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { FaUsersCog } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoChatbubblesSharp } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminFooter() {
  const content = (
    <main className="min-h-[3rem] w-full text-black fixed bottom-0 bg-white border-t-2 py-1 ">
      <section className="flex justify-between items-center min-h-[3rem]  mx-auto text-center w-full px-4">
        <div className="center-with-flex">
          <Link href="/login/adminDash">
            <MdSpaceDashboard className="text-[1.7rem]" />
            <h1>D-board</h1>
          </Link>
        </div>
        <div className="center-with-flex">
          <Link href="/login/adminDash/userspage">
            <FaUsers className="text-[1.7rem]" />
            <h1>Users</h1>
          </Link>
        </div>
        <div className="center-with-flex">
          <Link href="/login/adminDash/adminsetting">
            <IoSettings className="text-[1.7rem]" />
            <h1>Setting</h1>
          </Link>
        </div>
        <div className="center-with-flex">
          <IoChatbubblesSharp className="text-[1.7rem]" />
          <h1>Chat</h1>
        </div>
      </section>
    </main>
  );

  return content;
}
