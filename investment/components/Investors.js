"use client";
import allData from "@/hooks/useInvestors";
import axiosPrivate from "@/authendpoints/axios";
import { useState, useEffect } from "react";
import { errorMonitor } from "stream";
import useInvestors from "@/hooks/useInvestors";

export default function Investors() {
  //   const [uPallUser = async () => {
  //     try {
  //       const response = await fetch('http://127.0.0.1:5000/users/getallusers');
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.log(errorMonitor);
  //     }
  //   };

  //   useInvestors();

  const getUsers = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/users/getallusers");
      if (!response.ok) throw new Error("Request was not a success");
      if (response.ok) {
        const mainUserData = await response.json();
        // console.log(mainUserData);
      }
    } catch (error) {
      // console.log(error);
      throw new Error("Network error, Please Try again later");
    }
  };

  const content = (
    <section className="h-full w-full bg-green-500">
      <h1>welcome to investors page</h1>
      <button onClick={() => getUsers()}>see users</button>
      <article>
        <ul>
          <li>
            <div>
              <ul>
                <li></li>
              </ul>
            </div>
          </li>
        </ul>
      </article>
    </section>
  );

  return content;
}
