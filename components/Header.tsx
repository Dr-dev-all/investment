'use client';
import { BiSolidDownArrow } from 'react-icons/bi';
import Link from 'next/link';
import { useState } from 'react';
import { IoMdArrowDropupCircle } from 'react-icons/io';
import { TiArrowUnsorted } from 'react-icons/ti';
import { PiArrowUpRightFill } from 'react-icons/pi';
import Image from 'next/image';

export default function Header() {
  const navItems = [
    { name: 'About', url: 'about', id: 1 },
    { name: 'Contact', url: 'contact', id: 2 },
    { name: 'News', url: 'blog', id: 3 },
    { name: 'Invest', url: 'invest', id: 5 },
    { name: 'Services', url: 'service', id: 6 },
    { name: 'Help', url: 'Learn', id: 7 },
    { name: 'prices', url: 'Learn', id: 8 },
    { name: 'Learn ', url: 'Learn', id: 8 },
  ];

  const [show, setShow] = useState(false);

  const content = (
    <header
      className={`w-screen ${
        !show ? 'h-[7.5rem]' : 'h-[7.5rem]'
      }  flex justify-center items-center  flex-col bg-transparent ${
        !show && 'fixed'
      }  px-2 pt-3 z-0`}>
      <div
        className={`flex flex-row h-[4rem] py-1 bg-[#03045e] mb-2 w-screen text-white justify-between  mt-[5rem] z-10 px-4  ${
          !show ? 'sticky' : 'fixed'
        }   text-white  items-center`}>
        <Link href='/' className='border-white border-2'>
          <Image src='/bhlogo.jpeg' alt='bh-logo' width={38} height={38} />
        </Link>
        <Link href='/register'>Register</Link>
        <Link href='/register'>Login</Link>
        <button
          onClick={() => {
            setShow(!show);
          }}>
          MENU{' '}
          {show ? (
            <BiSolidDownArrow className='inline' />
          ) : (
            <TiArrowUnsorted className='inline' />
          )}
        </button>
      </div>
      <nav
        className={`flex flex-col block h-[8.9rem] gap-2 p-1  w-full mx-auto  ${
          show ? 'hidden' : 'block '
        } bg-white  mx-auto   text-[#03045e] text-center z-0`}>
        <ul className='grid grid-cols-2 gap-3 h-full w-full '>
          {navItems.map((data) => (
            <li key={data.id} className={` underline underline-offset-4`}>
              <Link href={data.url} className='text-[1rem] font-bold'>
                {data.name}
              </Link>{' '}
              <PiArrowUpRightFill className='inline' />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );

  return content;
}
