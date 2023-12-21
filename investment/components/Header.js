"use client";
import { BiSolidDownArrow } from "react-icons/bi";
import Link from "next/link";
import { useState } from "react";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { TiArrowUnsorted } from "react-icons/ti";
import { PiArrowUpRightFill } from "react-icons/pi";
import Image from "next/image";
import { MdOutlineHeight } from "react-icons/md";
import { TickerTape } from "react-tradingview-embed";
import { PiArrowFatLineRightFill } from "react-icons/pi";

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
       flex justify-center  flex-col items-center  top-0 flex-col 
          fixed z-10`}
    >
      <div>
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

          <Link href="service" className="font-bold hidden md:block">
            Services
          </Link>

          <Link href="/prices" className="font-bold hidden md:block">
            Prices
          </Link>

          <Link
            href="/security"
            className="font-bold hidden md:block  hover:underline transition-all duration-300"
          >
            Security
          </Link>

          <Link href="/contact" className="font-bold hidden md:block">
            Contact
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
      </div>

      <nav
        className={`flex flex-col justify-center items-center md:hidden  block h-screen transition-all duration-5000     rounded-l-lg bg-gradient-to-r from-[#03045e]  from-60%  to-40% to-white w-screen   ${
          show ? "hidden" : "block "
        }   mx-auto   text-[#03045e] text-center z-0`}
      >
        <ul className="center-with-flex  h-[70%] w-[80%] gap-2 my-auto  mx-auto">
          {navItems.map((data) => (
            <li key={data.id} className={`text-left w-[80%]  mx-auto `}>
              <Link
                href={data.url}
                className="text-[1.2rem] capitalize px-3 w-[8rem] text-left underline  font-bold tracking-wider text-white"
              >
                {data.name}

                <PiArrowFatLineRightFill className="inline" />
              </Link>{" "}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );

  return content;
}
