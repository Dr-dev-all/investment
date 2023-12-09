'use client';
import Header from './Header';
import Footer from './Footer';
import { userRegisterSchema } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { PiSortDescending } from 'react-icons/pi';
import Link from 'next/link';
import { MdOutlineSecurity } from 'react-icons/md';
import { GoAlertFill } from 'react-icons/go';
import { useState, useEffect, useRef } from 'react';
import validator from 'validator';
import { BiSolidError } from 'react-icons/bi';
import dotenv from 'dotenv';
import { sendStatusCode } from 'next/dist/server/api-utils';
import { useRouter, usePathname } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
dotenv.config();

export default function Register() {
  const [userErrorData, setUserErrorData] = useState('');
  // const inputRef = useRef(null);
  const [serverData, setServerData] = useState(null);
  const [errorInResponse, setErrorInResponse] = useState(false);
  const [userOptions, setUserOptions] = useState({});
  const router = useRouter();
  const pathname = usePathname();
  let errorResponseData;
  let notify;

  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    reset,
    getValues,
    formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/auths/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response);

      if (!response.ok) {
        // HANDLING 409

        setErrorInResponse(true);

        if (response.status === 401 || response.statusText === 'Unauthorized') {
          errorResponseData = await response.json();
          setErrorInResponse(true);
          console.log(errorResponseData);
          setServerData(errorResponseData.message);
          notify = () => toast(errorInResponse.message);
          if (
            errorResponseData.field === 'email' &&
            errorResponseData.allFields === true &&
            errorResponseData.errorStatus === true &&
            errorResponseData.successStatus === false
          ) {
            console.log(errorResponseData);
            console.log(serverData);
            setUserOptions(() => ({
              ...userOptions,
              dataField: errorResponseData.field,
              dataErrorStatus: errorResponseData.errorStatus,
              dataSuccessStatus: errorResponseData.successStatus,
              allDataField: errorResponseData.allFields,
            }));
            console.log(serverData);
          }

          if (
            errorResponseData.field === 'password' &&
            errorResponseData.errorStatus === true &&
            errorResponseData.successStatus === false &&
            errorResponseData.allFields === true
          ) {
            setUserOptions(() => ({
              ...userOptions,
              dataField: errorResponseData.field,
              dataErrorStatus: errorResponseData.errorStatus,
              dataErrorStatus: errorResponseData.successStatus,
              allDataField: errorResponseData.allFields,
            }));
            console.log(serverData);
          }
        }
      } else if (response.ok && response.status === 200) {
        errorResponseData = await response.json();
        console.log(errorResponseData);

        if (
          errorResponseData.errorStatus === false &&
          errorResponseData.successStatus === true &&
          errorResponseData.allFields === true
        ) {
          setUserOptions(() => ({
            ...userOptions,
            dataField: errorResponseData.field,
            dataErrorStatus: errorResponseData.errorStatus,
          }));

          router.push('/login/userdash');
        }
      } else {
        router.push(`/${pathname}`);
        setUserErrorData('Invalid user data recieved');
      }

      // isSubmitted || (isSubmitSuccessful && setServerData(null));
    } catch (error) {
      console.log(error);
    } finally {
      reset();
    }
  };

  const content = (
    <section className='center-with-flex min-h-[50rem] overflow-hidden w-screen'>
      <div className='div-style'>
        <article className='center-with-flex w-[90%] mx-auto my-auto h-full '>
          <form
            className='flex flex-col justify-center items-center  w-full h-full  mx-auto'
            onSubmit={handleSubmit(onSubmit)}>
            <div>
              {/* SERVER VALIDATION ERROR DISPLAY */}
              {errorInResponse === true && (
                <h1
                  className={`bg-red-500   h-[2rem] ${
                    serverData ? 'block' : 'hidden'
                  }   text-white`}>
                  <BiSolidError className='warning-icon-style' />
                  {serverData}
                  <ToastContainer />
                </h1>
              )}

              <div>
                <label htmlFor='email' className=' form-text-style '>
                  Email:{' '}
                </label>
                <input
                  {...register('email', {
                    required: 'Please enter your email address',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'invalid email address',
                    },
                  })}
                  type='text'
                  name='email'
                  id='email'
                  className='form-input-style'
                  placeholder='Eg: jamesmorgan@gmail.com'
                />
                {errors.email && errors.email.type === 'required' ? (
                  <p className='form-error-style'>
                    <BiSolidError className='warning-icon-style' />
                    {errors.email.message}
                  </p>
                ) : (
                  errors.email &&
                  errors.email.type === 'pattern' && (
                    <p className='form-error-style'>
                      <BiSolidError className='warning-icon-style' />
                      {errors.email?.message}
                    </p>
                  )
                )}
              </div>

              <div>
                <label htmlFor='password' className='form-text-style'>
                  Password:{' '}
                </label>
                <input
                  {...register('password', {
                    required: 'Please enter your password',
                    minLength: {
                      value: 6,
                      message: 'Password must be above six characters',
                    },
                  })}
                  type='text'
                  name='password'
                  id='password'
                  className='form-input-style'
                  placeholder='Eg: Password123*@'
                />
                {errors.password && errors.password.type === 'required' ? (
                  <p className='form-error-style'>
                    <BiSolidError className='warning-icon-style' />
                    {errors.password.message}
                  </p>
                ) : (
                  errors.password &&
                  errors.password.type === 'minLength' && (
                    <p className='form-error-style'>
                      <BiSolidError className='warning-icon-style' />
                      {errors.password.message}
                    </p>
                  )
                )}

                {/* SERVER VALIDATION ERROR DISPLAY */}
                {errorInResponse &&
                userOptions.dataField === 'password' &&
                userOptions.dataErrorStatus === true ? (
                  <p>{serverData}</p>
                ) : (
                  errorInResponse &&
                  userOptions.allDataField === true &&
                  userOptions.dataSuccessStatus === false &&
                  userOptions.dataErrorStatus === true && <p>{serverData}</p>
                )}
              </div>

              <div className=' w-full flex gap-2 flex-row px-3 justify-center items-center '>
                <hr className='w-[5rem] bg-[#03045e] p-[0.6px]' />{' '}
                <MdOutlineSecurity className='text-[#03045e] sm:text-[2rem]' />{' '}
                <hr className='w-[5rem] p-[0.6px] bg-[#03045e]' />
              </div>

              <div className=' center-with-flex flex-cols   w-full '>
                <button
                  onClick={() => {
                    notify;
                  }}
                  className=' bg-[#03045e] mx-auto w-[5rem] mt-3 shadow-xl text-white p-2 block font-bold rounded-lg'>
                  Login
                </button>
                <p className='font-bold mx-auto w-[8rems]'>
                  Don't have an account?{' '}
                  <Link
                    href='/register'
                    className='underline text-[1.2rem] font-bold  text-[#03045e]'>
                    signup.
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </article>
      </div>
    </section>
  );

  return content;
}