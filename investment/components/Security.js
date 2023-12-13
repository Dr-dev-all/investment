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
        <div className="text-center items-center w-full  justify-center">
          <FaUserShield className=" text-[4.5em] rounded-lg mt-16 mx-auto mb-5 text-white p-3 bg-green-300 lg:text-[5em]" />
          <h1 className="text-[1.2em] font-bold mb-14 color-primary lg:text-[3.5em]">
            How BullHarvest protects you
          </h1>
        </div>

        <div className="mt-8   min-w-screen">
          <div className="grid lg:grid-cols-2 gap-5 mx-auto   gap-5 w-[95%] ">
            <div className="text-start lg:w-[70%] ">
              <IoDocumentText className=" text-[2.5em] lg:text-[3em] rounded-full mt-16  mb-4 text-white p-3 bg-green-300" />
              <h2 className="text-[1.5em] font-bold mb-3 color-primary lg:text-[2.6em]">
                Your Identity Document
              </h2>
              <p className="lg:text-[1.2em]">
                We ask everyone who opens a BullHarvest account to give us their
                and a valid details issued by the google. This helps us prevent
                identity fraud by confirming that everyone who uses BullHarvest,
                including you, is who they say they are.
              </p>
            </div>
            <div className="text-start lg:w-[70%] ">
              <FaRegEyeSlash className=" text-[2.5em] lg:text-[3em] rounded-full lg:mt-16 mt-8  mb-4 text-white p-3 bg-green-300" />
              <h2 className="text-[1.5em] font-bold mb-3 color-primary lg:text-[2.6em]  ">
                Your Password
              </h2>
              <p className="lg:text-[1.2em]">
                When you’re opening your BullHarvest account, we ask that you
                create a password (with any combination of letters, numbers and
                special characters) to secure your account. We may ask for your
                password to authorise any changes you make to your account
                information.
              </p>
            </div>

            <div className="text-start lg:w-[70%] ">
              <AiFillPropertySafety className=" text-[2.5em] lg:text-[3em] rounded-full lg:mt-16 mt-8  mb-4 text-white p-3 bg-green-300" />
              <h2 className="text-[1.5em] font-bold mb-3 color-primary lg:text-[2.6em]  ">
                Your PINs
              </h2>
              <p className="lg:text-[1.2em]">
                Every BullHarvest account is secured with a unique PIN that only
                the account holder should have access to. You can’t use your
                BullHarvest account without first setting your sign-in PIN. Your
                transactions on the app are also secured with a transaction PIN.
              </p>
            </div>

            <div className="text-startlg:w-[70%] ">
              <TbUserDown className=" text-[2.5em] lg:text-[3em] rounded-full lg:mt-16 mt-8  mb-4 text-white p-3 bg-green-300" />
              <h2 className="text-[1.5em] font-bold mb-3 color-primary lg:text-[2.6em]  ">
                Confirming Your Unsaved Beneficiaries
              </h2>
              <p className="lg:text-[1.2em]">
                When you’re sending Coin to a beneficiary you haven’t saved, we
                ask you to confirm that you’re sure you want to make the
                transfer. We do this to give you some time to double check that
                you’re not being scammed - completed transfers are almost
                impossible to reverse.
              </p>
            </div>

            <div className="text-start lg:w-[70%] ">
              <FaBell className=" text-[2.5em] lg:text-[3em] rounded-full lg:mt-16 mt-8  mb-4 text-white p-3 bg-green-300" />
              <h2 className="text-[1.5em] font-bold mb-3 color-primary lg:text-[2.6em]  ">
                Transaction Alerts
              </h2>
              <p className="lg:text-[1.2em]">
                We send you real time alerts (in the form of app notifications
                and emails) for transactions on your account. This keeps you up
                to date on what’s happening with your money.
              </p>
            </div>

            <div className="text-start lg:w-[70%] ">
              <TbFaceId className=" text-[2.5em] lg:text-[3em] rounded-full lg:mt-16 mt-8  mb-4 text-white p-3 bg-green-300" />
              <h2 className="text-[1.5em] font-bold mb-3 color-primary lg:text-[2.6em]  ">
                Your Personal Information
              </h2>
              <p className="lg:text-[1.2em]">
                We use the highest level of encryption to protect your personal
                information including your identity and confidential account
                details. We don’t share your information with unauthorised third
                parties, we would never sell your information and we don’t use
                your Email to access any other account(s) you may have.
              </p>
            </div>

            <div className="text-start lg:w-[70%] ">
              <FaUmbrella className=" text-[2.5em] lg:text-[3em] rounded-full lg:mt-16 mt-8  mb-4 text-white p-3 bg-green-300" />
              <h2 className="text-[1.5em] font-bold mb-3 color-primary lg:text-[2.6em]  ">
                Insuring Your Money
              </h2>
              <p className="lg:text-[1.2em]">
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
