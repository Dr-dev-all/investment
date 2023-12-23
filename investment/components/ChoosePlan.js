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

export default function ChoosePlan() {
  // starter plan

  const [starterBtc, setStarterBtc] = useState(false);
  const [starterEth, setStarterEth] = useState(false);
  const [starterUsdt, setStarterUsdt] = useState(false);
  const [starterTrx, setStarterTrx] = useState(false);

  // Gold plan

  const [goldBtc, setGoldBtc] = useState(false);
  const [goldEth, setGoldEth] = useState(false);
  const [goldUsdt, setGoldUsdt] = useState(false);
  const [goldTrx, setGoldTrx] = useState(false);

  // premium plan

  const [premiumBtc, setPremiumBtc] = useState(false);
  const [premiumEth, setPremiumEth] = useState(false);
  const [premiumUsdt, setPremiumUsdt] = useState(false);
  const [premiumTrx, setPremiumTrx] = useState(false);

  const content = (
    <section className='min-h-screen w-full text-[#03045e]  mt-[6.9rem] mb-[9em]  rounded-b-lg  flex flex-col'>
      <div className='w-full p-1 text-center bg-white text-black '>
        <h1>Warning: </h1>
        <p className='p-3 '>
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
        <h2 className='text-lg font-medium mt-5 text-md tecxt-center text-gray-700 flex items-center justify-center mb-3 '>
          Make choice of your best plan
        </h2>
        {/* $$$$$$$$$$$$$ */}
        {/*  STARTER PLAN  */}
        {/* $$$$$$$$$$$$$ */}
        <div className='mb-5 bg-white text-[#03045e] text-[1rem] font-bold mx-auto  border-none gap-5 min-h-[17rem] shadow-gray-500 shadow-2xl rounded-[1rem] text-left p-2  w-[94%]'>
          <h1 className='text-[1.2rem] font-bold text-center '>Starter Plan</h1>
          <div className='plan'>
            <h3>
              Interest <span className='float-right'>20%</span>
            </h3>
            <h3>
              Investment <span className='float-right'>$50 - $500</span>
            </h3>
            <h3>
              Withdraw <span className='float-right'>Anytime</span>
            </h3>
          </div>

          {/* starter btc */}
          <div>
            <div className=' w-full   btc border-y-2 border-y-[#03045e] py-2   px-2'>
              <div className='btc-btn  w-full'>
                <div className='     flex justify-between items-center w-full mx-auto px-[3rem]  bg-[#03045e]  border-y-2 border-y-[#03045e]    py-2'>
                  <GiPayMoney className='text-white' />
                  <TiArrowRight className='animate-ping   text-white  ' />
                  <RiSecurePaymentFill className='text-white' />
                  <TiArrowRight className='animate-ping   text-white' />
                  <GrBitcoin className='text-white' />{' '}
                </div>

                <div className='     flex justify-between items-center w-full mx-auto   py-2'>
                  <button
                    onClick={() => {
                      setStarterBtc(!starterBtc);
                    }}
                    className='bg-[#03045e] w-[90%]  px-2 py-1  text-[1.2rem] font-bold  border-white  border-2      text-white  mx-auto'>
                    Invest bitcoin (BTC)
                    {starterBtc ? (
                      <IoMdArrowDropdownCircle className='inline   animate-pulse  ml-3' />
                    ) : (
                      <IoMdArrowDropupCircle className='inline  ml-3' />
                    )}
                  </button>
                </div>
              </div>
              <div className={`${starterBtc ? 'hidden' : 'block'}    `}>
                <p className='border-2 text-center p-1'>
                  Please copy the bitcoin (btc) wallet address bellow and make
                  deposit of your investment value in bitcoin through your
                  crypto wallet. (starter plan range ($50 - $500))
                </p>
                <p className='mx-auto border-2 border-[#03045e]  flex flex-col justify-between text-center items-center      p-3'>
                  <span className='bg-[#03045e] p-2 text-white mx-auto items-center'>
                    Bitcoin address :
                  </span>{' '}
                  19S3BzZG3bf5EkL4iWF
                  <br />
                  4HxdwanKkXp14tM
                </p>
              </div>
            </div>
          </div>
          {/* END OF STARTER BTC */}
          {/* starter Etheruem */}
          <div>
            <div className=' w-full   btc border-y-2 border-y-[#03045e] py-2   px-2'>
              <div className='btc-btn  w-full'>
                <div className='     flex justify-between items-center w-full mx-auto px-[3rem]  bg-[#03045e]  border-y-2 border-y-[#03045e]    py-2'>
                  <GiPayMoney className='text-white' />
                  <TiArrowRight className='animate-ping   text-white  ' />
                  <RiSecurePaymentFill className='text-white' />
                  <TiArrowRight className='animate-ping   text-white' />
                  <FaEthereum className='text-white' />{' '}
                </div>

                <div className='     flex justify-between items-center w-full mx-auto   py-2'>
                  <button
                    onClick={() => {
                      setStarterEth(!starterEth);
                    }}
                    className='bg-[#03045e] w-[90%]  px-2 py-1  text-[1.2rem] font-bold  border-white  border-2      text-white  mx-auto'>
                    Invest Etheruem (ETH)
                    {starterEth ? (
                      <IoMdArrowDropdownCircle className='inline   animate-pulse  ml-3' />
                    ) : (
                      <IoMdArrowDropupCircle className='inline  ml-3' />
                    )}
                  </button>
                </div>
              </div>
              <div className={`${starterEth ? 'hidden' : 'block'}    `}>
                <p className='border-2 text-center p-1'>
                  Please copy the Etheruem (Etheruem) wallet address bellow and
                  make deposit of your investment value in Etheruem through your
                  crypto wallet. (starter plan range ($50 - $500))
                </p>
                <p className='border-2 border-[#03045e]  flex flex-col justify-between items-center  text-center    p-3'>
                  <span className='bg-[#03045e] p-2 text-white'>
                    Etheruem address :
                  </span>{' '}
                  0x3096cD7ae641E6dc4aABc3
                  <br />
                  3887454C233cbEA102
                </p>
              </div>
            </div>
          </div>
          {/* end of starter ethereum */}
          {/* starter USDT */}
          <div>
            <div className=' w-full   btc border-y-2 border-y-[#03045e] py-2   px-2'>
              <div className='btc-btn  w-full'>
                <div className='     flex justify-between items-center w-full mx-auto px-[3rem]  bg-[#03045e]  border-y-2 border-y-[#03045e]    py-2'>
                  <GiPayMoney className='text-white' />
                  <TiArrowRight className='animate-ping   text-white  ' />
                  <RiSecurePaymentFill className='text-white' />
                  <TiArrowRight className='animate-ping   text-white' />
                  <HiCurrencyDollar className='text-white' />{' '}
                </div>

                <div className='     flex justify-between items-center w-full mx-auto   py-2'>
                  <button
                    onClick={() => {
                      setStarterUsdt(!starterUsdt);
                    }}
                    className='bg-[#03045e] w-[90%]  px-2 py-1  text-[1.2rem] font-bold  border-white  border-2      text-white  mx-auto'>
                    Invest USDT (USDT)
                    {starterUsdt ? (
                      <IoMdArrowDropdownCircle className='inline   animate-pulse  ml-3' />
                    ) : (
                      <IoMdArrowDropupCircle className='inline  ml-3' />
                    )}
                  </button>
                </div>
              </div>
              <div className={`${starterUsdt ? 'hidden' : 'block'}    `}>
                <p className='border-2 text-center p-1'>
                  Please copy the USDT (USDT) wallet address bellow and make
                  deposit of your investment value in Etheruem through your
                  crypto wallet. (starter plan range ($50 - $500))
                </p>
                <p className='border-2 border-[#03045e]  flex flex-col justify-between items-center   text-center   p-3'>
                  <span className='bg-[#03045e] p-2 text-white'>
                    Etheruem address :
                  </span>{' '}
                  TVZaNnUTc9Tr6JxwimL
                  <br />
                  td7bfR3UT6ds5sJ
                </p>
              </div>
            </div>
          </div>
          {/* end starter usdt */}
          {/* starter TRX */}
          <div>
            <div className=' w-full   btc border-y-2 border-y-[#03045e] py-2   px-2'>
              <div className='btc-btn  w-full'>
                <div className='     flex justify-between items-center w-full mx-auto px-[3rem]  bg-[#03045e]  border-y-2 border-y-[#03045e]    py-2'>
                  <GiPayMoney className='text-white' />
                  <TiArrowRight className='animate-ping   text-white  ' />
                  <RiSecurePaymentFill className='text-white' />
                  <TiArrowRight className='animate-ping   text-white' />
                  <HiCurrencyDollar className='text-white' />{' '}
                </div>

                <div className='     flex justify-between items-center w-full mx-auto   py-2'>
                  <button
                    onClick={() => {
                      setStarterTrx(!starterTrx);
                    }}
                    className='bg-[#03045e] w-[90%]  px-2 py-1  text-[1.2rem] font-bold  border-white  border-2      text-white  mx-auto'>
                    Invest TRX (TRX)
                    {starterTrx ? (
                      <IoMdArrowDropdownCircle className='inline   animate-pulse  ml-3' />
                    ) : (
                      <IoMdArrowDropupCircle className='inline  ml-3' />
                    )}
                  </button>
                </div>
              </div>
              <div className={`${starterTrx ? 'hidden' : 'block'}    `}>
                <p className='border-2 text-center p-1'>
                  Please copy the TRX (TRX) wallet address bellow and make
                  deposit of your investment value in Etheruem through your
                  crypto wallet. (starter plan range ($50 - $500))
                </p>
                <p className='border-2 border-[#03045e]  flex flex-col justify-between items-center   text-center   p-3'>
                  <span className='bg-[#03045e] p-2 text-white'>
                    TRX address :
                  </span>{' '}
                  TVZaNnUTc9Tr6JxwimLtd
                  <br />
                  7bfR3UT6ds5sJ
                </p>
              </div>
            </div>
          </div>
          <div className='border-1 flex flex-col justify-between items-center   text-center   p-3'>
            <button className='bg-green-500 p-2 text-white mt-2'>Done</button>
          </div>
        </div>
        {/* $$$$$$$$$$$$$ */}
        {/* END OF STARTER PLAN  */}
        {/* $$$$$$$$$$$$$ */}

        {/*  GOLD PLAN  */}
        {/* $$$$$$$$$$$$$ */}
        <div className='mb-5 bg-white text-[#03045e] text-[1rem] font-bold mx-auto  border-none gap-5 min-h-[17rem] shadow-gray-500 shadow-2xl rounded-[1rem] text-left p-2  w-[94%]'>
          <h1 className='text-[1.2rem] font-bold text-center '>Gold Plan</h1>
          <div className='plan'>
            <h3>
              Interest <span className='float-right'>130.1%</span>
            </h3>
            <h3>
              Investment <span className='float-right'>$5000 - $10000</span>
            </h3>
            <h3>
              Withdraw <span className='float-right'>Anytime</span>
            </h3>
          </div>

          {/* gold btc */}
          <div>
            <div className=' w-full   btc border-y-2 border-y-[#03045e] py-2   px-2'>
              <div className='btc-btn  w-full'>
                <div className='     flex justify-between items-center w-full mx-auto px-[3rem]  bg-[#03045e]  border-y-2 border-y-[#03045e]    py-2'>
                  <GiPayMoney className='text-white' />
                  <TiArrowRight className='animate-ping   text-white  ' />
                  <RiSecurePaymentFill className='text-white' />
                  <TiArrowRight className='animate-ping   text-white' />
                  <GrBitcoin className='text-white' />{' '}
                </div>

                <div className='     flex justify-between items-center w-full mx-auto   py-2'>
                  <button
                    onClick={() => {
                      setGoldBtc(!goldBtc);
                    }}
                    className='bg-[#03045e] w-[90%]  px-2 py-1  text-[1.2rem] font-bold  border-white  border-2      text-white  mx-auto'>
                    Invest bitcoin (BTC)
                    {starterBtc ? (
                      <IoMdArrowDropdownCircle className='inline   animate-pulse  ml-3' />
                    ) : (
                      <IoMdArrowDropupCircle className='inline  ml-3' />
                    )}
                  </button>
                </div>
              </div>
              <div className={`${starterBtc ? 'hidden' : 'block'}    `}>
                <p className='border-2 text-center p-1'>
                  Please copy the bitcoin (btc) wallet address bellow and make
                  deposit of your investment value in bitcoin through your
                  crypto wallet. (starter plan range ($5000 - $10000))
                </p>
                <p className='mx-auto border-2 border-[#03045e]  flex flex-col justify-between text-center items-center      p-3'>
                  <span className='bg-[#03045e] p-2 text-white mx-auto items-center'>
                    Bitcoin address :
                  </span>{' '}
                  19S3BzZG3bf5EkL4iWF
                  <br />
                  4HxdwanKkXp14tM
                </p>
              </div>
            </div>
          </div>
          {/* END OF STARTER BTC */}
          {/* starter Etheruem */}
          <div>
            <div className=' w-full   btc border-y-2 border-y-[#03045e] py-2   px-2'>
              <div className='btc-btn  w-full'>
                <div className='     flex justify-between items-center w-full mx-auto px-[3rem]  bg-[#03045e]  border-y-2 border-y-[#03045e]    py-2'>
                  <GiPayMoney className='text-white' />
                  <TiArrowRight className='animate-ping   text-white  ' />
                  <RiSecurePaymentFill className='text-white' />
                  <TiArrowRight className='animate-ping   text-white' />
                  <FaEthereum className='text-white' />{' '}
                </div>

                <div className='     flex justify-between items-center w-full mx-auto   py-2'>
                  <button
                    onClick={() => {
                      setGoldEth(!goldEth);
                    }}
                    className='bg-[#03045e] w-[90%]  px-2 py-1  text-[1.2rem] font-bold  border-white  border-2      text-white  mx-auto'>
                    Invest Etheruem (ETH)
                    {starterEth ? (
                      <IoMdArrowDropdownCircle className='inline   animate-pulse  ml-3' />
                    ) : (
                      <IoMdArrowDropupCircle className='inline  ml-3' />
                    )}
                  </button>
                </div>
              </div>
              <div className={`${starterEth ? 'hidden' : 'block'}    `}>
                <p className='border-2 text-center p-1'>
                  Please copy the Etheruem (Etheruem) wallet address bellow and
                  make deposit of your investment value in Etheruem through your
                  crypto wallet. (starter plan range ($5000 - $10000))
                </p>
                <p className='border-2 border-[#03045e]  flex flex-col justify-between items-center  text-center    p-3'>
                  <span className='bg-[#03045e] p-2 text-white'>
                    Etheruem address :
                  </span>{' '}
                  0x3096cD7ae641E6dc4aABc3
                  <br />
                  3887454C233cbEA102
                </p>
              </div>
            </div>
          </div>
          {/* end of starter ethereum */}
          {/* starter USDT */}
          <div>
            <div className=' w-full   btc border-y-2 border-y-[#03045e] py-2   px-2'>
              <div className='btc-btn  w-full'>
                <div className='     flex justify-between items-center w-full mx-auto px-[3rem]  bg-[#03045e]  border-y-2 border-y-[#03045e]    py-2'>
                  <GiPayMoney className='text-white' />
                  <TiArrowRight className='animate-ping   text-white  ' />
                  <RiSecurePaymentFill className='text-white' />
                  <TiArrowRight className='animate-ping   text-white' />
                  <HiCurrencyDollar className='text-white' />{' '}
                </div>

                <div className='     flex justify-between items-center w-full mx-auto   py-2'>
                  <button
                    onClick={() => {
                      setGoldUsdt(!goldUsdt);
                    }}
                    className='bg-[#03045e] w-[90%]  px-2 py-1  text-[1.2rem] font-bold  border-white  border-2      text-white  mx-auto'>
                    Invest USDT (USDT)
                    {starterUsdt ? (
                      <IoMdArrowDropdownCircle className='inline   animate-pulse  ml-3' />
                    ) : (
                      <IoMdArrowDropupCircle className='inline  ml-3' />
                    )}
                  </button>
                </div>
              </div>
              <div className={`${starterUsdt ? 'hidden' : 'block'}    `}>
                <p className='border-2 text-center p-1'>
                  Please copy the USDT (USDT) wallet address bellow and make
                  deposit of your investment value in Etheruem through your
                  crypto wallet. (starter plan range ($5000 - $10000))
                </p>
                <p className='border-2 border-[#03045e]  flex flex-col justify-between items-center   text-center   p-3'>
                  <span className='bg-[#03045e] p-2 text-white'>
                    Etheruem address :
                  </span>{' '}
                  TVZaNnUTc9Tr6JxwimL
                  <br />
                  td7bfR3UT6ds5sJ
                </p>
              </div>
            </div>
          </div>
          {/* end starter usdt */}
          {/* starter TRX */}
          <div>
            <div className=' w-full   btc border-y-2 border-y-[#03045e] py-2   px-2'>
              <div className='btc-btn  w-full'>
                <div className='     flex justify-between items-center w-full mx-auto px-[3rem]  bg-[#03045e]  border-y-2 border-y-[#03045e]    py-2'>
                  <GiPayMoney className='text-white' />
                  <TiArrowRight className='animate-ping   text-white  ' />
                  <RiSecurePaymentFill className='text-white' />
                  <TiArrowRight className='animate-ping   text-white' />
                  <HiCurrencyDollar className='text-white' />{' '}
                </div>

                <div className='     flex justify-between items-center w-full mx-auto   py-2'>
                  <button
                    onClick={() => {
                      setGoldTrx(!goldTrx);
                    }}
                    className='bg-[#03045e] w-[90%]  px-2 py-1  text-[1.2rem] font-bold  border-white  border-2      text-white  mx-auto'>
                    Invest TRX (TRX)
                    {starterTrx ? (
                      <IoMdArrowDropdownCircle className='inline   animate-pulse  ml-3' />
                    ) : (
                      <IoMdArrowDropupCircle className='inline  ml-3' />
                    )}
                  </button>
                </div>
              </div>
              <div className={`${starterTrx ? 'hidden' : 'block'}    `}>
                <p className='border-2 text-center p-1'>
                  Please copy the TRX (TRX) wallet address bellow and make
                  deposit of your investment value in Etheruem through your
                  crypto wallet. (starter plan range ($5000 - $10000))
                </p>
                <p className='border-2 border-[#03045e]  flex flex-col justify-between items-center   text-center   p-3'>
                  <span className='bg-[#03045e] p-2 text-white'>
                    TRX address :
                  </span>{' '}
                  TVZaNnUTc9Tr6JxwimLtd
                  <br />
                  7bfR3UT6ds5sJ
                </p>
              </div>
            </div>
          </div>
          <div className='border-1 flex flex-col justify-between items-center   text-center   p-3'>
            <button className='bg-green-500 p-2 text-white mt-2'>Done</button>
          </div>
        </div>
        {/* $$$$$$$$$$$$$ */}
        {/* END OF GOLD PLAN  */}
        {/* $$$$$$$$$$$$$ */}

        {/*  PREMIUM PLAN  */}
        {/* $$$$$$$$$$$$$ */}
        <div className='mb-5 bg-white text-[#03045e] text-[1rem] font-bold mx-auto  border-none gap-5 min-h-[17rem] shadow-gray-500 shadow-2xl rounded-[1rem] text-left p-2  w-[94%]'>
          <h1 className='text-[1.2rem] font-bold text-center '>Premium Plan</h1>
          <div className='plan'>
            <h3>
              Interest <span className='float-right'>132%</span>
            </h3>
            <h3>
              Investment <span className='float-right'>$10000 - $50000</span>
            </h3>
            <h3>
              Withdraw <span className='float-right'>Anytime</span>
            </h3>
          </div>

          {/* gold btc */}
          <div>
            <div className=' w-full   btc border-y-2 border-y-[#03045e] py-2   px-2'>
              <div className='btc-btn  w-full'>
                <div className='     flex justify-between items-center w-full mx-auto px-[3rem]  bg-[#03045e]  border-y-2 border-y-[#03045e]    py-2'>
                  <GiPayMoney className='text-white' />
                  <TiArrowRight className='animate-ping   text-white  ' />
                  <RiSecurePaymentFill className='text-white' />
                  <TiArrowRight className='animate-ping   text-white' />
                  <GrBitcoin className='text-white' />{' '}
                </div>

                <div className='     flex justify-between items-center w-full mx-auto   py-2'>
                  <button
                    onClick={() => {
                      setPremiumBtc(!premiumBtc);
                    }}
                    className='bg-[#03045e] w-[90%]  px-2 py-1  text-[1.2rem] font-bold  border-white  border-2      text-white  mx-auto'>
                    Invest bitcoin (BTC)
                    {premiumBtc ? (
                      <IoMdArrowDropdownCircle className='inline   animate-pulse  ml-3' />
                    ) : (
                      <IoMdArrowDropupCircle className='inline  ml-3' />
                    )}
                  </button>
                </div>
              </div>
              <div className={`${premiumBtc ? 'hidden' : 'block'}    `}>
                <p className='border-2 text-center p-1'>
                  Please copy the bitcoin (btc) wallet address bellow and make
                  deposit of your investment value in bitcoin through your
                  crypto wallet. (starter plan range ($10000 - $50000))
                </p>
                <p className='mx-auto border-2 border-[#03045e]  flex flex-col justify-between text-center items-center      p-3'>
                  <span className='bg-[#03045e] p-2 text-white mx-auto items-center'>
                    Bitcoin address :
                  </span>{' '}
                  19S3BzZG3bf5EkL4iWF
                  <br />
                  4HxdwanKkXp14tM
                </p>
              </div>
            </div>
          </div>
          {/* END OF PREMIUM BTC */}
          {/* starter Etheruem */}
          <div>
            <div className=' w-full   btc border-y-2 border-y-[#03045e] py-2   px-2'>
              <div className='btc-btn  w-full'>
                <div className='     flex justify-between items-center w-full mx-auto px-[3rem]  bg-[#03045e]  border-y-2 border-y-[#03045e]    py-2'>
                  <GiPayMoney className='text-white' />
                  <TiArrowRight className='animate-ping   text-white  ' />
                  <RiSecurePaymentFill className='text-white' />
                  <TiArrowRight className='animate-ping   text-white' />
                  <FaEthereum className='text-white' />{' '}
                </div>

                <div className='     flex justify-between items-center w-full mx-auto   py-2'>
                  <button
                    onClick={() => {
                      setPremiumEth(!premiumEth);
                    }}
                    className='bg-[#03045e] w-[90%]  px-2 py-1  text-[1.2rem] font-bold  border-white  border-2      text-white  mx-auto'>
                    Invest Etheruem (ETH)
                    {starterEth ? (
                      <IoMdArrowDropdownCircle className='inline   animate-pulse  ml-3' />
                    ) : (
                      <IoMdArrowDropupCircle className='inline  ml-3' />
                    )}
                  </button>
                </div>
              </div>
              <div className={`${starterEth ? 'hidden' : 'block'}    `}>
                <p className='border-2 text-center p-1'>
                  Please copy the Etheruem (Etheruem) wallet address bellow and
                  make deposit of your investment value in Etheruem through your
                  crypto wallet. (starter plan range ($10000 - $50000))
                </p>
                <p className='border-2 border-[#03045e]  flex flex-col justify-between items-center  text-center    p-3'>
                  <span className='bg-[#03045e] p-2 text-white'>
                    Etheruem address :
                  </span>{' '}
                  0x3096cD7ae641E6dc4aABc3
                  <br />
                  3887454C233cbEA102
                </p>
              </div>
            </div>
          </div>
          {/* end of PREMIUM ethereum */}
          {/* PREMIUM USDT */}
          <div>
            <div className=' w-full   btc border-y-2 border-y-[#03045e] py-2   px-2'>
              <div className='btc-btn  w-full'>
                <div className='     flex justify-between items-center w-full mx-auto px-[3rem]  bg-[#03045e]  border-y-2 border-y-[#03045e]    py-2'>
                  <GiPayMoney className='text-white' />
                  <TiArrowRight className='animate-ping   text-white  ' />
                  <RiSecurePaymentFill className='text-white' />
                  <TiArrowRight className='animate-ping   text-white' />
                  <HiCurrencyDollar className='text-white' />{' '}
                </div>

                <div className='     flex justify-between items-center w-full mx-auto   py-2'>
                  <button
                    onClick={() => {
                      setPremiumUsdt(!premiumUsdt);
                    }}
                    className='bg-[#03045e] w-[90%]  px-2 py-1  text-[1.2rem] font-bold  border-white  border-2      text-white  mx-auto'>
                    Invest USDT (USDT)
                    {starterUsdt ? (
                      <IoMdArrowDropdownCircle className='inline   animate-pulse  ml-3' />
                    ) : (
                      <IoMdArrowDropupCircle className='inline  ml-3' />
                    )}
                  </button>
                </div>
              </div>
              <div className={`${premiumUsdt ? 'hidden' : 'block'}    `}>
                <p className='border-2 text-center p-1'>
                  Please copy the USDT (USDT) wallet address bellow and make
                  deposit of your investment value in Etheruem through your
                  crypto wallet. (starter plan range ($10000 - $50000))
                </p>
                <p className='border-2 border-[#03045e]  flex flex-col justify-between items-center   text-center   p-3'>
                  <span className='bg-[#03045e] p-2 text-white'>
                    Etheruem address :
                  </span>{' '}
                  TVZaNnUTc9Tr6JxwimL
                  <br />
                  td7bfR3UT6ds5sJ
                </p>
              </div>
            </div>
          </div>
          {/* end PREMIUM usdt */}
          {/* PREMIUM TRX */}
          <div>
            <div className=' w-full   btc border-y-2 border-y-[#03045e] py-2   px-2'>
              <div className='btc-btn  w-full'>
                <div className='     flex justify-between items-center w-full mx-auto px-[3rem]  bg-[#03045e]  border-y-2 border-y-[#03045e]    py-2'>
                  <GiPayMoney className='text-white' />
                  <TiArrowRight className='animate-ping   text-white  ' />
                  <RiSecurePaymentFill className='text-white' />
                  <TiArrowRight className='animate-ping   text-white' />
                  <HiCurrencyDollar className='text-white' />{' '}
                </div>

                <div className='     flex justify-between items-center w-full mx-auto   py-2'>
                  <button
                    onClick={() => {
                      setPremiumTrx(!premiumTrx);
                    }}
                    className='bg-[#03045e] w-[90%]  px-2 py-1  text-[1.2rem] font-bold  border-white  border-2      text-white  mx-auto'>
                    Invest TRX (TRX)
                    {premiumTrx ? (
                      <IoMdArrowDropdownCircle className='inline   animate-pulse  ml-3' />
                    ) : (
                      <IoMdArrowDropupCircle className='inline  ml-3' />
                    )}
                  </button>
                </div>
              </div>
              <div className={`${premiumTrx ? 'hidden' : 'block'}    `}>
                <p className='border-2 text-center p-1'>
                  Please copy the TRX (TRX) wallet address bellow and make
                  deposit of your investment value in Etheruem through your
                  crypto wallet. (starter plan range ($10000 - $50000))
                </p>
                <p className='border-2 border-[#03045e]  flex flex-col justify-between items-center   text-center   p-3'>
                  <span className='bg-[#03045e] p-2 text-white'>
                    TRX address :
                  </span>{' '}
                  TVZaNnUTc9Tr6JxwimLtd
                  <br />
                  7bfR3UT6ds5sJ
                </p>
              </div>
            </div>
          </div>
          <div className='border-1 flex flex-col justify-between items-center   text-center   p-3'>
            <button className='bg-green-500 p-2 text-white mt-2'>Done</button>
          </div>
        </div>
        {/* $$$$$$$$$$$$$ */}
        {/* END OF PREMIUM PLAN  */}
        {/* $$$$$$$$$$$$$ */}
      </div>{' '}
    </section>
  );

  return content;
}
