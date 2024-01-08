import { useEffect, useState } from "react";
import axios from "@/axiosAPI/axios";
import { all } from "axios";

export default function useInvestors() {
  const [userData, setUserData] = useState([]);
const [appError, setAppError] = useState('')


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/users/getallusers",
        
        );
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        }

        if (userData) {
          return userData;
        } else {
          return null;
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return userData;
}
