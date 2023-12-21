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
import { MdOutlinePayment } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import { IoBusinessOutline } from "react-icons/io5";
import { MdOutlineSyncProblem } from "react-icons/md";
import { RiEmotionHappyLine } from "react-icons/ri";
// number icon imports
import { TbSquareRoundedNumber1Filled } from "react-icons/tb";
import { TbSquareRoundedNumber2Filled } from "react-icons/tb";
import { TbSquareRoundedNumber3Filled } from "react-icons/tb";
import { TbSquareRoundedNumber4Filled } from "react-icons/tb";
import { TbSquareRoundedNumber5Filled } from "react-icons/tb";
import { TbSquareRoundedNumber6Filled } from "react-icons/tb";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { MdArrowOutward } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiBitcoinsv } from "react-icons/si";

import {
  AdvancedChart,
  CryptocurrencyMarket,
  TickerTape,
  MarketOverview,
} from "react-tradingview-embed";
import { MdOutlineMoreTime } from "react-icons/md";
import { ImQuotesLeft } from "react-icons/im";
import internal from "stream";

export default function Landing() {
  const starterPlan = [
    { name: "Interest", value: "20%", id: 1 },
    { name: "Investment", value: "$500-$5000", id: 2 },
    { name: "Capital Back", value: "Yes", id: 3 },
    { name: "Return Type", value: "Period", id: 4 },
    { name: "Number of Period", value: "5 Times", id: 5 },
    { name: "Profit Withdraw", value: "Anytime", id: 6 },
  ];

  const premium = [
    { name: "Interest", value: "130.1%", id: 1 },
    { name: "Investment", value: "$5000-$10000", id: 2 },
    { name: "Capital Back", value: "No", id: 3 },
    { name: "Return Type", value: "Period", id: 4 },
    { name: "Number of Period", value: "7 Times", id: 5 },
    { name: "Profit Withdraw", value: "Anytime", id: 6 },
  ];

  const gold = [
    { name: "Interest", value: "180%", id: 1 },
    { name: "Investment", value: "$10000-$50000", id: 2 },
    { name: "Capital Bank", value: "No", id: 3 },
    { name: "Return Type", value: "Period", id: 4 },
    { name: "Number of Period", value: "7 Times", id: 5 },
    { name: "Profit Withdraw", value: "Anytime", id: 6 },
  ];

  const consumedData = {
    feedMode: "all_symbols",
    isTransparent: false,
    displayMode: "regular",
    width: "480",
    height: "830",
    colorTheme: "light",
    locale: "en",
  };

  // const [sow, setShow] = useState(true);
  const [allData, setAllData] = useState([]);
  const [showDataA, setShowDataA] = useState(false);
  const [showDataB, setShowDataB] = useState(false);
  const [showDataC, setShowDataC] = useState(false);
  const [showDataD, setShowDataD] = useState(false);
  const [showDataE, setShowDataE] = useState(false);

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
    <section className="section-style bg-[#eae0c9] sm:bg-green-500 md:bg-green-500 lg:bg-yellow-500  xl:bg-brown-500 2xl:bg-black">
      <div
        className="div-style"
        style={{ backgroundImage: "url(../risebtc.jpg)" }}
      >
        <div className="w-full h-full bg-black  opacity-70">
          <article className=" mb-6 flex justify-center items-center z-0 h-[10rem] w-screen pl-[rem]  text-white ">
            <h2 className=" font-bold text-[1.9rem] w-[80%] leading-relaxed  mt-[8em] text-center lg:text-start ">
              {" "}
              Empowering Your Wealth
              <br /> Journey Today with
              <span className="mx-2 text-blue-500  p-1 font-bold  ">
                BullHarvest
              </span>{" "}
            </h2>
          </article>
          <div className=" mb-6 md:mt-2 lg:mt-2 mt-[8em] flex justify-center items-center z-0 h-[10rem]  pl-[rem]  text-white ">
            <p className=" font-normal text-[1.2rem] w-[80%]  tracking-wide  leading-relaxed  mt-[2em] text-left lg:text-start ">
              Trade across multiple markets with the
              <br /> most stable and reliable pricing in the industry.
            </p>
          </div>
          <div className="w-[98%] px-[4rem] mx-auto lg:items-start lg:justify-left flex flex-col md:flex-row lg:flex-row  lg:w-[50%] md:ml-[8em]  justify-between items-center ">
            <buttton className="w-full lg:w-[40%] text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  mb-2 md:mb-0 ">
              REGISTER
            </buttton>
            <buttton className="w-full lg:w-[40%] text-center transparent border hover:bg-green-700 text-white font-bold py-2 px-5 ">
              LOGIN
            </buttton>
          </div>
        </div>
      </div>
      <div>
        <TickerTape />
      </div>

      <div>
        <div className="text-white text-center bg-[#152238]">
          <h1 className=" mb-2   text-[1.5rem] text-white pt-[2em] pb-3 font-medium leading-8 text-gray-900">
            Instant Withdrawals, <br />
            <span>24/7</span>
          </h1>
          <p className="mb-6">
            Our withdrawals are carried out in seconds with no manual
            processing, including on weekends.
          </p>

          <p className="px-12 pb-9 text-blue-500">
            <a href="service">
              Learn more about deposit and withdrawals at BullHarvest
            </a>
          </p>
        </div>
      </div>

      <article className="min-h-[5rem] w-full mx-auto  ">
        <h1 className=" center-with-flex text-[1.5rem] uppercase font-black text-white  w-screen h-[4rem]   bg-[#03045e] ">
          who we are
        </h1>
        <div className=" justify-between  block   items-center  w-screen text-black">
          <div className="w-[100%]  my-auto">
            <Image
              src="../security-icon.svg"
              alt="security-icon"
              height={100}
              width={100}
              className="mx-auto my-auto  h-[9em] w-[6em]"
            />
          </div>
          <div className="mt-5 text-center">
            <h3 className="underline mb-2 underline-offset-8 text-lg font-semibold leading-6 text-gray-900">
              About BullHarvest Investment Company
            </h3>
            <p className="block w-[85%] my-auto text-center mx-auto p-3">
              {" "}
              Founded on the principles of financial excellence and strategic
              investing, BullHarvest Investment Company stands as a beacon of
              trust and proficiency in the realm of wealth management. Our
              commitment is to elevate your financial aspirations through
              meticulous planning, seasoned expertise, and unwavering
              dedication.
            </p>{" "}
          </div>
          <div className="mt-5 text-center">
            <h3 className="underline mb-3 underline-offset-8 text-lg font-semibold leading-6 text-gray-900">
              Our Mission
            </h3>
            <p className=" my-2 text-md text-gray-700 w-[80%] mx-auto p-3">
              Our mission is clear – to empower you on your financial journey.
              We're here to guide you, whether you're a new investor or looking
              to diversify your portfolio.
            </p>
          </div>
        </div>
      </article>

      <div></div>

      <article className="article-style center-with-flex ">
        <div className="w-full h-full ">
          <h1 className="w-screen h-[3rem] center-with-flex text-[1.2rem] uppercase text-center bg-white text-[#001845]  font-bold mt-[1rem]">
            How we benefits
          </h1>

          <div className="flex flex-col justify-between pt-2 items-center text-white min-h-[5rem] w-screen   list-none">
            <div className="min-w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 text-center   ">
              <div className="bg-white   text-[#03045e] text-[1rem] font-bold mx-auto rounded-medium  border-none gap-5 min-h-[7rem] shadow-gray-500 shadow-2xl rounded    w-[96%]">
                <MdOutlinePayment className=" text-[2.5em] lg:text-[3em] item-center mx-auto rounded-full lg:mt-16 mt-5  mb-3 text-white p-2 bg-[#03045e]" />
                <h1 className="pb-3 px-4 w-[50%] mx-auto ">
                  The transaction is bundled into a block.
                </h1>
              </div>

              <div className="bg-white   text-[#03045e] text-[1rem] font-bold mx-auto  border-none gap-5 min-h-[7rem] shadow-gray-500 shadow-2xl rounded    w-[96%]">
                <GrStatusGood className=" text-[2.5em] lg:text-[3em] item-center mx-auto rounded-full lg:mt-16 mt-5  mb-3 text-white p-2 bg-[#03045e]" />
                <h1 className="pb-3 px-4 w-[50%] mx-auto  ">
                  Miners verify whether the transaction is valid.
                </h1>
              </div>

              <div className="bg-white   text-[#03045e] text-[1rem] font-bold mx-auto  border-none gap-5 min-h-[7rem] shadow-gray-500 shadow-2xl rounded    w-[96%]">
                <IoBusinessOutline className=" text-[2.5em] lg:text-[3em] item-center mx-auto rounded-full lg:mt-16 mt-5  mb-3 text-white p-2 bg-[#03045e]" />
                <h1 className="pb-3 px-4 w-[50%] mx-auto ">
                  They select headers of the most recent block and insert it
                  into the new block as a "hash".
                </h1>
              </div>

              <div className="bg-white   text-[#03045e] text-[1rem] font-bold mx-auto  border-none gap-3 min-h-[7rem] shadow-gray-500 shadow-2xl rounded    w-[96%]">
                <MdOutlineSyncProblem className=" text-[2.5em] lg:text-[3em] item-center mx-auto rounded-full lg:mt-16 mt-5  mb-3 text-white p-2 bg-[#03045e]" />
                <h1 className="pb-3 px-4  w-[50%] mx-auto ">
                  They solve the mathematical problem.
                </h1>
              </div>

              <div className="bg-white md:col-span-2 lg:col-span-2  text-[#03045e] text-[1rem] font-bold mx-auto  border-none gap-5 min-h-[7rem] shadow-gray-500 shadow-2xl rounded    w-[96%]">
                <RiEmotionHappyLine className=" text-[2.5em] lg:text-[3em] item-center mx-auto rounded-full lg:mt-16 mt-5  mb-3 text-white p-2 bg-[#03045e]" />
                <h1 className="pb-3 px-4  w-[50%] mx-auto ">
                  When the solution is found, the new block is added to the
                  blockchain and then propagated throughout the network by this
                  producing profit hourly to investors account.
                </h1>
              </div>
            </div>
          </div>

          {/* <ul className="flex flex-col justify-between pt-2 items-center text-white min-h-[5rem] w-screen  bg-[#03045e] list-none">
            <li className="flex flex-col justify-between items-center text-center px-2 gap-2">
              {" "}
              <span className="flex justify-between items-center w-full px-7">
                <hr className="w-[5rem]" />
                <MdOutlineMoreTime className="" />
                <hr className="w-[5rem]" />
              </span>
              <p className="bg-white text-[#03045e] mb-2 font-bold">
                The transaction is bundled into a block.
              </p>
            </li>
            <li className="flex flex-col justify-between items-center  text-center px-2  gap-2">
              <span className="flex justify-between items-center w-full px-7">
                <hr className="w-[5rem]" />
                <MdOutlineMoreTime />
                <hr className="w-[5rem]" />
              </span>{" "}
              <p className="bg-white text-[#03045e] mb-2 font-bold">
                Miners verify whether the transaction is valid.
              </p>
            </li>
            <li className="flex flex-col justify-between items-center px-2 text-center  gap-2">
              <span className="flex justify-between items-center w-full px-7">
                <hr className="w-[5rem]" />
                <MdOutlineMoreTime />
                <hr className="w-[5rem]" />
              </span>{" "}
              <p className="bg-white text-[#03045e] mb-2 font-bold">
                They select headers of the most recent block and in sert it into
                the new block as a hash
              </p>
            </li>{" "}
            <li className="flex flex-col justify-between items-center text-center px-2 gap-2">
              <span className="flex justify-between items-center w-full px-7">
                <hr className="w-[5rem]" />
                <MdOutlineMoreTime />
                <hr className="w-[5rem]" />
              </span>{" "}
              <p className="bg-white text-[#03045e] mb-2 font-bold">
                They solve the mathematical problem.
              </p>
            </li>
            <span className="flex justify-between items-center w-full mb-3  px-2 px-7">
              <hr className="w-[5rem]" />
              <MdOutlineMoreTime />
              <hr className="w-[5rem]" />
            </span>
            <li className="flex flex-col justify-between items-center text-center px-2 gap-2">
              {" "}
              <p className="bg-white text-[#03045e] mb-2 font-bold">
                When the solution is found, the new block is added the
                blockchain and then propgated thoughout the network by this
                producing profit hourly to investors account.
              </p>
            </li>
          </ul> */}
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
        {/* <div className="flex justify-between items-center">
          <span>
            <GiPayMoney className="text-[#03045e]" />
          </span>
          <span>
            {" "}
            <GiReceiveMoney className="text-[#03045e]" />
          </span>
          <span>
            <GiTakeMyMoney className="text-[#03045e]" />
          </span>
        </div> */}
        <div className="flex justify-between items-center border-y-2 border-[#03045e] ">
          <h2 className=" text-[1.2rem]  uppercase  text-[#03045e] font-bold text-center p-2 ">
            enjoy our best plans{" "}
          </h2>
          {/* <div>
            <Image
              src="bestplan.svg"
              width={50}
              height={50}
              className=" rounded-full text-[#03045e] p-1"
            />
          </div> */}
        </div>

        <span className=" center-with-flex block animate-bounce z-0 rounded-full bg-[#03045e] p-2 h-[2rem] w-[2rem] mx-auto mt-5 ">
          <PiArrowFatLinesDownFill className="text-white text-[1.5rem]" />
        </span>
      </div>
      <article className="article-style  mb-5  ">
        {/* bf arrow */}
        {/* <h1 className="underline mb-4 underline-offset-8 text-lg font-semibold leading-6 text-gray-900">
          Our Best Plan
        </h1> */}
        <div className="center-with-grid md:grid-cols-3 w-screen">
          <div className="center-with-flex  plan-style">
            <h1 className=" underline font-black tracking-wider decoration-2 underline-offset-2">
              Starter plan
            </h1>
            <ul className="w-[92%] h-[98%]  mx-auto block">
              {starterPlan.map((data) => (
                <li key={data.id} className="plan-items">
                  {data.name}: <span className="inline  ">{data.value}</span>
                </li>
              ))}
            </ul>
            <Link href="/plan-1" className="plan-link-style">
              CHOOSE PLAN <GoArrowUpRight className="inline" />
            </Link>
          </div>
          <div className=" center-with-flex plan-style">
            <h1 className=" underline font-black tracking-wider decoration-2 underline-offset-2">
              Premium
            </h1>
            <ul className="w-[92%] h-[98%]  mx-auto block">
              {premium.map((data) => (
                <li key={data.id} className="plan-items">
                  {data.name}: <span className="inline  ">{data.value}</span>
                </li>
              ))}
            </ul>
            <Link href="/plan-1" className="plan-link-style">
              CHOOSE PLAN <GoArrowUpRight className="inline" />
            </Link>
          </div>
          <div className="center-with-flex plan-style">
            <h1 className=" underline font-black tracking-wider decoration-2 underline-offset-2">
              Gold
            </h1>
            <ul className="w-[92%] h-[98%]  mx-auto block">
              {gold.map((data) => (
                <li key={data.id} className="plan-items">
                  {data.name}: <span className="inline  ">{data.value}</span>
                </li>
              ))}
            </ul>
            <Link href="/plan-1" className="plan-link-style">
              CHOOSE PLAN <GoArrowUpRight className="inline" />
            </Link>
          </div>
        </div>
      </article>
      {/* <article className="text-center article-style">
        <h1 className=" mr-auto my-[1rem] tracking-wide    text-[#03045e]  md:tracking-wide  font-bold underline underline-offset-4  decoration-2  text-[1.2rem]  rounded-r-[2rem] h-[2rem] w-[100%]">
          Market Overview
        </h1>
        <div className="mx-auto ">
          <div className="w-100% mx-auto">
            <MarketOverview widgetProps={{ width: "100%" }} />
          </div>
        </div>
      </article> */}

      <article className=" text-center center-with-flex w-full min-h-[8rem]  ">
        <h1 className=" flex justify-between items-center w-[70%] mx-auto px-[1rem] border-y-2 border-[#03045e]  ">
          <span className=" text-[2rem] font-bold uppercase text-[#03045e] ">
            Bitcoin
          </span>
          <SiBitcoinsv className="text-[2rem] text-[#03045e] " />
        </h1>
        <div className="center-with-flex   w-screen mx-auto min-h-[15rem] bg-[#eae0c9]  px-[2rem]  ">
          <div className="w-screen ">
            <button
              onClick={() => setShowDataA(!showDataA)}
              href=""
              className=" bitcoin-button-style   "
            >
              <span className="bitcoin-text-style "> What is bitcoin </span>
            </button>
            <div
              className={`${
                showDataA
                  ? "block w-full w-[90%] px-5  py-3 z-10 tracking-tight bg-white"
                  : "hidden"
              }`}
            >
              <p>
                Bitcoin is one of the most popular types of cryptocurrencies,
                which are digital mediums of exchange that exist solely online.
                Bitcoin runs on a decentralized computer network or distributed
                ledger that tracks transactions in the cryptocurrency. When
                computers on the network verify and process transactions, new
                bitcoins are created, or mined. These networked computers, or
                miners, process the transaction in exchange for a payment in
                Bitcoin. Bitcoin is powered by blockchain, which is the
                technology that powers many cryptocurrencies. A blockchain is a
                decentralized ledger of all the transactions across a network.
                Groups of approved transactions together form a block and are
                joined to create a chain. Think of it as a long public record
                that functions almost like a long running receipt. Bitcoin
                mining is the process of adding a block to the chain.
              </p>

              <button
                onClick={() => setShowDataA(!showDataA)}
                className=" button-style-close"
              >
                close
              </button>
            </div>
          </div>
          <div className="w-screen  ">
            <button
              onClick={() => setShowDataB(!showDataB)}
              href=""
              className="  bitcoin-button-style"
            >
              <span className=" bitcoin-text-style">
                {" "}
                How bitcoin mining works{" "}
              </span>
            </button>
            <div
              className={`${
                showDataB
                  ? "block w-full w-[90%] px-5  py-3  tracking-tight bg-white"
                  : "hidden"
              }`}
            >
              <p>
                In order to successfully add a block, Bitcoin miners compete to
                solve extremely complex math problems that require the use of
                expensive computers and enormous amounts of electricity. To
                complete the mining process, miners must be first to arrive at
                the correct or closest answer to the question. The process of
                guessing the correct number (hash) is known as proof of work.
                Miners guess the target hash by randomly making as many guesses
                as quickly as they can, which requires major computing power.
                The difficulty only increases as more miners join the network.
                The computer hardware required is known as application-specific
                integrated circuits, or ASICs, and can cost up to $10,000. ASICs
                consume huge amounts of electricity, which has drawn criticism
                from environmental groups and limits the profitability of
                miners. If a miner is able to successfully add a block to the
                blockchain, they will receive 6.25 bitcoins as a reward. The
                reward amount is cut in half roughly every four years, or every
                210,000 blocks. As of November 2023, Bitcoin traded at around
                $36,400, making 6.25 bitcoins worth $227,500.
              </p>
              <button
                onClick={() => setShowDataB(!showDataB)}
                href=""
                className="  button-style-close"
              >
                close
              </button>
            </div>
          </div>
          <div className="w-screen">
            <button
              onClick={() => setShowDataC(!showDataC)}
              href=""
              className="  bitcoin-button-style"
            >
              <span className="bitcoin-text-style">
                {" "}
                Bitcoin mining rewards over time
              </span>
            </button>
            <div
              className={`${
                showDataC
                  ? "block w-full w-[90%] px-5  py-3  tracking-tight bg-white"
                  : "hidden"
              }`}
            >
              <p>
                The reward for mining 1 block is halved every 210,000 blocks, or
                about every 4 years. It depends. Even if Bitcoin miners are
                successful, it’s not clear that their efforts will end up being
                profitable due to the high upfront costs of equipment and the
                ongoing electricity costs. The electricity for one ASIC can use
                the same amount of electricity as half a million PlayStation 3
                devices, according to a As the difficulty and complexity of
                Bitcoin mining has increased, the computing power required has
                also gone up. Bitcoin mining consumes about 147 terawatt-hours
                of electricity each year, more than most countries, according to
                the Cambridge Bitcoin Electricity Consumption Index. You’d need
                9 years’ worth of the typical U.S. household’s electricity to
                mine just one bitcoin as of August 2021. One way to share some
                of the high costs of mining is by joining a mining pool. Pools
                allow miners to share resources and add more capability, but
                shared resources mean shared rewards, so the potential payout is
                less when working through a pool. The volatility of Bitcoin’s
                price also makes it difficult to know exactly how much you’re
                working for.
              </p>
              <button
                onClick={() => setShowDataC(!showDataC)}
                href=""
                className="  button-style-close"
              >
                {" "}
                close
              </button>
            </div>
          </div>
          <div className="w-screen">
            <button
              onClick={() => setShowDataD(!showDataD)}
              href=""
              className=" bitcoin-button-style"
            >
              <span className=" bitcoin-text-style">
                {" "}
                Risks of Bitcoin mining
              </span>
            </button>
            <div
              className={`${
                showDataD
                  ? "block w-full w-[90%] px-5  py-3  tracking-tight bg-white"
                  : "hidden"
              }`}
            >
              <div>
                <h2 className="text-[1.5rem]  font-bold">Price volatility:</h2>
                <p>
                  {" "}
                  Bitcoin’s price has varied widely since it was introduced in
                  2009. Since just November 2021, Bitcoin has traded for less
                  than $20,000 and nearly as high as $69,000. This kind of
                  volatility makes it difficult for miners to know if their
                  reward will outweigh the high costs of mining.
                </p>
              </div>
              <div>
                <h2 className="text-[1.5rem]  font-bold">Regulation:</h2>
                <p>
                  {" "}
                  Very few governments have embraced cryptocurrencies such as
                  Bitcoin, and many are more likely to view them skeptically
                  because the currencies operate outside government control.
                  There is always the risk that governments could outlaw the
                  mining of Bitcoin or cryptocurrencies altogether as China did
                  in 2021, citing financial risks and increased speculative
                  trading.
                </p>
              </div>
              <button
                onClick={() => setShowDataD(!showDataD)}
                href=""
                className=" button-style-close"
              >
                close
              </button>
            </div>
          </div>
          <div className="w-screen">
            <button
              onClick={() => setShowDataE(!showDataE)}
              href=""
              className="bitcoin-button-style"
            >
              <span className=" text-[1.2rem] font-bold   text-white">
                {" "}
                Taxes on Bitcoin mining
              </span>
            </button>
            <div
              className={`    ${
                showDataE
                  ? "block w-full w-[90%] px-5  py-3   tracking-tight bg-white"
                  : "hidden"
              }`}
            >
              <p>
                It’s important to remember the impact that taxes can have on
                Bitcoin mining. The IRS has been looking to crack down on owners
                and traders of cryptocurrencies as the asset prices have
                ballooned in recent years. Here are the key tax considerations
                to keep in mind for Bitcoin mining.
              </p>
              <div>
                <span>Are you a business:</span>
                <p>
                  If Bitcoin mining is your business, you may be able to deduct
                  expenses you incur for tax purposes. Revenue would be the
                  value of the bitcoins you earn. But if mining is a hobby for
                  you, it’s not likely you’ll be able to deduct expenses.
                </p>
              </div>
              <div>
                <span>Mined bitcoin is income:</span>
                <p>
                  If you’re successfully able to mine Bitcoin or other
                  cryptocurrencies, the fair market value of the currencies at
                  the time of receipt will be taxed at ordinary income rates.
                </p>
              </div>
              <div>
                <span>Capital gains:</span>
                <p>
                  If you sell bitcoins at a price above where you received them,
                  that qualifies as a capital gain, which would be taxed the
                  same way it would for traditional assets such as stocks or
                  bonds.
                </p>
              </div>
              <button
                onClick={() => setShowDataE(!showDataE)}
                href=""
                className="button-style-close"
              >
                close
              </button>
            </div>
          </div>
        </div>
      </article>

      <br />
      {/* <article className="article-style center-with-flex   ">
        <h1 className=" mr-auto my-[1rem] tracking-wide  p-3 text-left items-left text-[#03045e]  md:tracking-wide  font-bold underline underline-offset-4  decoration-2  text-[1.2rem]  rounded-r-[2rem] h-[2rem] w-[75%]">
          Crypto News Updates
        </h1>
        <section className="grid grid-cols-1 w-[95%] h-[10rem] overflow-y-hidden">
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
      </article> */}

      <article className="h-[29rem]  my-1 my-auto relative ">
        <div className="h-[12rem] my-auto absolute">
          <h2 className=" text-[1.2rem] font-bold underline  text-center w-full  text-gray-900">
            Checkout our clients recent feedbacks and ratings
          </h2>

          <div className="w-screen min-h-full  center-with-flex">
            <Carousel
              autoPlay
              autoFocus
              swipeable
              stopOnHover
              showArrows
              showIndicators
              useKeyboardArrows
              emulateTouch
              dynamicHeight={false}
              infiniteLoop
              // showStatus
              interval={5000}
              className="min-h-[74%]  w-[50%] w-full   pt-7  "
            >
              <div className=" center-with-flex  bg-white text-[#03045e]  mx-auto my-auto border-none my-auto   mni-h-[90%] shadow-gray-500 shadow-2xl rounded-[2rem] text-center  w-[85%] sm:w-[70%] lg:w-[45%] xl:w-35% p-3">
                <p className="  text-gray-700 h-full w-full p-2">
                  <ImQuotesLeft className="text-[1.2rem] ml-4 mb-2" />
                  "BullHarvest has been a game-changer for me. The platform's
                  educational resources and insightful market analyses have
                  given me the knowledge and confidence to make informed
                  investment decisions. It's not just a platform; it's a
                  learning experience!"
                </p>
                <div className="w-[60%] mx-auto flex  justify-center items-center">
                  <IoMdStar className="text-yellow-500" />
                  <IoMdStar className="text-yellow-500" />
                  <IoMdStar className="text-yellow-500" />
                  <IoMdStar className="text-yellow-500" />
                  <IoMdStar className="text-yellow-500" />
                </div>
                <h2 className="text-lg font-semibold my-2 leading-6 text-gray-900 px-3">
                  — Sarah Thompson —
                </h2>
              </div>

              <div className=" center-with-flex  bg-white text-[#03045e]  mx-auto my-auto border-none  min-h-[5rem] shadow-gray-500 shadow-2xl rounded-[2rem] text-center  w-[90%] sm:w-[50%] lg:w-[45%] xl:w-35%  py-4 px-3">
                <p className="  w-full h-full  text-gray-700 p-2">
                  <ImQuotesLeft className="text-[1.2rem] " />
                  "BullHarvest has become my trusted partner in financial
                  growth. The team's dedication to transparency, coupled with
                  their commitment to security, has created an environment where
                  I feel confident in managing my investments. Kudos to
                  BullHarvest for making investing a breeze."
                </p>
                <div className="w-[60%] mx-auto flex  justify-center items-center">
                  <IoMdStar className="text-yellow-500" />
                  <IoMdStar className="text-yellow-500" />
                  <IoMdStar className="text-yellow-500" />
                  <IoMdStar className="text-yellow-500" />
                  <IoMdStarHalf className="text-yellow-500" />
                </div>
                <h2 className="text-lg font-semibold my-2 leading-6 text-gray-900 px-3">
                  — Daniel Rodriguez —
                </h2>
              </div>

              <div className=" center-with-flex  bg-white text-[#03045e]  mx-auto my-auto border-none  mni-h-[21rem] shadow-gray-500 shadow-2xl rounded-[2rem] text-center w-[90%] sm:w-[50%] lg:w-[45%] xl:w-35%   p-2">
                <p className="mt-2  text-gray-700  p-3">
                  <ImQuotesLeft className="text-[1.2rem] " />
                  "What sets BullHarvest apart is their commitment to
                  understanding individual needs. The personalized investment
                  strategy crafted for me has delivered exceptional results.
                  BullHarvest doesn’t just manage portfolios; they build
                  financial success stories."
                </p>
                <div className="w-[60%] mx-auto flex  justify-center items-center">
                  <IoMdStar className="text-yellow-500" />
                  <IoMdStar className="text-yellow-500" />
                  <IoMdStar className="text-yellow-500" />
                  <IoMdStar className="text-yellow-500" />
                  <IoMdStar className="text-yellow-500" />
                </div>
                <h2 className="text-lg font-semibold my-2  leading-6 text-gray-900 px-3">
                  — Grace Chen —
                </h2>
              </div>
            </Carousel>
          </div>
        </div>
      </article>
      {/* <br />
      <hr /> */}
      <article className="article-style">
        <div className="bg-[#03045e]">
          <article className="  flex justify-center items-center  h-[10rem] w-screen  text-white ">
            <h2 className=" font-light text-[1.5rem] w-[80%] leading-10 underline  text-center">
              {" "}
              The numbers that make up BullHarvest
            </h2>
          </article>
          <div className="text-white mt-[2em] text-center pb-6 px-2">
            <p className="leading-relaxed text-[1.3rem] mb-4 px-[3rem] mx-auto w-[70%]">
              From trading volume to the number of active clients, we are happy
              to share out the figure that makes us one of the world's leading
              crypto investment company.
            </p>
            <Link href="">Learn more</Link>
          </div>
          <div>
            <div className="text-center text-white mb-8">
              <h1 className="font-extralight text-[1.8rem]">$2.9 billion</h1>
              <p className="font-extralight">
                Trading volume from Jan-Dec 2023
              </p>
            </div>

            <div className="text-center text-white mb-8">
              <h1 className="font-extralight text-[1.8rem]">488,245</h1>
              <p className="font-extralight">
                Active clients from Jan-Dec 2023
              </p>
            </div>

            <div className="text-center text-white mb-8">
              <h1 className="font-extralight text-[1.8rem]">$1.71 billion</h1>
              <p className="font-extralight">
                Clients withdrawals from Jan-Dec 2023
              </p>
            </div>

            <div className="text-center text-white pb-8">
              <h1 className="font-extralight text-[1.8rem]">$94.8 million</h1>
              <p className="font-extralight">Partner rewards in Q3 2023</p>
            </div>
          </div>
        </div>
      </article>

      <article className="article-style center-with-flex gap-4">
        <div className=" center-with-flex    text-center  text-neutral-600 w-[95%]">
          <h2 className=" font-bold text-[1.8rem] w-[95%] mx-auto text-[#03045e] underline  text-center">
            {" "}
            Ready to get started?
          </h2>
          <p className="px-4  text-[#03045e]  text-[1.2rem] ">
            It only takes a few steps to get your account set up and ready for
            trading
          </p>
          <Link
            href="register"
            className="bg-[#03045e] text-white w-full font-bold py-3 px-4 w-full rounded-[2rem] my-2"
          >
            REGISTER NOW <MdArrowOutward className="inline text-[1.5rem]" />
          </Link>
        </div>
      </article>
    </section>
  );

  return content;
}
