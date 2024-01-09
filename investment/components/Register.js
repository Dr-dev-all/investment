'use client';
import Header from './Header';
import Footer from './Footer';

import { useForm } from 'react-hook-form';
import { PiSortDescending } from 'react-icons/pi';
import Link from 'next/link';
import { MdOutlineSecurity } from 'react-icons/md';
import { GoAlertFill } from 'react-icons/go';
import { useState, useEffect, useRef } from 'react';
import validator from 'validator';
import { BiSolidError } from 'react-icons/bi';
import { sendStatusCode } from 'next/dist/server/api-utils';
import { useRouter, usePathname } from 'next/navigation';
import { BiSolidDownArrow } from 'react-icons/bi';
import BeatLoader from 'react-spinners/BeatLoader';
import PuffLoader from 'react-spinners/PacmanLoader';
import copy from 'clipboard-copy';
import { GrStatusGood } from 'react-icons/gr';

export default function Register() {
  const [userData, setUserData] = useState({});
  const [userErrorData, setUserErrorData] = useState('');
  const [code, setCode] = useState('');
  const [warn, setWarn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  // const inputRef = useRef(null);
  const [serverData, setServerData] = useState(null);
  const [errorInResponse, setErrorInResponse] = useState(false);
  const [userOptions, setUserOptions] = useState({});
  const [regLoading, setRegLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [isCopied, setIscopied] = useState(false);

  // triggers clipboard copy
  const copyWallet = async (sec_key) => {
    try {
      setIscopied(true);
      await copy(sec_key);
      // alert('Wallet address copied');
    } catch (error) {
      if (error) {
        alert('Unable to copy wallet address, please try again later');
      }
    } finally {
      setIscopied(false);
    }
  };

  let errorResponseData;

  const generateCode = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/otp/generatecode`
      );
      const { code } = await response.json();
      setCode(code);
      // console.log(code);
    } catch (error) {
      // console.log(error);
      throw new Error('Error occured, try again later');
    } finally {
      setIsLoading(false);
    }
  };

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
      setRegLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/register`,
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        }
      );
      console.log(response);

      if (!response.ok) {
        // HANDLING 409

        setErrorInResponse(!errorInResponse);
        if (response.status === 409 || response.statusText === 'Conflict') {
          errorResponseData = await response.json();
          if (
            errorResponseData.field === 'email' &&
            errorResponseData.errorStatus === true &&
            errorResponseData.successStatus === false
          ) {
            setServerData(errorResponseData.message);
            // console.log(errorResponseData.message);

            setUserOptions(() => ({
              ...userOptions,
              dataField: errorResponseData.field,
              dataErrorStatus: errorResponseData.errorStatus,
            }));
          }
        }

        // HANDLING 400

        if (response.status === 400 || response.statusText === 'Bad request') {
          errorResponseData = await response.json();
          if (
            errorResponseData.field === 'email' &&
            errorResponseData.errorStatus === true &&
            errorResponseData.successStatus === false
          ) {
            setServerData(errorResponseData.message);
            console.log(errorResponseData.message);
            setUserOptions(() => ({
              ...userOptions,
              dataField: errorResponseData.field,
              dataErrorStatus: errorResponseData.errorStatus,
            }));
          }
        }

        if (response.status === 400 || response.statusText === 'Bad request') {
          errorResponseData = await response.json();
          if (
            errorResponseData.field === 'password' &&
            errorResponseData.errorStatus === true &&
            errorResponseData.successStatus === false
          ) {
            setServerData(errorResponseData.message);
            setUserOptions(() => ({
              ...userOptions,
              dataField: errorResponseData.field,
              dataErrorStatus: errorResponseData.errorStatus,
            }));
          }
        }

        if (response.status === 400 || response.statusText === 'Bad request') {
          errorResponseData = await response.json();
          if (
            errorResponseData.field === 'confirmPassword' &&
            errorResponseData.errorStatus === true &&
            errorResponseData.successStatus === false
          ) {
            setServerData(errorResponseData.message);
            setUserOptions(() => ({
              ...userOptions,
              dataField: errorResponseData.field,
              dataErrorStatus: errorResponseData.errorStatus,
            }));
          }
        }
      } else if (
        response.ok &&
        response.status === 201 &&
        response.statusText === 'Created'
      ) {
        errorResponseData = await response.json();
        console.log(errorResponseData);
        if (
          errorResponseData.errorStatus === false &&
          errorResponseData.successStatus === true
        ) {
          setServerData(null);
          setUserOptions(() => ({
            ...userOptions,
            dataField: errorResponseData.field,
            dataErrorStatus: errorResponseData.errorStatus,
          }));

          // const userInfo = jwtDecode(token);
          // setUserId(userInfo._id);

          router.push('/login');
        }
      } else {
        router.push(`/login`);
      }

      // isSubmitted || (isSubmitSuccessful && setServerData(null));
    } catch (error) {
      // console.log(error);
      throw new Error('Network error, try again later');
    } finally {
      setRegLoading(false);
      reset();
    }
  };

  const content = (
    <section className="flex flex-col justify-between items-center min-h-screen    w-screen">
      <div className="div-style min-h-full">
        <article className="center-with-flex w-[90%] mx-auto my-auto min-h-full ">
          <div className=" w-ful  mt-[2rem]">
            <label htmlFor="code1" className="form-text-style   text-white">
              Generate Secret key
            </label>

            <div className="flex justify-between items-center">
              <input
                {...register('code1')}
                className="form-input-style"
                type="text"
                name="code1"
                id="code1"
                defaultValue={code}
                placeholder=""
              />
              <button
                className={`${isCopied ? 'bg-green-500' : 'bg-red-500'}`}
                onClick={() => {
                  copyWallet(code);
                }}>
                {isCopied && isCopied !== ''
                  ? `Copied ${(<GrStatusGood className="inline text-white" />)}`
                  : 'Copy Secret key'}
              </button>
            </div>

            <button
              onClick={() => {
                generateCode();
              }}
              className="bg-green-700  text-[1.1rem]   py-1  font-bold text-white my-1 mx-auto    w-[90%] md:w-[20rem]  md:mx-auto mx-auto    px-2 shadow-2xl shadow-gray-500  rounded-[2rem]">
              {isLoading ? (
                <BeatLoader
                  color={'blue'}
                  // loading={isloading}
                  // cssOverride={override}
                  size={10}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                'Generate Secret Keys'
              )}
            </button>
          </div>

          <div>
            <button
              onClick={() => {
                setWarn(!warn);
              }}
              className="bg-yellow-500 font-bold  px-2 shadow-2xl  w-full  h-[2rem] mx-auto   shadow-gray-500">
              security alert
              <BiSolidDownArrow className="inline ml-3" />
            </button>
            <p
              className={`${
                warn
                  ? 'hidden'
                  : 'block text-center z-10  w-[97%] mx-auto bg-white text-black  border-2'
              }`}>
              This has been mentioned already, but it doesn’t hurt to be
              thorough: anyone who has your secret keys can remove tokens from
              your accounts. Never share your Secret keys with anyone — not even
              the BullHarvest team, even though we will never ask you for this
              information. If anyone claims to be a BullHarvest team member and
              asks you for this information, please report them immediately
              using our official support channels.
            </p>
          </div>

          {regLoading ? (
            <PuffLoader
              color={'blue'}
              // loading={isloading}
              // cssOverride={override}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 sm:gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="form-text-style">
                    Firstname:{' '}
                  </label>
                  <input
                    type="text"
                    {...register('firstName', {
                      required: 'Please enter your firstname',
                      maxLength: 30,
                    })}
                    name="firstName"
                    id="firstName"
                    className="form-input-style"
                    placeholder="Eg: james"
                  />
                  {errors.firstName && errors.firstName.type === 'required' ? (
                    <p className="form-error-style">
                      {errors.firstName.message}
                    </p>
                  ) : (
                    errors.firstName &&
                    errors.firstName.type === 'maxLength' && (
                      <p className="form-error-style">
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
                  <label htmlFor="lastName" className="form-text-style">
                    Lastname:{' '}
                  </label>
                  <input
                    {...register('lastName', {
                      required: 'Please enter your lastname',
                      maxLength: 30,
                    })}
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="form-input-style"
                    placeholder="Eg: Morgan"
                  />
                  {errors.firstName && errors.firstName.type === 'required' ? (
                    <p className="form-error-style">
                      {errors.lastName.message}
                    </p>
                  ) : errors.lastName &&
                    errors.lastName.type === 'maxLength' ? (
                    <p className="form-error-style">
                      Please choose a shorter name
                    </p>
                  ) : (
                    <h1>{serverData}</h1>
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
                  <label htmlFor="email" className=" form-text-style ">
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
                    type="text"
                    name="email"
                    id="email"
                    className="form-input-style"
                    placeholder="Eg: jamesmorgan@gmail.com"
                  />
                  {errors.email && errors.email.type === 'required' ? (
                    <p className="form-error-style">{errors.email.message}</p>
                  ) : (
                    errors.email &&
                    errors.email.type === 'pattern' && (
                      <p className="form-error-style">
                        {errors.email?.message}
                      </p>
                    )
                  )}

                  {/* SERVER VALIDATION ERROR DISPLAY */}
                  {errorInResponse &&
                  userOptions.dataField === 'email' &&
                  userOptions.dataErrorStatus === true ? (
                    <p
                      className={`form-error-style ${
                        serverData === null ? 'hidden' : 'block'
                      }`}>
                      {serverData}
                    </p>
                  ) : (
                    errorInResponse &&
                    userOptions.allDataField === true &&
                    userOptions.dataSuccessStatus === false &&
                    userOptions.dataErrorStatus === true && <p>{serverData}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="password" className="form-text-style">
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
                    type="text"
                    name="password"
                    id="password"
                    className="form-input-style"
                    placeholder="Eg: Password123*@"
                  />
                  {errors.password && errors.password.type === 'required' ? (
                    <p className="form-error-style">
                      {errors.password.message}
                    </p>
                  ) : (
                    errors.password &&
                    errors.password.type === 'minLength' && (
                      <p className="form-error-style">
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
                  <label htmlFor="confirmPassword" className="form-text-style">
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
                    type="text"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="form-input-style"
                    placeholder="Eg: Password123*@"
                  />
                  {errors.confirmPassword &&
                  errors.confirmPassword.type === 'required' ? (
                    <p className="form-error-style">
                      {errors.confirmPassword.message}
                    </p>
                  ) : errors.confirmPassword &&
                    errors.confirmPassword.type === 'minLength' ? (
                    <p className="form-error-style">
                      {errors?.confirmPassword?.message}
                    </p>
                  ) : (
                    errors.confirmPassword &&
                    errors.confirmPassword.type === 'validate' && (
                      <p className="form-error-style">
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

                <div className="">
                  <label htmlFor="code" className="form-text-style">
                    Paste your generated key here/ use your own key:
                  </label>
                  <input
                    {...register('code', {
                      required: 'Secret code must provided',
                      validate: (value) => {
                        value.length === 15 || ~value.toUpperCase;
                      },
                    })}
                    type="text"
                    name="code"
                    id="code"
                    className="form-input-style"
                    placeholder="Generated code"
                  />
                </div>
                {errors.code && errors.code.type === 'required' && (
                  <p className="form-error-style">
                    {errors.confirmPassword.message}
                  </p>
                )}

                <div className=" w-full flex gap-2 flex-row px-3 justify-center items-center ">
                  <hr className="w-[5rem] bg-[#03045e] p-[0.6px]" />{' '}
                  <MdOutlineSecurity className="text-[#03045e] sm:text-[2rem]" />{' '}
                  <hr className="w-[5rem] p-[0.6px] bg-[#03045e]" />
                </div>
              </div>

              <div className=" center-with-flex flex-cols   w-full ">
                <button
                  onClick={() => {}}
                  className=" bg-[#03045e] mx-auto w-[5rem] mt-3 shadow-xl text-white p-2  block font-bold rounded-lg">
                  Register
                </button>
                <p className="font-bold mx-auto w-[8rems]">
                  Already have an account?{' '}
                  <Link
                    href="/login"
                    className="underline text-[1.2rem] font-bold  text-[#03045e]">
                    Login.
                  </Link>
                </p>
              </div>
            </form>
          )}
        </article>
      </div>
    </section>
  );

  return content;
}
