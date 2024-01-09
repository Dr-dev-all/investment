import { GoArrowUpRight } from 'react-icons/go';
import Link from 'next/link';

export default function Prices() {
  const standard = [
    { name: 'Interest', value: '6%', id: 1 },
    { name: 'Minimum Amount', value: '$50', id: 2 },
    { name: 'Maximum Amount', value: '$4,900', id: 3 },
    { name: 'ROI', value: '6% Daily', id: 4 },
    { name: 'Referral Commision', value: '2%', id: 5 },
  ];

  const mega = [
    { name: 'Interest', value: '8%', id: 1 },
    { name: 'Minimum Amount', value: '$5,000', id: 2 },
    { name: 'Maximum Amount', value: '$19,000', id: 3 },
    { name: 'ROI', value: '8% Daily', id: 4 },
    { name: 'Referral Commision', value: '4%', id: 5 },
  ];

  const vip = [
    { name: 'Interest', value: '10%', id: 1 },
    { name: 'Minimum Amount', value: '$20,000', id: 2 },
    { name: 'Maximum Amount', value: 'Unlimited', id: 3 },
    { name: 'ROI', value: '10% Daily', id: 4 },
    { name: 'Referral Commision', value: '6%', id: 5 },
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
              {standard.map((data) => (
                <li key={data.id} className="plan-items">
                  {data.name}: <span className="inline  ">{data.value}</span>
                </li>
              ))}
            </ul>
            <Link href="/login" className="plan-link-style">
              CHOOSE PLAN <GoArrowUpRight className="inline" />
            </Link>
          </div>
          <div className=" center-with-flex plan-style">
            <h1 className=" underline font-black tracking-wider decoration-2 underline-offset-2">
              Premium
            </h1>
            <ul className="w-[92%] h-[98%]  mx-auto block">
              {mega.map((data) => (
                <li key={data.id} className="plan-items">
                  {data.name}: <span className="inline  ">{data.value}</span>
                </li>
              ))}
            </ul>
            <Link href="/login" className="plan-link-style">
              CHOOSE PLAN <GoArrowUpRight className="inline" />
            </Link>
          </div>
          <div className="center-with-flex plan-style">
            <h1 className=" underline font-black tracking-wider decoration-2 underline-offset-2">
              Gold
            </h1>
            <ul className="w-[92%] h-[98%]  mx-auto block">
              {vip.map((data) => (
                <li key={data.id} className="plan-items">
                  {data.name}: <span className="inline  ">{data.value}</span>
                </li>
              ))}
            </ul>
            <Link href="/login" className="plan-link-style">
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
              <Link href="/register" className="plan-link-style">
                Sign Up Now
              </Link>
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
              <Link href="/contact" className="plan-link-style">
                Contact
              </Link>
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
              <Link href="/register" className="plan-link-style">
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );

  return content;
}
