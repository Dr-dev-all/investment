'use client';
import { BsBank } from 'react-icons/bs';

export default function History() {
  const content = (
    <main className='min-h-screen mt-[7em]'>
      <div>
        <h1 className='items-center flex justify-center text-center font-bold'>
          History
        </h1>
        <h2 className='items-center flex justify-center text-center '>
          All categories
        </h2>
      </div>

      <div className='flex flex-col mt-4'>
        <div className='flex justify-between items-center px-2'>
          <BsBank className=' text-[2.5em] lg:text-[3em] rounded-full lg:mt-16  text-white p-2 bg-[#03045e]' />
          <h3>Deposit</h3>
          <h4 className='font-bold'>+$1,000.00</h4>
        </div>

        <div className='flex justify-between items-center px-2 mt-3'>
          <BsBank className=' text-[2.5em] lg:text-[3em] rounded-full lg:mt-16  text-white p-2 bg-[#03045e]' />
          <h3>Withdrawal</h3>
          <h4 className='font-bold'>+$200.00</h4>
        </div>

        <div className='flex justify-between items-center px-2 mt-3'>
          <BsBank className=' text-[2.5em] lg:text-[3em] rounded-full lg:mt-16   text-white p-2 bg-[#03045e]' />
          <h3>Withdrawal</h3>
          <h4 className='font-bold'>+$200.00</h4>
        </div>
      </div>
    </main>
  );

  return content;
}
