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

dotenv.config();

export default function Register() {
  const [userData, setUserData] = useState({});
  const [userErrorData, setUserErrorData] = useState({});
  // const inputRef = useRef(null);
  const [serverData, setServerData] = useState({});

  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/users/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
      // console.log(response.json());

      if (!response.ok) {
        const errorResponseData = await response.json();

        if (errorResponseData.errorStatus) {
          if (errorResponseData.field === 'email') {
            setError('email', {
              type: 'server',
              message: errorResponseData.message,
            });
          } else if (errorResponseData.field === 'password') {
            setError('password', {
              type: 'server',
              message: errorResponseData.message,
            });
          } else if (errorResponseData.field === 'confirmPassword') {
            setError('confirmPassword', {
              type: 'server',
              message: errorResponseData.message,
            });
          } else if (
            errorResponseData.allFields === true &&
            errorResponseData.successStatus === false &&
            errorResponseData.errorStatus === true
          ) {
            setError('firstName', {
              type: 'server',
              messsage: errorResponseData.message,
            });
            setError('lastName', {
              type: 'server',
              messsage: errorResponseData.message,
            });
            setError('email', {
              type: 'server',
              messsage: errorResponseData.message,
            });
            setError('password', {
              type: 'server',
              messsage: errorResponseData.message,
            });
            setError('confirmPassword', {
              type: 'server',
              messsage: errorResponseData.message,
            });
          } else {
            alert('Invalid user data recieved');
          }
        }
      } else {
        const successResponse = await response.json();
        console.log(successResponse);
      }
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
          <form className='' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-1 sm:gap-3 sm:grid-cols-2'>
              <div>
                <label htmlFor='firstName' className='form-text-style'>
                  Firstname:{' '}
                </label>
                <input
                  type='text'
                  {...register('firstName', {
                    required: 'Please enter your firstname',
                    maxLength: 20,
                  })}
                  name='firstName'
                  id='firstName'
                  className='form-input-style'
                  placeholder='Eg: james'
                />
                {errors.firstName && errors.firstName.type === 'required' && (
                  <p className='form-error-style'>
                    <BiSolidError className='warning-icon-style' />
                    {errors.firstName.message}
                  </p>
                )}
                {errors.firstName && errors.firstName.type === 'maxLength' && (
                  <p className='form-error-style'>
                    <BiSolidError className='warning-icon-style' />
                    Please choose a shorter name
                  </p>
                )}
                {errors.firstName && (
                  <p className='form-error-style'>
                    <BiSolidError className='warning-icon-style' />
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                {' '}
                <label htmlFor='lastName' className='form-text-style'>
                  Lastname:{' '}
                </label>
                <input
                  {...register('lastName', {
                    required: 'Please enter your lastname',
                    maxLength: 30,
                  })}
                  type='text'
                  name='lastName'
                  id='lastName'
                  className='form-input-style'
                  placeholder='Eg: Morgan'
                />
                {errors.firstName && errors.firstName.type === 'required' && (
                  <p className='form-error-style'>
                    <BiSolidError className='warning-icon-style' />
                    {errors.lastName.message}
                  </p>
                )}
                {errors.lastName && errors.lastName.type === 'maxLength' && (
                  <p className='form-error-style'>
                    <BiSolidError className='warning-icon-style' />
                    Please choose a shorter name
                  </p>
                )}
                {errors.lastName && (
                  <p className='form-error-style'>
                    <BiSolidError className='warning-icon-style' />
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor='email' className=' form-text-style '>
                  Email:{' '}
                </label>
                <input
                  {...register('email', {
                    required: 'Please enter your email address',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    },
                  })}
                  type='text'
                  name='email'
                  id='email'
                  className='form-input-style'
                  placeholder='Eg: jamesmorgan@gmail.com'
                />
                {errors.email && errors.email.type === 'required' && (
                  <p className='form-error-style'>
                    <BiSolidError className='warning-icon-style' />
                    {errors.email.message}
                  </p>
                )}
                {errors.email && errors.email.type === 'pattern' && (
                  <p className='form-error-style'>
                    <BiSolidError className='warning-icon-style' />
                    Please enter a valid email address
                  </p>
                )}
                {errors.email && (
                  <p className='form-error-style'>
                    <BiSolidError className='warning-icon-style' />
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor='password' className='form-text-style'>
                  Password:{' '}
                </label>
                <input
                  {...register('password', {
                    required: 'Please enter your password',
                    minLength: 6,
                  })}
                  type='text'
                  name='password'
                  id='password'
                  className='form-input-style'
                  placeholder='Eg: Password123*@'
                />
                {errors.password && errors.password.type === 'required' && (
                  <p className='form-error-style'>
                    <BiSolidError className='warning-icon-style' />
                    {errors.password.message}
                  </p>
                )}
                {errors.password && errors.password.type === 'minLength' && (
                  <p className='form-error-style'>
                    <BiSolidError className='warning-icon-style' />
                    {errors.password.message}
                  </p>
                )}
                {errors.password && (
                  <p className='form-error-style'>
                    <BiSolidError className='warning-icon-style' />
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor='confirmPassword' className='form-text-style'>
                  Confirm Password:{' '}
                </label>
                <input
                  {...register('confirmPassword', {
                    required: 'Please repeat your password',
                    minLength: 6,
                  })}
                  type='text'
                  name='confirmPassword'
                  id='confirmPassword'
                  className='form-input-style'
                  placeholder='Eg: Password123*@'
                />
                {errors.confirmPassword &&
                  errors.confirmPassword.type === 'required' && (
                    <p className='form-error-style'>
                      <BiSolidError className='warning-icon-style' />
                      {errors.confirmPassword.message}
                    </p>
                  )}
                {errors.confirmPassword &&
                  errors.confirmPassword.type === 'minLength' && (
                    <p className='form-error-style'>
                      <BiSolidError className='warning-icon-style' />
                      input data must be above six (6) characters
                    </p>
                  )}
                {errors.confirmPassword && (
                  <p className='form-error-style'>
                    <BiSolidError className='warning-icon-style' />
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <div className=' w-full flex gap-2 flex-row px-3 justify-center items-center '>
                <hr className='w-[5rem] bg-[#03045e] p-[0.6px]' />{' '}
                <MdOutlineSecurity className='text-[#03045e] sm:text-[2rem]' />{' '}
                <hr className='w-[5rem] p-[0.6px] bg-[#03045e]' />
              </div>
            </div>

            <div className=' center-with-flex flex-cols   w-full '>
              <button className=' bg-[#03045e] mx-auto w-[5rem] mt-3 shadow-xl text-white p-2 block font-bold rounded-lg'>
                Register
              </button>
              <p className='font-bold mx-auto w-[8rems]'>
                Already have an account?{' '}
                <Link
                  href='/login'
                  className='underline text-[1.2rem] font-bold  text-[#03045e]'>
                  Login.
                </Link>
              </p>
            </div>
          </form>
        </article>
      </div>
    </section>
  );

  return content;
}
