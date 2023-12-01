'use client';
import { FaBell } from 'react-icons/fa6';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Setting from '@/components/Setting';
import Learn from '@/components/Learn';
import History from '@/components/History';
import Help from '@/components/Help';
import Logout from '@/components/Logout';
import { useState, useEffect } from 'react';

export default function Userdash() {
  const router = useRouter();
  const [currentData, setCurrentData] = useState('');
  const [mainComp, setMainComp] = useState('');
  const userSideBar = [
    { name: 'Home', url: './', id: 1, pager: History },
    { name: 'Dashboard', url: './dashboard', id: 2, pager: History },
    { name: 'History', url: './history', id: 3, pager: History },
    { name: 'Help', url: './help', id: 4, pager: Help },
    { name: 'Setting', url: './setting', id: 5, pager: Setting },
    { name: 'Learn', url: './learn', id: 6, pager: Learn },
    { name: 'Logout', url: './logout', id: 7, pager: Logout },
  ];

  const dashBoard = (
    <div className='parent p-1'>
      <div className='grid grid-cols-2 gap-2'>
        <div class='bg-white p-4'>Total Bal</div>
        <div class='bg-white p-4'>Earns</div>
        <div class='bg-white p-4'>Withdraw</div>
        <div class='bg-white p-4'>History</div>
      </div>
      <div className='grid grid-cols-3 gap-2 mt-4'>
        <div className='bg-white p-3 col-span-2 text-center'>
          <p>Why you should upgrade</p>
          <button className='mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
            Upgrade
          </button>
        </div>
        <div className='bg-white p-1'>
          <ul>
            <li>BTC-12</li>
            <li>ETH-12</li>
            <li>USDT-1</li>
            <li>XRP-12</li>
            <li>LTC-12</li>
          </ul>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-2 mt-4'>
        <div class='bg-white p-1 text-center'>
          <h2>Unique Invest</h2>
          <p>Why one should invest</p>
          <button className='mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
            Upgrade
          </button>
        </div>
        <div class='bg-white p-2 text-center'>
          loleydkkkk bhhhdbdb bdbdb bb bdbdbd bdbd
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    const chooseItem = () => {
      userSideBar.map((data) => {
        var active = Object.values(data).filter((e) => e === currentData)[0];
        if (currentData) {
          setMainComp(currentData);
        } else {
          setMainComp(dashBoard);
        }
      });
    };

    chooseItem();
  }, [currentData]);

  const content = (
    <section className='h-screen z-0 w-screen'>
      <header className='center-with-grid  w-full min-h-[5rem] bg-green-500'>
        {' '}
        <div className=' flex flex-row  justify-between items-center px-3  min-h-[5rem] bg-green-500'>
          <div className='center-with-flex p-3 border-2 border-black  rounded-full  h-[3rem]'>
            <h1>USER PLAN</h1>
          </div>
          <div>
            <p>Hi james</p>
            <p>Active: </p>
          </div>
          <div>
            <FaBell />
          </div>
        </div>
      </header>
      <section className='flex   max-h-full w-full'>
        <article className=' text-center p3 w-[30%] min-h-[31rem] bg-blue-500'>
          <ul>
            {userSideBar.map((sideData) => (
              <li key={sideData.id} className='md:text-[2rem] font-bold'>
                <button onClick={() => setCurrentData(sideData.pager)}>
                  {sideData.name}
                </button>
              </li>
            ))}
          </ul>
        </article>
        <article className='w-[70%] min-h-[4rem] bg-red-500'>
          {mainComp}
        </article>
      </section>
    </section>
  );

  return content;
}
