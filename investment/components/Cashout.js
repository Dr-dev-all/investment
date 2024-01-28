"use client";

import { useState, useEffect, useRef } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { BiSolidSquareRounded } from "react-icons/bi";
import { IoPersonAddSharp } from "react-icons/io5";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import BeatLoader from "react-spinners/BeatLoader";
import PuffLoader from "react-spinners/PuffLoader";
import copy from "clipboard-copy";
import { FaCopy } from "react-icons/fa";

export default function Userspage() {
  const axiosPrivate = useAxiosPrivate();
  const router = useRouter();
  const [appError, setAppError] = useState("");
  const effectRan = useRef(false);
  const [userData, setUserData] = useState({});
  const [mainData, setMainData] = useState({});
  const dataRender = useRef(true);
  const [userFormData, setUserFormData] = useState({});
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [acceptLoading, setAcceptLoading] = useState(false);
  const [declineLoading, setDeclineLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [serverMsg, setServerMsg] = useState({});

  let data3 = {};

  // copy address function

  const copyWallet = async (wall_addr) => {
    try {
      setIsCopied(true);
      await copy(wall_addr);
      // alert('Wallet address copied');
    } catch (error) {
      if (error) {
        alert("Unable to copy wallet address, please try again later");
      }
    } finally {
      setIsCopied(false);
    }
  };

  const declineWithdraw = async (
    historyDetails = { userId, historyId, historyAmount }
  ) => {
    // const controller = new AbortController();
    try {
      setDeclineLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/declinewithdraw/${historyDetails}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response);
      //   if (!response.ok) throw new Error("Network error, try again later");
      if (response.ok) {
        const serverMessage = await response.json();
        console.log(serverMessage);
        setServerMsg((prev) => ({ ...prev, serverRes: serverMessage }));
        // console.log("user deacivated");
      }
    } catch (error) {
      console.log(error);
      setAppError(error);
    } finally {
      setDeclineLoading(false);
      // controller.abort();
      window.location.reload();
    }
  };

  const acceptWithdraw = async (
    historyDetails = { userId, historyId, historyAmount }
  ) => {
    // const controller = new AbortController();
    try {
      setAcceptLoading(true);
      const response = await fetch.patch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/acceptwithdraw/${historyDetails}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response);
      //   if (!response.ok) throw new Error("Network error, try again later");
      if (response.ok) {
        const serverMessage = await response.json();
        console.log(serverMessage);
        setServerMsg((prev) => ({ ...prev, serverRes: serverMessage }));
        // console.log("user deacivated");
      }
    } catch (error) {
      console.log(error);
      setAppError(error);
    } finally {
      // controller.abort();
      setAcceptLoading(false);
      window.location.reload();
    }
  };

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/users/getallusers`,
          {
            // signal: controller.signal,
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const serverData = await response.json();
          localStorage.setItem("userData", JSON.stringify(serverData));
          isMounted && setUserData((prev) => ({ ...prev, data: serverData }));
        }
      } catch (error) {
        setAppError("Network error...., please try again later");
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

  const content = (
    <>
      <main className="min-h-full px-4 w-screen bg-white mt-4 mb-[4rem]">
        <section className="flex justify-between items-center p-2 bg-black rounded-full min-w-full h-[3rem]   ">
          <div className="h-full w-[90%] bg-gray-500 text-black rounded-full  px-2   mx-auto">
            <input
              placeholder="Search user"
              className="rounded-full text-black mx-auto w-full px-2 py-1"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
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
              userData?.data?.users
                .filter(
                  (d) =>
                    (d?.history?.length &&
                      d?.history.filter(
                        (da) => da.history_txnmode !== "Deposit"
                      )) ||
                    d?.history?.filter((dt) => dt.checked === false)
                )

                .map((user, i) => (
                  <li key={i}>
                    <div>
                      <div className=" bg-[#03045e] text-white rounded-[1rem]  mb-[1.2rem] p-2 shadow-gray-500 shadow-xl   min-h-[5rem]">
                        {isLoading ? (
                          <PuffLoader />
                        ) : (
                          <div>
                            <ul>
                              <li className="plan-items">
                                Firstname:{" "}
                                <span className="text-white text-center px-4   w-[70%]  mx-auto border-2 rounded-full ">
                                  {" "}
                                  {user.firstName}{" "}
                                </span>
                              </li>
                              <li className="plan-items">
                                Lastname:
                                <span className="text-white text-center px-4   w-[70%]  mx-auto border-2 rounded-full ">
                                  {" "}
                                  {user.lastName}{" "}
                                </span>
                              </li>
                              <li className="plan-items">
                                Email:
                                <span className="text-white text-center px-4   w-[90%]  mx-auto border-2 rounded-full ">
                                  {" "}
                                  {user.email}{" "}
                                </span>
                              </li>
                              <li className="plan-items">
                                Plan:
                                <span className="text-white text-center px-4   w-[70%]  mx-auto border-2 rounded-full ">
                                  {" "}
                                  {user.plan}
                                </span>
                              </li>
                              <li className="plan-items">
                                Investment:
                                <span className="text-white text-center px-4   w-[70%]  mx-auto border-2 rounded-full ">
                                  {" "}
                                  {user.investment}{" "}
                                </span>
                              </li>
                              <li className="plan-items">
                                Profit:
                                <span className="text-white text-center px-4   w-[70%]  mx-auto border-2 rounded-full ">
                                  {" "}
                                  {user.profit}{" "}
                                </span>
                              </li>
                              <li className="plan-items">
                                Loss:
                                <span className="text-white text-center px-4   w-[70%]  mx-auto border-2 rounded-full ">
                                  {user.loss}{" "}
                                </span>
                              </li>
                              {/* <li className="plan-items">
                                Balance:
                                <span className="text-white text-center px-4   w-[70%]  mx-auto border-2 rounded-full ">
                                  {user.balance}{" "}
                                </span>
                              </li> */}
                              {/* <li className="plan-items">
                                UserID:
                                <span className="text-white text-center px-4   min-w-[80%]  mx-auto border-2 rounded-full ">
                                  {user._id}
                                </span>
                              </li> */}
                              {/* <li className="plan-items">
                                status:{" "}
                                <span>
                                  {user.isActive ? (
                                    <BiSolidSquareRounded className="text-green-500 text-[1.2rem]" />
                                  ) : (
                                    <BiSolidSquareRounded className="text-red-500  text-[1.2rem]" />
                                  )}
                                </span>
                              </li> */}
                            </ul>
                          </div>
                        )}

                        {user?.history && user?.history.length && (
                          <ul className="grid grid-cols-1 gap-3 justify-center items-center  min-h-[10rem] text-white    bg-transparent mt-3">
                            {user?.history.map((data, i) => {
                              if (
                                data?.checked === false &&
                                data?.accept === false &&
                                data?.decline === false &&
                                data?.history_txnmode === "withdraw"
                              ) {
                                return (
                                  <li
                                    key={i}
                                    className="min-h-[2rem]  bg-blue-900 text-white  "
                                  >
                                    <ul className="grid grid-cols-1 gap-2    text-white  mx-auto  p-3 mb-2  rounded-[1.4rem]   bg-[#84894A]   mt-3">
                                      <li className="plan-items  text-white">
                                        Amount:
                                        <span className="text-white text-center px-4   w-[70%]  mx-auto border-2 rounded-full ">
                                          {data?.history_amount}{" "}
                                        </span>
                                      </li>

                                      <li className="plan-items  text-white">
                                        Wallet addr:
                                        <span className="text-white text-center px-2    w-[55%]  mr-auto border-2 rounded-full overflow-x-hidden">
                                          {data?.history_wallet_addr.slice(
                                            0,
                                            10
                                          )}{" "}
                                        </span>
                                      </li>

                                      <li>
                                        <button
                                          onClick={() => {
                                            copyWallet(
                                              data?.history_wallet_addr
                                            );
                                          }}
                                          className="flex justify-between items-center text-black  w-[50%] px-2 py-1  rounded-[2rem] mb-3 shadow-2xl shadow-gray-500  my-4   
                           bg-green-500 "
                                        >
                                          Copy Wallet
                                          <FaCopy />
                                        </button>
                                      </li>

                                      <li className="plan-items  text-white">
                                        Wallet type:
                                        <span className="text-white text-center px-2   w-[50%]  mx-auto border-2 rounded-full ">
                                          {data?.history_wallet_type}{" "}
                                        </span>
                                      </li>
                                      <li className="plan-items  text-white">
                                        Txn-mode:
                                        <span className="text-white text-center px-4   w-[70%]  mx-auto border-2 rounded-full ">
                                          {data?.history_txnmode}{" "}
                                        </span>
                                      </li>
                                      <li className="plan-items  text-white">
                                        Date:
                                        <span className="text-white text-center px-4   w-[70%]  mx-auto border-2 rounded-full ">
                                          {data?.history_date.slice(0, 10)}{" "}
                                        </span>
                                      </li>
                                    </ul>
                                    {/* buttons starts */}

                                    <div className="   grid grid-cols-2 gap-2 w-full ">
                                      <button
                                        onClick={() => {
                                          acceptWithdraw(
                                            user._id,
                                            data._id,
                                            data.history_amount
                                          );
                                        }}
                                        className="w-full h-full bg-green-500 text-black rounded-full shadow-white shadow-2xl shadow-inner p-1 font-bold"
                                      >
                                        {acceptLoading ? (
                                          <BeatLoader
                                            color={"blue"}
                                            // loading={isloading}
                                            // cssOverride={override}
                                            size={10}
                                            aria-label="Loading Spinner"
                                            data-testid="loader"
                                          />
                                        ) : (
                                          "Accept"
                                        )}{" "}
                                      </button>
                                      <button
                                        onClick={() => {
                                          declineWithdraw(
                                            user._id,
                                            data._id,
                                            data.history_amount
                                          );
                                        }}
                                        className="w-full h-full bg-red-500 text-black rounded-full shadow-white shadow-2xl shadow-inner p-1 font-bold"
                                      >
                                        {declineLoading ? (
                                          <BeatLoader
                                            color={"blue"}
                                            // loading={isloading}
                                            // cssOverride={override}
                                            size={10}
                                            aria-label="Loading Spinner"
                                            data-testid="loader"
                                          />
                                        ) : (
                                          "Decline"
                                        )}
                                      </button>
                                    </div>
                                    {/* buttons ends */}
                                  </li>
                                );
                              }
                            })}
                          </ul>
                        )}
                      </div>
                    </div>
                  </li>
                ))
            ) : isLoading ? (
              <ThreeCircles
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{ color: "blue" }}
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
