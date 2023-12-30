"use client";
import { useForm } from "react-hook-form";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { User } from "../../server/models/userModels";

export default function Withdraw() {
  const axiosPrivate = useAxiosPrivate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // FORM SUBMISSION
  const onSubmit = async (event) => {
    event.preventDefault();

    let userData = {};
    const formData = new FormData(event.target);
    console.log(formData);

    // getting user data via form
    for (let [key, value] of formData) {
      if (key && value) {
        if (key === "amount") {
          userData.amount = value;
        }

        if (key === "wallet") {
          userData.wallet = value;
        }

        if (key === "wallet_type") {
          userData.walletType = value;
        }
      }
    }

    // console.log(userData);

    try {
      const response = await axiosPrivate("/users/withdraw", {
        method: "POST",
        data: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" },
      });
      const serverData = await response.data;
      console.log("passing to the database");
      console.log(serverData);
    } catch (error) {
      console.log(error);
    }
  };

  const content = (
    <section className="mt-[7rem] px-5  ">
      <h1 className="text-3xl text-center font-semibold dark:text-white mx-5 my-3">
        ASK FOR WITHDRAWAL
      </h1>
      <form className="mt-9 max-w-md mx-auto" onSubmit={onSubmit}>
        <label className="text-base " htmlFor="amount">
          Amount:
        </label>{" "}
        <br />
        <input
          // {...register("amount", {
          //   required:
          //     "Please enter amount of coin you would like to withdraw in dollars (USD)",
          //   minLength: 60,
          //   // validate: (value) => !isNumber(value),
          // })}
          type="text"
          name="amount"
          id="amount"
          className="block text-black  py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="$50.00"
        ></input>
        <br />
        <div>
          <select
            // {...register("wallet")}
            name="wallet_type"
            type="text"
            id="wallet_type"
            className="mb-2 w-full  border p-2 border-gray-300 rounded-md focus:outline-none focus-border-blue-500"
          >
            <option value="bitcoin">BTC</option>
            <option value="ethereum">ETH</option>
            <option value="litecoin">USDT</option>
          </select>
        </div>
        <label htmlFor="wallet">Wallet Address:</label>
        <br />
        <input
          type="text"
          id="wallet"
          name="wallet"
          // {...register("wallet")}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        ></input>
        <br />
        <button
          type="submit"
          className="py-2.5  px-5 me-2 mb-2 text-sm font-semibold font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Withdraw
        </button>
      </form>
    </section>
  );

  return content;
}
