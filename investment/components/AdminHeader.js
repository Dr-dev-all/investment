"use client";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";

export default function AdminHeader() {
  const content = (
    <main className=" mx-auto min-h-[3rem] w-full text-black sticky top-0 text-white bg-black  w-screen">
      <section className="flex justify-between items-center px-2 h-full w-full">
        <div className=" center-with-flex font-bold">
          <h1 className="">one</h1>
        </div>
        <div>
          <IoSearchSharp />
        </div>
        <div>one</div>
        <div className="center-with-flex rounded-full p-2 ">
          <IoNotificationsSharp />
        </div>
      </section>
    </main>
  );

  return content;
}
