"use client";
import { useState, useContext, useEffect, useRef } from "react";
import { AuthProvider } from "@/app/Authprovider";
import { headers } from "../next.config";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaMinusCircle } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaArrowUpWideShort } from "react-icons/fa6";
import Image from "next/image";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import axios from "@/lib/axios";
import BeatLoader from "react-spinners/BeatLoader";
import { FaCircle } from "react-icons/fa6";
import { PiPottedPlantFill } from "react-icons/pi";
// import { jwtDecode } from "jwt-decode";

export default function UserDashboardHeader() {
  const navBarData = [
    { name: "Home", url: "home" },
    { name: "History", url: "history" },
    { name: "Portfolio", url: "portfolio" },
    { name: "choose plan", url: "chooseplan" },
    { name: "Withdraw", url: "withdraw" },
    { name: "Logout", url: "logout" },
  ];

  const axiosPrivate = useAxiosPrivate();

  const { auth } = useContext(AuthProvider);
  const [user, setUser] = useState({});

  useEffect(() => {
    let isMounted = true;

    const controller = new AbortController();

    // console.log({ headerToken: userInfo });

    const getUser = async () => {
      // if (isMounted) {
      //   const token = localStorage.getItem("accessToken");
      //   const userInfo = jwtDecode(token);
      //   console.log(userInfo);
      //   setUser((prev) => ({ ...prev, data: userInfo }));
      // }
      try {
        const response = await axiosPrivate.get("/users/getsingleuser", {
          signal: controller.signal,
        });
        isMounted && setUser((prev) => ({ ...prev, data: response.data }));
        console.log({ serverdata: data });
      } catch (error) {
        console.log(error);
      }
    };

    getUser();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  console.log({ api_user: user });
  const content = (
    <header className=" bg-[#03045e]  w-full min-h-[3rem] text-white fixed top-0  mb-[2rem]  ">
      <section className="w-full max-h-[3rem] flex flex-row justify-between items-center  py-2 px-1">
        <div className=" mb-[0.2rem] flex flex-col justify-center items-center gap-1 h-[55%] w-[2rem]   border-2 border-white  p-1      mx-auto">
          <span className="text-white    text-center   text-[10px] ">
            Active plan:
          </span>
          <h2 className="text-[#03045e] p-1  font-bold  text-[12px]  text-center  bg-white w-full mx-auto">
            {user?.data?.plan ? user?.data?.plan : "None"}
          </h2>
        </div>
        <h1>
          Hi{" "}
          {user?.data?.firstName ? (
            user?.data?.firstName
          ) : (
            <BeatLoader
              color={{ color: "white" }}
              loading={true}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          )}{" "}
        </h1>
        <div className=" flex flex-col items-between      justify-center">
          <FaCircle
            className={`    mx-auto  text-[0.9rem] ${
              user?.data?.Active === true ? "text-green-500" : "text-red-500"
            } `}
          />
          <p className="text-white w-[97%]  mx-auto  text-[9px]"> active</p>
        </div>
        <h1>
          {" "}
          <IoNotificationsSharp />{" "}
        </h1>
      </section>
      <section>
        <hr className="w-full mb-1 mx-auto " />
        <article className="flex justify-between items-center  py-1 px-[2rem]">
          <div className="flex flex-col justify-center items-center ">
            <Link href="/login/userdash/withdraw" className="center-with-flex">
              <FaMinusCircle />
              <h1 className="  text-white mx-auto ">Withdraw</h1>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <Link
              href="/login/userdash/chooseplan"
              className="center-with-flex"
            >
              <IoAddCircleSharp className="text-[2rem]" />
              <h1 className=" text-white mx-auto ">Choose Plan</h1>
            </Link>
          </div>
        </article>
      </section>
    </header>
  );

  return content;
}
