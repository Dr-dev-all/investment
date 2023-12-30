"use client";
import { IoHome } from "react-icons/io5";
import { MdOutlineShowChart } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";

export default function UserdashboardFooter() {
  const content = (
    <footer className="min-w-screen px-3 flex h-[3rem] flex-row justify-center items-center text-[1.3rem]  bg-[#03045e] fixed overflow-hidden bottom-0  text-white">
      <section>
        <article className="flex justify-between items-center px-[2.5rem] pt-1 w-screen">
          <div className="center-with-flex">
            <Link href="/login/userdash/" className="center-with-flex ">
              <IoHome />
              <p className="text-[0.7rem]">Home</p>
            </Link>
          </div>
          <div className="center-with-flex">
            <Link href="/login/userdash/history" className="center-with-flex ">
              <MdOutlineShowChart />

              <p className="text-[0.7rem]">Activity</p>
            </Link>
          </div>
          <div className="center-with-flex">
            <Link href="/login/userdash/setting" className="center-with-flex ">
              <IoSettingsSharp />
              <p className="text-[0.7rem]">Settings</p>
            </Link>
          </div>
        </article>
      </section>
    </footer>
  );
  return content;
}
