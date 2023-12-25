"use client";
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
import TradingView from "./TradingView";

export default function Userdash() {
  const [user, setUser] = useState({});
  const [newData, setNewData] = useState(null);
  let effectRan = useRef(false);
  const axiosPrivate = useAxiosPrivate();
  // navigate = useNavigate();
  // location = useLocation();
  const { auth } = useContext(AuthProvider);
  // localStorage.setItem("AUTH", JSON.stringify(auth));
  // const { userId } = auth;
  console.log(auth);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    console.log("useEffect display");

    const getUser = async () => {
      try {
        const response = await axiosPrivate.get("/users/getsingleuser", {
          signal: controller.signal,
        });

        isMounted && setUser((prev) => ({ ...prev, data: response.data }));
      } catch (error) {
        console.log(error);
        // navigate("/login", { state: { from: location }, replace: true });
      } finally {
      }
    };

    getUser();

    console.log("no longer mounted");

    return () => {
      effectRan.current = true;
      isMounted = false;
      controller.abort();
    };
  }, []);

  console.log(user.data);
  const content = (
    <main className="min-h-screen w-full text-[#03045e]  mt-[6.9rem]  rounded-b-lg  flex flex-col">
      <section className="flex justify-between  bg-[#03045e]  items-center w-full min-h-[4rem]   p-2 ">
        <div className=" center-with-flex  text-[#03045e] w-full h-[5rem] bg-white border-2   rounded-lg   text-[1.1rem] font-black ">
          <h1 className="flex flex-col">
            Balance{" "}
            <span>
              $ {user?.data?.balance ? user?.data?.balance : "00"} .00{" "}
            </span>
          </h1>
        </div>
        <div className="  center-with-flex  text-[#03045e] w-full  rounded-lg  border-2 bg-white h-[5rem]  font-black">
          <h1 className="flex flex-col">
            Profit <span>$00.00 </span>
          </h1>
        </div>
      </section>

      <section className="bg-red-500">
        <div className="flex justify-between  bg-[#03045e]  items-center w-full    bg-yellow-500  h-[4rem]   p-2">
          <div>
            <h1>My Balance</h1> <h2>$490,227</h2>
          </div>
          <div>
            <h1>Profit</h1>
            <p>2.3%</p> <h2>$490,227</h2>
          </div>
        </div>
      </section>
      {/* choose plan */}
      <section className=" center-with-flex w-full min-h-[5rem] gap-3">
        <article className="center-with-flex text-center w-[90%] border-2 p-3 shadow-lg shadow-gray-500 rounded-lg">
          <ul className="w-full">
            <li className="font-bold w-full  plan-items">
              Bonus amount: <span className="font-none italic "> $00.00</span>
            </li>
            <li className="font-bold w-full  plan-items">
              Yield amount: <span className="font-none italic "> $00.00</span>
            </li>
          </ul>
        </article>
        <article className="center-with-flex text-center w-[90%] border-2 p-1 shadow-lg shadow-gray-500 rounded-lg">
          <div>
            <p className="text-[1.2rem] text-center ">
              Choose a plan to start your earning journey
            </p>
          </div>
          <h1></h1>
          <Link
            href="/login/userdash/chooseplan"
            className=" bg-gradient-to-r from-[#03045e] rounded-[2rem]  from-85% text-[1.4rem] font-bold   to-white text-white shadow-lg shadow-gray-500 p-2   "
          >
            choose plan now{" "}
            <MdArrowOutward className="inline text-[1rem] text-[#03045e]" />
          </Link>
        </article>
      </section>

      <section className="w-full h-[5rem]   bg-red-full"></section>
      {/* <section className='center-with-flex min-h-[10rem] w-screen  bg-red-500 my-3 mx-auto '>
        <article className=' bg-green-500 h-[17rem] mx-auto w-[95%] '>
          <TradingView />
        </article>
      </section> */}
      {/* <section className='center-with-flex w-[95%] my-3 mx-auto  min-h-[5rem]'>
        <article className=' bg-yellow-500 w-[90%] h-full mx-auto '>
          user activity
        </article>
      </section> */}

      <div className="bg-red-500">
        <SymbolOverview />
      </div>
    </main>
  );
  return content;
  // }
  // compMount.current = true;
}
