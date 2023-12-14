"use client";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { PiArrowFatLinesDownFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import Image from "next/image";

import { IoCheckmarkCircle } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa6";
import { PiPottedPlantFill } from "react-icons/pi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { PiChartLineUpBold } from "react-icons/pi";
import { BsCashCoin } from "react-icons/bs";
// number icon imports
import { TbSquareRoundedNumber1Filled } from "react-icons/tb";
import { TbSquareRoundedNumber2Filled } from "react-icons/tb";
import { TbSquareRoundedNumber3Filled } from "react-icons/tb";
import { TbSquareRoundedNumber4Filled } from "react-icons/tb";
import { TbSquareRoundedNumber5Filled } from "react-icons/tb";
import { TbSquareRoundedNumber6Filled } from "react-icons/tb";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { ImHappy2 } from "react-icons/im";

export default function Landing() {
  const starterPlan = [
    { name: "Interest", value: "128.8%", id: 1 },
    { name: "Investment", value: "$500-$5000", id: 2 },
    { name: "Capital Bank", value: "No", id: 3 },
    { name: "Return Type", value: "Period", id: 4 },
    { name: "Number of Period", value: "7 Times", id: 5 },
    { name: "Profit Withdraw", value: "Anytime", id: 6 },
  ];

  // const [sow, setShow] = useState(true);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = { method: "GET", "Content-Type": "application/json" };
        const apiResponse = await fetch("/api/latestnews/", options);
        if (!apiResponse.ok) return "No data";
        const newsData = await apiResponse.json();

        setAllData(newsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const content = (
    <section className="section-style ">
      <div
        className="div-style"
        style={{ backgroundImage: "url(../risebtc.jpg)" }}
      >
        <article className=" flex justify-left items-center z-0 h-[15rem] w-screen pl-[1rem]  text-white">
          <h2 className=" font-bolder text-[1.2rem] w-[60%] ml-[2rem] p-2 mt-[9rem] text-left">
            {" "}
            Unlock the life changing Potential of Digital Currency with
            <span className="mx-2 text-[#001845] bg-white p-1 font-bold underline ">
              BullHarvest
            </span>{" "}
            today."
          </h2>
          .
        </article>
      </div>
      <article className="article-style center-with-flex ">
        <div className="w-full h-full ">
          <h1 className=" center-with-flex text-[1.5rem] uppercase  w-screen h-[4rem]  bg-[#001845] ">
            who we are
          </h1>
          <div className="flex flex-row  justify-between  px-  pt-7  items-center h-[6rem] w-screen text-black">
            <p className="block w-[60%] my-auto">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut !{" "}
            </p>{" "}
            <div className="w-[40%]  my-auto">
              <Image
                src="../security-icon.svg"
                alt="security-icon"
                height={80}
                width={80}
                className="mx-auto my-auto"
              />
            </div>
          </div>
          <h1 className="w-screen h-[2rem] text-[2rem] text-center border-t-4 border-t-[#001845]  text-[#001845] font-bold  my-[1rem]">
            How we earn from our mining investors
          </h1>
          <ul className="flex flex-col justify-between  items-left text-white min-h-[14rem] w-screen pl-2 py-4 bg-[#001845] list-none">
            <li className="   ">
              {" "}
              <IoShieldCheckmarkSharp className="inline  text-[1.2rem] mr-2" />{" "}
              The transaction is bundled into a block.
            </li>
            <li className="   ">
              {" "}
              <IoShieldCheckmarkSharp className="inline  text-[1.2rem] mr-2" />{" "}
              Miners verify whether the transaction is valid.
            </li>
            <li className="   ">
              {" "}
              <IoShieldCheckmarkSharp className="inline  text-[1.2rem]  mr-2" />
              They select headers of the most recent block and in sert it into
              the new block as a hash
            </li>{" "}
            <li className="">
              {" "}
              <IoShieldCheckmarkSharp className="inline  text-[1.2rem] mr-2" />{" "}
              They solve the mathematical problem.
            </li>
            <li className="   ">
              {" "}
              <IoShieldCheckmarkSharp className="inline text-[1.2rem]  mr-2 " />
              When the solution is found, the new block is added the blockchain
              and then propgated thoughout the network by this producing profit
              hourly to investors account.
            </li>
          </ul>
        </div>
      </article>

      <article className="article-style center-with-flex my-3 ">
        <h1 className="flex flex-row justify-between px-3 items-center bg-[#03045e] text-bold text-[1.3rem] h-[3rem] w-screen">
          <hr className="bg-white p-[0.2px] w-[3rem] " /> HOW IT WORKS{" "}
          <hr className="bg-white p-[0.2px] w-[3rem] " />
        </h1>
        <section className="grid grid-cols-2  gap-2 sm:grid-cols-2 md:grid-cols-3 h-full w-full p-5 ">
          <div className="help-div-style">
            <TbSquareRoundedNumber1Filled className="text-[3rem] " />
            <FaUserCheck className="text-[2rem]" />

            <h1 className="font-bold text-white">REGISTER</h1>
          </div>
          <div className="help-div-style">
            <TbSquareRoundedNumber2Filled className="text-[3rem] " />
            <MdVerifiedUser className="text-[2rem]" />
            <h1 className="font-bold text-white">Verify KYC</h1>
          </div>
          <div className="help-div-style">
            <TbSquareRoundedNumber3Filled className="text-[3rem] " />
            <PiPottedPlantFill className="text-[2rem]" />
            <h1 className="font-bold text-white">CHOOSE A PLAN</h1>
          </div>
          <div className="help-div-style">
            <TbSquareRoundedNumber4Filled className="text-[3rem] " />
            <FaMoneyBillTrendUp className="text-[2rem]" />
            <h1 className="font-bold text-white">FUND ACCOUNT</h1>
          </div>

          <div className="help-div-style">
            <TbSquareRoundedNumber5Filled className="text-[3rem] " />
            <PiChartLineUpBold className="text-[2rem]" />
            <h1 className="font-bold text-white">WE TRADE FOR YOU</h1>
          </div>
          <div className="help-div-style">
            <TbSquareRoundedNumber6Filled className="text-[3rem] " />
            <BsCashCoin className="text-[2rem]" />
            <h1 className="font-bold text-white">ENJOY PROFIT</h1>
          </div>
        </section>
      </article>
      <div className=" center-with-flex w-screen   min-h-[6rem] text-center my-[3rem]">
        <h2 className=" text-[1.3rem] font-bold text-center p-2 ">
          ENJOY OUR BEST PLANS{" "}
        </h2>

        <span className=" center-with-flex block animate-bounce z-0 rounded-full bg-[#03045e] p-2 h-[2rem] w-[2rem] mx-auto ">
          <PiArrowFatLinesDownFill className="text-white text-[1.5rem]" />
        </span>
      </div>
      <article className="article-style    ">
        {/* bf arrow */}
        <h1 className="text-center">Our Best Plan</h1>
        <div className="center-with-grid md:grid-cols-3 w-screen">
          <div className="center-with-flex  plan-style">
            <h1>plan 1</h1>
            <ul className="w-[90%] h-[80%]  mx-auto block">
              {starterPlan.map((data) => (
                <li key={data.id} className="plan-items">
                  {data.name} <span className="inline  ">{data.value}</span>
                </li>
              ))}
            </ul>
            <Link href="/plan-1" className="plan-link-style">
              CHOOSE PLAN <GoArrowUpRight className="inline" />
            </Link>
          </div>
          <div className="center-with-flex plan-style">
            <h1>plan 2</h1>
            <ul className="w-[80%] h-[80%]  mx-auto block">
              {starterPlan.map((data) => (
                <li key={data.id} className="plan-items">
                  {data.name} <span className="inline  ">{data.value}</span>
                </li>
              ))}
            </ul>
            <Link href="/plan-1" className="plan-link-style">
              CHOOSE PLAN <GoArrowUpRight className="inline" />
            </Link>
          </div>
          <div className="center-with-flex plan-style">
            <h1>plan 3</h1>
            <ul className="w-[80%] h-[80%]  mx-auto block">
              {starterPlan.map((data) => (
                <li key={data.id} className="plan-items">
                  {data.name} <span className="inline  ">{data.value}</span>
                </li>
              ))}
            </ul>
            <Link href="/plan-1" className="plan-link-style">
              CHOOSE PLAN <GoArrowUpRight className="inline" />
            </Link>
          </div>
        </div>
      </article>

      <article>
        <h1 className=" center-with-flex text-[1.5rem] uppercase  w-screen h-[4rem]  bg-[#001845] ">
          who we are
        </h1>
        <div>
          <div className=""></div>
        </div>
      </article>

      <article className="article-style center-with-flex   ">
        <h1 className="flex flex-row justify-center mr-auto my-[1rem] tracking-wide  p-3 text-left items-center text-[#03045e]  md:tracking-wide  font-bold underline underline-offset-4  decoration-2  text-[1.2rem] text-white bg-[#2b2d42] rounded-r-[2rem] h-[3rem] w-[75%]">
          Crypto News Updates
        </h1>
        <section className="grid grid-cols-1 w-[90%] h-[10rem] overflow-y-hidden">
          {
            <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 h-full w-full overflow-y-hidden">
              {allData.map((data) => (
                <li
                  key={data.id}
                  className="flex flex-col justify-between items-center gap-2 border-2 border-black w-full h-[4rem] bg-yellow-500"
                >
                  <div className="grid grid-col-1 bg-white p-2 w-full">
                    <h1 className="w-full underline text-[1rem]  text-black font-black my-2">
                      {data.title}
                    </h1>
                    <p className="text-black">{data.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          }
        </section>
      </article>

      <article className="article-style center-with-flex bg-green-500 ">
        <section className="md:px-[5em]  mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-20">
          <div className="mt-[4em]">
            <h2 className="mb-4 text-3xl font-medium tracking-tight text-gray-900">
              BullHarvest Testimonials
            </h2>
            <p className="mt-6 mb-6 max-w-3xl text-xl text-neutral-600">
              Discover the stories of investors who have chosen BullHarvest for
              their financial journey. Read what our clients have to say about
              their experiences:
            </p>
            <div className="min-w-screen grid grid-cols-1 md:grid-cols-3 gap-3  ">
              <div className="text-startlg:w-[70%]  bg-white text-[#03045e] text-[1rem] font-bold mx-auto  border-none gap-5 min-h-[17rem] shadow-gray-500 shadow-2xl rounded-[2rem] text-left p-3  w-[100%] ">
                <p className="mt-2 text-lg text-gray-700">
                  "BullHarvest has been a game-changer for me. The platform's
                  educational resources and insightful market analyses have
                  given me the knowledge and confidence to make informed
                  investment decisions. It's not just a platform; it's a
                  learning experience!"
                </p>
                <h2 className="text-lg font-semibold mt-4 leading-6 text-gray-900">
                  — Sarah Thompson, Investor since 2020
                </h2>
                <ImHappy2 className=" text-[2.5em] lg:text-[3em] rounded-full lg:mt-2 mt-2  mb-4 text-white p-2 bg-[#03045e]" />
              </div>

              <div className="text-startlg:w-[70%]  bg-white text-[#03045e] text-[1rem] font-bold mx-auto  border-none gap-5 min-h-[17rem] shadow-gray-500 shadow-2xl rounded-[2rem] text-left p-3  w-[100%] ">
                <p className="mt-2 text-lg text-gray-700">
                  "BullHarvest has become my trusted partner in financial
                  growth. The team's dedication to transparency, coupled with
                  their commitment to security, has created an environment where
                  I feel confident in managing my investments. Kudos to
                  BullHarvest for making investing a breeze."
                </p>
                <h2 className="text-lg font-semibold mt-4 leading-6 text-gray-900">
                  — Daniel Rodriguez, Active Trader
                </h2>
                <ImHappy2 className=" text-[2.5em] lg:text-[3em] rounded-full lg:mt-2 mt-2  mb-4 text-white p-2 bg-[#03045e]" />
              </div>

              <div className="text-startlg:w-[70%]  bg-white text-[#03045e] text-[1rem] font-bold mx-auto  border-none gap-5 min-h-[17rem] shadow-gray-500 shadow-2xl rounded-[2rem] text-left p-3  w-[100%] ">
                <p className="mt-2 text-lg text-gray-700">
                  "What sets BullHarvest apart is their commitment to
                  understanding individual needs. The personalized investment
                  strategy crafted for me has delivered exceptional results.
                  BullHarvest doesn’t just manage portfolios; they build
                  financial success stories."
                </p>
                <h2 className="text-lg font-semibold mt-4 leading-6 text-gray-900">
                  — Grace Chen, Long-Term Investor
                </h2>
                <ImHappy2 className=" text-[2.5em] lg:text-[3em] rounded-full lg:mt-2 mt-2  mb-4 text-white p-2 bg-[#03045e]" />
              </div>
            </div>
            <button className="plan-link-style text-center mt-10">
              See More
            </button>
          </div>
        </section>
      </article>
    </section>
  );

  return content;
}
