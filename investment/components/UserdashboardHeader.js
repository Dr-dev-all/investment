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
import { FaCircle } from 'react-icons/fa6';
import { PiPottedPlantFill } from 'react-icons/pi';
import { IoNotificationsOffSharp } from 'react-icons/io5';
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
    <header className=" bg-[#03045e]  w-full min-h-[3rem] text-white fixed top-0    z-30    mb-[2rem] border-b-2 border-b-white ">
      <section className="w-full h-[4rem] flex flex-row justify-between items-center  min-w-screen        py-2 px-2">
        <div className="  flex flex-col justify-center items-center gap-1 h-[98%]  m-auto   w-[50%]     mr-3  border-2            rounded-[2rem]   border-white  px-2  py-1    my-auto">
          <span className="text-white    text-center   text-[10px] ">
            Active plan:
          </span>
          <h2 className="text-[#03045e] px-1  font-bold  text-[12px]  text-center  rounded-full  bg-white w-[86%] mx-auto">
            {user?.data?.plan ? user?.data?.plan : 'None'}
          </h2>
        </div>
        <div className="w-[25%] m-auto h-[2rem]  text-[10px] ">
          <span className="italic text-[13px] font-bold "> Hi </span>{' '}
          {user?.data?.firstName
            ? user?.data?.firstName
            : loading && (
                <p className={`text-white ${loading && 'animate-pulse'}`}>
                  ...
                </p>
              )}{' '}
        </div>
        <div className=" center-with-flex  w-[25%]  m-auto ">
          <div className="flex flex-col">
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
        <div className=" center-with-flex    w-[25%]  m-auto">
          {' '}
          <IoNotificationsOffSharp />{' '}
        </div>
      </section>
      <section>
        <hr className="w-full mb-1 mx-auto " />
        <article className="flex justify-between items-center  py-1 px-[2rem]">
          <div className="flex flex-col justify-center items-center ">
            <Link href="/login/userdash/withdraw" className="center-with-flex">
              <FaMinusCircle className="text-[1.7rem]" />
              <h1 className="  text-white mx-auto ">Withdraw</h1>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <Link
              href="/login/userdash/chooseplan"
              className="center-with-flex">
              <IoAddCircleSharp className="text-[1.7rem]" />
              <h1 className=" text-white mx-auto ">Choose Plan</h1>
            </Link>
          </div>
        </article>
      </section>
    </header>
  );

  return content;
}
