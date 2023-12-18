"use client";
import { useForm } from "react-hook-form";
import { BiSolidError } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";

export default function EmailOtp() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // otp generator handler
  const sendOtp = async () => {
    try {
      const reponse = await fetch("http://127.0.0.1:5000/otp/generateotp");
      console.log(response);
      const serverData = await reponse.json();
      console.log(serverData);
    } catch (error) {
      console.log(error);
    }
  };
  // end of otp generator handler
  // FORM SUBMISSION
  const onSubmit = (data) => {
    console.log(data);
  };
  // END OF FORM SUBMISSION

  const content = (
    <main
      onSubmit={handleSubmit(onSubmit)}
      className="center-with-flex h-screen w-screen "
    >
      <section className="flex flex-col justify-center items-center min-h-[20rem] w-[90%]  border-none rounded-[2rem] p-2 text-center shadow-lg shadow-gray-500">
        <form className="flex flex-col justify-center items-center h-[20rem] w-[80%]   p-2 text-center ">
          <div>
            <label htmlFor="email" className=" form-text-style ">
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
            <p className="form-error-style">
              <BiSolidError className="warning-icon-style" />
              {errors.email.message}
            </p>
          ) : (
            errors.email &&
            errors.email.type === "pattern" && (
              <p className="form-error-style">
                <BiSolidError className="warning-icon-style" />
                {errors.email?.message}
              </p>
            )
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

        <button
          onClick={() => {
            sendOtp();
          }}
          className=" bg-[#03045e] mx-auto w-[5rem] mt-3 shadow-xl text-white p-2 block font-bold rounded-lg"
        >
          Submit
        </button>
      </section>
    </main>
  );

  return content;
}
