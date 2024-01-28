'use client';
import { useState, useContext, useEffect, useRef } from 'react';
import { AuthProvider } from '@/app/Authprovider';
import { headers } from '../next.config';
import { jwtDecode } from 'jwt-decode';
import { IoNotificationsSharp } from 'react-icons/io5';
import { FaMinusCircle } from 'react-icons/fa';
import { IoAddCircleSharp } from 'react-icons/io5';
import { FaArrowUpWideShort } from 'react-icons/fa6';
import Image from 'next/image';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';     
import axios from '@/lib/axios';
import Link from "next/link"
import BeatLoader from 'react-spinners/BeatLoader';
import { FaCircle } from 'react-icons/fa6';
import { PiPottedPlantFill } from 'react-icons/pi';
import { IoNotificationsOffSharp } from 'react-icons/io5';
import { usePathname } from 'next/navigation';
// import { jwtDecode } from "jwt-decode";

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
  const [appError, setAppError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isVisited, setIsVisited] = useState(false)
  const [count, setCount] = useState(0)
  const pathname = usePathname()


  


  useEffect(() => {
    let isMounted = false
    const controller = new AbortController()
   const getHistory = async () => {


      try {
        const response = await axiosPrivate.get("users/getuserhistory", {
          signal: controller.signal
        })

        // if (pathname.includes("/login/userdash/history") && isVisited === false ) {
        //   setIsVisited(true)

        // }

        if (response.status === 200) {
          const {userHistory} = response.data
          // console.log({userHeader: userHistory})

          if (userHistory && userHistory?.length && isVisited === false && pathname.includes("/login/userdash/history")) {
            setIsVisited(true);
            setCount(0);

          }else {
            setCount(count + userHistory?.length);
            
          }
        }
      } catch (error) {
        // console.log(error)
        setAppError(error)
      }
    }


    getHistory()
    return () => {
      isMounted = true
      controller.abort()
    }
  }, [axiosPrivate])


  useEffect(() => {
    let isMounted = true;

    const controller = new AbortController();

    

    const getUser = async () => {
      
      try {
        setLoading(true);
        const response = await axiosPrivate.get(`/users/getsingleuser`, {
          signal: controller.signal,
        });
        isMounted && setUser((prev) => ({ ...prev, data: response.data }));
        // console.log({ serverdata: user });
        //
      } catch (error) {
        setAppError('Network error..., please try again later');
      } finally {
        setLoading(false);
      }
    };

    getUser();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [axiosPrivate]);

  // console.log({ api_user: user });
  const content = (
    <header className='  bg-[#03045e]  w-full min-h-[3rem] text-white fixed top-0    z-30    mb-[2rem] border-b-2 border-b-white '>
      <section className='w-full h-[4rem]   bg-gradient-to-l from-black to-blue-900 to-80%  flex flex-row justify-between items-center  min-w-screen        py-2 px-2'>
        <div className='  flex flex-col justify-center items-center gap-1 h-[99%]  m-auto   w-[41%] relative mr-3    bg-[#03045e]  rounded-full     px-2  py-3    my-auto  shadow-md shadow-gray-900'>
          <span className='text-white    text-center font-bold  text-[11px] '>
            Active plan
          </span>
          <h2
            className={`text-black pt-[0.1rem] font-black min-w-full  min-h-auto text-[12px]  text-center    rounded-t-[2rem] ${
              user?.data?.plan === 'none'
                ? 'bg-gray-500 text-white '
                : ' bg-yellow-500  text-[#03045e] '
            } w-[86%] mx-auto    `}>
            {user?.data?.plan && user?.data?.plan !== 'none'
              ? user?.data?.plan
              : user?.data?.plan === 'none'
                ? 'None'
                : loading && '...'}
          </h2>
        </div>
        <div className=' flex justify-center items-center  min-w-[30%] m-auto h-[2rem]  text-[0.8rem] font-bold tracking-wide shadow-md shadow-gray-900'>
          <span className='italic text-[13px] font-bold mr-2 inline '>
            {' '}
            <Image
              src='/waving.svg'
              alt='Hello User'
              height={30}
              width={30}
            />{' '}
          </span>{' '}
          {user?.data?.firstName
            ? user?.data?.firstName
            : loading && (
                <p
                  className={`text-white ${loading && 'animate-pulse inline'}`}>
                  ...
                </p>
              )}{' '}
        </div>
        <div className=' center-with-flex  w-[25%]  m-auto '>
          <div className='flex flex-col'>
            <FaCircle
              className={`    mx-auto  text-[0.9rem] ${
                loading === true
                  ? 'animate-pulse bg-transparent'
                  : user?.data?.active && loading === false
                    ? 'text-green-500'
                    : user?.data?.active === false &&
                      loading === false &&
                      'text-red-500'
              } `}
            />
            <p
              className={`text-white text-[10px]   text-center ${
                loading && 'animate-pulse'
              }`}>
              {user?.data?.active === true && loading === false
                ? 'Active'
                : loading === true
                  ? '...'
                  : user?.data?.active === false &&
                    loading === false &&
                    'Inactive'}
            </p>
          </div>
        </div>
        <div className=' center-with-flex     w-[25%]  m-auto'>
          <Link  href="/login/userdash/history">
            <h1 className={` ${count === 0 ? 'invisible' : 'visible'}  z-10 bg-red-500 text-white rounded-full p-2 center-with-flex h-[0.4rem]   `}>
              {count > 0 ? count : count === 100 ?  '99+' : count === 0 && ''}
            </h1>{' '}
            <IoNotificationsOffSharp className='z-0 text-[1.2rem]' />{' '}
          </Link>
        </div>
      </section>
      <section>
        <hr className='w-full mb-1 mx-auto ' />
        <article className='flex justify-between items-center  py-1 px-[2rem]'>
          <div className='flex flex-col justify-center items-center '>
            <Link href='/login/userdash/withdraw' className='center-with-flex'>
              <FaMinusCircle className='text-[1.7rem]' />
              <h1 className='  text-white mx-auto '>Withdraw</h1>
            </Link>
          </div>
          <div className='flex flex-col justify-center items-center '>
            <Link
              href='/login/userdash/chooseplan'
              className='center-with-flex'>
              <IoAddCircleSharp className='text-[1.7rem]' />
              <h1 className=' text-white mx-auto '>Choose Plan</h1>
            </Link>
          </div>
        </article>
      </section>
    </header>
  );

  return content;
}
