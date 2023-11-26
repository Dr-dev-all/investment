import Header from './Header';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';
import Footer from './Footer';

export default function Landing() {
  const starterPlan = [
    { name: 'Interest', value: '128.8%', id: 1 },
    { name: 'Investment', value: '$500-$5000', id: 2 },
    { name: 'Capital Bank', value: 'No', id: 3 },
    { name: 'Return Type', value: 'Period', id: 4 },
    { name: 'Number of Period', value: '7 Times', id: 5 },
    { name: 'Profit Withdraw', value: 'Anytime', id: 6 },
  ];

  const content = (
    <section className="section-style">
      <div
        className=" bg-no-repeat bg-left bg-cover h-[38rem] w-screen "
        style={{ backgroundImage: 'url(../risebtc.jpg)' }}
      >
        <Header />
        <article className=" center-with-flex z-0 h-[15rem]  text-white">
          <h2 className=" font-bolder text-[1.2rem]"> section one</h2>
        </article>
      </div>
      <article className="article-style center-with-grid  bg-green-500  ">
        <h1 className="text-center">Our Best Plan</h1>
        <div className="center-with-flex  plan-style">
          <h1>plan 1</h1>
          <ul className="w-[80%] h-[80%]  mx-auto block">
            {starterPlan.map((data) => (
              <li key={data.id} className="plan-items">
                {data.name} <span className="inline  ">{data.value}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/plan-1"
            className="p-2 my-2 mx-auto rounded-[2rem] bg-red-500 my-2"
          >
            INVEST NOW <GoArrowUpRight className="inline" />
          </Link>
        </div>
        <div className="center-with-flex plan-style">
          <h1>plan 2</h1>
          <ul className="w-[80%] h-[80%]  mx-auto block">
            {starterPlan.map((data) => (
              <li key={data.id} className="plan-items">
                {data.name} <span className="inline  ">{data.value}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/plan-1"
            className="p-2 my-2 mx-auto rounded-[2rem] bg-red-500 my-2"
          >
            INVEST NOW <GoArrowUpRight className="inline" />
          </Link>
        </div>
        <div className="center-with-flex plan-style">
          <h1>plan 3</h1>
          <ul className="w-[80%] h-[80%]  mx-auto block">
            {starterPlan.map((data) => (
              <li key={data.id} className="plan-items">
                {data.name} <span className="inline  ">{data.value}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/plan-1"
            className="p-2 my-2 mx-auto rounded-[2rem] bg-red-500 my-2"
          >
            INVEST NOW <GoArrowUpRight className="inline" />
          </Link>
        </div>
      </article>
      <article className="article-style center-with-flex">
        <h2> section one</h2>
      </article>
      <article className="article-style center-with-flex bg-green-500 ">
        <h2> section one</h2>
      </article>
      <article className="article-style center-with-flex">
        <h2> section one</h2>
      </article>
      <article className="article-style center-with-flex bg-green-500 ">
        <h2> section one</h2>
      </article>
      <article className="article-style center-with-flex">
        <h2> section one</h2>
      </article>
      <Footer />
    </section>
  );

  return content;
}
