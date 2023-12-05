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
  const [serverData, setServerData] = useState('');
  const [errorInResponse, setErrorInResponse] = useState(false);
  const [userOptions, setUserOptions] = useState({});

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
      const response = await fetch('http://127.0.0.1:5000/users/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response);

      if (response.statusCode !== 201 || !response.ok) {
        const errorResponseData = await response.json();

        console.log(errorResponseData.message);
        setErrorInResponse(!errorInResponse);

        if (
          errorResponseData.errorStatus === true &&
          errorResponseData.successStatus === false &&
          errorResponseData.allFields === false
        ) {
          if (
            errorResponseData.field === 'email' &&
            errorResponseData.errorStatus === true
          ) {
            setUserOptions(() => ({
              ...userOptions,
              dataField: errorResponseData.field,
              dataErrorStatus: errorResponseData.errorStatus,
            }));
            setServerData(errorInResponse.message);
            setError('root.serverError', {
              type: response.statusCode,
              message: errorResponseData.message,
            });
          } else if (
            errorResponseData.field === 'password' &&
            errorResponseData.errorStatus === true
          ) {
            setUserOptions(() => ({
              ...userOptions,
              dataField: errorResponseData.field,
              dataErrorStatus: errorResponseData.errorStatus,
            }));
            setServerData(errorInResponse.message);
            setError('root.serverError', {
              type: response.statusCode,
              message: errorResponseData.messages,
            });
          } else if (
            errorResponseData.field === 'confirmPassword' &&
            errorResponseData.errorStatus === true
          ) {
            setUserOptions(() => ({
              ...userOptions,
              dataField: errorResponseData.field,
              dataErrorStatus: errorResponseData.errorStatus,
            }));
            setServerData(errorInResponse.message);
            setError('root.serverError', {
              type: response.statusCode,
              message: errorResponseData.message,
            });
          } else if (
            errorResponseData.allFields === true &&
            errorResponseData.successStatus === false &&
            errorResponseData.errorStatus === true
          ) {
            setUserOptions(() => ({
              ...userOptions,
              allDataField: errorResponseData.allFields,
              dataErrorStatus: errorResponseData.errorStatus,
              dataSuccessStatus: errorResponseData.successStatus,
            }));
            setServerData(errorInResponse.message);
            setError('root.serverError', {
              type: response.statusCode,
              messsage: errorResponseData.message,
            });
          } else {
            alert('Invalid user data recieved');
          }
        }
      }

      if (response.statusCode === 201 || response.statusCode === 200) {
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
                    maxLength: 30,
                  })}
                  name='firstName'
                  id='firstName'
                  className='form-input-style'
                  placeholder='Eg: james'
                />
                {errors.firstName && errors.firstName.type === 'required' ? (
                  <p className='form-error-style'>
                    <BiSolidError className='warning-icon-style' />
                    {errors.firstName.message}
                  </p>
                ) : (
                  errors.firstName &&
                  errors.firstName.type === 'maxLength' && (
                    <p className='form-error-style'>
                      <BiSolidError className='warning-icon-style' />
                      Please choose a shorter name
                    </p>
                  )
                )}

                {/* SERVER VALIDATION ERROR DISPLAY */}
                {errorInResponse &&
                userOptions.dataField === 'firstName' &&
                userOptions.dataErrorStatus === true ? (
                  <p>{serverData}</p>
                ) : (
                  errorInResponse &&
                  userOptions.allDataField === true &&
                  userOptions.dataSuccessStatus === false &&
                  userOptions.dataErrorStatus === true && <p>{serverData}</p>
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
                {errors.firstName && errors.firstName.type === 'required' ? (
                  <p className='form-error-style'>
                    <BiSolidError className='warning-icon-style' />
                    {errors.lastName.message}
                  </p>
                ) : (
                  errors.lastName &&
                  errors.lastName.type === 'maxLength' && (
                    <p className='form-error-style'>
                      <BiSolidError className='warning-icon-style' />
                      Please choose a shorter name
                    </p>
                  )
                )}
                {/* SERVER VALIDATION ERROR DISPLAY */}
                {errorInResponse &&
                userOptions.dataField === 'lastName' &&
                userOptions.dataErrorStatus === true ? (
                  <p>{serverData}</p>
                ) : (
                  errorInResponse &&
                  userOptions.allDataField === true &&
                  userOptions.dataSuccessStatus === false &&
                  userOptions.dataErrorStatus === true && <p>{serverData}</p>
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
                      Please enter a valid email address
                    </p>
                  )
                )}

                {/* SERVER VALIDATION ERROR DISPLAY */}
                {errorInResponse &&
                userOptions.dataField === 'email' &&
                userOptions.dataErrorStatus === true ? (
                  <p>{serverData}</p>
                ) : (
                  errorInResponse &&
                  userOptions.allDataField === true &&
                  userOptions.dataSuccessStatus === false &&
                  userOptions.dataErrorStatus === true && <p>{serverData}</p>
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

              <div>
                <label htmlFor='confirmPassword' className='form-text-style'>
                  Confirm Password:{' '}
                </label>
                <input
                  {...register('confirmPassword', {
                    required: 'This field must not be empty',
                    minLength: {
                      value: 6,
                      message: ' input data must be above six (6) characters',
                    },
                    validate: (value) => value === getValues('password'),
                  })}
                  type='text'
                  name='confirmPassword'
                  id='confirmPassword'
                  className='form-input-style'
                  placeholder='Eg: Password123*@'
                />
                {errors.confirmPassword &&
                errors.confirmPassword.type === 'required' ? (
                  <p className='form-error-style'>
                    <BiSolidError className='warning-icon-style' />
                    {errors.confirmPassword.message}
                  </p>
                ) : errors.confirmPassword &&
                  errors.confirmPassword.type === 'minLength' ? (
                  <p className='form-error-style'>
                    <BiSolidError className='warning-icon-style' />
                    {errors?.confirmPassword?.message}
                  </p>
                ) : (
                  errors.confirmPassword &&
                  errors.confirmPassword.type === 'validate' && (
                    <p className='form-error-style'>
                      <BiSolidError className='warning-icon-style' />
                      Password does not match
                    </p>
                  )
                )}

                {/* SERVER VALIDATION ERROR DISPLAY */}
                {errorInResponse &&
                userOptions.dataField === 'confirmPassword' &&
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
