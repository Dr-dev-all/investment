import { axiosPrivate } from "@/lib/axios";
import { useEffect, useContext, useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import useRefreshToken from "./useRefreshToken";
import { AuthProvider } from "@/app/Authprovider";
import { jwtDecode } from "jwt-decode";
import axios from "@/lib/axios";

const useAxiosPrivate = () => {
  // data changes

  let effectRan = useRef(false);

  // end of data changes

  const router = useRouter();

  const pathname = usePathname();

  useEffect(() => {
    if (effectRan.current === true) {
      // start of modification

      const fetchRefresh = async () => {
        try {
          const response = await axios.get("/auths/refresh", {
            withCredentials: true,
          });

          if (response.status === 200 || response.statusText === "OK") {
            return response.data.accessToken;
          }
        } catch (error) {
          if (error) {
            console.log(error);
          }
        }
      };

      const getToken = async () => {
        try {
          const response = await fetch(
            "http://127.0.0.1:5000/auths/getusertoken",
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            }
          );

          const { token } = await response.json();
          return token;
        } catch (error) {
          console.log(error);
        }
      };

      // end of modification
      // const accessToken = JSON.parse(localStorage.getItem("accessToken"));/

      // IF REQUEST DOES'NT HAVE A TOKEN
      // if (!accessToken && pathname === "/login/userdash") {
      //   return router.push("/login");
      // }

      // const userinfo = jwtDecode(accessToken);

      // console.log(userinfo);

      // route protection ends

      let accessToken = getToken();

      const requestIntercept = axiosPrivate.interceptors.request.use(
        (config) => {
          if (!config.headers["Authorization"]) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
          }
          return config;
        },
        (error) => Promise.reject(error)
      );

      // start of modification

      // end of my modification
      const responseIntercept = axiosPrivate.interceptors.response.use(
        (response) => response,
        async (error) => {
          const prevRequest = error?.config;
          if (error?.response?.status === 403 && !prevRequest?.sent) {
            prevRequest.sent = true;
            const newAccessToken = await fetchRefresh();
            prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
            return axiosPrivate(prevRequest);
          }
          return Promise.reject(error);
        }
      );

      return () => {
        axiosPrivate.interceptors.request.eject(requestIntercept);
        axiosPrivate.interceptors.response.eject(responseIntercept);
      };
    }
  }, []);

  effectRan.current = true;
  return axiosPrivate;
};

export default useAxiosPrivate;

// auth, refresh
