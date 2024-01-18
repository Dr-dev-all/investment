'use client';
import { BsBank } from 'react-icons/bs';
import { FaMinusCircle } from 'react-icons/fa';
import { IoAddCircleSharp } from 'react-icons/io5';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { useEffect, useState } from 'react';

export default function History() {
  const axiosPrivate = useAxiosPrivate();
  const [history, setHistory] = useState({});
  const [appError, setAppError] = useState('');
  const [loading, setLoading] = useState(false);
  let compMount = false;

  useEffect(() => {
    let isMounted = false;
    const controller = new AbortController();

    const fetchHistory = async () => {
      try {
        setLoading(true);
        const response = await axiosPrivate.get('/users/getuserhistory', {
          signal: controller.signal,
        });

        // console.log(response);
        if (response.status === 200) {
          const { userHistory } = response.data;
          localStorage.setItem('historyData', JSON.stringify(userHistory));
          // console.log(userHistory);
          // isMounted &&
          //   setHistory(
          //     (prev = () => {
          //       ({ ...prev, serverData: userHistory });
          //     })
          //   );
        }
      } catch (error) {
        // console.log(error);
        setAppError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();

    return () => {
      isMounted = true;
      controller.abort();
    };
  }, [axiosPrivate]);

  const data = localStorage.getItem('historyData');

  const userData = JSON.parse(data);
  console.log(userData);
  const content = (
    <main className='min-h-screen mt-[9em]'>
      <div>
        <h1 className='items-center flex justify-center text-center font-bold'>
          Transaction History
        </h1>
        <h2 className='items-center flex justify-center text-center '>
          All categories
        </h2>
      </div>

      {userData.map((data) => (
        <section className='flex flex-col mt-4'>
          <div className='flex justify-between items-center px-2'>
            {data.history_txnmode === 'withdraw' ? (
              <FaMinusCircle className=' text-[2.5em] lg:text-[3em] rounded-full lg:mt-16  text-white p-2 bg-red-600' />
            ) : (
              data.history_txnmode === '' && (
                <IoAddCircleSharp className=' text-[2.5em] lg:text-[3em] rounded-full lg:mt-16  text-white p-2 bg-green-600' />
              )
            )}
            <div className='center-with-flex'>
              <h2>{data?.history_txnmode}</h2>
              <h2>{data?.history_status}</h2>
            </div>
            <div>
              <h4 className='font-bold'>+${data?.history_amount}</h4>
              <p className='font-bold text-gray-500'>
                {data?.history_date.slice(0, 10)}
              </p>
            </div>
          </div>
        </section>
      ))}
    </main>
  );

  return content;
}
