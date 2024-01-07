"use client";
import { redirect } from "next/navigation";
import { Router } from "next/router";
import { useForm } from "react-hook-form";
import { BiSolidError } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/navigation";
// import { redirect } from "next/navigation";

export default function EmailOtp() {
  const {
    register,
    reset,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errorData, setErrorData] = useState("");
  // const router = useRouter()

  const router = useRouter();

  // otp generator handler
  const sendOtp = async () => {};
  // end of otp generator handler
  // FORM SUBMISSION
  const onSubmit = async (data) => {
    // console.log(data);
    try {
      const response = await fetch("https://bullharvest.com/otp/changepassword", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { message } = await response.json();

      // console.log(message);

      if (message === "required") {
        setErrorData("All fields are required");
      }

      if (message === "invalid-user") {
        setErrorData("User not found");
      }

      if (message === "invalid-email") {
        setErrorData("Please enter a valid email address");
      }

      if (message === "invalid-code") {
        setErrorData("Invalid  Secret  key ");
      }

      if (message === "success") {
        router.push("/login");
      }
    } catch (error) {
      if (error) {
        // console.log(error);
        throw new Error("Network error, try again later");
      }
    } finally {
      reset();
    }
  };
  // END OF FORM SUBMISSION

  const content = (
    <main
      onSubmit={handleSubmit(onSubmit)}
      className="center-with-flex h-screen w-full "
    >
      <section className="flex flex-col justify-center items-center min-h-[20rem] w-[90%]  border-none rounded-[2rem] p-2 text-center ">
        <form className="flex flex-col justify-center items-center h-[20rem] w-[80%]   p-2 text-center ">
          <div className="">
            <label htmlFor="email" className="mt-[2rem] form-text-style ">
              Email:{" "}
            </label>
            <input
              {...register("email", {
                required: "Please enter your email address",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              type="text"
              name="email"
              id="email"
              className="form-input-style"
              placeholder="Eg: jamesmorgan@gmail.com"
            />
          </div>
          {errors.email && errors.email.type === "required" ? (
            <p className="form-error-style">{errors.email.message}</p>
          ) : (
            errors.email &&
            errors.email.type === "pattern" && (
              <p className="form-error-style">{errors.email?.message}</p>
            )
          )}
          <div className="">
            <label htmlFor="code" className=" form-text-style ">
              Secret Key:{" "}
            </label>
            <input
              {...register("code", {
                required: "Please enter your secret key",
              })}
              type="text"
              name="code"
              id="code"
              className="form-input-style"
              placeholder="Saved Secret Key"
            />
          </div>
          {errors.code && errors.code.type === "required" && (
            <p className="form-error-style">{errors.code.message}</p>
          )}

          <div className="">
            <label htmlFor="newPassword" className=" form-text-style ">
              New Password:{" "}
            </label>
            <input
              {...register("newPassword", {
                required: "Please enter your secret key",
              })}
              type="text"
              name="newPassword"
              id="newPassword"
              className="form-input-style"
              placeholder=""
            />
          </div>
          {errors.newPassword && errors.newPassword.type === "required" && (
            <p className="form-error-style">{errors.newPassword.message}</p>
          )}

          <div className="">
            <label htmlFor="confirmPassword" className=" form-text-style ">
              Confirm Password:{" "}
            </label>
            <input
              {...register("confirmPassword", {
                required: "Please enter your secret key",
                validate: (value) => value === getValues("newPassword"),
              })}
              type="text"
              name="confirmPassword"
              id="confirmPassword"
              className="form-input-style"
              placeholder=""
            />
          </div>
          {errors.confirmPassword &&
          errors.confirmPassword.type === "required" ? (
            <p className="form-error-style">{errors.confirmPassword.message}</p>
          ) : (
            errors.confirmPassword &&
            errors.confirmPassword.type ===
              "validate"(<p>Password does not match</p>)
          )}
          <div className=" w-full flex gap-2 flex-row px-3 justify-center items-center ">
            <hr className="w-[5rem] bg-[#03045e] p-[0.6px]" />{" "}
            <MdOutlineSecurity className="text-[#03045e] sm:text-[2rem]" />{" "}
            <hr className="w-[5rem] p-[0.6px] bg-[#03045e]" />
          </div>
          <div>
            <button
              onClick={() => {
                sendOtp();
              }}
              className=" bg-[#03045e] mx-auto w-[5rem] mt-3 shadow-xl text-white p-2 block font-bold rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </main>
  );

  return content;
}
