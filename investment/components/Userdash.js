"use client";
import { FaBell } from "react-icons/fa6";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Setting from "@/components/Setting";
import Learn from "@/components/Learn";
import History from "@/components/History";
import Help from "@/components/Help";
import Logout from "@/components/Logout";
import Landing from "@/components/Landing";
import ChoosePlan from "@/components/ChoosePlan";
import Withdraw from "@/components/Withdraw";
import { useState, useEffect } from "react";

export default function Userdash() {
  const router = useRouter();
  const [currentData, setCurrentData] = useState("");
  const [mainComp, setMainComp] = useState("");
  const [choosePlan, setChoosePlan] = useState(false);
  const userSideBar = [
    { name: "Home", url: "/", id: 1, pager: "" },
    { name: "Dashboard", url: "./dashboard", id: 2, pager: "dash" },
    { name: "History", url: "./history", id: 3, pager: History },
    { name: "Learn", url: "./learn", id: 6, pager: Learn },
    { name: "Logout", url: "./logout", id: 7, pager: Logout },
    { name: "", url: "./chooseplan", id: 8, pager: ChoosePlan },
    { name: "", url: "./withdraw", id: 9, pager: Withdraw },
  ];

  const planCaller = () => {
    const data = userSideBar
      .map((dt) => dt)
      .filter((dt2) => dt2.id === 8)[0].pager;
    setCurrentData(data);
  };

  const withdrawCaller = () => {
    const data = userSideBar
      .map((dt) => dt)
      .filter((dt2) => dt2.id === 9)[0].pager;
    setCurrentData(data);
  };

  const dashBoard = (
    <div className="parent p-1">
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white p-4 rounded-lg">
          <h3>Total Bal</h3>
          <h1 className="font-bold">$50.00</h1>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h3>Profits</h3>
          <h1 className="font-bold">$0.00</h1>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h3>Investment Yield</h3>
          <h1 className="font-bold">$0.00</h1>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h3>Bonus</h3>
          <h1 className="font-bold">$50.00</h1>
        </div>
      </div>

      <div className="gap-3">
        <button
          onClick={() => {
            withdrawCaller();
          }}
          className="mr-3 mt-3 bg-white text-black font-bold py-2 px-4 rounded"
        >
          Withdraw
        </button>
        <button
          onClick={() => {
            planCaller();
          }}
          className="mt-3 bg-white text-black font-bold py-2 px-4 rounded"
        >
          Choose Plan
        </button>
      </div>

      <div className="grid grid-cols-1 mt-4">
        <div className="bg-white p-3 col-span-2 text-center">
          <p>Why you should upgrade</p>
          <button className="mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Upgrade
          </button>
        </div>
      </div>

      {/* <div className='grid grid-cols-2 gap-2 mt-4'>
        <div className='bg-white p-1 text-center'>
          <h2>Unique Invest</h2>
          <p>Why one should invest</p>
          <button className='mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
            Upgrade
          </button>
        </div>
        <div className='bg-white p-2 text-center'>
          loleydkkkk bhhhdbdb bdbdb bb bdbdbd bdbd
        </div>
      </div> */}
    </div>
  );

  useEffect(() => {
    const chooseItem = () => {
      userSideBar.map((data) => {
        var active = Object.values(data).filter((e) => e === currentData)[0];
        if (currentData) {
          if (currentData === "dash") {
            setMainComp(dashBoard);
          } else {
            setMainComp(currentData);
          }
        } else {
          setMainComp(dashBoard);
        }
      });
    };

    chooseItem();
  }, [currentData]);

  const content = (
    <section className="h-screen z-0 w-screen">
      <header className="center-with-grid  w-full min-h-[5rem] bg-green-500">
        {" "}
        <div className=" flex flex-row  justify-between items-center px-3  min-h-[5rem] bg-green-500">
          <div className="center-with-flex p-3 border-2 border-black  rounded-full  h-[3rem]">
            <h1>USER PLAN</h1>
          </div>
          <div>
            <p>Hi james</p>
            <p>Active: </p>
          </div>
          <div>
            <FaBell />
          </div>
        </div>
      </header>
      <section className="flex   max-h-full w-full">
        <article className=" text-center p3 w-[30%] min-h-[31rem] bg-blue-500">
          <ul>
            {userSideBar.map((sideData) => (
              <li
                key={sideData.id}
                className="text-start ml-3 mb-6 md:text-[2rem] font-bold"
              >
                <button onClick={() => setCurrentData(sideData.pager)}>
                  {sideData.name}
                </button>
              </li>
            ))}
          </ul>
        </article>
        <article className="w-[70%] min-h-[4rem] bg-red-500">
          {mainComp}
        </article>
      </section>
    </section>
  );

  return content;
}
