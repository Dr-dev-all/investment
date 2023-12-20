import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiFacebook } from "react-icons/si";
import { PiInstagramLogoFill } from "react-icons/pi";
import footerData from "./userdata.js";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
  const service = [
    { name: "Asset Management", url: "#", id: 1 },
    { name: "Private Equity & IB", url: "#", id: 2 },
    { name: "Real Estate Investment", url: "#", id: 3 },
  ];

  const contactUs = [
    { name: "Phone: +44667367367267", url: "#", id: 1 },
    { name: "Email: support@bullyharvest.com", url: "#", id: 2 },
    { name: "Facebook", url: "#", id: 3 },
    { name: "Whatsapp", url: "#", id: 4 },
    { name: "Instagram", url: "#", id: 5 },
  ];

  const mediaCenter = [
    { name: "BH News", url: "#", id: 1 },
    { name: "Annual Reports", url: "#", id: 2 },
    { name: "Investment Research", url: "#", id: 3 },
    { name: "Guidlines", url: "#", id: 4 },
  ];

  const content = (
    <footer className="min-h-[7rem] w-full bg-[#03045e] text-white">
      <main className="flex flex-col justify-between items-center">
        <section className="center-with-flex h-auto py-[1rem]">
          <div className="h-[5rem] flex flex-col justify-center items-center">
            <h1 className=" mt-4">Need Help?</h1>
            <Link
              className=" border mt-[1rem] mx-auto  border-white p-1 mb-[2rem]  border-2"
              href="/contact"
            >
              CONTACT US{" "}
            </Link>
          </div>
        </section>
        <hr className="w-[80%]" />
        <section className="  h-[70%] grow grid  grid-cols-1 md:grid-cols-4  mb-4 p-2 gap-3 w-[90%] mx-auto ">
          <div>
            <h1>BH-logo </h1>
            <p>text about the comopany address</p>
          </div>
          <div>
            <h3>Our services</h3>
            <ul>
              {service.map((data) => (
                <li key={data.id}>
                  <Link href={data.url}> {data.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Media Center</h2>
            <ul>
              {mediaCenter.map((data) => (
                <li key={data.id}>
                  <Link href={data.url}>{data.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1>Contact us</h1>
            <ul>
              {contactUs.map((data) => (
                <li key={data.id}>
                  <Link href={data.url}>{data.name} </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <hr className="w-[80%]" />

        <section className="h-[5%] w-full center-with-flex">
          <div className="flex flex-row justify-around items-center w-full px-[2rem] py-4">
            <IoLogoWhatsapp className="inline mx-auto text-[1.6rem]" />
            <SiFacebook className="inline mx-auto text-[1.6rem]" />
            <PiInstagramLogoFill className="inline mx-auto text-[1.6rem]" />
            <IoLogoLinkedin className="inline mx-auto text-[1.6rem]" />
          </div>
        </section>
        <hr className="w-[80%]" />

        <section
          className="flex justify-center w-full h-[10rem] relative text-center
        
        "
        >
          <div className="flex justify-between items-center h-full w-full px-[3rem]">
            <Link href="#">Legal notice</Link>
            <Link href="#">Whistleblowers</Link>
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Bug bounty</Link>
            <Link href="#">Complaints</Link>
          </div>
          <p className="absolute bottom-0">
            &copy; 2023 BULLHARVEST All Rights reserved
          </p>
        </section>
      </main>
    </footer>
  );

  return content;
}
