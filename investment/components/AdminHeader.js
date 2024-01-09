'use client';
import { IoNotificationsSharp } from 'react-icons/io5';
import { IoSearchSharp } from 'react-icons/io5';
import { useState } from 'react';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';

export default function AdminHeader() {
  const axiosPrivate = useAxiosPrivate();

  const [user, setUser] = useState({});
  const [appError, setAppError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const controller = new AbortController();

    const getUser = async () => {
      try {
        const response = await axiosPrivate.get(`/users/getsingleuser`, {
          signal: controller.signal,
        });
        isMounted && setUser((prev) => ({ ...prev, data: response.data }));
        // console.log({ serverdata: user });
        //
      } catch (error) {
        setAppError('Network error..., please try again later');
      }
    };

    getUser();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [axiosPrivate]);

  const content = (
    <main className=" mx-auto min-h-[3rem] w-full text-black sticky top-0 text-white bg-black  w-screen">
      <section className="flex justify-between items-center px-2 h-full w-full">
        <div className=" center-with-flex font-bold">
          <h1 className="">ADMIN</h1>
        </div>
        <div>
          <IoSearchSharp />
        </div>
        <div>
          {user?.data?.firstName ? user?.data?.firstName : 'Bullharvest Admin'}
        </div>
        <div className="center-with-flex rounded-full p-2 ">
          <IoNotificationsSharp />
        </div>
      </section>
    </main>
  );

  return content;
}
