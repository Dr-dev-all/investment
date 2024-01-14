'use client';
import { useForm } from 'react-hook-form';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { useState, useRef } from 'react';
import PuffLoader from 'react-spinners/PuffLoader';

export default function Withdraw() {
  const axiosPrivate = useAxiosPrivate();

  const [appError, setAppError] = useState('');
  const [formLoading, setFormLoading] = useState(false);
  const [dataReset, setDataReset] = useState('');
  const [walletError, setWalletError] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  // const inputRef = useRef(null);

  const checkSubmit = () => {
    if (!formLoading || !walletError || !amountError || !serverError) {
      setAppError('Success');
      setSuccessMessage(true);
    } else {
      setSuccessMessage(false);
    }
  };
  // FORM SUBMISSION
  const onSubmit = async (event) => {
    event.preventDefault();
    // console.log(data);

    const formData = new FormData(event.target);
    const mainData = Object.fromEntries(formData);

    console.log(mainData);

    if (mainData.amount === '') {
      setAmountError(true);
      return setAppError('Please enter an amount to withdraw.');
    } else if (!Number(mainData.amount)) {
      setAmountError(true);

      return setAppError('Please enter a valid amount digits.');
    } else {
      setAmountError(false);
    }

    if (mainData.wallet === '') {
      setWalletError(true);
      return setAppError('Please enter your wallet address');
    } else {
      setWalletError(false);
    }

    try {
      setFormLoading(true);
      const response = await axiosPrivate('/users/withdraw', {
        method: 'POST',
        data: JSON.stringify(mainData),
        headers: { 'Content-Type': 'application/json' },
      });
      const serverData = response.data;
      console.log({ success: serverData });
      // console.log("passing to the database");
    } catch (error) {
      console.log(error);
      if (
        error.response.status === 400 &&
        error.response.data === 'invalid-wallet-address'
      ) {
        console.log('invalid address');

        setServerError(true);
        return setAppError(`Invalid ${mainData.walletType} address`);
      } else {
        setServerError(false);
      }

      if (
        error.response.status === 400 &&
        error.response.data === 'insufficient'
      ) {
        console.log('insufficient');
        setServerError(true);
        return setAppError(`Insufficient balance.`);
      } else {
        setServerError(false);
      }

      setAmountError('');
    } finally {
      // reset();
      event.target.reset();
      setFormLoading(false);
    }
  };

  const content = (
    <section className='mt-[9rem] px-5  '>
      <h1 className='text-3xl text-center text-black  font-semibold mx-5 my-3'>
        WITHDRAWAL
      </h1>
      {serverError && appError && (
        <p className='form-error-style'>{appError}</p>
      )}

      {successMessage &&
        !serverError &&
        appError &&
        !amountError &&
        !walletError && (
          <p className='text-green-500 text-[1.2rem]'>{appError}</p>
        )}

      {formLoading ? (
        <PuffLoader />
      ) : (
        <form
          id='submitForm'
          className='mt-9 max-w-md mx-auto'
          onSubmit={onSubmit}>
          <label className='text-base ' htmlFor='amount'>
            Amount:
          </label>{' '}
          <br />
          <input
            type='text'
            name='amount'
            id='amount'
            className='block text-black  py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder='$50.00'></input>
          {amountError && appError && (
            <p className='form-error-style'>{appError}</p>
          )}
          <br />
          <div>
            <select
              type='text'
              name='walletType'
              id='walletType'
              // {...register('walletType')}
              className='mb-2 w-full  border p-2 border-gray-300 rounded-md focus:outline-none focus-border-blue-500'>
              <option value='bitcoin'>BTC</option>
              <option value='ethereum'>ETH</option>
              <option value='litecoin'>USDT</option>
            </select>
          </div>
          <label htmlFor='wallet'>Wallet Address:</label>
          <br />
          <input
            type='text'
            // ref={formRef}
            id='wallet'
            name='wallet'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'></input>
          {walletError && appError && (
            <p className='form-error-style'>{appError}</p>
          )}
          <br />
          <button
            onClick={() => {
              checkSubmit();
            }}
            type='submit'
            className='py-2.5  px-5 me-2 mb-2 text-sm font-semibold font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
            Withdraw
          </button>
        </form>
      )}
    </section>
  );

  return content;
}
