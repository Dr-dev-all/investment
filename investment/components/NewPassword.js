"use client";
import { useForm } from "react-hook-form";
import { BiSolidError } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPassword() {
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const [errorData, setErrorData] = useState("");

  const onSubmit = async (data) => {
    console.log(message);
    try {
      const response = await fetch("127.0.0.1:5000/otp/changepassword", {
        method: "POST",
        body: JSON.stringify(data),
        header: { "Content-Type": "application/json" },
      });

      const { message } = await response.json();
      if (message === "required") {
        setErrorData("Please provide your new password");
      }

      if (message === "not-match") {
        setErrorData("Password do not match");
      }

      if (message === "success") {
        router.push("/login");
      }
    } catch (error) {
      router.push("/register");
    }
  };

  const content = (
    <main
      onSubmit={handleSubmit(onSubmit)}
      className="center-with-flex h-screen w-screen "
    >
      <section className="flex flex-col justify-center items-center min-h-[10rem] w-[90%]  border-none rounded-[2rem] p-2 text-center shadow-lg shadow-gray-500">
        <form className="flex flex-col justify-center items-center min-h-[20rem] w-full   p-2 text-center ">
          <div className="center-with-flex gap-3">
            <label
              htmlFor="newPassword"
              className="text-[1.2rem] font-bold text-[#03045e]"
            >
              Enter new password
            </label>
            <input
              placeholder="password#$@&"
              className="form-input-style"
              type="text"
              name="newPassword"
              {...register("newPassword", {
                required: "Enter new password",
                minLength: 6,
                maxLength: 10,
              })}
            />
          </div>
          {errors.newPassword && errors.newPassword.type === "required" ? (
            <p className="form-error-style">
              <BiSolidError className="warning-icon-style" />
              {errors.newPassword.message}{" "}
            </p>
          ) : errors.newPassword && errors.newPassword.type === "minLength" ? (
            <p className="form-error-style">
              <BiSolidError className="warning-icon-style" />
              Password must not be below six (6) characters
            </p>
          ) : (
            errors.newPassword &&
            errors.newPassword.type === "maxLength" && (
              <p className="form-error-style">
                <BiSolidError className="warning-icon-style" />
                Password must not be above ten (10) characters
              </p>
            )
          )}
          <div className="center-with-flex gap-3 mt-2">
            <label
              htmlFor="repeatPassword"
              className="text-[1.2rem] font-bold text-[#03045e]"
            >
              Repeat Password
            </label>
            <input
              placeholder="password#$@&"
              className="form-input-style"
              type="text"
              name="repeatPassword"
              {...register("repeatPassword", {
                required: "This field must not be empty",
                minLength: 6,
                maxLength: 10,
                validate: (value) => value === getValues("newPassword"),
              })}
            />
          </div>
          <div className=" w-full flex gap-2 flex-row px-3 justify-center items-center ">
            <hr className="w-[5rem] bg-[#03045e] p-[0.6px]" />{" "}
            <MdOutlineSecurity className="text-[#03045e] sm:text-[2rem]" />{" "}
            <hr className="w-[5rem] p-[0.6px] bg-[#03045e]" />
          </div>
          {errors.repeatPassword &&
          errors.repeatPassword.type === "required" ? (
            <p className="form-error-style">
              <BiSolidError className="warning-icon-style" />
              {errors.repeatPassword.message}{" "}
            </p>
          ) : errors.repeatPassword &&
            errors.repeatPassword.type === "minLength" ? (
            <p className="form-error-style">
              <BiSolidError className="warning-icon-style" />
              Value must not be less than (6) characters
            </p>
          ) : errors.repeatPassword &&
            errors.repeatPassword.type === "maxLength" ? (
            <p className="form-error-style">
              <BiSolidError className="warning-icon-style" />
              value must not be greater than ten (10) characters
            </p>
          ) : (
            errors.repeatPassword &&
            errors.repeatPassword.type === "validate" && (
              <p className="form-error-style">
                <BiSolidError className="warning-icon-style" />
                Password does not match
              </p>
            )
          )}
          <div>
            <button
              onClick={() => {}}
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
