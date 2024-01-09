'use client';

import { useState, useEffect, useRef } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { BiSolidSquareRounded } from 'react-icons/bi';
import { IoPersonAddSharp } from 'react-icons/io5';
import 'reactjs-popup/dist/index.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import BeatLoader from 'react-spinners/BeatLoader';
import PuffLoader from 'react-spinners/PuffLoader';

export default function Userspage() {
  const axiosPrivate = useAxiosPrivate();
  const router = useRouter();
  const [appError, setAppError] = useState('');
  const effectRan = useRef(false);
  const [userData, setUserData] = useState({});
  const [mainData, setMainData] = useState({});
  const dataRender = useRef(true);
  const [userFormData, setUserFormData] = useState({});
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activateLoading, setActivateLoading] = useState(false);
  const [deactivateLoading, setDeactivateLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  let data3 = {};

  // useEffect(() => {
  //   const fetchId = async () => {
  //     try {
  //       const { token } = await fetch(
  //         `${process.env.NEXT_PUBLIC_BASE_URL}/auths/getusertoken`,
  //         {
  //           method: 'GET',
  //           'Content-Type': 'application/json',
  //         }
  //       );
  //       if (token === 'no-token-found') {
  //         return router.push('/login');
  //       }

  //       //
  //       const userInfo = jwtDecode(token);
  //       setUserId(userInfo._id);

  //       //

  //     } catch (error) {
  //       throw new Error(error);
  //     }
  //   };

  //   fetchId();

  //   return () => {};
  // }, []);

  const activateUser = async (userID) => {
    // checking for users access token

    setAuth((prev) => ({ ...prev, accessToken: token, userInfo }));

    try {
      setActivateLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/activateuser}/${userID}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
        }
      );
      //   if (!response.ok) throw new Error("Network error, try again later");
      if (response.ok) {
        const serverMessage = await response.json();
        setServerMsg((prev) => ({ ...prev, serverRes: serverMessage }));
        // console.log("user deacivated");
      }
    } catch (error) {
      // console.log(error);
      setAppError(error);
    } finally {
      setActivateLoading(false);
      window.location.reload();
    }
  };

  const deactivateUser = async (userID) => {
    try {
      setDeactivateLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/deactivateuser/${userID}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
        }
      );
      //   if (!response.ok) throw new Error("Network error, try again later");
      if (response) {
        const serverMessage = await response.json();
        // console.log(serverMessage);
        setServerMsg((prev) => ({ ...prev, serverRes: serverMessage }));
        // console.log("user deacivated");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setDeactivateLoading(false);
      window.location.reload();
    }
  };

  const deleteUser = async (userID) => {
    try {
      setDeleteLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/deleteuser/${userID}`,
        {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        }
      );
      console.log(response);
      //   if (!response.ok) throw new Error("Network error, try again later");
      if (response) {
        const serverMessage = await response.json();
        setServerMsg((prev) => ({ ...prev, serverRes: serverMessage }));
        // console.log("user deacivated");
      }
    } catch (error) {
      console.log();
    } finally {
      setDeleteLoading(false);
      window.location.reload();
    }
  };

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axiosPrivate('/users/getallusers', {
          signal: controller.signal,
        });
        if (response.ok) {
          const serverData = await response.data;
          localStorage.setItem('userData', JSON.stringify(serverData));
          isMounted && setUserData((prev) => ({ ...prev, data: serverData }));
        }
      } catch (error) {
        setAppError('Network error...., please try again later');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [axiosPrivate]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.target);

    for (var pair of formData.entries()) {
      if (pair[0] === 'firstName') {
        data3.firstName = pair[1];
      }
      if (pair[0] === 'lastName') {
        data3.lastName = pair[1];
      }
      if (pair[0] === 'email') {
        data3.email = pair[1];
      }
      if (pair[0] === 'plan') {
        data3.plan = pair[1];
      }
      if (pair[0] === 'balance') {
        data3.balance = pair[1];
      }
      if (pair[0] === 'investment') {
        data3.investment = pair[1];
      }
      if (pair[0] === 'loss') {
        data3.loss = pair[1];
      }
      if (pair[0] === 'profit') {
        data3.profit = pair[1];
      }
      if (pair[0] === 'id') {
        data3.id = pair[1];
      }
    }

    try {
      setIsLoading(true);
      // console.log(userFormData);
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/edituser`,
        JSON.stringify(data3),

        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (response) {
        const recievedData = await response.json();
      }
    } catch (error) {
      setAppError('Network error..., please try again later');
    } finally {
      setIsLoading(false);
      window.location.reload();
    }
  };

  const content = (
    <>
      <main className="min-h-full px-4 w-screen bg-white mt-4 mb-[4rem]">
        <section className="flex justify-between items-center p-2 bg-black rounded-full min-w-full h-[3rem]   ">
          <div className="h-full w-[90%] bg-gray-500 text-black rounded-full  px-2   mx-auto">
            <input
              placeholder="Search user"
              className="rounded-full text-black mx-auto w-full px-2 py-1"
            />
          </div>
          <div className="center-with-flex">
            <button>
              <IoPersonAddSharp className="text-green-500 text-[1.3rem]" />
            </button>
          </div>
        </section>
        <section>
          <ul className="grid grid-cols-1 gap-3 justify-center items-center w-full h-full mt-3">
            {userData?.data?.users?.length && !isLoading ? (
              userData?.data?.users.map((user, i) => (
                <li key={i}>
                  <div>
                    <div className=" bg-black text-white rounded-[2rem] p-2 shadow-gray-500 shadow-xl">
                      {isLoading ? (
                        <PuffLoader />
                      ) : (
                        <form onSubmit={onSubmit}>
                          <ul>
                            <li className="plan-items">
                              Firstname:{' '}
                              <span>
                                <input
                                  type="text"
                                  name="firstName"
                                  defaultValue={user.firstName}
                                  // onChange={(e) =>
                                  //   setUserFormData((prev) => ({
                                  //     ...prev,
                                  //     firstName: e.target.value
                                  //       ? e.target.value
                                  //       : user.firstName,
                                  //   }))
                                  // }
                                  className="text-black w-full rounded-[2rem] ml-2 px-2 shadow-inner shadow-black shadow-lg "
                                />
                              </span>
                            </li>
                            <li className="plan-items">
                              Lastname:
                              <span>
                                <input
                                  type="text"
                                  name="lastName"
                                  //   value={user.lastName}
                                  defaultValue={user.lastName}
                                  // onChange={(e) =>
                                  //   setUserFormData((prev) => ({
                                  //     ...prev,
                                  //     lastName: e.target.value || user.lastName,
                                  //   }))
                                  // }
                                  className="text-black w-full rounded-[2rem] ml-2 px-2 shadow-inner shadow-black shadow-lg "
                                />
                              </span>
                            </li>
                            <li className="plan-items">
                              Email:
                              <span>
                                <input
                                  type="text"
                                  name="email"
                                  // value={user.email}
                                  defaultValue={user.email}
                                  // onChange={(e) =>
                                  //   setUserFormData((prev) => ({
                                  //     ...prev,
                                  //     email: user.email || e.target.value,
                                  //   }))
                                  // }
                                  className="text-black w-full rounded-[2rem] ml-2 px-2 shadow-inner shadow-black shadow-lg "
                                />
                              </span>
                            </li>
                            <li className="plan-items">
                              Plan:
                              <span>
                                <input
                                  type="text"
                                  name="plan"
                                  defaultValue={user.plan}
                                  // onChange={(e) =>
                                  //   setUserFormData((prev) => ({
                                  //     ...prev,
                                  //     plan: e.target.value || user.plan,
                                  //   }))
                                  // }
                                  className="text-black w-full rounded-[2rem] ml-2 px-2 shadow-inner shadow-black shadow-lg "
                                />
                              </span>
                            </li>
                            <li className="plan-items">
                              Investment:
                              <span>
                                <input
                                  type="text"
                                  name="investment"
                                  defaultValue={user.investment}
                                  // defaultValue={user.balance}
                                  // onChange={(e) =>
                                  //   setUserFormData((prev) => ({
                                  //     ...prev,
                                  //     balance: e.target.value || user.balance,
                                  //   }))
                                  // }
                                  className="text-black w-full rounded-[2rem] ml-2 px-2 shadow-inner shadow-black shadow-lg "
                                />
                              </span>
                            </li>
                            <li className="plan-items">
                              Profit:
                              <span>
                                <input
                                  type="text"
                                  name="profit"
                                  defaultValue={user.profit}
                                  // defaultValue={user.balance}
                                  // onChange={(e) =>
                                  //   setUserFormData((prev) => ({
                                  //     ...prev,
                                  //     balance: e.target.value || user.balance,
                                  //   }))
                                  // }
                                  className="text-black w-full rounded-[2rem] ml-2 px-2 shadow-inner shadow-black shadow-lg "
                                />
                              </span>
                            </li>
                            <li className="plan-items">
                              Loss:
                              <span>
                                <input
                                  type="text"
                                  name="loss"
                                  defaultValue={user.loss}
                                  // defaultValue={user.balance}
                                  // onChange={(e) =>
                                  //   setUserFormData((prev) => ({
                                  //     ...prev,
                                  //     balance: e.target.value || user.balance,
                                  //   }))
                                  // }
                                  className="text-black w-full rounded-[2rem] ml-2 px-2 shadow-inner shadow-black shadow-lg "
                                />
                              </span>
                            </li>
                            <li className="plan-items">
                              Balance:
                              <span>
                                <input
                                  type="text"
                                  name="balance"
                                  defaultValue={user.balance}
                                  // defaultValue={user.balance}
                                  // onChange={(e) =>
                                  //   setUserFormData((prev) => ({
                                  //     ...prev,
                                  //     balance: e.target.value || user.balance,
                                  //   }))
                                  // }
                                  className="text-black w-full rounded-[2rem] ml-2 px-2 shadow-inner shadow-black shadow-lg "
                                />
                              </span>
                            </li>
                            <li className="plan-items">
                              UserID:
                              <span>
                                <input
                                  type="text"
                                  name="id"
                                  defaultValue={user._id}
                                  readOnly
                                  // value={user._id}
                                  // onChange={(e) =>
                                  //   setUserFormData((prev) => ({
                                  //     ...prev,
                                  //     id: e.target.value || user.balance,
                                  //   }))
                                  // }
                                  className="text-black w-full rounded-[2rem] ml-2 px-2 shadow-inner shadow-black shadow-lg "
                                />
                              </span>
                            </li>
                            <li className="plan-items">
                              status:{' '}
                              <span>
                                {user.isActive ? (
                                  <BiSolidSquareRounded className="text-green-500 text-[1.2rem]" />
                                ) : (
                                  <BiSolidSquareRounded className="text-red-500  text-[1.2rem]" />
                                )}
                              </span>
                            </li>
                          </ul>
                          <button className="w-full h-full bg-blue-500 text-black rounded-full shadow-white shadow-2xl shadow-inner p-1 mb-3 font-bold">
                            {' '}
                            submit
                          </button>
                        </form>
                      )}
                      <div className="grid grid-cols-2 gap-2 ">
                        <button
                          onClick={() => {
                            activateUser(user._id);
                          }}
                          className="w-full h-full bg-green-500 text-black rounded-full shadow-white shadow-2xl shadow-inner p-1 font-bold">
                          {activateLoading ? (
                            <BeatLoader
                              color={'blue'}
                              // loading={isloading}
                              // cssOverride={override}
                              size={10}
                              aria-label="Loading Spinner"
                              data-testid="loader"
                            />
                          ) : (
                            'Activate'
                          )}{' '}
                        </button>
                        <button
                          onClick={() => {
                            deactivateUser(user._id);
                          }}
                          className="w-full h-full bg-red-500 text-black rounded-full shadow-white shadow-2xl shadow-inner p-1 font-bold">
                          {deactivateLoading ? (
                            <BeatLoader
                              color={'blue'}
                              // loading={isloading}
                              // cssOverride={override}
                              size={10}
                              aria-label="Loading Spinner"
                              data-testid="loader"
                            />
                          ) : (
                            'Deactivate'
                          )}
                        </button>
                        <button
                          onClick={() => {
                            deleteUser(user._id);
                          }}
                          className="w-full h-full bg-red-500 text-black rounded-full shadow-white col-span-2 shadow-2xl shadow-inner p-1 font-bold">
                          {deleteLoading ? (
                            <BeatLoader
                              color={'blue'}
                              // loading={isloading}
                              // cssOverride={override}
                              size={10}
                              aria-label="Loading Spinner"
                              data-testid="loader"
                            />
                          ) : (
                            'Delete'
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            ) : isLoading ? (
              <ThreeCircles
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{ color: 'blue' }}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor="blue"
                innerCircleColor="blue"
                middleCircleColor="blue"
              />
            ) : (
              <p>No user data was found</p>
            )}
          </ul>
        </section>
      </main>
    </>
  );
  dataRender.current = true;
  // dataRender.current === true

  return content;
}

// isLoading ? (<p>Loading...<p/>) :
