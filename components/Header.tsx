'use client';
import { BiSolidDownArrow } from 'react-icons/bi';
import Link from 'next/link';
import { useState } from 'react';
import { IoMdArrowDropupCircle } from 'react-icons/io';
import { TiArrowUnsorted } from 'react-icons/ti';
import { PiArrowUpRightFill } from 'react-icons/pi';

export default function Header() {
  const navItems = [
    { name: 'About', url: 'about', id: 1 },
    { name: 'Contact', url: 'contact', id: 2 },
    { name: 'News', url: 'blog', id: 3 },
    { name: 'search', url: 'skills', id: 5 },
    { name: 'Services', url: 'service', id: 6 },
  ];

  const [show, setShow] = useState(false);

  const content = (
    <header
      className={`w-screen ${
        !show ? 'h-[7.5rem]' : 'h-[7.5rem]'
      }  flex justify-center items-center flex-col bg-transparent  px-2 pt-3 z-0`}
    >
      <div className="flex flex-row h-[2rem] p-2 bg-transparent w-full justify-between z-10 px-4     text-white  items-center">
        <h1>Logo</h1>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          MENU{' '}
          {show ? (
            <BiSolidDownArrow className="inline" />
          ) : (
            <TiArrowUnsorted className="inline" />
          )}
        </button>
      </div>
      <nav
        className={`flex flex-col block h-[8.5rem] gap-2 p-1  w-full mx-auto  ${
          show ? 'hidden' : 'block '
        } bg-green-500  mx-auto  text-center z-0`}
      >
        <ul className="grid grid-cols-2 gap-3 h-full w-full ">
          {navItems.map((data) => (
            <li
              key={data.id}
              className={`${
                data.url === 'service' ? 'col-start-1 col-end-3 mx-auto ' : ''
              }   underline underline-offset-4`}
            >
              <Link href={data.url}>{data.name}</Link>{' '}
              <PiArrowUpRightFill className="inline" />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );

  return content;
}
