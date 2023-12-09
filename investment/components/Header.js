"use client";
import { BiSolidDownArrow } from "react-icons/bi";
import Link from "next/link";
import { useState } from "react";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { TiArrowUnsorted } from "react-icons/ti";
import { PiArrowUpRightFill } from "react-icons/pi";
import Image from "next/image";
import { MdOutlineHeight } from "react-icons/md";

export default function Header() {
  const navItems = [
    { name: "About", url: "about", id: 1 },
    { name: "Contact", url: "contact", id: 2 },
    { name: "News", url: "blog", id: 3 },
    { name: "Invest", url: "invest", id: 4 },
    { name: "Services", url: "service", id: 5 },
    { name: "Help", url: "Learn", id: 6 },
    { name: "prices", url: "Learn", id: 7 },
    { name: "Learn ", url: "Learn", id: 8 },
  ];

  const [show, setShow] = useState(true);

  const content = (
    <header
      className={`w-screen 
       flex justify-center items-center   flex-col 
          fixed z-0`}
    >
      <div
        className={`flex flex-row h-[40%] border-b-2 border-white py-2 bg-[#03045e]  w-screen text-white justify-between   z-10 px-4 md:px-6  
             text-white  items-center`}
      >
        <Link href="/" className="border-white border-2">
          <Image src="/bhlogo.jpeg" alt="bh-logo" width={28} height={28} />
        </Link>
        <Link href="/register" className="font-bold min">
          Register
        </Link>

        <Link
          href="/login"
          className="font-bold max-[283px]:hidden min:[300]:block"
        >
          Login
        </Link>

        <Link href="about" className="font-bold hidden md:block">
          About
        </Link>

        <Link href="#" className="font-bold hidden md:block">
          Invest
        </Link>

        <Link href="#" className="font-bold hidden md:block">
          News
        </Link>

        <Link href="#" className="font-bold hidden md:block">
          Help
        </Link>

        <Link href="#" className="font-bold hidden md:block">
          Services
        </Link>

        <Link
          href="#"
          className="font-bold hidden md:block  hover:underline transition-all duration-300"
        >
          Learn
        </Link>

        <Link href="#" className="font-bold hidden md:block">
          Contact
        </Link>

        <Link href="#" className="font-bold hidden md:block">
          Prices
        </Link>

        <button
          className=" md:hidden"
          onClick={() => {
            setShow(!show);
          }}
        >
          MENU{" "}
          {show ? (
            <BiSolidDownArrow className="inline" />
          ) : (
            <TiArrowUnsorted className="inline" />
          )}
        </button>
      </div>
      <nav
        className={`flex flex-col justify-center items-center md:hidden  block h-[8.9rem] gap-2 p-1 bg-yellow-500   rounded-l-lg  w-[96%] ml-[2.5rem]  ${
          show ? "hidden" : "block "
        } bg-white  mx-auto   text-[#03045e] text-center z-0`}
      >
        <ul className="grid grid-cols-2 gap-3 h-full w-full   mx-auto">
          {navItems.map((data) => (
            <li key={data.id} className={` underline underline-offset-4`}>
              <Link href={data.url} className="text-[1rem] font-bold">
                {data.name}
              </Link>{" "}
              <PiArrowUpRightFill className="inline" />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );

  return content;
}
