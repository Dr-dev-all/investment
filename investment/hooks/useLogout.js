import axios from "@/axiosAPI/axios";
import useAuth from "./useAuth";

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    try {
      const response = await axios("/auths/logout", {
        withCredentials: true,
      });
    } catch (err) {
      // console.error(err);
      throw new Error(err);
    }
  };

  return logout;
};

export default useLogout;
