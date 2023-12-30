"use client";
import { useForm } from "react-hook-form";
import { BiSolidError } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Otp() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errorData, setErrorData] = useState("");

  const router = useRouter();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await fetch("http://127.0.0.1:5000/otp/checkotp", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      const { message } = await response.json();
      console.log(message);
      if (message === "required") {
        setErrorData("Otp must be provided");
      }

      if (message === "invalid") {
        setErrorData("Invalid otp");
      }

      if (message === "success") {
        router.push("/login/newpassword");
      }
    } catch (error) {
      console.log(error);
    } finally {
      reset();
    }
  };

  const content = (
    <main className="center-with-flex h-screen w-screen ">
      <section className="flex flex-col justify-center items-center min-h-[20rem] w-[90%]  border-none rounded-[2rem] p-2 text-center shadow-lg shadow-gray-500">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center h-[20rem] w-[80%]   p-2 text-center "
        >
          <div className="center-with-flex gap-3">
            <label htmlFor="otp" className=" font-bold text-[#03045e]">
              Enter the OTP code sent to your mail address
            </label>
            <input
              className="form-input-style"
              type="text"
              {...register("otp", {
                required: " code must be provided",
              })}
            />
          </div>
          {errors.otp && errors.otp.type === "required" && (
            <p className="form-error-style">
              <BiSolidError className="warning-icon-style" />
              {errors.otp.message}{" "}
            </p>
          )}
          <div className=" w-full flex gap-2 flex-row px-3 justify-center items-center ">
            <hr className="w-[5rem] bg-[#03045e] p-[0.6px]" />{" "}
            <MdOutlineSecurity className="text-[#03045e] sm:text-[2rem]" />{" "}
            <hr className="w-[5rem] p-[0.6px] bg-[#03045e]" />
          </div>
          <div>
            <button
              onClick={() => {}}
              className=" bg-[#03045e] mx-auto w-[5rem] mt-3 shadow-xl text-white p-2 block font-bold rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>

        <hr className="w-[9rem] mb-2 bg-[#03045e] p-[0.3px]" />

        <div className="mb-2">
          <p className="underline font-bold text-[#03045e]">
            {"Didn't get otp"}
          </p>
          <button className=" bg-[#03045e] mx-auto w-[7rem] mt-3 shadow-xl text-white p-2 block font-bold rounded-lg">
            Resend OTP
          </button>
        </div>
      </section>
    </main>
  );

  return content;
}
