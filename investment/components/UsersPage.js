"use client";
import { useState, useEffect, useRef, useMemo, memo, use } from "react";
import { useForm } from "react-hook-form";
import { BiSolidSquareRounded } from "react-icons/bi";
import { IoPersonAddSharp } from "react-icons/io5";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { set } from "mongoose";
import { useRouter } from "next/router";
import axios from "@/lib/axios";

// import useParams from "react-router-dom";

export default function UsersPage() {
  const effectRan = useRef(false);
  const [data, setData] = useState(null);
  const [serverMsg, setServerMsg] = useState({});
  const dataRender = useRef(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [appError, setAppError] = useState("");

  const axiosPrivate = useAxiosPrivate();
  const activateUser = async (id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/users/activateuser/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
        }
      );
      //   if (!response.ok) throw new Error("Network error, try again later");
      if (response.ok) {
        const serverMessage = await response.json();
        setServerMsg((prev) => ({ ...prev, serverRes: serverMessage }));
        // console.log("user deacivated");
      }
    } catch (error) {
      console.log(error);
    } finally {
      router.reload();
    }
  };

  const deactivateUser = async (id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/users/deactivateuser/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
        }
      );
      //   if (!response.ok) throw new Error("Network error, try again later");
      if (response) {
        const serverMessage = await response.json();
        console.log(serverMessage);
        setServerMsg((prev) => ({ ...prev, serverRes: serverMessage }));
        // console.log("user deacivated");
      }
    } catch (error) {
      console.log(error);
    } finally {
      router.reload();
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/users/deleteuser/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response);
      //   if (!response.ok) throw new Error("Network error, try again later");
      if (response) {
        const serverMessage = await response.json();
        setServerMsg((prev) => ({ ...prev, serverRes: serverMessage }));
        // console.log("user deacivated");
      }
    } catch (error) {
      console.log();
    } finally {
      router.reload();
    }
  };

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("http://127.0.0.1/users/edituser", {
        method: "PATCH",
        body: formData,
      });

      //   if (!response.ok) {
      //     throw new Error("Failed to submit the data. Please try again.");
      //   }

      console.log(response);
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      setIsLoading(false);
      router.reload();
    }
  }

  useEffect(() => {
    // let isMounted = true;
    const controller = new AbortController();
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/users/getallusers");
        setData(response.data);
        // console.log(data);
      } catch (error) {
        setError("Network error..., please try again later");
      } finally {
        router.reload();
      }
    };

    fetchUsers();

    return () => {
      // isMounted = false;
      controller.abort();
    };
  }, []);

  const content = (
    <main className="min-h-full px-4 w-screen bg-white mt-4 mb-[4rem]">
      <section className="flex justify-between items-center p-2 bg-black rounded-full min-w-full h-[3rem]   ">
        <div className="h-full w-[90%] bg-gray-500 text-black rounded-full  px-2   mx-auto">
          <input
            placeholder="Search user"
            className="rounded-full text-black mx-auto w-full px-2 py-1"
          />
        </div>
        <div className="center-with-flex">
          <button>
            <IoPersonAddSharp className="text-green-500 text-[1.3rem]" />
          </button>
        </div>
      </section>
      {/* <Popup trigger={<button>Trigger</button>} position="top left">
        {(close) => (
          <div>
            Content here
            <a className="close" onClick={close}>
              &times;
            </a>
          </div>
        )}
      </Popup> */}

      <section>
        <ul className="grid grid-cols-1 gap-3 justify-center items-center w-full h-full mt-3">
          {dataRender.current === true && data?.users?.length ? (
            data?.users.map((user, i) => (
              <li key={i}>
                <div>
                  <div className=" bg-black text-white rounded-[2rem] p-2 shadow-gray-500 shadow-xl">
                    <form onSubmit={onSubmit}>
                      <ul>
                        <li className="plan-items">
                          Firstname:{" "}
                          <span>
                            <input
                              name="firstName"
                              defaultValue={user.firstName}
                              className="text-black w-full rounded-[2rem] ml-2 px-2 shadow-inner shadow-black shadow-lg "
                            />
                          </span>
                        </li>
                        <li className="plan-items">
                          Lastname:
                          <span>
                            <input
                              name="lastName"
                              //   value={user.lastName}
                              defaultValue={user.lastName}
                              className="text-black w-full rounded-[2rem] ml-2 px-2 shadow-inner shadow-black shadow-lg "
                            />
                          </span>
                        </li>
                        <li className="plan-items">
                          Email:
                          <span>
                            <input
                              name="email"
                              defaultValue={user.email}
                              className="text-black w-full rounded-[2rem] ml-2 px-2 shadow-inner shadow-black shadow-lg "
                            />
                          </span>
                        </li>
                        <li className="plan-items">
                          Plan:
                          <span>
                            <input
                              name="plan"
                              defaultValue={user.plan}
                              className="text-black w-full rounded-[2rem] ml-2 px-2 shadow-inner shadow-black shadow-lg "
                            />
                          </span>
                        </li>
                        <li className="plan-items">
                          Balance:
                          <span>
                            <input
                              name="balance"
                              defaultValue={user.balance}
                              className="text-black w-full rounded-[2rem] ml-2 px-2 shadow-inner shadow-black shadow-lg "
                            />
                          </span>
                        </li>
                        <li className="plan-items">
                          UserID:
                          <span>
                            <input
                              name="id"
                              defaultValue={user._id}
                              className="text-black w-full rounded-[2rem] ml-2 px-2 shadow-inner shadow-black shadow-lg "
                            />
                          </span>
                        </li>
                        <li className="plan-items">
                          status:{" "}
                          <span>
                            {user.isActive ? (
                              <BiSolidSquareRounded className="text-green-500 text-[1.2rem]" />
                            ) : (
                              <BiSolidSquareRounded className="text-red-500  text-[1.2rem]" />
                            )}
                          </span>
                        </li>
                      </ul>
                      <button className="w-full h-full bg-blue-500 text-black rounded-full shadow-white shadow-2xl shadow-inner p-1 mb-3 font-bold">
                        {" "}
                        submit
                      </button>
                    </form>
                    <div className="grid grid-cols-2 gap-2 ">
                      <button
                        onClick={() => {
                          activateUser(user._id);
                        }}
                        className="w-full h-full bg-green-500 text-black rounded-full shadow-white shadow-2xl shadow-inner p-1 font-bold"
                      >
                        {" "}
                        Activate
                      </button>
                      <button
                        onClick={() => {
                          deactivateUser(user._id);
                        }}
                        className="w-full h-full bg-red-500 text-black rounded-full shadow-white shadow-2xl shadow-inner p-1 font-bold"
                      >
                        {" "}
                        Deactivate
                      </button>
                      <button
                        onClick={() => {
                          deleteUser(user._id);
                        }}
                        className="w-full h-full bg-red-500 text-black rounded-full shadow-white col-span-2 shadow-2xl shadow-inner p-1 font-bold"
                      >
                        {" "}
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <p>No user data was found</p>
          )}
        </ul>
      </section>
    </main>
  );

  // dataRender.current = true;
  return content;
}
