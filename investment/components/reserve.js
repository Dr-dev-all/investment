"use client";
import Header from "./Header";
import Footer from "./Footer";
import { userRegisterSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PiSortDescending } from "react-icons/pi";
import Link from "next/link";
import { MdOutlineSecurity } from "react-icons/md";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(userRegisterSchema) });

  const onSubmit = async (data) => {
    const response = await fetch("api/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "applicatio/json" },
    });
    if (!response.ok) throw new Error("Data error");
    const responseData = await response.json();
    if (response.errors) {
      const errors = responseData.errors;

      if (errors.email) {
        setError("email", { type: "server", message: errors.email });
      } else if (errors.password) {
        setError("password", { type: server, message: errors.password });
      } else {
        console.log(errors);
      }
    }

    reset();
  };

  const content = (
    <section className="section-style">
      <div className="div-style">
        <article className="center-with-flex w-screen h-full ">
          <form action="" className="">
            <div className="grid grid-cols-1 gap-1 ">
              <div>
                <label htmlFor="email" className=" form-text-style ">
                  Email:{" "}
                </label>
                <input
                  {...register("email")}
                  type="text"
                  name="email"
                  id="email"
                  className="form-input-style"
                />
              </div>
              {errors.email && (
                <p className="text-[#ff0000]">{`${errors.email.message}`}</p>
              )}
              <div>
                <label htmlFor="password" className="form-text-style">
                  Password:{" "}
                </label>
                <input
                  {...register("password")}
                  type="text"
                  name="password"
                  id="password"
                  className="form-input-style"
                />
              </div>
              {errors.password && (
                <p className="text-[#ff0000]">{`${errors.password.message}`}</p>
              )}

              <div className=" w-full flex gap-2 flex-row px-3 justify-center items-center ">
                <hr className="w-[5rem] bg-[#03045e] p-[0.6px]" />{" "}
                <MdOutlineSecurity className="text-[#03045e] sm:text-[2rem]" />{" "}
                <hr className="w-[5rem] p-[0.6px] bg-[#03045e]" />
              </div>
            </div>

            <div className=" center-with-flex flex-cols   w-full ">
              <button
                disabled={isSubmitting}
                className=" bg-[#03045e] mx-auto w-[5rem] mt-3 shadow-xl text-white p-2 block font-bold rounded-lg"
              >
                Login
              </button>
              <p className="font-bold mx-auto w-[8rems]">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="underline text-[1.2rem] font-bold  text-[#03045e]"
                >
                  signup.
                </Link>
              </p>
            </div>
          </form>
        </article>
      </div>
    </section>
  );

  return content;
}
