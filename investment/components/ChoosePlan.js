'use client';
import { useState } from 'react';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import { IoMdArrowDropupCircle } from 'react-icons/io';
import { GrBitcoin } from 'react-icons/gr';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { TiArrowRight } from 'react-icons/ti';
import { GiPayMoney } from 'react-icons/gi';
import { FaEthereum } from 'react-icons/fa';
import { HiCurrencyDollar } from 'react-icons/hi2';
import copy from 'clipboard-copy';
import { FaCopy } from 'react-icons/fa';
import { GrStatusGood } from 'react-icons/gr';

export default function ChoosePlan() {
  // starter plan
  const standard = [
    { name: 'Interest', value: '6%', id: 1 },
    { name: 'Minimum Amount', value: '$1,000', id: 2 },
    { name: 'Maximum Amount', value: '$4,900', id: 3 },
    { name: 'ROI', value: '6% Daily', id: 4 },
    { name: 'Referral Commision', value: '4%', id: 5 },
  ];

  const [starterBtc, setStarterBtc] = useState(true);
  const [starterEth, setStarterEth] = useState(true);
  const [starterUsdt, setStarterUsdt] = useState(true);
  const [starterTrx, setStarterTrx] = useState(true);
  const [isCopied, setIscopied] = useState(false);

  // Gold plan

  const [goldBtc, setGoldBtc] = useState(true);
  const [goldEth, setGoldEth] = useState(true);
  const [goldUsdt, setGoldUsdt] = useState(true);
  const [goldTrx, setGoldTrx] = useState(true);

  // premium plan

  const [premiumBtc, setPremiumBtc] = useState(true);
  const [premiumEth, setPremiumEth] = useState(true);
  const [premiumUsdt, setPremiumUsdt] = useState(true);
  const [premiumTrx, setPremiumTrx] = useState(true);

  const copyWallet = async (wall_addr) => {
    try {
      setIscopied(true);
      await copy(wall_addr);
      // alert('Wallet address copied');
    } catch (error) {
      if (error) {
        alert('Unable to copy wallet address, please try again later');
      }
    } finally {
      setIscopied(false);
    }
  };

  const content = (
    <section className="min-h-screen w-full text-[#03045e]  mt-[6.9rem] mb-[9em]  rounded-b-lg  flex flex-col">
      <div className="w-[96%] p-1 text-center bg-white   mx-auto  mt-[1rem]   text-black     rounded-[2rem] ">
        <h1 className="font-bold ">Warning </h1>
        <p className="p-3 bg-[#ffdf64] ">
          Please ensure that your investment value is in accordance or conforms
          with your chosen plan, if your investment value is above your chosen
          plan you will be automatically switched to the higher plan with their
          potential benefits, if you invest bellow your chosen plan will
          automatically attract your the lower plan that suites your investment
          else if your investment doesn’t match any plan, you will have to
          upgrade your investment to your choice of plan.{' '}
        </p>
      </div>
      <div>
        <h2 className="text-lg font-medium mt-5 text-md tecxt-center text-gray-700 flex items-center justify-center mb-3 ">
          Make choice of your best plan
        </h2>
        <div className="2xl:mx-18 md:px-8 lg:px-8 center-with-grid md:grid-cols-3 w-screen">
          {/* $$$$$$$$$$$$$ */}
          {/*  STARTER PLAN  */}
          {/* $$$$$$$$$$$$$ */}
          <div className="mb-5 text-white bg-[#03045e] text-[1rem] font-bold mx-auto  border-white gap-5 min-h-[17rem] shadow-gray-500 shadow-2xl rounded-[1rem] text-left p-2  w-[94%]    ">
            <h1 className="text-[1.2rem] font-bold text-center ">
              Standard Plan
            </h1>
            <div className="plan">
              <h3>
                Minimum Amount <span className="float-right">$1000</span>
              </h3>
              <h3>
                Maximum Amount <span className="float-right">$4,900</span>
              </h3>
              <h3>
                ROI <span className="float-right">6% Daily</span>
              </h3>
              <h3>
                Referral Commision <span className="float-right">4% </span>
              </h3>
              <h3>
                Withdraw <span className="float-right">Anytime</span>
              </h3>
            </div>
            {/* starter btc */}
            <div>
              <div className=" w-full   btc border-y-2 border-y-[#03045e] py-2   px-2">
                <div className="btc-btn  w-full">
                  <div className="     flex justify-between items-center w-full mx-auto px-[3rem]  bg-[#03045e]  border-y-2 border-y-[#03045e]    py-2">
                    <GiPayMoney className="text-white" />
                    <TiArrowRight className="animate-ping   text-white  " />
                    <RiSecurePaymentFill className="text-white" />
                    <TiArrowRight className="animate-ping   text-white" />
                    <GrBitcoin className="text-white" />{' '}
                  </div>
                  <div className="     flex justify-between items-center w-full mx-auto   py-2">
                    <button
                      onClick={() => {
                        setStarterBtc(!starterBtc);
                      }}
                      className="  flex flex-col justify-between item-center      bg-[#03045e] w-[99%]  px-1 py-1   border-white  border-2      text-white  mx-auto">
                      <span className="w-[99%]  mx-auto">
                        Click to choose bitcoin wallet
                      </span>
                      <span className="w-[99%]  mx-auto">
                        {starterBtc ? (
                          <IoMdArrowDropdownCircle className="inline   animate-pulse  ml-3" />
                        ) : (
                          <IoMdArrowDropupCircle className="inline  ml-3" />
                        )}
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  className={`${
                    starterBtc ? 'hidden' : 'block   bg-white    text-[#03045e]'
                  }    `}>
                  <p className="wallet-text-style ">
                    Please copy the bitcoin (btc) wallet address bellow and make
                    deposit of your investment value in bitcoin through your
                    crypto wallet. (starter plan range ($50 - $500))
                  </p>
                  <p className="mx-auto border-2 border-[#03045e]  flex flex-col justify-between text-center items-center      p-3">
                    <span className="bg-[#03045e] p-2 text-white mx-auto items-center">
                      Bitcoin address :
                    </span>{' '}
                  </p>
                  <br />
                  <div className="  center-with-flex  w-full">
                    <div className="   flex flex-col justify-between items-center     w-[99%] text-center mx-auto">
                      <span className=" w-[80%] text-center mx-auto border-2 p-2 ">
                        19S3BzZG3bf5EkL4iWF
                        <br />
                        4HxdwanKkXp14tM
                      </span>
                      <button
                        onClick={() => {
                          copyWallet('19S3BzZG3bf5EkL4iWF4HxdwanKkXp14tM');
                        }}
                        className={`flex justify-between items-center text-black  w-[50%] px-2 py-1  rounded-[2rem] mb-3 shadow-2xl shadow-gray-500  my-4   ${
                          isCopied ? 'bg-green-500' : 'bg-red-500'
                        }`}>
                        {isCopied
                          ? `  Wallet copied ${(
                              <GrStatusGood className="inline text-white" />
                            )}`
                          : 'Copy Wallet'}
                        <FaCopy />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END OF STARTER BTC */}
            {/* starter Etheruem */}
            <div>
              <div className=" w-full   btc border-y-2 border-y-[#03045e] py-2   px-2">
                <div className="btc-btn  w-full">
                  {/* <div className="     flex justify-between items-center w-full mx-auto px-[3rem]  bg-[#03045e]  border-y-2 border-y-[#03045e]    py-2">
                    <GiPayMoney className="text-white" />
                    <TiArrowRight className="animate-ping   text-white  " />
                    <RiSecurePaymentFill className="text-white" />
                    <TiArrowRight className="animate-ping   text-white" />{" "}
                  </div> */}
                  <div className="     flex justify-between items-center w-full mx-auto   py-2">
                    <button
                      onClick={() => {
                        setStarterEth(!starterEth);
                      }}
                      className="bg-[#03045e] w-[99%]  px-1 py-1   font-bold  border-white  border-2   shadow-2xl shadow-gray  text-white  mx-auto">
                      {/* <FaEthereum className="text-white inline mr-2" /> */}
                      <span className="w-[99%]  mx-auto">
                        Click to choose Etheruem wallet
                      </span>
                      <span className="w-[99%]  mx-auto">
                        {starterEth ? (
                          <IoMdArrowDropdownCircle className="inline   animate-pulse  ml-3" />
                        ) : (
                          <IoMdArrowDropupCircle className="inline  ml-3" />
                        )}
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  className={`${
                    starterEth
                      ? 'hidden'
                      : 'block    bg-white    text-[#03045e]'
                  }    `}>
                  <p className="wallet-text-style">
                    Please copy the Etheruem (Etheruem) wallet address bellow
                    and make deposit of your investment value in Etheruem
                    through your crypto wallet. (starter plan range ($50 -
                    $500))
                  </p>
                  <p className="border-2 border-[#03045e]  flex flex-col justify-between items-center  text-center    p-3">
                    <span className="bg-[#03045e] p-2 text-white">
                      Etheruem address :
                    </span>
                  </p>
                  <br />
                  {/* start */}
                  <div className="  center-with-flex  w-full">
                    <div className="   flex flex-col justify-between items-center     w-[99%] text-center mx-auto">
                      <span className=" w-[80%] text-center mx-auto border-2 p-2  text-black ">
                        19S3BzZG3bf5EkL4iWF
                        <br />
                        4HxdwanKkXp14tM
                      </span>
                      <button
                        onClick={() => {
                          copyWallet('19S3BzZG3bf5EkL4iWF4HxdwanKkXp14tM');
                        }}
                        className="flex justify-between items-center  w-[50%] px-2 py-1   text-black    bg-green-500 rounded-[2rem] mb-3 shadow-2xl shadow-gray-500  my-4">
                        Copy wallet
                        <FaCopy />
                      </button>
                    </div>
                  </div>
                  {/* end */}
                </div>
              </div>
            </div>
            {/* end of starter ethereum */}
            {/* starter USDT */}
            <div>
              <div className=" w-full   btc border-y-2 border-y-[#03045e] py-2   px-2">
                <div className="btc-btn  w-full">
                  {/* <div className="     flex justify-between items-center w-full mx-auto px-[3rem]  bg-[#03045e]  border-y-2 border-y-[#03045e]    py-2">
                    <GiPayMoney className="text-white" />
                    <TiArrowRight className="animate-ping   text-white  " />
                    <RiSecurePaymentFill className="text-white" />
                    <TiArrowRight className="animate-ping   text-white" />
                    <HiCurrencyDollar className="text-white" />{" "}
                  </div> */}
                  <div className="     flex justify-between items-center w-full mx-auto   py-2">
                    <button
                      onClick={() => {
                        setStarterUsdt(!starterUsdt);
                      }}
                      className="bg-[#03045e] w-[99%]  px-1 py-1     border-white  border-2      text-white  mx-auto">
                      {/* <HiCurrencyDollar className="text-white   inline" /> */}
                      <span className="w-[99%]  mx-auto">
                        Click to choose USDT wallet
                      </span>
                      <span className="w-[99%]  mx-auto">
                        {starterUsdt ? (
                          <IoMdArrowDropdownCircle className="inline   animate-pulse  ml-3" />
                        ) : (
                          <IoMdArrowDropupCircle className="inline  ml-3" />
                        )}
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  className={`${
                    starterUsdt ? 'hidden' : 'block bg-white '
                  }    `}>
                  <p className="wallet-text-style ">
                    Please copy the USDT (USDT) wallet address bellow and make
                    deposit of your investment value in Etheruem through your
                    crypto wallet. (starter plan range ($50 - $500))
                  </p>
                  <p className="border-2 border-[#03045e]  flex flex-col justify-between items-center  text-center    p-3">
                    <span className="bg-[#03045e] p-2 text-white">
                      USDT address :
                    </span>{' '}
                  </p>
                  <br />
                  {/* start */}
                  <div className="  center-with-flex  w-full">
                    <div className="   flex flex-col justify-between items-center     w-[99%] text-center mx-auto">
                      <span className=" w-[80%] text-center mx-auto border-2 p-2 text-black">
                        19S3BzZG3bf5EkL4iWF
                        <br />
                        4HxdwanKkXp14tM
                      </span>
                      <button
                        onClick={() => {
                          copyWallet('19S3BzZG3bf5EkL4iWF4HxdwanKkXp14tM');
                        }}
                        className="flex justify-between items-center text-black  w-[50%] px-2 py-1 bg-green-500 rounded-[2rem] mb-3 shadow-2xl shadow-gray-500  my-4">
                        Copy wallet
                        <FaCopy />
                      </button>
                    </div>
                  </div>
                  {/* end */}
                </div>
              </div>
            </div>
            {/* end starter usdt */}
            {/* starter TRX */}
            <div>
              <div className=" w-full   btc border-y-2 border-y-[#03045e] py-2   px-2">
                <div className="btc-btn  w-full">
                  {/* <div className="     flex justify-between items-center w-full mx-auto px-[3rem]  bg-[#03045e]  border-y-2 border-y-[#03045e]    py-2">
                    <GiPayMoney className="text-white" />
                    <TiArrowRight className="animate-ping   text-white  " />
                    <RiSecurePaymentFill className="text-white" />
                    <TiArrowRight className="animate-ping   text-white" />
                    <HiCurrencyDollar className="text-white" />{" "}
                  </div> */}
                  <div className="     flex justify-between items-center w-full mx-auto   py-2">
                    <button
                      onClick={() => {
                        setStarterTrx(!starterTrx);
                      }}
                      className="  flex flex-col justify-between item-center      bg-[#03045e] w-[99%]  px-1 py-1   border-white  border-2      text-white  mx-auto">
                      <span className="w-[99%]  mx-auto">
                        Click to choose TRX wallet
                      </span>
                      <span className="w-[99%]  mx-auto">
                        {starterTrx ? (
                          <IoMdArrowDropdownCircle className="inline   animate-pulse  ml-3" />
                        ) : (
                          <IoMdArrowDropupCircle className="inline  ml-3" />
                        )}
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  className={`${
                    starterTrx ? 'hidden' : 'block   bg-white    text-[#03045e]'
                  }    `}>
                  <p className="wallet-text-style">
                    Please copy the TRX (TRX) wallet address bellow and make
                    deposit of your investment value in Etheruem through your
                    crypto wallet. (starter plan range ($50 - $500))
                  </p>
                  <p className="mx-auto border-2 border-[#03045e]  flex flex-col justify-between text-center items-center      p-3">
                    <span className="bg-[#03045e] p-2 text-white mx-auto items-center">
                      TRX address :
                    </span>{' '}
                  </p>
                  <br />
                  {/* start */}
                  <div className="  center-with-flex  w-full">
                    <div className="   flex flex-col justify-between items-center     w-[99%] text-center mx-auto">
                      <span className=" w-[80%] text-center mx-auto border-2 p-2 text-black">
                        19S3BzZG3bf5EkL4iWF
                        <br />
                        4HxdwanKkXp14tM
                      </span>
                      <button
                        onClick={() => {
                          copyWallet('19S3BzZG3bf5EkL4iWF4HxdwanKkXp14tM');
                        }}
                        className="flex justify-between items-center text-black  w-[50%] px-2 py-1 bg-green-500 rounded-[2rem] mb-3 shadow-2xl shadow-gray-500  my-4">
                        Copy wallet
                        <FaCopy />
                      </button>
                    </div>
                  </div>
                  {/* end */}
                </div>
              </div>
            </div>
          </div>
          {/* $$$$$$$$$$$$$ */}
          {/* END OF STARTER PLAN  */}
          {/* $$$$$$$$$$$$$ */}
          {/*  GOLD PLAN  */}
          {/* $$$$$$$$$$$$$ */}
          <div className="mb-5 text-white bg-[#03045e] text-[1rem] font-bold mx-auto  border-white gap-5 min-h-[17rem] shadow-gray-500 shadow-2xl rounded-[1rem] text-left p-2  w-[94%]    ">
            <h1 className="text-[1.2rem] font-bold text-center ">Mega Plan</h1>
            <div className="plan">
              <h3>
                Minimum Amount <span className="float-right">$5,000</span>
              </h3>
              <h3>
                Maximum Amount <span className="float-right">$19,900</span>
              </h3>
              <h3>
                ROI <span className="float-right">8% Daily</span>
              </h3>
              <h3>
                Referral Commision <span className="float-right">8% </span>
              </h3>
              <h3>
                Withdraw <span className="float-right">Anytime</span>
              </h3>
            </div>
            {/* Gold btc */}
            <div>
              <div className=" w-full   btc border-y-2 border-y-[#03045e] py-2   px-2">
                <div className="btc-btn  w-full">
                  <div className="     flex justify-between items-center w-full mx-auto px-[3rem]  bg-[#03045e]  border-y-2 border-y-[#03045e]    py-2">
                    <GiPayMoney className="text-white" />
                    <TiArrowRight className="animate-ping   text-white  " />
                    <RiSecurePaymentFill className="text-white" />
                    <TiArrowRight className="animate-ping   text-white" />
                    <GrBitcoin className="text-white" />{' '}
                  </div>
                  <div className="     flex justify-between items-center w-full mx-auto   py-2">
                    <button
                      onClick={() => {
                        setGoldBtc(!goldBtc);
                      }}
                      className="  flex flex-col justify-between item-center      bg-[#03045e] w-[99%]  px-1 py-1   border-white  border-2      text-white  mx-auto">
                      <span className="w-[99%]  mx-auto">
                        Click to choose bitcoin wallet
                      </span>
                      <span className="w-[99%]  mx-auto">
                        {goldBtc ? (
                          <IoMdArrowDropdownCircle className="inline   animate-pulse  ml-3" />
                        ) : (
                          <IoMdArrowDropupCircle className="inline  ml-3" />
                        )}
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  className={`${
                    goldBtc ? 'hidden' : 'block   bg-white    text-[#03045e]'
                  }    `}>
                  <p className="wallet-text-style ">
                    Please copy the bitcoin (btc) wallet address bellow and make
                    deposit of your investment value in bitcoin through your
                    crypto wallet. (starter plan range ($5000 - $10000))
                  </p>
                  <p className="mx-auto border-2 border-[#03045e]  flex flex-col justify-between text-center items-center      p-3">
                    <span className="bg-[#03045e] p-2 text-white mx-auto items-center">
                      Bitcoin address :
                    </span>{' '}
                  </p>
                  <br />
                  {/* start */}
                  <div className="  center-with-flex  w-full">
                    <div className="   flex flex-col justify-between items-center     w-[99%] text-center mx-auto">
                      <span className=" w-[80%] text-center mx-auto border-2 p-2 text-black">
                        19S3BzZG3bf5EkL4iWF
                        <br />
                        4HxdwanKkXp14tM
                      </span>
                      <button
                        onClick={() => {
                          copyWallet('19S3BzZG3bf5EkL4iWF4HxdwanKkXp14tM');
                        }}
                        className="flex justify-between items-center text-black  w-[50%] px-2 py-1 bg-green-500 rounded-[2rem] mb-3 shadow-2xl shadow-gray-500  my-4">
                        Copy wallet
                        <FaCopy />
                      </button>
                    </div>
                  </div>
                  {/* end */}
                </div>
              </div>
            </div>
            {/* END OF Gold BTC */}
            {/* Gold Etheruem */}
            <div>
              <div className=" w-full   btc border-y-2 border-y-[#03045e] py-2   px-2">
                <div className="btc-btn  w-full">
                  {/* <div className="     flex justify-between items-center w-full mx-auto px-[3rem]  bg-[#03045e]  border-y-2 border-y-[#03045e]    py-2">
                    <GiPayMoney className="text-white" />
                    <TiArrowRight className="animate-ping   text-white  " />
                    <RiSecurePaymentFill className="text-white" />
                    <TiArrowRight className="animate-ping   text-white" />{" "}
                  </div> */}
                  <div className="     flex justify-between items-center w-full mx-auto   py-2">
                    <button
                      onClick={() => {
                        setGoldEth(!goldEth);
                      }}
                      className="bg-[#03045e] w-[99%]  px-1 py-1   font-bold  border-white  border-2   shadow-2xl shadow-gray  text-white  mx-auto">
                      {/* <FaEthereum className="text-white inline mr-2" /> */}
                      <span className="w-[99%]  mx-auto">
                        Click to choose Etheruem wallet
                      </span>
                      <span className="w-[99%]  mx-auto">
                        {goldEth ? (
                          <IoMdArrowDropdownCircle className="inline   animate-pulse  ml-3" />
                        ) : (
                          <IoMdArrowDropupCircle className="inline  ml-3" />
                        )}
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  className={`${
                    goldEth ? 'hidden' : 'block    bg-white    text-[#03045e]'
                  }    `}>
                  <p className="wallet-text-style">
                    Please copy the Etheruem (Etheruem) wallet address bellow
                    and make deposit of your investment value in Etheruem
                    through your crypto wallet. (starter plan range ($5000 -
                    $10000))
                  </p>
                  <p className="border-2 border-[#03045e]  flex flex-col justify-between items-center  text-center    p-3">
                    <span className="bg-[#03045e] p-2 text-white">
                      Etheruem address :
                    </span>{' '}
                  </p>
                  <br />
                  {/* start */}
                  <div className="  center-with-flex  w-full">
                    <div className="   flex flex-col justify-between items-center     w-[99%] text-center mx-auto">
                      <span className=" w-[80%] text-center mx-auto border-2 p-2 text-black">
                        19S3BzZG3bf5EkL4iWF
                        <br />
                        4HxdwanKkXp14tM
                      </span>
                      <button
                        onClick={() => {
                          copyWallet('19S3BzZG3bf5EkL4iWF4HxdwanKkXp14tM');
                        }}
                        className="flex justify-between items-center text-black  w-[50%] px-2 py-1 bg-green-500 rounded-[2rem] mb-3 shadow-2xl shadow-gray-500  my-4">
                        Copy wallet
                        <FaCopy />
                      </button>
                    </div>
                  </div>
                  {/* end */}
                </div>
              </div>
            </div>
            {/* end of gold ethereum */}
            {/* gold USDT */}
            <div>
              <div className=" w-full   btc border-y-2 border-y-[#03045e] py-2   px-2">
                <div className="btc-btn  w-full">
                  {/* <div className="     flex justify-between items-center w-full mx-auto px-[3rem]  bg-[#03045e]  border-y-2 border-y-[#03045e]    py-2">
                    <GiPayMoney className="text-white" />
                    <TiArrowRight className="animate-ping   text-white  " />
                    <RiSecurePaymentFill className="text-white" />
                    <TiArrowRight className="animate-ping   text-white" />
                    <HiCurrencyDollar className="text-white" />{" "}
                  </div> */}
                  <div className="     flex justify-between items-center w-full mx-auto   py-2">
                    <button
                      onClick={() => {
                        setGoldUsdt(!goldUsdt);
                      }}
                      className="bg-[#03045e] w-[99%]  px-1 py-1     border-white  border-2      text-white  mx-auto">
                      {/* <HiCurrencyDollar className="text-white   inline" /> */}
                      <span className="w-[99%]  mx-auto">
                        Click to choose USDT wallet
                      </span>
                      <span className="w-[99%]  mx-auto">
                        {goldUsdt ? (
                          <IoMdArrowDropdownCircle className="inline   animate-pulse  ml-3" />
                        ) : (
                          <IoMdArrowDropupCircle className="inline  ml-3" />
                        )}
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  className={`${goldUsdt ? 'hidden' : 'block bg-white '}    `}>
                  <p className="wallet-text-style ">
                    Please copy the USDT (USDT) wallet address bellow and make
                    deposit of your investment value in Etheruem through your
                    crypto wallet. (starter plan range ($5000 - $10000))
                  </p>
                  <p className="border-2 border-[#03045e]  flex flex-col justify-between items-center  text-center    p-3">
                    <br />
                    <span className="bg-[#03045e] p-2 text-white">
                      USDT address :
                    </span>{' '}
                  </p>
                  {/* start */}
                  <div className="  center-with-flex  w-full">
                    <div className="   flex flex-col justify-between items-center     w-[99%] text-center mx-auto">
                      <span className=" w-[80%] text-center mx-auto border-2 p-2 text-black">
                        19S3BzZG3bf5EkL4iWF
                        <br />
                        4HxdwanKkXp14tM
                      </span>
                      <button
                        onClick={() => {
                          copyWallet('19S3BzZG3bf5EkL4iWF4HxdwanKkXp14tM');
                        }}
                        className="flex justify-between items-center text-black  w-[50%] px-2 py-1 bg-green-500 rounded-[2rem] mb-3 shadow-2xl shadow-gray-500  my-4">
                        Copy wallet
                        <FaCopy />
                      </button>
                    </div>
                  </div>
                  {/* end */}
                </div>
              </div>
            </div>
            {/* end gold usdt */}
            {/* gold TRX */}
            <div>
              <div className=" w-full   btc border-y-2 border-y-[#03045e] py-2   px-2">
                <div className="btc-btn  w-full">
                  {/* <div className="     flex justify-between items-center w-full mx-auto px-[3rem]  bg-[#03045e]  border-y-2 border-y-[#03045e]    py-2">
                    <GiPayMoney className="text-white" />
                    <TiArrowRight className="animate-ping   text-white  " />
                    <RiSecurePaymentFill className="text-white" />
                    <TiArrowRight className="animate-ping   text-white" />
                    <HiCurrencyDollar className="text-white" />{" "}
                  </div> */}
                  <div className="     flex justify-between items-center w-full mx-auto   py-2">
                    <button
                      onClick={() => {
                        setGoldTrx(!goldTrx);
                      }}
                      className="  flex flex-col justify-between item-center      bg-[#03045e] w-[99%]  px-1 py-1   border-white  border-2      text-white  mx-auto">
                      <span className="w-[99%]  mx-auto">
                        Click to choose TRX wallet
                      </span>
                      <span className="w-[99%]  mx-auto">
                        {goldTrx ? (
                          <IoMdArrowDropdownCircle className="inline   animate-pulse  ml-3" />
                        ) : (
                          <IoMdArrowDropupCircle className="inline  ml-3" />
                        )}
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  className={`${
                    goldTrx ? 'hidden' : 'block   bg-white    text-[#03045e]'
                  }    `}>
                  <p className="wallet-text-style">
                    Please copy the TRX (TRX) wallet address bellow and make
                    deposit of your investment value in Etheruem through your
                    crypto wallet. (starter plan range ($5000 - $10000))
                  </p>
                  <p className="mx-auto border-2 border-[#03045e]  flex flex-col justify-between text-center items-center      p-3">
                    <span className="bg-[#03045e] p-2 text-white mx-auto items-center">
                      TRX address :
                    </span>{' '}
                  </p>
                  <br />
                  {/* start */}
                  <div className="  center-with-flex  w-full">
                    <div className="   flex flex-col justify-between items-center     w-[99%] text-center mx-auto">
                      <span className=" w-[80%] text-center mx-auto border-2 p-2 text-black">
                        19S3BzZG3bf5EkL4iWF
                        <br />
                        4HxdwanKkXp14tM
                      </span>
                      <button
                        onClick={() => {
                          copyWallet('19S3BzZG3bf5EkL4iWF4HxdwanKkXp14tM');
                        }}
                        className="flex justify-between items-center text-black  w-[50%] px-2 py-1 bg-green-500 rounded-[2rem] mb-3 shadow-2xl shadow-gray-500  my-4">
                        Copy wallet
                        <FaCopy />
                      </button>
                    </div>
                  </div>
                  {/* end */}
                </div>
              </div>
            </div>
          </div>
          {/* $$$$$$$$$$$$$ */}
          {/* END OF GOLD PLAN  */}
          {/* $$$$$$$$$$$$$ */}
          {/*  PREMIUM PLAN  */}
          {/* $$$$$$$$$$$$$ */}
          <div className="mb-5 text-white bg-[#03045e] text-[1rem] font-bold mx-auto  border-white gap-5 min-h-[17rem] shadow-gray-500 shadow-2xl rounded-[1rem] text-left p-2  w-[94%]    ">
            <h1 className="text-[1.2rem] font-bold text-center ">
              VIP Plan
            </h1>
            <div className="plan">
            <h3>
                Minimum Amount <span className="float-right">$20,000</span>
              </h3>
              <h3>
                Maximum Amount <span className="float-right">Unlimited</span>
              </h3>
              <h3>
                ROI <span className="float-right">10% Daily</span>
              </h3>
              <h3>
                Referral Commision <span className="float-right">4% </span>
              </h3>
              <h3>
                Withdraw <span className="float-right">Anytime</span>
              </h3>
            </div>
            {/* Premium btc */}
            <div>
              <div className=" w-full   btc border-y-2 border-y-[#03045e] py-2   px-2">
                <div className="btc-btn  w-full">
                  <div className="     flex justify-between items-center w-full mx-auto px-[3rem]  bg-[#03045e]  border-y-2 border-y-[#03045e]    py-2">
                    <GiPayMoney className="text-white" />
                    <TiArrowRight className="animate-ping   text-white  " />
                    <RiSecurePaymentFill className="text-white" />
                    <TiArrowRight className="animate-ping   text-white" />
                    <GrBitcoin className="text-white" />{' '}
                  </div>
                  <div className="     flex justify-between items-center w-full mx-auto   py-2">
                    <button
                      onClick={() => {
                        setPremiumBtc(!premiumBtc);
                      }}
                      className="  flex flex-col justify-between item-center      bg-[#03045e] w-[99%]  px-1 py-1   border-white  border-2      text-white  mx-auto">
                      <span className="w-[99%]  mx-auto">
                        Click to choose bitcoin wallet
                      </span>
                      <span className="w-[99%]  mx-auto">
                        {premiumBtc ? (
                          <IoMdArrowDropdownCircle className="inline   animate-pulse  ml-3" />
                        ) : (
                          <IoMdArrowDropupCircle className="inline  ml-3" />
                        )}
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  className={`${
                    premiumBtc ? 'hidden' : 'block   bg-white    text-[#03045e]'
                  }    `}>
                  <p className="wallet-text-style ">
                    Please copy the bitcoin (btc) wallet address bellow and make
                    deposit of your investment value in bitcoin through your
                    crypto wallet. (starter plan range ($10000 - $50000))
                  </p>
                  <p className="mx-auto border-2 border-[#03045e]  flex flex-col justify-between text-center items-center      p-3">
                    <span className="bg-[#03045e] p-2 text-white mx-auto items-center">
                      Bitcoin address :
                    </span>{' '}
                  </p>
                  <br />
                  {/* start */}
                  <div className="  center-with-flex  w-full">
                    <div className="   flex flex-col justify-between items-center     w-[99%] text-center mx-auto">
                      <span className=" w-[80%] text-center mx-auto border-2 p-2 text-black">
                        19S3BzZG3bf5EkL4iWF
                        <br />
                        4HxdwanKkXp14tM
                      </span>
                      <button
                        onClick={() => {
                          copyWallet('19S3BzZG3bf5EkL4iWF4HxdwanKkXp14tM');
                        }}
                        className="flex justify-between items-center text-black  w-[50%] px-2 py-1 bg-green-500 rounded-[2rem] mb-3 shadow-2xl shadow-gray-500  my-4">
                        Copy wallet
                        <FaCopy />
                      </button>
                    </div>
                  </div>
                  {/* end */}
                </div>
              </div>
            </div>
            {/* END OF Premium BTC */}
            {/* Premium Etheruem */}
            <div>
              <div className=" w-full   btc border-y-2 border-y-[#03045e] py-2   px-2">
                <div className="btc-btn  w-full">
                  {/* <div className="     flex justify-between items-center w-full mx-auto px-[3rem]  bg-[#03045e]  border-y-2 border-y-[#03045e]    py-2">
                    <GiPayMoney className="text-white" />
                    <TiArrowRight className="animate-ping   text-white  " />
                    <RiSecurePaymentFill className="text-white" />
                    <TiArrowRight className="animate-ping   text-white" />{" "}
                  </div> */}
                  <div className="     flex justify-between items-center w-full mx-auto   py-2">
                    <button
                      onClick={() => {
                        setPremiumEth(!premiumEth);
                      }}
                      className="bg-[#03045e] w-[99%]  px-1 py-1   font-bold  border-white  border-2   shadow-2xl shadow-gray  text-white  mx-auto">
                      {/* <FaEthereum className="text-white inline mr-2" /> */}
                      <span className="w-[99%]  mx-auto">
                        Click to choose Etheruem wallet
                      </span>
                      <span className="w-[99%]  mx-auto">
                        {premiumEth ? (
                          <IoMdArrowDropdownCircle className="inline   animate-pulse  ml-3" />
                        ) : (
                          <IoMdArrowDropupCircle className="inline  ml-3" />
                        )}
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  className={`${
                    premiumEth
                      ? 'hidden'
                      : 'block    bg-white    text-[#03045e]'
                  }    `}>
                  <p className="wallet-text-style">
                    Please copy the Etheruem (Etheruem) wallet address bellow
                    and make deposit of your investment value in Etheruem
                    through your crypto wallet. (starter plan range ($10000 -
                    $50000))
                  </p>
                  <p className="border-2 border-[#03045e]  flex flex-col justify-between items-center  text-center    p-3">
                    <span className="bg-[#03045e] p-2 text-white">
                      Etheruem address :
                    </span>{' '}
                  </p>
                  <br />
                  {/* start */}
                  <div className="  center-with-flex  w-full">
                    <div className="   flex flex-col justify-between items-center     w-[99%] text-center mx-auto">
                      <span className=" w-[80%] text-center mx-auto border-2 p-2 text-black">
                        19S3BzZG3bf5EkL4iWF
                        <br />
                        4HxdwanKkXp14tM
                      </span>
                      <button
                        onClick={() => {
                          copyWallet('19S3BzZG3bf5EkL4iWF4HxdwanKkXp14tM');
                        }}
                        className="flex justify-between items-center text-black  w-[50%] px-2 py-1 bg-green-500 rounded-[2rem] mb-3 shadow-2xl shadow-gray-500  my-4">
                        Copy wallet
                        <FaCopy />
                      </button>
                    </div>
                  </div>
                  {/* end */}
                </div>
              </div>
            </div>
            {/* end of premium ethereum */}
            {/* premium USDT */}
            <div>
              <div className=" w-full   btc border-y-2 border-y-[#03045e] py-2   px-2">
                <div className="btc-btn  w-full">
                  {/* <div className="     flex justify-between items-center w-full mx-auto px-[3rem]  bg-[#03045e]  border-y-2 border-y-[#03045e]    py-2">
                    <GiPayMoney className="text-white" />
                    <TiArrowRight className="animate-ping   text-white  " />
                    <RiSecurePaymentFill className="text-white" />
                    <TiArrowRight className="animate-ping   text-white" />
                    <HiCurrencyDollar className="text-white" />{" "}
                  </div> */}
                  <div className="     flex justify-between items-center w-full mx-auto   py-2">
                    <button
                      onClick={() => {
                        setPremiumUsdt(!premiumUsdt);
                      }}
                      className="bg-[#03045e] w-[99%]  px-1 py-1     border-white  border-2      text-white  mx-auto">
                      {/* <HiCurrencyDollar className="text-white   inline" /> */}
                      <span className="w-[99%]  mx-auto">
                        Click to choose USDT wallet
                      </span>
                      <span className="w-[99%]  mx-auto">
                        {premiumUsdt ? (
                          <IoMdArrowDropdownCircle className="inline   animate-pulse  ml-3" />
                        ) : (
                          <IoMdArrowDropupCircle className="inline  ml-3" />
                        )}
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  className={`${
                    premiumUsdt ? 'hidden' : 'block bg-white '
                  }    `}>
                  <p className="wallet-text-style ">
                    Please copy the USDT (USDT) wallet address bellow and make
                    deposit of your investment value in Etheruem through your
                    crypto wallet. (starter plan range ($10000 - $50000))
                  </p>
                  <p className="border-2 border-[#03045e]  flex flex-col justify-between items-center  text-center    p-3">
                    <br />
                    <span className="bg-[#03045e] p-2 text-white">
                      USDT address :
                    </span>{' '}
                  </p>
                  {/* start */}
                  <div className="  center-with-flex  w-full">
                    <div className="   flex flex-col justify-between items-center     w-[99%] text-center mx-auto">
                      <span className=" w-[80%] text-center mx-auto border-2 p-2 text-black">
                        19S3BzZG3bf5EkL4iWF
                        <br />
                        4HxdwanKkXp14tM
                      </span>
                      <button
                        onClick={() => {
                          copyWallet('19S3BzZG3bf5EkL4iWF4HxdwanKkXp14tM');
                        }}
                        className="flex justify-between items-center text-black  w-[50%] px-2 py-1 bg-green-500 rounded-[2rem] mb-3 shadow-2xl shadow-gray-500  my-4">
                        Copy wallet
                        <FaCopy />
                      </button>
                    </div>
                  </div>
                  {/* end */}
                </div>
              </div>
            </div>
            {/* end gold usdt */}
            {/* gold TRX */}
            <div>
              <div className=" w-full   btc border-y-2 border-y-[#03045e] py-2   px-2">
                <div className="btc-btn  w-full">
                  {/* <div className="     flex justify-between items-center w-full mx-auto px-[3rem]  bg-[#03045e]  border-y-2 border-y-[#03045e]    py-2">
                    <GiPayMoney className="text-white" />
                    <TiArrowRight className="animate-ping   text-white  " />
                    <RiSecurePaymentFill className="text-white" />
                    <TiArrowRight className="animate-ping   text-white" />
                    <HiCurrencyDollar className="text-white" />{" "}
                  </div> */}
                  <div className="     flex justify-between items-center w-full mx-auto   py-2">
                    <button
                      onClick={() => {
                        setPremiumTrx(!premiumTrx);
                      }}
                      className="  flex flex-col justify-between item-center      bg-[#03045e] w-[99%]  px-1 py-1   border-white  border-2      text-white  mx-auto">
                      <span className="w-[99%]  mx-auto">
                        Click to choose TRX wallet
                      </span>
                      <span className="w-[99%]  mx-auto">
                        {premiumTrx ? (
                          <IoMdArrowDropdownCircle className="inline   animate-pulse  ml-3" />
                        ) : (
                          <IoMdArrowDropupCircle className="inline  ml-3" />
                        )}
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  className={`${
                    premiumTrx ? 'hidden' : 'block   bg-white    text-[#03045e]'
                  }    `}>
                  <p className="wallet-text-style">
                    Please copy the TRX (TRX) wallet address bellow and make
                    deposit of your investment value in Etheruem through your
                    crypto wallet. (starter plan range ($10000 - $50000))
                  </p>
                  <p className="mx-auto border-2 border-[#03045e]  flex flex-col justify-between text-center items-center      p-3">
                    <span className="bg-[#03045e] p-2 text-white mx-auto items-center">
                      TRX address :
                    </span>{' '}
                  </p>
                  <br />
                  {/* start */}
                  <div className="  center-with-flex  w-full">
                    <div className="   flex flex-col justify-between items-center     w-[99%] text-center mx-auto">
                      <span className=" w-[80%] text-center mx-auto border-2 p-2 text-black">
                        19S3BzZG3bf5EkL4iWF
                        <br />
                        4HxdwanKkXp14tM
                      </span>
                      <button
                        onClick={() => {
                          copyWallet('19S3BzZG3bf5EkL4iWF4HxdwanKkXp14tM');
                        }}
                        className="flex justify-between items-center text-black  w-[50%] px-2 py-1 bg-green-500 rounded-[2rem] mb-3 shadow-2xl shadow-gray-500  my-4">
                        Copy wallet
                        <FaCopy />
                      </button>
                    </div>
                  </div>
                  {/* end */}
                </div>
              </div>
            </div>
          </div>
          {/* $$$$$$$$$$$$$ */}
          {/* END OF PREMIUM PLAN  */}
          {/* $$$$$$$$$$$$$ */}
        </div>
      </div>{' '}
    </section>
  );

  return content;
}
