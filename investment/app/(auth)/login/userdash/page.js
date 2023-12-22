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

//import tradingchart

export default function page() {
  const [user, setUser] = useState({});
  const [newData, setNewData] = useState(null);
  const [appState, setAppState] = useState("");
  let effectRan = useRef(false);
  let compMount = useRef(false);
  const axiosPrivate = useAxiosPrivate();
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [show, setShow] = useState(false);

  // navigate = useNavigate();
  // location = useLocation();
  const { auth } = useContext(AuthProvider);
  // localStorage.setItem("AUTH", JSON.stringify(auth));
  // const { userId } = auth;
  console.log(auth);
  // const router = useRouter(west);

  // const router = useRouter();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    console.log("useEffect display");

    if (effectRan.current === true) {
      const getUser = async () => {
        setIsLoading(true);
        try {
          const response = await axiosPrivate.get("/users/getsingleuser", {
            signal: controller.signal,
          });

          // localStorage.setItem("serverRes", JSON.stringify(response?.data));
          setUser((prev) => ({ ...prev, data: response.data }));
        } catch (error) {
          console.log(error);
          // navigate("/login", { state: { from: location }, replace: true });
        } finally {
          // Router.reload();
          console.log("reload");
          // router.reload();
          setIsLoading(false);
        }
      };

      getUser();
    }
    return () => {
      effectRan.current = true;
      isMounted = false;
      controller.abort();
    };
  }, []);

  console.log(user);

  console.log(pathname);
  const content = (
    <>
      <UserDashboardHeader />{" "}
      <main className="min-h-full w-full text-[#03045e]  mt-[6.9rem]  rounded-b-lg  flex flex-col  flex-grow">
        <section className="flex justify-between  bg-[#03045e]  items-center w-full min-h-[4rem]   p-1 ">
          <div className=" center-with-flex text-[#03045e] w-[85%]  bg-white    rounded-[1rem]  text-[1.1rem] my-2 mx-2 ">
            <h1 className="flex flex-col  font-black">
              Balance{" "}
              <span className="font-black">
                {" "}
                {user?.data?.balance && user?.data?.balance !== "00" ? (
                  user?.data?.balance
                ) : isLoading ? (
                  <p>Loading...</p>
                ) : (
                  user?.data?.balance === "00" && "$00.00"
                )}
              </span>
            </h1>
          </div>
          <div className=" center-with-flex text-[#03045e] w-[85%]  bg-white    rounded-[1rem]  text-[1.1rem] my-2 mx-2 ">
            <h1 className="flex flex-col  font-black">
              Input <span className="font-black">$00.00 </span>
            </h1>
          </div>
        </section>

        {/* choose plan */}
        <section className=" center-with-flex w-full min-h-full gap-3    my-2 py-2 px-3">
          <article className="flex justify-between   mb-4  bg-[#03045e] text-white  items-center w-full min-h-[6rem]  shadow-lg shadow-gray-500   border-white border-2  p-1 rounded-[2rem]">
            <div className=" center-with-flex text-[#03045e] w-[85%]  bg-white   shadow-2xl shadow-black    rounded-[1rem]  text-[1.1rem] my-2 mx-2 ">
              <h1 className="flex flex-col  font-black">
                Loss{" "}
                <span className="font-black">
                  {" "}
                  {user?.data?.balance && user?.data?.balance !== "00" ? (
                    user?.data?.balance
                  ) : isLoading ? (
                    <p>Loading...</p>
                  ) : (
                    user?.data?.balance === "00" && "$00.00"
                  )}
                </span>
              </h1>
            </div>
            <div className=" center-with-flex text-[#03045e] w-[85%]  bg-white   shadow-2xl shadow-black  rounded-[1rem]  text-[1.1rem] my-2 mx-2 ">
              <h1 className="flex flex-col  font-black">
                Yield<span className="font-black">$00.00 </span>
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

        <section className="mt-4  mb-[5rem] center-with-flex w-full min-h-full  gap-3   px-3 py-3  bg-white text-white">
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

        <section className="min-h-[5rem]   min-w-full  px-2 text-center ">
          <article className="text-left  border-2  w-full  p-2    m-auto">
            <h1 className="text-center  text-[1rem] font-bold">
              Crypto security starts with internet security
            </h1>
            <p className="text-center  tracking-wide px-1 w-full">
              One of the most important considerations in protecting
              cryptocurrency is having overall good online security.
            </p>
          </article>
          <article className="text-left  border-2  w-full  p-2    m-auto">
            <h1 className="text-center  text-[1rem] font-bold">
              Securing your seed phrase
            </h1>
            <p className="text-center  tracking-wide px-1 w-full">
              When it comes to crypto storage, there are a few basic universal
              rules most crypto enthusiasts agree upon. First off, don’t keep
              all or most of your crypto on an exchange. If your crypto is left
              on an exchange, there’s the risk of the exchange getting hacked or
              going bankrupt. The safest place to store crypto is a
              non-custodial wallet like the BitPay Wallet. With a non-custodial
              wallet, you have complete control of your private keys.
            </p>
          </article>
          <article className="text-left  border-2  w-full  p-2    m-auto">
            <h1 className="text-center  text-[1rem] font-bold">
              Crypto wallet security best practices
            </h1>
            <p className="text-center  tracking-wide px-1 w-full">
              One of the most important considerations for managing your crypto
              is properly storing your seed phrase, which is also commonly
              referred to as a recovery phrase. Your twelve word phrase allows
              you to recover your crypto on another device. Therefore, it’s
              extremely important that you keep store your security phrase
              properly, and that no one else can access it.
            </p>
          </article>
          <article className="text-left  border-2  w-full  p-2    m-auto">
            <h1 className="text-center  text-[1rem] font-bold">
              Use good passwords
            </h1>
            <p className="text-center  tracking-wide px-1 w-full">
              The first rule in internet security - have good passwords. Good
              passwords are lengthy, complex and hard-to-guess. The longer, the
              better. Find this challenging? Probably because it is.
            </p>
          </article>
          <article className="text-left  border-2  w-full  p-2    m-auto">
            <h2 className="text-center  text-[1rem] font-bold">
              Have a password manager
            </h2>
            <p className="text-center  tracking-wide px-1 w-full">
              {" "}
              Bitwarden is a good one. Most password managers offer the option
              of generating random passwords which are complete gibberish. If
              you have a good password manager and can make sure to remember the
              one password to unlock the manager, you won’t need to worry that
              you haven’t a clue what your other passwords are.
            </p>
          </article>

          <article className="text-left  border-2  w-full  p-2    m-auto">
            <h1 className="text-center  text-[1rem] font-bold">
              don’t reuse the same password
            </h1>
            <p className="text-center  tracking-wide px-1 w-full">
              across multiple sites. If one gets compromised, and your username
              is simply your email or something common such as First Initial,
              Last Name, a hacker can easily go down the list and get access to
              your information on other websites, including credit cards and
              addresses. Which brings up the next point….
            </p>
          </article>

          <article className="text-left  border-2  w-full  p-2    m-auto">
            <h1 className="text-center  text-[1rem] font-bold">
              advise against storing your passwords in a browser
            </h1>
            <p className="text-center  tracking-wide px-1 w-full">
              (such as allowing Google chrome to remember your password). If
              someone gets access to your device, your passwords are easily
              available. Having your passwords in only one place (password
              manager) is more secure. Although it might not make things easier,
              it’s advisable to not store your credit card information on
              websites. Should the website get compromised, hackers can get
              access. Additionally, never type your credit card information into
              a website that isn’t encrypted - in other words - doesn’t start
              with ‘https
            </p>
            <p className="text-center  tracking-wide px-1 w-full">
              If you want to be extra careful when it comes to credit cards, as
              well as other very sensitive information, some will advise to turn
              off potential ‘listening’ devices (such as Alexa or Echo, or if
              you’re feeling skeptical, anything with the Facebook app
              installed) for an extra layer of protection.
            </p>
          </article>
          <article className="text-left  border-2  w-full  p-2    m-auto">
            <h1 className="text-center  text-[1rem] font-bold">
              Overall Security
            </h1>
            <p className="text-center  tracking-wide px-1 w-full">
              Overall, when it comes to cybersecurity and securing your crypto,
              the single most important thing is to always be alert and
              diligent. Hackers are perpetually becoming more and more
              sophisticated, especially in the crypto space. There’s always a
              new scam, and no one wants to be patient zero. Using secure buying
              and storage tools, in addition to being security-minded and having
              overall good security practices in place across the board, are
              essential for crypto holders.
            </p>
          </article>
        </section>
      </main>
      <UserDashboardFooter />
    </>
  );

  if (user?.data?.active === false && pathname === "/login/userdash") {
    router.push("/login");
  } else {
    return content;
  }
  // }

  // compMount.current = true;
}
