"use client";
import { BsBank } from "react-icons/bs";

export default function History() {
  const content = (
    <main className="min-h-screen">
      <div>
        <h1 className="items-center flex justify-center text-center font-bold">
          History
        </h1>
        <h2 className="items-center flex justify-center text-center ">
          All categories
        </h2>
      </div>

      <div className="flex flex-col mt-4">
        <div className="flex justify-between items-center px-2">
          <BsBank className="" />
          <h3>Deposit</h3>
          <h4>+$1,000.00</h4>
        </div>
        <div className="flex text-right ml-auto pr-2 justify-between items-center w-[85%] ">
          <p>8th 12,23. 16:07</p>
          <p>Successful</p>
        </div>

        <div className="flex justify-between items-center px-2 mt-3">
          <BsBank className="" />
          <h3>Withdrawal</h3>
          <h4>+$200.00</h4>
        </div>
        <div className="flex text-right ml-auto pr-2 justify-between items-center w-[85%] ">
          <p>8th 12,23. 16:07</p>
          <p>Successful</p>
        </div>

        <div className="flex justify-between items-center px-2 mt-3">
          <BsBank className="" />
          <h3>Withdrawal</h3>
          <h4>+$200.00</h4>
        </div>
        <div className="flex text-right ml-auto pr-2 justify-between items-center w-[85%] ">
          <p>8th 12,23. 16:07</p>
          <p>Successful</p>
        </div>
      </div>
    </main>
  );

  return content;
}
