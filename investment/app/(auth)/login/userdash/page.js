'use client';
import React from 'react';
// import Userdash from "@/components/Userdash";
import UserDashboardHeader from '@/components/UserDashboardHeader';
import UserDashboardFooter from '@/components/UserDashboardFooter';
// import { useState, useEffect } from "react";
import { useParams } from 'next/navigation';
import { useContext, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';
// import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import { AuthProvider } from '@/app/Authprovider';
// import axios from "@/lib/axios";
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
// import { useNavigate, useLocation } from "react-router-dom";
import { SymbolOverview } from 'react-tradingview-widget-components';
import TradingView from '@/components/TradingView';
// import { useRouter } from "next/router";
import BeatLoader from 'react-spinners/BeatLoader';
//import tradingchart

export default function page() {
  const [user, setUser] = useState({});
  const [newData, setNewData] = useState(null);
  const [appState, setAppState] = useState('');
  let effectRan = useRef(false);
  let compMount = useRef(false);
  const axiosPrivate = useAxiosPrivate();
  const [isLoading, setIsLoading] = useState(false);

  // navigate = useNavigate();
  // location = useLocation();
  const { auth } = useContext(AuthProvider);
  // localStorage.setItem("AUTH", JSON.stringify(auth));
  // const { userId } = auth;
  console.log(auth);
  // const router = useRouter(west);

  // const router = useRouter();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    console.log('useEffect display');

    if (effectRan.current === true) {
      const getUser = async () => {
        setIsLoading(true);
        try {
          const response = await axiosPrivate.get('/users/getsingleuser', {
            signal: controller.signal,
          });

          // localStorage.setItem("serverRes", JSON.stringify(response?.data));
          setUser((prev) => ({ ...prev, data: response.data }));
        } catch (error) {
          console.log(error);
          // navigate("/login", { state: { from: location }, replace: true });
        } finally {
          // Router.reload();
          console.log('reload');
          // router.reload();
          setIsLoading(false);
        }
      };

      getUser();
    }
    return () => {
      effectRan.current = true;
      isMounted = false;
      controller.abort();
    };
  }, []);

  console.log(user);
  // if (compMount.cureent === true) {
  const content = (
    <>
      <UserDashboardHeader />{' '}
      <main className='min-h-screen w-full text-[#03045e]  mt-[6.9rem]  rounded-b-lg  flex flex-col'>
        <section className='flex justify-between  bg-[#03045e]  items-center w-full min-h-[4rem]   p-2 '>
          <div className=' center-with-flex  text-[#03045e] w-full h-[5rem] bg-white border-2   rounded-lg   text-[1.1rem] font-black '>
            <h1 className='flex flex-col'>
              Balance{' '}
              <span>
                {' '}
                {user?.data?.balance && user?.data?.balance !== '00' ? (
                  user?.data?.balance
                ) : isLoading ? (
                  <p>Loading...</p>
                ) : (
                  user?.data?.balance === '00' && '$00.00'
                )}
              </span>
            </h1>
          </div>
          <div className='  center-with-flex  text-[#03045e] w-full  rounded-lg  border-2 bg-white h-[5rem]  font-black'>
            <h1 className='flex flex-col'>
              Profit <span>$00.00 </span>
            </h1>
          </div>
        </section>

        <div>
          <h1 className='pl-3 font-bold text-[1.1rem] my-2'>
            Cummulative Profit
          </h1>
        </div>
        {/* choose plan */}
        <section className=' center-with-flex w-full min-h-[5rem] gap-3   px-3'>
          <article className='flex justify-between   mb-4  bg-[#03045e] text-white  items-center w-full min-h-[6rem]   p-2 rounded-lg'>
            <div className='flex justify-between  bg-[#03045e]  items-center w-full    h-[4rem]  px-3 py-9'>
              <div>
                <h1 className='text-[1.1rem] mb-2'>Bonus Amount</h1>{' '}
                <h2 className='text-[1.5rem] font-bold'>$1,227</h2>
              </div>
              <div>
                <h1 className='text-[1.1rem] mb-2'>Yield Amount</h1>

                <h2 className='font-bold text-green-500'>$227</h2>
              </div>
            </div>
          </article>
          <article className='center-with-flex text-center w-[97%] border-2 p-1 shadow-lg shadow-gray-500 rounded-lg'>
            <div>
              <p className='text-[1.2rem] text-center '>
                Choose a plan to start your earning journey
              </p>
            </div>
            <h1></h1>
            <Link
              href='/login/userdash/chooseplan'
              className=' bg-gradient-to-r from-[#03045e] rounded-[2rem]  from-85% text-[1.4rem] font-bold   to-white text-white shadow-lg shadow-gray-500 p-2   '>
              choose plan now{' '}
              <MdArrowOutward className='inline text-[1rem] text-[#03045e]' />
            </Link>
          </article>
        </section>
        {/* <section className="center-with-flex min-h-[10rem] w-screen  bg-red-500 my-3 mx-auto ">
          <article className=" bg-green-500 h-[17rem] mx-auto w-[95%] ">
            <TradingView />
          </article>
        </section> */}

        <div className='bg-red-500'>
          <SymbolOverview />
        </div>

        <section className='mt-4 center-with-flex w-full min-h-[5rem] gap-3   px-3 rounded-lg text-white'>
          <article className='flex justify-between   mb-4  bg-[#03045e] text-white  items-center w-full min-h-[6rem]   p-2 rounded-lg'>
            <div className='flex justify-between  bg-[#03045e]  items-center w-full    h-[4rem]  px-3 py-9'>
              <div>
                <h1 className='text-[1.1rem] mb-2'>Bonus Amount</h1>{' '}
                <h2 className='text-[1.5rem] font-bold'>
                  ${(user?.data?.balance / 100) * 12}
                </h2>
              </div>
              <div>
                <h1 className='text-[1.1rem] mb-2'>Yield Amount</h1>

                <h2 className='font-bold text-green-500'>
                  ${user?.data?.balance}
                </h2>
              </div>
            </div>
          </article>
        </section>
      </main>
      <UserDashboardFooter />
    </>
  );
  return content;
  // }

  // compMount.current = true;
}
