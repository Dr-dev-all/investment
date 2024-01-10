'use client';
import { memo, useContext } from 'react';
import { BsBank2 } from 'react-icons/bs';
import { BiMoneyWithdraw } from 'react-icons/bi';
import jwtDecode from 'jwt-decode';
import Authproviders from '@/app/Authprovider';

export default function AdminDashBoard() {
  const content = (
    <main className="min-h-screen w-full  bg-black text-white ">
      <section className="bg-white text-black w-[80%] min-h-full rounded-[2rem]  min-w-full mx-auto gap-3 p-3   ">
        <div className="flex justify-between items-center w-full text-white bg-black mx-auto rounded-full px-5 py-2 shadow-gray-500 shadow-lg ">
          <BsBank2 className="text-[1.3rem]" /> <div>Welcome Home Admin</div>
        </div>
      </section>
      <section className="bg-white text-black w-[80%] min-h-full rounded-[2rem]  min-w-full mx-auto gap-3 p-3 mt-4  ">
        <div className="flex justify-between items-center w-full text-white bg-black mx-auto rounded-full px-5 py-2 shadow-gray-500 shadow-lg ">
          <BiMoneyWithdraw className="text-[1.3rem]" />{' '}
          <div>
            <p>W-Requests</p>
            <p className="font-bold text-wite">None</p>
          </div>
        </div>
      </section>
      <section className="bg-white text-black w-[95%] min-h-full rounded-[2rem] grid grid-cols-2  mx-auto gap-3 p-3  mt-[1rem] ">
        <article className="center-with-flex  flex-col justify-center bg-black text-white shadow-gray-500 shadow-lg rounded-lg min-w-full min-h-[3rem]">
          <p>Inactive clients</p>
          <p> 567 </p>
          <p className=" plan-items">
            T-volume <span className="">3455%</span>{' '}
          </p>
        </article>
        <article className="center-with-flex  flex-col justify-center bg-black text-white shadow-gray-500 shadow-lg rounded-lg min-w-full min-h-[3rem]">
          <p>Active clients</p>
          <p> 567 </p>
          <p className=" plan-items">
            T-volume <span className="">145%</span>{' '}
          </p>
        </article>
      </section>
    </main>
  );

  return content;
}
