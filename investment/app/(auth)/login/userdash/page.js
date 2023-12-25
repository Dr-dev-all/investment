"use client";
import React from "react";
// import Userdash from "@/components/Userdash";
import UserDashboardHeader from "@/components/UserDashboardHeader";
import UserDashboardFooter from "@/components/UserDashboardFooter";
// import { useState, useEffect } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useContext, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
// import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { AuthProvider } from "@/app/Authprovider";
// import axios from "@/lib/axios";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
// import { useNavigate, useLocation } from "react-router-dom";
import { SymbolOverview } from "react-tradingview-widget-components";
import TradingView from "@/components/TradingView";
// import { useRouter } from "next/router";
import BeatLoader from "react-spinners/BeatLoader";
import { FaBitcoin } from "react-icons/fa";
import { SiLitecoin } from "react-icons/si";
import { SiDogecoin } from "react-icons/si";
import { FaViacoin } from "react-icons/fa6";
import { TbCoinMoneroFilled } from "react-icons/tb";
import { BiSolidDownArrow } from "react-icons/bi";
import { GiPayMoney } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { TiArrowRight } from "react-icons/ti";
import { BiSolidUpArrow } from "react-icons/bi";
import { MdVerifiedUser } from "react-icons/md";
import RotateLoader from "react-spinners/RotateLoader";

//import tradingchart

export default function page() {
  const [user, setUser] = useState({});
  const [newData, setNewData] = useState(null);
  const [appState, setAppState] = useState("");
  let effectRan = useRef(false);
  let compMount = useRef(false);
  const axiosPrivate = useAxiosPrivate();
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const [show, setShow] = useState(true);
  const [token_, setToken_] = useState(null);
  const [status, setStatus] = useState(true);
  const showContent = useRef(false);

  // navigate = useNavigate();
  // location = useLocation();

  // const { accessToken } = JSON.stringify(
  //   localStorage.getItem("accessToken")
  // );

  // if (!accessToken && pathname && !isLoading) {
  //   router.push("/");
  //   return null;
  // }

  let tokenVar = "";
  // useEffect(() => {
  //   const protectUser = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://127.0.0.1:5000/auths/getusertoken",
  //         {
  //           method: "GET",
  //           headers: { "Content-Type": "application/json" },
  //         }
  //       );

  //       const { token } = await response.json();
  //       setToken_(token);

  //       console.log(token);

  //       if (token === "" && pathname === "/login/userdash" && !isLoading) {
  //         return router.push("/");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   protectUser();

  //   return () => {};
  // }, []);

  // // console.log(token_);
  // if (isLoading && token_ === "") {
  //   // <RotateLoader />;
  //   console.log("i was called");
  //   return router.push("/login");
  // }

  // ROUTE PROTECTION

  // END OF ROUTE PROTECTION

  // getting user effect-call

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    if (effectRan.current === true) {
      const getUserData = () => {
        // checking for redirects
        let token = localStorage.getItem("accessToken");
        if (token) {
          setStatus(true);
          setToken_(token);
        }
        console.log({ parsed_token: token });
        console.log(token_);
        // end of redirection

        let userData = jwtDecode(token);
        console.log(userData);

        setNewData(userData);

        // PROTECTING ROUTE

        // if (token === null) {
        //   console.log("first check");
        //   router.push("/login");
        // }
      };

      getUserData();
    }

    return () => {
      effectRan.current = true;
      isMounted = false;
      controller.abort();
    };
  }, []);

  // if (token_ === null) {
  //   // return <RotateLoader />;
  //   return router.push("/login");
  // }

  console.log({ tk_: token_ });

  console.log({ newdata: newData });

  console.log(user);
  const content = (
    <>
      <UserDashboardHeader />{" "}
      <main className="min-h-full w-full text-[#03045e]  mt-[6.9rem]  rounded-b-lg  flex flex-col  flex-grow">
        <section className="flex justify-between  bg-[#03045e]  items-center w-full min-h-[4rem]   p-1 ">
          <div className=" center-with-flex text-[#03045e] w-[85%]  bg-white    rounded-[1rem]  text-[1.1rem] my-2 mx-2 ">
            <h1 className="flex flex-col h-[3.5rem] font-black  ">
              Total Balance:{" "}
              <span className="font-black">
                {" "}
                {newData?.Balance && newData?.Balance !== "00" ? (
                  ` $${newData?.Balance}`
                ) : isLoading ? (
                  <p className="animate-pulse  ">Loading...</p>
                ) : (
                  newData?.Balance === "00" && "$00.00"
                )}
              </span>
            </h1>
          </div>
          <div className=" center-with-flex text-[#03045e] w-[85%]  bg-white    rounded-[1rem]  text-[1.1rem] my-2 mx-2 ">
            <h1 className="flex flex-col  font-black   h-[3.5rem]">
              Investment{" "}
              <span className="font-black">
                {newData?.Investment && newData?.Investment !== "00" ? (
                  ` $${newData?.Investment}`
                ) : isLoading ? (
                  <p className="animate-pulse  ">Loading...</p>
                ) : (
                  newData?.Investment === "00" && "$00.00"
                )}
              </span>
            </h1>
          </div>
        </section>

        {/* choose plan */}
        <section className=" center-with-flex w-full min-h-full gap-3    my-2 py-2 px-3">
          <article className="flex justify-between   mb-4  bg-[#03045e] text-white  items-center w-full min-h-[6rem]  shadow-lg shadow-gray-500   border-white border-2  p-1 rounded-[2rem]">
            <div className=" center-with-flex text-[#03045e] w-[85%]  bg-white   shadow-2xl shadow-black    rounded-[1rem]  text-[1.1rem] my-2 mx-2 ">
              <h1 className="flex flex-col  font-black  h-[3.5rem]    ">
                Loss{" "}
                <span className="font-black">
                  {" "}
                  {newData?.Loss && newData?.Loss !== "00" ? (
                    ` $${newData?.Loss}`
                  ) : isLoading ? (
                    <p className="animate-pulse">Loading...</p>
                  ) : (
                    newData?.Loss === "00" && "$00.00"
                  )}
                </span>
              </h1>
            </div>
            <div className=" center-with-flex text-[#03045e] w-[85%]  bg-white   shadow-2xl shadow-black  rounded-[1rem]  text-[1.1rem] my-2 mx-2 ">
              <h1 className="flex flex-col  font-black  h-[3.5rem]">
                Profits
                <span className="font-black">
                  {newData?.Profit && newData?.Profit !== "00" ? (
                    `$${newData?.Profit}`
                  ) : isLoading ? (
                    <p className="animate-pulse  ">Loading...</p>
                  ) : (
                    newData?.Profit === "00" && "$00.00"
                  )}
                </span>
              </h1>
            </div>
          </article>
          <article className="center-with-flex text-center w-[97%] border-2 py-1 shadow-lg shadow-gray-500  mb-2 bg-white   bg-[#a0ccda]  rounded-[1rem]">
            <div className="  flex justify-between items-center h-full w-[78%]  py-2   my-2   bg-white    mx-auto    border-y-2 border-y-[#030453]">
              <GiPayMoney className="text-[1.5rem]" />
              <TiArrowRight className="animate-ping" />
              <FaMoneyBillTrendUp className="text-[1.5rem] " />
              <TiArrowRight className="animate-ping" />
              <GiMoneyStack className="text-[1.5rem]" />
              <TiArrowRight className="animate-ping" />
              <GiTakeMyMoney className="text-[1.5rem]" />
            </div>
            <div>
              <p className="text-[1.1rem] text-center font-bold ">
                Choose a plan to start your earning journey.
              </p>
            </div>
            <Link
              href="/login/userdash/chooseplan"
              className=" bg-[#03045e] rounded-[1rem]  from-85% text-[1.4rem] font-bold  text-white shadow-2xl   shadow-gray-500 p-2   "
            >
              choose plan now{" "}
              <MdArrowOutward className="inline text-[1.3rem] text-white" />
            </Link>
          </article>
        </section>

        {/* crypto section */}

        <section className="mt-4  mb-[1rem] center-with-flex w-full min-h-full  gap-3   px-3 py-3  bg-white text-white">
          <article className="center-with-flex  min-w-full   bg-[#a0ccda] rounded-[1rem]  border-2 border-white">
            <div className="w-full">
              <h4 className=" text-[#03045e]  tracking-wide  text-center  uppercase    font-bold w-[98%] mx-auto">
                {" "}
                Our trading assets
              </h4>
              <div></div>
            </div>
            <div className="flex justify-between items-center   bg-[#03045e] text-white  items-center w-full min-h-[6rem]   px-5 rounded-lg">
              <FaBitcoin className="text-[2rem]" />
              <SiLitecoin className="text-[2rem]" />
              <SiDogecoin className="text-[2rem]  " />
              <FaViacoin className="text-[2rem]" />
              <TbCoinMoneroFilled className="text-[2rem]" />
            </div>
            <div className="center-with-flex">
              <button
                onClick={() => {
                  setShow(!show);
                }}
              >
                <h2 className="flex justify-between  font-bold my-2   px-4  text-[#03045e] text-[1.2rem] border-y-2 border-y-[#03045e]  items-center w-full">
                  Why we choose them{" "}
                  {show ? (
                    <BiSolidDownArrow
                      className={`text-[#03045e] animate-bounce  ml-4`}
                    />
                  ) : (
                    <BiSolidUpArrow
                      className={`text-[#03045e] animate-bounce  ml-4`}
                    />
                  )}
                </h2>
              </button>
              <p
                className={`text-black bg-white text-center tracking-wide  p-2 border-2  shadow-lg shadow-gray-500   ${
                  show ? "hidden" : "block"
                }`}
              >
                {" "}
                There are a lot of stories of ordinary people and early
                investors who made their fortune in BTC with relatively little
                initial investment. Even the early miners are not left out as
                they earned BTC with ease
              </p>
            </div>
          </article>
        </section>

        <section className="  mb-[5rem] center-with-flex w-full    min-h-full  gap-3   px-3 py-3    text-white">
          <section className="h-[90%] w-[98%]  bg-[#16425b]">
            <section className="w-full ">
              <h3 className="uppercase w-[98%] mx-auto bg-yellow-500 text-center my-3    text-[#03045e]   text-[1.1rem] font-bold">
                Check out security updates
              </h3>
              <div className="center-with-flex   mx-[1.2rem]  rounded-full  p-2   mx-auto   w-[80%] bg-[#03045e]  ">
                <MdVerifiedUser className="text-[4rem]    w-[80%] mx-auto  text-white bg-   ]" />
              </div>
            </section>
            <section className="min-h-[5rem]   min-w-full  px-2 text-center">
              <article className="text-left   w-full  p-2   w-full  m-auto">
                <h1 className="text-center   flex justify-between items-center  text-[1rem] font-bold   w-[89%]  mx-auto">
                  Crypto security starts with internet security
                </h1>
                <p className={`text-center  tracking-wide px-1 w-full  py-2 `}>
                  One of the most important considerations in protecting
                  cryptocurrency is having overall good online security.
                </p>
              </article>
              <hr className="w-[80%] mx-auto  my-4"></hr>
              <article className="text-left     w-full  p-2    m-auto">
                <h1 className="text-center   flex justify-between items-center  text-[1rem] font-bold   w-[89%]  mx-auto">
                  Securing your seed phrase
                </h1>
                <p
                  className={`text-center  tracking-wide px-1 w-full  h-full  py-2       `}
                >
                  When it comes to crypto storage, there are a few basic
                  universal rules most crypto enthusiasts agree upon. First off,
                  don’t keep all or most of your crypto on an exchange. If your
                  crypto is left on an exchange, there’s the risk of the
                  exchange getting hacked or going bankrupt. The safest place to
                  store crypto is a non-custodial wallet like the BitPay Wallet.
                  With a non-custodial wallet, you have complete control of your
                  private keys.
                </p>
              </article>
            </section>
          </section>
        </section>
      </main>
      <UserDashboardFooter />
    </>
  );
  if (showContent.current === true) {
    console.log("show content render");
    if (token_ !== null && status === true) {
      console.log("number of renders");
      return content;
    }
    if (token_ === null && pathname === "/login/userdash") {
      console.log("checked");
      return router.push("/login");
    }
  }
  showContent.current = true;

  // }
  // }

  // compMount.current = true;
}
