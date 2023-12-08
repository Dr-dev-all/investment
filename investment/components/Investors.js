'use client';
import allData from '@/hooks/useInvestors';
import axios from '@/authendpoints/axios';
import { useState, useEffect } from 'react';
import { errorMonitor } from 'stream';

export default function Investors() {
  //   const [userData, setUserData] = useState({});

  //   const allUser = async () => {
  //     try {
  //       const response = await fetch('http://127.0.0.1:5000/users/getallusers');
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.log(errorMonitor);
  //     }
  //   };

  const content = (
    <section className='h-full w-full bg-green-500'>
      <h1>welcome to investors page</h1>
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
