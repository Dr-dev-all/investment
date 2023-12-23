'use client';
import { useState, useContext, useEffect, useRef } from 'react';
import { AuthProvider } from '@/app/Authprovider';
import { headers } from '../next.config';
import { jwtDecode } from 'jwt-decode';
import Link from 'next/link';
import { IoNotificationsSharp } from 'react-icons/io5';
import { FaMinusCircle } from 'react-icons/fa';
import { IoAddCircleSharp } from 'react-icons/io5';
import { FaArrowUpWideShort } from 'react-icons/fa6';
import Image from 'next/image';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import axios from '@/lib/axios';
import BeatLoader from 'react-spinners/BeatLoader';

export default function UserDashboardHeader() {
  const navBarData = [
    { name: 'Home', url: 'home' },
    { name: 'History', url: 'history' },
    { name: 'Portfolio', url: 'portfolio' },
    { name: 'choose plan', url: 'chooseplan' },
    { name: 'Withdraw', url: 'withdraw' },
    { name: 'Logout', url: 'logout' },
  ];

  const axiosPrivate = useAxiosPrivate();

  const { auth } = useContext(AuthProvider);
  const [user, setUser] = useState({});

  useEffect(() => {
    let isMounted = true;

    const controller = new AbortController();

    const getUser = async () => {
      try {
        const response = await axiosPrivate.get('/users/getsingleuser', {
          signal: controller.signal,
        });
        isMounted && setUser((prev) => ({ ...prev, data: response.data }));
      } catch (error) {
        console.log(error);
      }
    };

    getUser();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const content = (
    <header className=' bg-[#03045e] w-full min-h-[3rem] text-white fixed top-0  mb-[2rem]  '>
      <section className='w-full max-h-[3rem] flex flex-row justify-between items-center  py-2 px-5'>
        <h1 className=' mb-[0.2rem] '>
          <Link href='/' className=' '>
            <Image
              src='/bhlogo.jpeg'
              alt='bh-logo'
              width={32}
              height={32}
              className='border-2 border-white '
            />
          </Link>
        </h1>
        <h1>
          Hi{' '}
          {user?.data?.firstName ? (
            user?.data?.firstName
          ) : (
            <BeatLoader
              color={{ color: 'white' }}
              loading={true}
              size={150}
              aria-label='Loading Spinner'
              data-testid='loader'
            />
          )}{' '}
        </h1>
        <h1>
          {' '}
          <IoNotificationsSharp />{' '}
        </h1>
      </section>
      <section>
        <hr className='w-full mb-1 mx-auto ' />
        <article className='flex justify-between items-center  py-1 px-[2rem]'>
          <div className='flex flex-col justify-center items-center '>
            <Link href='/login/userdash/withdraw' className='center-with-flex'>
              <FaMinusCircle className='text-[2rem] ' />
              <h1 className='  text-white mx-auto '>Withdraw</h1>
            </Link>
          </div>
          <div className='flex flex-col justify-center items-center '>
            <Link
              href='/login/userdash/chooseplan'
              className='center-with-flex'>
              <IoAddCircleSharp className='text-[2rem]' />
              <h1 className=' text-white mx-auto '>Choose Plan</h1>
            </Link>
          </div>
        </article>
      </section>
    </header>
  );

  return content;
}
