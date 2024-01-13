'use client';
import { useForm } from 'react-hook-form';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { useState, useEffect } from 'react';
import PuffLoader from 'react-spinners/PuffLoader';
// import useAxiosPrivate from "@/hooks/useAxiosPrivate";

export default function Withdraw() {
  const axiosPrivate = useAxiosPrivate();

  const [appError, setAppError] = useState('');
  const [user, setUser] = useState({});
  const [formLoading, setFormLoading] = useState(false);
  const [walletError, setWalletError] = useState(false);
  const [amountError, setAmountError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const controller = new AbortController();

    const getUser = async () => {
      try {
        const response = await axiosPrivate.get('/users/getsingleuser', {
          signal: controller.signal,
        });
        isMounted && setUser((prev) => ({ ...prev, data: response.data }));
        // console.log({ serverdata: data });
      } catch (error) {
        // console.log(error);
        if (error) {
          setAppError('Network error... try again later');
        }
      }
    };

    getUser();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [axiosPrivate]);

  // FORM SUBMISSION
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    mainData = Object.fromEntries(formData);

    if (mainData.amount === '') {
      setAmountError(true);
      return setAppError('Please enter an amount to withdraw');
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
      const serverData = await response.data;
    } catch (error) {
      setAppError('');
    } finally {
      event.target.reset();
      setFormLoading(false);
    }
  };

  const content = (
    <section className="mt-[8.5rem] px-5  ">
      <h1 className="text-3xl text-center font-semibold dark:text-white mx-5 my-3">
        ASK FOR WITHDRAWAL
      </h1>
      {formLoading ? (
        <PuffLoader />
      ) : (
        <form className="mt-9 max-w-md mx-auto" onSubmit={onSubmit}>
          <label className="text-base " htmlFor="amount">
            Amount:
          </label>{' '}
          <br />
          <input
            type="text"
            id="amount"
            name="amount"
            className="block text-black  py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="$50.00"></input>
          {amountError && appError && (
            <p className="form-error-style">{appError}</p>
          )}
          <br />
          <div>
            <select
              type="text"
              name="walletType"
              id="walletType"
              className="mb-2 w-full  border p-2 border-gray-300 rounded-md focus:outline-none focus-border-blue-500">
              <option value="bitcoin">BTC</option>
              <option value="ethereum">ETH</option>
              <option value="litecoin">USDT</option>
            </select>
          </div>
          <label htmlFor="wallet">Wallet Address:</label>
          <br />
          <input
            type="text"
            id="wallet"
            name="wallet"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></input>
          {walletError && appError && (
            <p className="form-error-style">{appError}</p>
          )}
          <br />
          <button
            type="submit"
            className="py-2.5  px-5 me-2 mb-2 text-sm font-semibold font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Withdraw
          </button>
        </form>
      )}
    </section>
  );

  return content;
}
