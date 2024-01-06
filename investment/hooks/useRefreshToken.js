import axios from "@/lib/axios";
import { useContext } from "react";
import { AuthProvider } from "@/app/Authprovider";

const useRefreshToken = () => {
  const { setAuth } = useContext(AuthProvider);

  const refresh = async () => {
    const response = await axios.get("/auths/refresh", {
      withCredentials: true,
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);
      return {
        ...prev,
        accessToken: response.data.accessToken,
      };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
