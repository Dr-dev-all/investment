import { FaUserShield } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { AiFillPropertySafety } from "react-icons/ai";
import { TbUserDown } from "react-icons/tb";
import { FaBell } from "react-icons/fa";
import { TbFaceId } from "react-icons/tb";
import { FaUmbrella } from "react-icons/fa";

export default function Security() {
  const content = (
    <section className="min-h-screen w-screen  ">
      <div className="container mt-7 mx-auto px-4 py-12 ">
        <div className=" ">
          <FaUserShield className="  text-[3.2em] text-start rounded-lg mt-16 lg:ml-7 mb-5 text-white p-2 bg-[#03045e] lg:text-[4em]" />
          <h1 className="text-start lg:ml-7 mt-6 block max-w-5xl  font-display text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
            How BullHarvest protects you
          </h1>
          <p className="lg:ml-7 mt-6 max-w-3xl text-xl text-neutral-600">
            Welcome to the BullHarvest Security Center. We understand the
            importance of securing your investments and sensitive information.
          </p>
          <p className="lg:ml-7 mt-10 max-w-2xl space-y-6 text-base">
            Below, we outline the comprehensive security measures in place to
            ensure a safe and trustworthy experience on our platform.
          </p>
        </div>

        <div className="mt-8   min-w-screen">
          <div className="grid lg:grid-cols-2 gap-5 mx-auto   gap-5 w-[95%] ">
            <div className="text-start lg:w-[70%] ">
              <IoDocumentText className=" text-[2.5em] lg:text-[3em] rounded-full mt-16  mb-4 text-white p-2 bg-[#03045e]" />
              <h2 className="text-lg font-semibold leading-6 text-gray-900">
                Data Encryption
              </h2>
              <p className="mt-2 text-sm text-gray-700">
                Your data is shielded with industry-standard encryption
                protocols. Every interaction with BullHarvest, from logging in
                to executing transactions, is encrypted to protect your
                sensitive information from unauthorized access.
              </p>
            </div>
            <div className="text-start lg:w-[70%] ">
              <FaRegEyeSlash className=" text-[2.5em] lg:text-[3em] rounded-full lg:mt-16 mt-8  mb-4 text-white p-2 bg-[#03045e]" />
              <h2 className="text-lg font-semibold leading-6 text-gray-900">
                Secure Authentication
              </h2>
              <p className="mt-2 text-sm text-gray-700">
                Enhance your account security with our multi-factor
                authentication (MFA) process. This adds an additional layer of
                protection by requiring multiple forms of identification,
                ensuring that only authorized users can access their accounts.
              </p>
            </div>

            <div className="text-start lg:w-[70%] ">
              <AiFillPropertySafety className=" text-[2.5em] lg:text-[3em] rounded-full lg:mt-16 mt-8  mb-4 text-white p-2 bg-[#03045e]" />
              <h2 className="text-lg font-semibold leading-6 text-gray-900 ">
                Privacy Assurance
              </h2>
              <p className="mt-2 text-sm text-gray-700">
                We are committed to transparency about how we handle your data.
                Explore our detailed Privacy Policy to understand the measures
                we take to protect your privacy and ensure the responsible use
                of your information.
              </p>
            </div>

            <div className="text-startlg:w-[70%] ">
              <TbUserDown className=" text-[2.5em] lg:text-[3em] rounded-full lg:mt-16 mt-8  mb-4 text-white p-2 bg-[#03045e]" />
              <h2 className="text-lg font-semibold leading-6 text-gray-900">
                Confirming Your Unsaved Beneficiaries
              </h2>
              <p className="mt-2 text-sm text-gray-700">
                When you’re sending Coin to a beneficiary you haven’t saved, we
                ask you to confirm that you’re sure you want to make the
                transfer. We do this to give you some time to double check that
                you’re not being scammed - completed transfers are almost
                impossible to reverse.
              </p>
            </div>

            <div className="text-start lg:w-[70%] ">
              <FaBell className=" text-[2.5em] lg:text-[3em] rounded-full lg:mt-16 mt-8  mb-4 text-white p-2 bg-[#03045e]" />
              <h2 className="text-lg font-semibold leading-6 text-gray-900">
                Transaction Alerts
              </h2>
              <p className="mt-2 text-sm text-gray-700">
                We send you real time alerts (in the form of app notifications
                and emails) for transactions on your account. This keeps you up
                to date on what’s happening with your money.
              </p>
            </div>

            <div className="text-start lg:w-[70%] ">
              <TbFaceId className=" text-[2.5em] lg:text-[3em] rounded-full lg:mt-16 mt-8  mb-4 text-white p-2 bg-[#03045e]" />
              <h2 className="text-lg font-semibold leading-6 text-gray-900">
                Your Personal Information
              </h2>
              <p className="mt-2 text-sm text-gray-700">
                We use the highest level of encryption to protect your personal
                information including your identity and confidential account
                details. We don’t share your information with unauthorised third
                parties, we would never sell your information and we don’t use
                your Email to access any other account(s) you may have.
              </p>
            </div>

            <div className="text-start lg:w-[70%] ">
              <FaUmbrella className=" text-[2.5em] lg:text-[3em] rounded-full lg:mt-16 mt-8  mb-4 text-white p-2 bg-[#03045e]" />
              <h2 className="text-lg font-semibold leading-6 text-gray-900">
                Insuring Your Money
              </h2>
              <p className="mt-2 text-sm text-gray-700">
                We insure all deposits you make into your BullHarvest account
                with the National Deposit Insurance Commission (NDIC). If you
                make an insurance claim on a deposit and the claim is
                successful, the Deposit Insurance Fund of the NDIC is expected
                to pay you up to 200 dollars in compensation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return content;
}
