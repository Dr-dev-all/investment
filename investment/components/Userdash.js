"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function Userdash() {
  const [userData, setUserData] = useState(null);
  const userID = useParams();
  console.log(userID);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!userID) throw new Error("User id must be provided");
        const response = await fetch(
          `http://127.0.0.1:5000/users/getsingleuser/${userID}`
        );
        if (!response.ok) throw new Error("An error occured");
        if (response.ok) {
          const serverResponse = await response.json();
          console.log(serverResponse);
          // setUserData(serverResponse);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  });

  const content = (
    <main className="min-h-screen w-full text-[#03045e]  mt-[6.9rem]  rounded-b-lg  flex flex-col">
      <section className="flex justify-between  bg-[#03045e]  items-center w-full min-h-[4rem]   p-2 ">
        <div className=" center-with-flex  text-[#03045e] w-full h-[5rem] bg-white border-2   rounded-lg   text-[1.1rem] font-black ">
          <h1 className="flex flex-col">
            Balance <span>$00.00 </span>
          </h1>
        </div>
        <div className="  center-with-flex  text-[#03045e] w-full  rounded-lg  border-2 bg-white h-[5rem]  font-black">
          <h1 className="flex flex-col">
            Profit <span>$00.00 </span>
          </h1>
        </div>
      </section>
      {/* choose plan */}
      <section className=" center-with-flex w-full min-h-[5rem] gap-3">
        <article className="center-with-flex text-center w-[90%] border-2 p-2 shadow-lg shadow-gray-500 rounded-[2rem]">
          <ul className="w-full">
            <li className="font-bold w-full  plan-items">
              Bonus amount: <span className="font-none italic "> $00.00</span>
            </li>
            <li className="font-bold w-full  plan-items">
              Yield amount: <span className="font-none italic "> $00.00</span>
            </li>
          </ul>
        </article>
        <article className="center-with-flex text-center w-[90%] border-2 p-2 shadow-lg shadow-gray-500 rounded-[2rem]">
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
    </main>
  );

  return content;
}
