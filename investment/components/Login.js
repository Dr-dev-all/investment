'use client';

import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { MdOutlineSecurity } from 'react-icons/md';
import { useContext, useState, useEffect, useRef } from 'react';
import { AuthProvider } from '@/app/Authprovider';
import { BiSolidError } from 'react-icons/bi';
import dotenv from 'dotenv';
import { useRouter, usePathname } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { jwtDecode } from 'jwt-decode';
import { config } from 'dotenv';

dotenv.config();

config();
export default function Login() {
  const { setAuth } = useContext(AuthProvider);

  const [userErrorData, setUserErrorData] = useState('');

  // for userouter

  // const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [serverData, setServerData] = useState(null);
  const [decodedItem, setDecodedItem] = useState('');
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

  // FORM SUBMIT HANDLER

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await fetch('https://bullharvest.com/auths/api/login', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      

      if (response.statusText !== 'OK') {

        setErrorInResponse(true);

        if (response.status === 401 || response.statusText === 'Unauthorized') {
          errorResponseData = await response.json();
          setErrorInResponse(true);
          console.log(errorResponseData);
          setServerData(errorResponseData.message);
          if (
            errorResponseData.field === 'email' &&
            errorResponseData.allFields === true &&
            errorResponseData.errorStatus === true &&
            errorResponseData.successStatus === false
          ) {
            console.log(errorResponseData);
            // console.log(serverData);
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
          }
        }
      } else if (response.ok && response.status === 200) {
        errorResponseData = await response.json();
        // console.log(errorResponseData);

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

          const token = errorResponseData.accessToken;

          const userInfo = jwtDecode(token);
          setAuth((prev) => ({ ...prev, accessToken: token, userInfo }));
          localStorage.setItem('accessToken', token);
          setDecodedItem(userInfo._id);
          // second logic

          // console.log(userInfo);
          // console.log({ info: userInfo, tk: token });
          //  if (!token) {
          //     console.log("moved backed to login");

          //     return router.push("/login");
          //   }

          // if (token) {
          if (token && userInfo.Admin === true) {
            // console.log("pushed to userdash via admin");

            return router.push('/login/adminDash');
          }

          if (token && userInfo.Admin === false) {
            // console.log("pushed to userdash via user");
            return router.push('/login/userdash');
          }
          // }
        }
      } else {
        setUserErrorData('Invalid user data recieved');
      }
    } catch (error) {
      setUserErrorData('Network error...');
    } finally {
      setLoading(true);
      reset();
    }
  };
  // END OF FORM SUBMIT HANDLER

  // GENERATE OTP FOR THE USER

  // END OF OTP GENERATOR

  const content = (
    <section className="center-with-flex min-h-[50rem] overflow-hidden w-screen">
      <div className="div-style">
        <div className="animate-pulse   w-full test-center bg-white text-[#03045e]">
          {' '}
        </div>
        <article className="center-with-flex w-[90%] mx-auto my-auto h-full ">
          <form
            className="flex flex-col justify-center items-center  w-full h-full  mx-auto"
            onSubmit={handleSubmit(onSubmit)}>
            <div>
              {/* SERVER VALIDATION ERROR DISPLAY */}
              {errorInResponse === true && (
                <h1
                  className={`bg-red-500   h-[2rem] ${
                    serverData ? 'block' : 'hidden'
                  }   text-white`}>
                  <BiSolidError className="warning-icon-style" />
                  {serverData}
                  <ToastContainer />
                </h1>
              )}

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
                  <p className="form-error-style">
                    <BiSolidError className="warning-icon-style" />
                    {errors.email.message}
                  </p>
                ) : (
                  errors.email &&
                  errors.email.type === 'pattern' && (
                    <p className="form-error-style">
                      <BiSolidError className="warning-icon-style" />
                      {errors.email?.message}
                    </p>
                  )
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
                    <BiSolidError className="warning-icon-style" />
                    {errors.password.message}
                  </p>
                ) : (
                  errors.password &&
                  errors.password.type === 'minLength' && (
                    <p className="form-error-style">
                      <BiSolidError className="warning-icon-style" />
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

              <div className=" w-full flex gap-2 flex-row px-3 justify-center items-center ">
                <hr className="w-[5rem] bg-[#03045e] p-[0.6px]" />{' '}
                <MdOutlineSecurity className="text-[#03045e] sm:text-[2rem]" />{' '}
                <hr className="w-[5rem] p-[0.6px] bg-[#03045e]" />
              </div>

              <div className=" center-with-flex flex-cols   w-full ">
                <button
                  onClick={() => {
                    notify;
                  }}
                  className=" bg-[#03045e] mx-auto w-[5rem] mt-3 shadow-xl text-white p-2 block font-bold rounded-lg">
                  Login
                </button>
                <div className="center-with-flex my-2">
                  <Link
                    href="/login/emailotp"
                    className="font-bold text-[#03045e] underline">
                    Forgot Password
                  </Link>
                </div>
                <p className="font-bold mx-auto w-[8rems]">
                  Don't have an account?{' '}
                  <Link
                    href="/register"
                    className="underline text-[1.2rem] font-bold  text-[#03045e]">
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
