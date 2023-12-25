import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

export default function () {
  const starterPlan = [
    { name: "Interest", value: "20%", id: 1 },
    { name: "Investment", value: "$500-$5000", id: 2 },
    { name: "Capital Back", value: "Yes", id: 3 },
    { name: "Return Type", value: "Period", id: 4 },
    { name: "Number of Period", value: "5 Times", id: 5 },
    { name: "Profit Withdraw", value: "Anytime", id: 6 },
  ];

  const premium = [
    { name: "Interest", value: "130.1%", id: 1 },
    { name: "Investment", value: "$5000-$10000", id: 2 },
    { name: "Capital Back", value: "Yes", id: 3 },
    { name: "Return Type", value: "Period", id: 4 },
    { name: "Number of Period", value: "7 Times", id: 5 },
    { name: "Profit Withdraw", value: "Anytime", id: 6 },
  ];

  const gold = [
    { name: "Interest", value: "180%", id: 1 },
    { name: "Investment", value: "$10000-$50000", id: 2 },
    { name: "Capital Bank", value: "Yes", id: 3 },
    { name: "Return Type", value: "Period", id: 4 },
    { name: "Number of Period", value: "7 Times", id: 5 },
    { name: "Profit Withdraw", value: "Anytime", id: 6 },
  ];

  const content = (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="opacity: 1; transform: none;">
            <h1>
              <span className="mt-6 block max-w-5xl md:text-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                Pricing Plans
              </span>
              <span className="sm:mt-5 block font-display text-base font-semibold text-neutral-950">
                Transparent and Competitive Pricing
              </span>
            </h1>
            <div className="mt-6 max-w-3xl text-xl text-neutral-600">
              <p>
                At BullHarvest, we believe in transparency and empowering our
                clients with clear information about our pricing plans. Explore
                our pricing options below and choose the plan that best suits
                your investment needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <article className="article-style  mb-5  ">
        {/* bf arrow */}
        {/* <h1 className="underline mb-4 underline-offset-8 text-lg font-semibold leading-6 text-gray-900">
          Our Best Plan
        </h1> */}
        <div className="2xl:mx-18 md:px-8 lg:px-8 center-with-grid md:grid-cols-3 w-screen">
          <div className="center-with-flex  plan-style">
            <h1 className=" underline font-black tracking-wider decoration-2 underline-offset-2">
              Starter plan
            </h1>
            <ul className="w-[92%] h-[98%]  mx-auto block">
              {starterPlan.map((data) => (
                <li key={data.id} className="plan-items">
                  {data.name}: <span className="inline  ">{data.value}</span>
                </li>
              ))}
            </ul>
            <Link href="/prices" className="plan-link-style">
              CHOOSE PLAN <GoArrowUpRight className="inline" />
            </Link>
          </div>
          <div className=" center-with-flex plan-style">
            <h1 className=" underline font-black tracking-wider decoration-2 underline-offset-2">
              Premium
            </h1>
            <ul className="w-[92%] h-[98%]  mx-auto block">
              {premium.map((data) => (
                <li key={data.id} className="plan-items">
                  {data.name}: <span className="inline  ">{data.value}</span>
                </li>
              ))}
            </ul>
            <Link href="/prices" className="plan-link-style">
              CHOOSE PLAN <GoArrowUpRight className="inline" />
            </Link>
          </div>
          <div className="center-with-flex plan-style">
            <h1 className=" underline font-black tracking-wider decoration-2 underline-offset-2">
              Gold
            </h1>
            <ul className="w-[92%] h-[98%]  mx-auto block">
              {gold.map((data) => (
                <li key={data.id} className="plan-items">
                  {data.name}: <span className="inline  ">{data.value}</span>
                </li>
              ))}
            </ul>
            <Link href="/prices" className="plan-link-style">
              CHOOSE PLAN <GoArrowUpRight className="inline" />
            </Link>
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-14 sm:mt-12 lg:mt-20">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="opacity: 1; transform: none;">
            <div className="mt-10 max-w-2xl space-y-6 text-base">
              <p>
                The Premium Plan is tailored for investors looking for a
                comprehensive financial management experience, including
                personalized advice and strategic planning.
              </p>
              <button className="plan-link-style">
                <a href="register">Sign Up Now</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-12 lg:mt-20">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="opacity: 1; transform: none;">
            <h1>
              <span className="mt-6 block md:text-4xl max-w-5xl font-display text-3xl lg:text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                Additional Information
              </span>
            </h1>

            <div className="mt-10 max-w-2xl space-y-6 text-base">
              <p>
                <span className="font-black">No Hidden Fees:</span> At
                BullHarvest, we believe in transparent pricing. There are no
                hidden fees, and you only pay the amount specified for your
                chosen plan.
              </p>
              <p>
                <span className="font-black">Custom Solutions:</span> Need a
                tailored solution for your unique requirements? Contact our team
                for custom pricing options.
              </p>
              <p>
                <span className="font-black">CFree Trial:</span> Not sure which
                plan is right for you? Sign up for a free trial of our Premium
                Plan and experience the full range of BullHarvest services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-12 lg:mt-20">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="opacity: 1; transform: none;">
            <h1>
              <span className="mt-6 md:text-4xl block max-w-5xl font-display text-3xl lg:text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                Contact Us
              </span>
            </h1>

            <div className="mt-10 max-w-2xl space-y-6 text-base">
              <p>
                Have questions about our pricing plans or need assistance in
                choosing the right one for you? Our support team is ready to
                help. Contact us here.
              </p>
              <button className="plan-link-style">
                <a href="contact">Contact</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-10 max-w-7xl px-6 lg:px-8 mt-24 sm:mt-12 lg:mt-20">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="opacity: 1; transform: none;">
            <h1>
              <span className="mt-6 md:text-4xl block max-w-5xl font-display text-3xl lg:text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                Start Investing Today
              </span>
            </h1>

            <div className="mt-10 max-w-2xl space-y-6 text-base">
              <p>
                Ready to take control of your financial future? Choose your
                plan, sign up today, and embark on your investment journey with
                BullHarvest.
              </p>
              <button className="plan-link-style">
                <a href="register">Get Started Now</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );

  return content;
}
