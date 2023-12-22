import { axiosPrivate } from "@/lib/axios";
import { useEffect, useContext, useState, useRef } from "react";
import useRefreshToken from "./useRefreshToken";
import { AuthProvider } from "@/app/Authprovider";
import { jwtDecode } from "jwt-decode";
import axios from "@/lib/axios";
import { useRouter, usePathname } from "next/navigation";
import { axiosPrivate } from "@/lib/axios";
import { useEffect, useContext, useState, useRef } from "react";
import useRefreshToken from "./useRefreshToken";
import { AuthProvider } from "@/app/Authprovider";
import { jwtDecode } from "jwt-decode";
import axios from "@/lib/axios";
import { useRouter } from "next/navigation";

const useAxiosPrivate = () => {
  // data changes

  let effectRan = useRef(false);

  // end of data changes

  // const refresh = useRefreshToken();
  // const { auth } = useContext(AuthProvider);

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
          router.push("/login");
        }
      };

      // end of modification
      const accessToken = JSON.parse(localStorage.getItem("accessToken"));
      const userinfo = jwtDecode(accessToken);

      console.log(userinfo);

      // route protection

      // if (
      //   (!userinfo?.Active && !accessToken && pathname === "/login/userdash") ||
      //   (!userinfo?.Active && !accessToken && pathname === "/login/adminDash")
      // ) {
      //   router.push("/register");
      // }

      // if (
      //   userinfo?.Active &&
      //   accessToken &&
      //   userinfo.Admin === false &&
      //   pathname === "/login/adminDash"
      // ) {
      //   router.push("/login");
      // }

      // if (userinfo?.Active && accessToken && userinfo?.Admin === true) {
      //   router.push("/login/adminDash");
      // } else {
      // }

      // route protection ends

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
