import { useEffect, useState } from 'react';
import axios from '@/authendpoints/axios';
import { all } from 'axios';

export default function useInvestors() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/users/getallusers');
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
          console.log(data);
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
