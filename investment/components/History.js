"use client";
import { BsBank } from "react-icons/bs";
import { FaMinusCircle } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useEffect, useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

export default function History() {
  const axiosPrivate = useAxiosPrivate();
  const [history, setHistory] = useState({});
  const [appError, setAppError] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  let compMount = false;
  let userData = [];

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchHistory = async () => {
      try {
        setLoading(true);
        const response = await axiosPrivate.get("/users/getuserhistory", {
          signal: controller.signal,
        });

        if (response.status === 200) {
          const { userHistory } = response.data;
          // console.log(userHistory)
          isMounted && setHistory((prev) => ({ ...prev, data: userHistory }));
        }
      } catch (error) {
        setAppError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [axiosPrivate]);

  const clearHistory = async () => {
    const controller = new AbortController();
    try {
      const response = await axiosPrivate.patch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/clearhistory`,
        {
          signal: controller.signal,
        }
      );

      if (response.status === 200) {
        const serverData = await response.data;
        console.log(serverData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      controller.abort();
    }
  };

  console.log(history);

  const content = (
    <main className="min-h-screen mt-[9em]">
      <div>
        <h1 className="items-center flex justify-center text-center font-bold">
          Transaction History
        </h1>
        <h2 className="items-center flex justify-center text-center ">
          All categories
        </h2>
      </div>
      <div className="w-full center-with-flex p-1 border-b-2 my-2 ">
        <button
          onClick={() => {
            clearHistory();
          }}
          className="mx-auto min-w-[20%] bg-red-600 p-1 rounded-full min-h-1rem  font-bold text-[1.1rem]  text-white shadow-2xl shadow-inner shadow-black "
        >
          Clear history
        </button>
      </div>

      <ul className="flex flex-col mt-4">
        {history?.data && !loading && history.data.length ? (
          history?.data.map((data) => (
            <li
              className="flex justify-between items-center px-2"
              key={data._id}
            >
              {data.history_txnmode === "withdraw" ? (
                <FaMinusCircle className=" text-[2.5em] lg:text-[3em] rounded-full lg:mt-16  text-white p-2 bg-red-600" />
              ) : data.history_txnmode === "Deposit" ? (
                <IoAddCircleSharp className=" text-[2.5em] lg:text-[3em] rounded-full lg:mt-16  text-white p-2 bg-green-600" />
              ) : data.history_status === "Approved" ? (
                <IoCheckmarkCircle className=" text-[2.5em] lg:text-[3em] rounded-full lg:mt-16  text-white p-2 bg-green-600" />
              ) : (
                data.history_status === "Declined" && (
                  <MdCancel className=" text-[2.5em] lg:text-[3em] rounded-full lg:mt-16  text-white p-2 bg-red-600" />
                )
              )}
              <div className="center-with-flex">
                <h2>{data?.history_txnmode}</h2>
                <h2>{data?.history_status}</h2>
              </div>
              <div>
                <h4 className="font-bold">+${data?.history_amount}</h4>
                <p className="font-bold text-gray-500">
                  {data?.history_date.slice(0, 10)}
                </p>
              </div>
            </li>
          ))
        ) : loading ? (
          <PuffLoader />
        ) : (
          Array.isArray(history?.data) &&
          !history?.data.length && <li>No history data</li>
        )}
      </ul>
    </main>
  );

  return content;
}
