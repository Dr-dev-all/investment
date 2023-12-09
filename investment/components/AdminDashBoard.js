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
import Investors from '@/components/Investors';
// import AdminEditUser from '@/components/AdminEditUser';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MdDeleteForever } from 'react-icons/md';
// import { alert } from 'node-popup';
// import Popup from "reactjs-popup"

export default function Admindash() {
  const router = useRouter();
  const [currentData, setCurrentData] = useState('');
  const [mainComp, setMainComp] = useState('');
  const [serverData, setServerData] = useState([]);
  const [selectedID, setSelectedID] = useState(null);

  const userSideBar = [
    { name: 'Recents', url: './', id: 1, pager: 'home' },
    { name: 'Dashboard', url: './dashboard', id: 2, pager: 'dash' },
    { name: 'History', url: './history', id: 3, pager: History },
    { name: 'Investors', url: './investors', id: 4, pager: 'investors' },
    { name: 'Settings', url: './setting', id: 5, pager: Setting },
    { name: 'feedbacks', url: './learn', id: 6, pager: Learn },
    { name: 'Logout', url: './logout', id: 7, pager: Logout },
    { name: '', url: './adminedituser', id: 8, pager: 'AdminEditUser' },
  ];

  // const userPops = (

  // USER TOGGLING FUNCTIONS API'S

  const getUserEditPage = () => {
    const data = userSideBar
      .map((dt) => dt)
      .filter((dt2) => dt2.id === 8)[0].pager;
    setCurrentData(data);
  };

  const activateUser = async () => {
    try {
      const { userID } = useParams();
      if (!userID) throw new Error('Invalid user');
      const response = await fetch(
        `http://127.0.0.1:5000/users/getsingleuser/${userID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (!response.ok)
        throw new Error('Network error, please try again later');
      if (response.ok) {
        const ServerResponse = await response.json();
        alert(ServerResponse);
      }
    } catch (error) {
      alert(error);
    }
  };

  const deactivateUser = async () => {
    try {
      const { userID } = useParams();
      if (!userID) throw new Error('Invalid user');
      const response = await fetch(
        `http://127.0.0.1:5000/users/getsingleuser/${userID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (!response.ok)
        throw new Error('Network error, please try again later');
      if (response.ok) {
        const ServerResponse = await response.json();
        alert(ServerResponse);
      }
    } catch (error) {
      alert(error);
    }
  };

  // form hook data

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // END OF USER TOGGLING FUNCTIONS

  const Investors = (
    <section>
      <article>
        <ul className='overflow-x-hidden h-[35rem]'>
          {serverData.map((user) => (
            <li key={user.id}>
              <div
                className='bg-yellow-500 flex flex-col justify-between  items-center text-center'
                key={user.id}>
                <motion.form
                  layoutId={user.id}
                  onClick={() => setSelectedID(user.id)}
                  className='bg-blue-500 text-white text-left my-3 p-1 h-full w-full border-2 '
                  key={user.id}>
                  <motion.div className='plan-items' key={user.id}>
                    <label>Email:</label>
                    <input
                      {...register('email', { value: user.email })}
                      className=' ad-inp-style'
                    />
                  </motion.div>
                  <motion.div className='plan-items' key={user.id}>
                    <label>Firstname:</label>
                    <input
                      {...register('firstName', { value: user.firstName })}
                      className=' ad-inp-style'
                    />
                  </motion.div>
                  <motion.div className='plan-items' key={user.id}>
                    <label>Lastname:</label>
                    <input
                      {...register('lastName', { value: user.lastName })}
                      className=' ad-inp-style'
                    />
                  </motion.div>
                  <motion.div className='plan-items' key={user.id}>
                    <label>Plan:</label>
                    <input
                      {...register('plan', { value: user.plan })}
                      className=' ad-inp-style'
                    />
                  </motion.div>
                  <motion.div className='plan-items' key={user.id}>
                    <label>Balance:</label>
                    <input
                      {...register('balance', { value: user.balance })}
                      className=' ad-inp-style'
                    />
                  </motion.div>
                </motion.form>
                <div className='grid grid-cols-2 p-1 gap-2 justify-between w-full h-full items-center'>
                  <button
                    onClick={() => {
                      activateUser();
                    }}
                    className='text-center text-white text-[1.1rem] font-bold  px-2 py-1 bg-[#7BC60C] mx-auto w-full h-[2rem] rounded-full border-none shadow-lg shadow-gray-500 '>
                    {' '}
                    activate
                  </button>

                  <button
                    onClick={() => {
                      deactivateUser();
                    }}
                    className='text-center text-white text-[1.1rem] font-bold  px-2 py-1 bg-[#66635B] mx-auto w-full h-[2rem] rounded-full border-none shadow-lg shadow-gray-500 '>
                    {' '}
                    deactivate
                  </button>

                  <button
                    onClick={() => {
                      getUserEditPage();
                    }}
                    className='text-center text-white text-[1.1rem] font-bold  px-2 py-1 bg-[#1E2749] mx-auto w-full h-[2rem] rounded-full border-none shadow-lg shadow-gray-500 '>
                    {' '}
                    update
                  </button>

                  <button
                    onClick={() => {
                      getUserEditPage();
                    }}
                    className=' center-with-flex text-center text-white text-[1.1rem] font-bold   bg-[#bf0603] mx-auto w-full h-[2rem] rounded-full border-none shadow-lg shadow-gray-500 '>
                    {' '}
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <AnimatePresence>
          {selectedID && (
            <motion.div layoutId={selectedID}>
              <motion.h5>{user.email}</motion.h5>
              <motion.h5>{user.firstName}</motion.h5>
              <motion.button onClick={() => setSelectedID(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </section>
  );

  const dashBoard = (
    <div className='parent p-1'>
      <div className='grid grid-cols-2 gap-2'>
        <div className='bg-white p-4'>Total Bal</div>
        <div className='bg-white p-4'>Earns</div>
        <div className='bg-white p-4'>Withdraw</div>
      </div>
      <div className='bg-white p-4'>History</div>
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
        <div className='bg-white p-1 text-center'>
          <h2>Unique Invest</h2>
          <p>Why one should invest</p>
          <button className='mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
            Upgrade
          </button>
        </div>
        <div className='bg-white p-2 text-center'>
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
          if (currentData === 'dash') {
            setMainComp(dashBoard);
          } else if (currentData === 'investors') {
            setMainComp(Investors);
          } else if (currentData === 'AdminEditUser') {
            setMainComp(AdminEditUser);
          } else {
            setMainComp(currentData);
          }
        } else {
          setMainComp(dashBoard);
        }
      });
    };

    chooseItem();
  }, [currentData]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/users/getallusers');

        if (!response.ok) throw new Error('not successful');
        if (response.ok) {
          const recievedData = await response.json();
          setServerData(recievedData);
          console.log(recievedData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  const content = (
    <section className='h-screen z-0 w-screen'>
      <header className='center-with-grid  w-full min-h-[5rem] bg-green-500'>
        {' '}
        <div className=' flex flex-row  justify-between items-center px-3  min-h-[5rem] bg-green-500'>
          <div className='center-with-flex p-3 border-2 border-black  rounded-full  h-[3rem]'>
            <Link href='/'>
              {' '}
              <h1>USER PLAN</h1>{' '}
            </Link>
          </div>
          <div>
            <button onClick={() => alert('hello usder')}>say hi</button>
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
