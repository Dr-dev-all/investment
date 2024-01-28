"use client";
import { memo, useContext, useState, useEffect } from "react";
import { BsBank2 } from "react-icons/bs";
import { BiMoneyWithdraw } from "react-icons/bi";
import jwtDecode from "jwt-decode";
import Authproviders from "@/app/Authprovider";
import Link from "next/link";
import { GiTakeMyMoney } from "react-icons/gi";
import { HiCursorArrowRays } from "react-icons/hi2";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { IoMdArrowDropdownCircle } from "react-icons/io";

export default function AdminDashBoard() {
  const [appError, setAppError] = useState("");
  const [serverData, setServerData] = useState({});
  const [test, setTest] = useState({});
  const [read, setRead] = useState(false);
  const [loading, setLoading] = useState(false);
  let online = [];
  let offline = [];
  let withdrawalRequest = [];
  // const [activeClients, setActiveClients] = usestate('')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/users/getallusers`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        const { users } = await response.json();
        localStorage.setItem("serverRes", JSON.stringify(users));
        // console.log(users);
        setServerData((prev) => ({ ...prev, data: users }));
      } catch (error) {
        // console.log(error);
        setAppError(error);
      } finally {
        setLoading(false);
      }

      // console.log(mainData)
    };

    fetchUsers();

    return () => {};
  }, []);

  // console.log(test);
  // console.log(online);

  // console.log(serverData);

  const content = (
    <main className="min-h-screen w-full  bg-black text-white ">
      <section className="bg-white text-black w-[80%] min-h-full rounded-[2rem]  min-w-full mx-auto gap-3 p-3   ">
        <div className="flex justify-between items-center w-full text-white bg-black mx-auto rounded-full px-5 py-2 shadow-gray-500 shadow-lg ">
          <BsBank2 className="text-[1.3rem]" /> <div>Welcome Home Admin</div>
        </div>
      </section>
      <section className="bg-white text-black w-[80%] min-h-full rounded-[2rem]  min-w-full mx-auto gap-3 p-3 mt-4  ">
        <div className="flex justify-between items-center w-full text-white bg-black mx-auto rounded-full px-5 py-2 shadow-gray-500 shadow-lg ">
          <GiTakeMyMoney className="text-[2.5rem]" />{" "}
          <Link
            href="/login/adminDash/usercash"
            className="   center-with-flex   rounded-full text-black  bg-white   min-w-[50%] min-h-[50%] shadow-md  shadow-white "
          >
            <p className="text-[0.9rem] font-black ">W-Requests</p>
            <p className="font-bold text-wite text-[0.8rem]">
              {" "}
              {serverData.data && serverData.data.length
                ? serverData.data.filter((dt) => dt.notification === true)
                    .length
                : "None"}{" "}
            </p>
            <HiCursorArrowRays className="text-[1.2rem] animate-pulse" />
          </Link>
        </div>
      </section>
      <section className="bg-white text-black w-[95%] min-h-full rounded-[2rem] grid grid-cols-2  mx-auto gap-3 p-3  mt-[1rem] ">
        <article className="center-with-flex  flex-col justify-center bg-black text-white shadow-gray-500 shadow-lg rounded-lg min-w-full min-h-[3rem]">
          <p>Inactive clients</p>
          <p className="font-bold   font-[1.3rem]">
            {" "}
            {serverData.data && serverData.data.length
              ? serverData.data.filter((dt) => dt.isActive === false).length
              : "None"}
          </p>
          {/* <p className=" plan-items">
            T-volume <span className="">3455%</span>{" "}
          </p> */}
        </article>
        <article className="center-with-flex  flex-col justify-center bg-black text-white shadow-gray-500 shadow-lg rounded-lg min-w-full min-h-[3rem]">
          <p>Active clients</p>
          <p className="font-bold  font-[1.3rem]">
            {" "}
            {serverData.data && serverData.data.length
              ? serverData.data.filter((dt) => dt.isActive === true).length
              : "None"}{" "}
          </p>
          {/* <p className=" plan-items">
            T-volume <span className="">145%</span>{" "}
          </p> */}
        </article>
      </section>
      <section className="bg-white text-black w-[80%] min-h-full rounded-[2rem]  min-w-full mx-auto gap-3 p-3 mt-4  scroll-mb-96 ">
        <div className="flex   flex-col    justify-between items-center w-full min-h-[70%]   rounded-[1rem]    text-white bg-black mx-auto  px-5 py-2 shadow-gray-500 shadow-lg ">
          <button
            onClick={() => {
              setRead(!read);
            }}
            className="flex   justify-between  items-center  w-full  px-4 mx-auto   my-[0.4rem]"
          >
            {" "}
            <h2 className="font-[2rem]  font-bold tracking-wide">
              Admin Note{" "}
            </h2>
            {read ? (
              <IoMdArrowDropupCircle className="  text-[2rem] " />
            ) : (
              <IoMdArrowDropdownCircle className="  text-[2rem]   animate-bounce" />
            )}
          </button>
          <p
            className={`rounded-[1rem] ${
              read ? "block" : " hidden "
            }   text-center p-1 tracking-wide  w-full`}
          >
            {" "}
            Please ensure that any deposit confirmed from the user is been
            updated from your end as you have the full control over all the
            user's transaction here in Bullharvest.
          </p>
        </div>
      </section>
      <section className="mt-[1rem] h-[5rem]"></section>
    </main>
  );

  return content;
}
