import { headers } from "../next.config";
import Link from "next/link";
import { IoNotificationsSharp } from "react-icons/io5";

export default function UserDashboardHeader() {
  const navBarData = [
    { name: "Home", url: "home" },
    { name: "History", url: "history" },
    { name: "Portfolio", url: "portfolio" },
    { name: "choose plan", url: "chooseplan" },
    { name: "Withdraw", url: "withdraw" },
    { name: "Logout", url: "logout" },
  ];

  const content = (
    <header className=" bg-[#03045e] w-screen min-h-[4rem] text-white ">
      <section className="w-full min-h-[3rem] flex flex-row justify-between items-center px-3">
        <h1>PLAN A</h1>
        <h1>Hi firstname</h1>
        <h1>
          {" "}
          <IoNotificationsSharp />{" "}
        </h1>
      </section>
      <nav
        className={`block flex justify-center items-center w-full bg-white text-[#03045e]  hidden `}
      >
        <ul className="w-[89%] min-h-full flex flex-col justify-between items-center font-bold text-[2rem] underline disc-none ">
          {navBarData.map((data, i) => (
            <li key={i} className="w-full h-[1.2rem] font-bold text-[1.5rem]">
              <Link href={data.url} key={i}>
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );

  return content;
}
