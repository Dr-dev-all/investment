'use client';
import { useForm } from 'react-hook-form';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { useState, useRef } from 'react';
import PuffLoader from 'react-spinners/PuffLoader';
import WAValidator from 'wallet-address-validator';

export default function Withdraw() {
  const axiosPrivate = useAxiosPrivate();

  const [appError, setAppError] = useState('');
  const [formLoading, setFormLoading] = useState(false);
  const [walletError, setWalletError] = useState('');
  const [amountError, setAmountError] = useState('');
  const [serverError, setServerError] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [serverData, setServerData] = useState('');

  // FORM SUBMISSION

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const mainData = Object.fromEntries(formData);

    if (mainData.amount === '') {
      return setAmountError('Please enter an amount to withdraw.');
    } else if (!Number(mainData.amount)) {
      return setAmountError('Please enter a valid digits.');
    } else {
      setAmountError('');
    }

    if (mainData.wallet === '') {
      return setWalletError('Please enter your wallet address');
    } else {
      setWalletError('');
    }

    if (WAValidator.validate(mainData.wallet, mainData.walletType)) {
      setWalletError('');
    } else {
      setWalletError(
        `Please enter a valid ${
          mainData.walletType === 'btc'
            ? 'bitcoin'
            : mainData.walletType === 'eth'
            ? 'ethereum'
            : mainData.walletType === 'usdt' && 'usdt'
        } wallet address`
      );
    }

    try {
      setFormLoading(true);
      const response = await axiosPrivate('/users/withdraw', {
        method: 'POST',
        data: JSON.stringify(mainData),
        headers: { 'Content-Type': 'application/json' },
      });
      const serverResponse = response.data;
      setServerData(serverResponse);
    } catch (error) {
      if (
        error.response.status === 400 &&
        error.response.data === 'invalid-amount-data'
      ) {
        return setServerData(`invalid amount.`);
      } else {
        setServerData('');
      }

      if (
        error.response.status === 400 &&
        error.response.data === 'insufficient'
      ) {
        return setServerData(`Insufficient balance.`);
      } else {
        setServerData('');
      }

      setAppError(error);
    } finally {
      event.target.reset();
      setFormLoading(false);
    }
  };

  const content = (
    <section className='mt-[9rem] px-5  '>
      <h1 className='text-3xl text-center text-black  font-semibold mx-5 my-3'>
        WITHDRAWAL
      </h1>
      {amountError && amountError !== '' ? (
        <p className='form-error-style'>{amountError}</p>
      ) : walletError && walletError !== '' ? (
        <p className='form-error-style'>{walletError}</p>
      ) : serverData && serverData === 'success' && serverData !== '' ? (
        <p className='text-green-500 text-[1.1rem] font-bold tracking-wide'>
          Withdrawal request submitted successfuly, please check your exchange
          wallet in few moments.
        </p>
      ) : serverData && serverData !== '' ? (
        <p className='form-error-style'>{serverData}</p>
      ) : (
        appError &&
        appError !== '' && (
          <p className='form-error-style'>
            Network error... please try again later.
          </p>
        )
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
          <br />
          <div>
            <select
              type='text'
              name='walletType'
              id='walletType'
              className='mb-2 w-full  border p-2 border-gray-300 rounded-md focus:outline-none focus-border-blue-500'>
              <option value='btc'>BTC</option>
              <option value='eth'>ETH</option>
              <option value='usdt'>USDT</option>
            </select>
          </div>
          <label htmlFor='wallet'>Wallet Address:</label>
          <br />
          <input
            type='text'
            id='wallet'
            name='wallet'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'></input>
          <br />
          <button
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
