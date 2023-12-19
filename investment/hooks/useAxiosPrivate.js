import { axiosPrivate } from "@/lib/axios";
import { useEffect, useContext, useState, useRef } from "react";
import useRefreshToken from "./useRefreshToken";
import { AuthProvider } from "@/app/Authprovider";
import { jwtDecode } from "jwt-decode";
import axios from "@/lib/axios";

const useAxiosPrivate = () => {
  // data changes

  let effectRan = useRef(false);

  // end of data changes
  const refresh = useRefreshToken();
  const { auth } = useContext(AuthProvider);
  console.log(auth);
  console.log(refresh);

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
          console.log(error);
        }
      };

      // end of modification
      const accessToken = JSON.parse(localStorage.getItem("accessToken"));
      const requestIntercept = axiosPrivate.interceptors.request.use(
        (config) => {
          if (!config.headers["Authorization"]) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
          }
          return config;
        },
        (error) => Promise.reject(error)
      );
      console.log("USEAXIOSPRIVATE");

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
