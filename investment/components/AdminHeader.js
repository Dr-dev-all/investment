"use client";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useEffect } from "react";

export default function AdminHeader() {
  const axiosPrivate = useAxiosPrivate();

  const [user, setUser] = useState({});
  const [appError, setAppError] = useState("");

  useEffect(() => {
    let isMounted = true;

    // const controller = new AbortController();

    const getUser = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/users/getallusers`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const serverData = await response.json();
        isMounted && setUser((prev) => ({ ...prev, data: serverData }));
        // console.log({ serverdata: user });
        //
      } catch (error) {
        // console.log(error);
        setAppError("Network error..., please try again later");
      }
    };

    getUser();

    return () => {
      isMounted = false;
    };
  }, []);

  // serverData.data && serverData.data.length
  //   ? serverData.data.filter((dt) => dt.notification === true).length
  //   : "None";

  const content = (
    <main className=" mx-auto min-h-[3rem] w-full text-black sticky top-0 text-white bg-black  w-screen">
      <section className="flex justify-between items-center px-2 h-full w-full">
        <div className=" center-with-flex font-bold">
          <h1 className="">ADMIN</h1>
        </div>

        <div>Bullharvest.com </div>
        <div className="center-with-flex rounded-full p-2 ">
          <h3
            className={`      ${
              user?.data && user?.data?.users.length ? "block" : "hidden"
            }      center-with-flex     bg-red-600 text-white text-[1rem]  p-[0.1rem] text-white rounded-full h-[20%]`}
          >
            {" "}
            {user?.data && user?.data?.users.length
              ? user?.data?.users.filter((dt) => dt.notification === true)
                  .length
              : ""}
          </h3>
          <IoNotificationsSharp className="w-[70%] text-[1.9rem]" />
        </div>
      </section>
    </main>
  );

  return content;
}
