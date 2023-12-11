"use client";
import { FaBell } from "react-icons/fa6";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Setting from "@/components/Setting";
import Learn from "@/components/Learn";
import History from "@/components/History";
import Help from "@/components/Help";
import Logout from "@/components/Logout";
import { useState, useEffect, useRef } from "react";
import Investors from "@/components/Investors";
// import AdminEditUser from '@/components/AdminEditUser';
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { MdDeleteForever } from "react-icons/md";
// import { alert } from 'node-popup';
// import Popup from "reactjs-popup"

export default function Admindash() {
  const router = useRouter();
  const [currentData, setCurrentData] = useState("");
  const [mainComp, setMainComp] = useState("");
  const [serverData, setServerData] = useState({});
  const [selectedID, setSelectedID] = useState(null);

  const effectRan = useRef(false);
  const dataRef = useRef(false);
  const serveData = useRef(false);

  let saveData = [];

  const userSideBar = [
    { name: "Recents", url: "./", id: 1, pager: "home" },
    { name: "Dashboard", url: "./dashboard", id: 2, pager: "dash" },
    { name: "History", url: "./history", id: 3, pager: History },
    { name: "Investors", url: "./investors", id: 4, pager: "investors" },
    { name: "Settings", url: "./setting", id: 5, pager: Setting },
    { name: "feedbacks", url: "./learn", id: 6, pager: Learn },
    { name: "Logout", url: "./logout", id: 7, pager: Logout },
    { name: "", url: "./adminedituser", id: 8, pager: "AdminEditUser" },
  ];

  // const userPops = (

  // USER TOGGLING FUNCTIONS API'S

  const getUserEditPage = () => {
    const data = userSideBar
      .map((dt) => dt)
      .filter((dt2) => dt2.id === 8)[0].pager;
    setCurrentData(data);
  };

  const activateUser = async () => {
    try {
      const { userID } = useParams();
      if (!userID) throw new Error("Invalid user");
      const response = await fetch(
        `http://127.0.0.1:5000/users/getsingleuser/${userID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok)
        throw new Error("Network error, please try again later");
      if (response.ok) {
        const ServerResponse = await response.json();
        alert(ServerResponse);
      }
    } catch (error) {
      alert(error);
    }
  };

  const deactivateUser = async () => {
    try {
      const { userID } = useParams();
      if (!userID) throw new Error("Invalid user");
      const response = await fetch(
        `http://127.0.0.1:5000/users/getsingleuser/${userID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok)
        throw new Error("Network error, please try again later");
      if (response.ok) {
        const ServerResponse = await response.json();
        alert(ServerResponse);
      }
    } catch (error) {
      alert(error);
    }
  };

  // form hook data

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // END OF USER TOGGLING FUNCTIONS

  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       try {
  //         const response = await fetch("http://127.0.0.1:5000/users/getallusers");

  //         if (!response.ok) throw new Error("not successful");
  //         if (response.ok) {
  //           //   console.log(response);

  //           const serverResponse = await response.json();
  //           const { users } = serverResponse;
  //           setServerData((...prev) => ({ allUsers: users }));
  //           //   console.log(serverData);
  //           //   setServerData((prev) => ({ ...prev, svdt: serverResponse }));

  //           //   console.log(serverData);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     fetchUsers();
  //   }, []);

  //   const getAllusers = async () => {
  //     try {
  //       const response = await fetch("http://127.0.0.1:5000/users/getallusers");
  //       if (!response.ok) throw new Error("not successful");
  //       const serverResponse = await response.json();
  //       return serverResponse;
  //       //   setServerData(users);
  //       //   console.log(users);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  useEffect(() => {
    if (effectRan.current === true) {
      const getAllUsers = async () => {
        try {
          const response = await fetch(
            "http://127.0.0.1:5000/users/getallusers"
          );
          if (!response.ok) throw new Error("not successful");
          const serverResponse = await response.json();
          const { users } = serverResponse;
          console.log(users);
          //   saveData.push(users);
          //   dataRef.current = users;
          setServerData((prev) => ({ ...prev, allData: users }));
          //   console.log(users);
        } catch (error) {
          console.log(error);
        }
      };
      getAllUsers();
    }

    return () => {
      effectRan.current = true;
    };
  }, []);

  if (dataRef.current === true) {
    console.log(serverData);
  }
  dataRef.current = true;
  const Investors = (
    <section>
      <article>
        <ul className="overflow-x-hidden h-[35rem]">
          {serverData?.allData?.length && serveData.current === true ? (
            serverData?.allData.map((user, i) => (
              <li key={i}>
                <div className="bg-yellow-500 flex flex-col justify-between  items-center text-center">
                  <form className="bg-blue-500 text-white text-left my-3 p-1 h-full w-full border-2 ">
                    <div className="plan-items">
                      <label>Email:</label>
                      <input
                        {...register("email", { value: user.email })}
                        className=" ad-inp-style"
                      />
                    </div>
                    <div className="plan-items">
                      <label>Firstname:</label>
                      <input
                        {...register("firstName", {
                          value: user.firstName,
                        })}
                        className=" ad-inp-style"
                        defaultValue={{
                          firstName: user.firstName,
                        }}
                      />
                    </div>
                    <div className="plan-items">
                      <label>Lastname:</label>
                      <input
                        {...register("lastName", { value: user.lastName })}
                        className=" ad-inp-style"
                      />
                    </div>
                    <div className="plan-items">
                      <label>Plan:</label>
                      <input
                        {...register("plan", { value: user.plan })}
                        className=" ad-inp-style"
                      />
                    </div>
                    <div className="plan-items">
                      <label>Balance:</label>
                      <input
                        {...register("balance", { value: user.balance })}
                        className=" ad-inp-style"
                      />
                    </div>
                  </form>
                  <div className="grid grid-cols-2 p-1 gap-2 justify-between w-full h-full items-center">
                    <button
                      onClick={() => {
                        activateUser();
                      }}
                      className="text-center text-white text-[1.1rem] font-bold  px-2 py-1 bg-[#7BC60C] mx-auto w-full h-[2rem] rounded-full border-none shadow-lg shadow-gray-500 "
                    >
                      {" "}
                      activate
                    </button>

                    <button
                      onClick={() => {
                        deactivateUser();
                      }}
                      className="text-center text-white text-[1.1rem] font-bold  px-2 py-1 bg-[#66635B] mx-auto w-full h-[2rem] rounded-full border-none shadow-lg shadow-gray-500 "
                    >
                      {" "}
                      deactivate
                    </button>

                    <button
                      onClick={() => {
                        getUserEditPage();
                      }}
                      className="text-center text-white text-[1.1rem] font-bold  px-2 py-1 bg-[#1E2749] mx-auto w-full h-[2rem] rounded-full border-none shadow-lg shadow-gray-500 "
                    >
                      {" "}
                      update
                    </button>

                    <button
                      onClick={() => {
                        getUserEditPage();
                      }}
                      className=" center-with-flex text-center text-white text-[1.1rem] font-bold   bg-[#bf0603] mx-auto w-full h-[2rem] rounded-full border-none shadow-lg shadow-gray-500 "
                    >
                      {" "}
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        getUserEditPage();
                      }}
                      className=" center-with-flex text-center text-white text-[1.1rem] font-bold col-span-2  bg-[#bf0603] mx-auto w-full h-[2rem] rounded-full border-none shadow-lg shadow-gray-500 "
                    >
                      {" "}
                      Authorize
                    </button>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <div className="bg-black text-white h-full">
              <h1>No users found</h1>
            </div>
          )}
        </ul>
      </article>
    </section>
  );

  const dashBoard = (
    <div className="parent p-1">
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white p-4">Total Bal</div>
        <div className="bg-white p-4">Earns</div>
        <div className="bg-white p-4">Withdraw</div>
      </div>
      <div className="bg-white p-4">History</div>
      <div className="grid grid-cols-3 gap-2 mt-4">
        <div className="bg-white p-3 col-span-2 text-center">
          <p>Why you should upgrade</p>
          <button className="mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Upgrade
          </button>
        </div>
        <div className="bg-white p-1">
          <ul>
            <li>BTC-12</li>
            <li>ETH-12</li>
            <li>USDT-1</li>
            <li>XRP-12</li>
            <li>LTC-12</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-4">
        <div className="bg-white p-1 text-center">
          <h2>Unique Invest</h2>
          <p>Why one should invest</p>
          <button className="mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Upgrade
          </button>
        </div>
        <div className="bg-white p-2 text-center">
          loleydkkkk bhhhdbdb bdbdb bb bdbdbd bdbd
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    const chooseItem = () => {
      userSideBar.map((data) => {
        var active = Object.values(data).filter((e) => e === currentData)[0];
        if (currentData) {
          if (currentData === "dash") {
            setMainComp(dashBoard);
          } else if (currentData === "investors") {
            setMainComp(Investors);
          } else if (currentData === "AdminEditUser") {
            setMainComp(AdminEditUser);
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
            <Link href="/">
              {" "}
              <h1>USER PLAN</h1>{" "}
            </Link>
          </div>
          <div>
            <button onClick={() => alert("hello usder")}>say hi</button>
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
              <li key={sideData.id} className="md:text-[2rem] font-bold">
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

/*

serverData?.allData?.length && serveData.current === true ? (
            serverData?.allData.map((user, i) => (
              <li key={i}>
                <div className="bg-yellow-500 flex flex-col justify-between  items-center text-center">
                  <form className="bg-blue-500 text-white text-left my-3 p-1 h-full w-full border-2 ">
                    <div className="plan-items">
                      <label>Email:</label>
                      <input
                        {...register("email", { value: user.email })}
                        className=" ad-inp-style"
                      />
                    </div>
                    <div className="plan-items">
                      <label>Firstname:</label>
                      <input
                        {...register("firstName", {
                          value: user.firstName,
                        })}
                        className=" ad-inp-style"
                        defaultValue={{
                          firstName: user.firstName,
                        }}
                      />
                    </div>
                    <div className="plan-items">
                      <label>Lastname:</label>
                      <input
                        {...register("lastName", { value: user.lastName })}
                        className=" ad-inp-style"
                      />
                    </div>
                    <div className="plan-items">
                      <label>Plan:</label>
                      <input
                        {...register("plan", { value: user.plan })}
                        className=" ad-inp-style"
                      />
                    </div>
                    <div className="plan-items">
                      <label>Balance:</label>
                      <input
                        {...register("balance", { value: user.balance })}
                        className=" ad-inp-style"
                      />
                    </div>
                  </form>
                  <div className="grid grid-cols-2 p-1 gap-2 justify-between w-full h-full items-center">
                    <button
                      onClick={() => {
                        activateUser();
                      }}
                      className="text-center text-white text-[1.1rem] font-bold  px-2 py-1 bg-[#7BC60C] mx-auto w-full h-[2rem] rounded-full border-none shadow-lg shadow-gray-500 "
                    >
                      {" "}
                      activate
                    </button>

                    <button
                      onClick={() => {
                        deactivateUser();
                      }}
                      className="text-center text-white text-[1.1rem] font-bold  px-2 py-1 bg-[#66635B] mx-auto w-full h-[2rem] rounded-full border-none shadow-lg shadow-gray-500 "
                    >
                      {" "}
                      deactivate
                    </button>

                    <button
                      onClick={() => {
                        getUserEditPage();
                      }}
                      className="text-center text-white text-[1.1rem] font-bold  px-2 py-1 bg-[#1E2749] mx-auto w-full h-[2rem] rounded-full border-none shadow-lg shadow-gray-500 "
                    >
                      {" "}
                      update
                    </button>

                    <button
                      onClick={() => {
                        getUserEditPage();
                      }}
                      className=" center-with-flex text-center text-white text-[1.1rem] font-bold   bg-[#bf0603] mx-auto w-full h-[2rem] rounded-full border-none shadow-lg shadow-gray-500 "
                    >
                      {" "}
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        getUserEditPage();
                      }}
                      className=" center-with-flex text-center text-white text-[1.1rem] font-bold col-span-2  bg-[#bf0603] mx-auto w-full h-[2rem] rounded-full border-none shadow-lg shadow-gray-500 "
                    >
                      {" "}
                      Authorize
                    </button>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <div className="bg-black text-white h-full">
              <h1>No users found</h1>
            </div>
          )



*/
