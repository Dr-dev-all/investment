import Header from './Header';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';
import Footer from './Footer';
import { PiArrowFatLinesDownFill } from 'react-icons/pi';

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
    <section className='section-style '>
      <div
        className='div-style'
        style={{ backgroundImage: 'url(../risebtc.jpg)' }}>
        <Header />
        <article className=' center-with-flex z-0 h-[15rem]  text-white'>
          <h2 className=' font-bolder text-[1.2rem] w-[70%] text-left'>
            {' '}
            Unlock the life changing Potential of Digital Currency with
            <span className='mx-2 text-[#001845] bg-white p-1 font-bold underline '>
              BullHarvest
            </span>{' '}
            today."
          </h2>
          .
        </article>
      </div>
      <article className='article-style center-with-flex'>
        <div className='w-full h-full '>
          <h1 className=' center-with-flex text-[1.5rem] uppercase  w-screen h-[4rem]  bg-[#001845] '>
            who we are
          </h1>
          <p className='center-with-flex  h-[6rem] text-black'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut !
          </p>
          <h1 className='w-screen h-[2rem]   my-[1rem]'>
            Benefits of investing with us
          </h1>
          <ul className='text-white h-[9rem] w-screen pl-2 py-4 bg-[#001845] list-disc'>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </article>

      <hr className='w-[80%] mx-auto' />

      <div className=' center-with-flex w-screen text-center my-[1rem]'>
        <h2 className=' text-[1.3rem] font-bold text-center p-2 '>
          ENJOY OUR BEST PLANS{' '}
        </h2>

        <span className=' center-with-flex block animate-bounce rounded-full bg-[#03045e] p-2 h-[2rem] w-[2rem] mx-auto '>
          <PiArrowFatLinesDownFill className='text-white text-[1.5rem]' />
        </span>
      </div>

      <article className='article-style center-with-grid  bg-green-500  '>
        <h1 className='text-center'>Our Best Plan</h1>
        <div className='center-with-flex  plan-style'>
          <h1>plan 1</h1>
          <ul className='w-[80%] h-[80%]  mx-auto block'>
            {starterPlan.map((data) => (
              <li key={data.id} className='plan-items'>
                {data.name} <span className='inline  '>{data.value}</span>
              </li>
            ))}
          </ul>
          <Link
            href='/plan-1'
            className='p-2 my-2 mx-auto rounded-[2rem] bg-red-500 my-2'>
            INVEST NOW <GoArrowUpRight className='inline' />
          </Link>
        </div>
        <div className='center-with-flex plan-style'>
          <h1>plan 2</h1>
          <ul className='w-[80%] h-[80%]  mx-auto block'>
            {starterPlan.map((data) => (
              <li key={data.id} className='plan-items'>
                {data.name} <span className='inline  '>{data.value}</span>
              </li>
            ))}
          </ul>
          <Link
            href='/plan-1'
            className='p-2 my-2 mx-auto rounded-[2rem] bg-red-500 my-2'>
            INVEST NOW <GoArrowUpRight className='inline' />
          </Link>
        </div>
        <div className='center-with-flex plan-style'>
          <h1>plan 3</h1>
          <ul className='w-[80%] h-[80%]  mx-auto block'>
            {starterPlan.map((data) => (
              <li key={data.id} className='plan-items'>
                {data.name} <span className='inline  '>{data.value}</span>
              </li>
            ))}
          </ul>
          <Link
            href='/plan-1'
            className='p-2 my-2 mx-auto rounded-[2rem] bg-red-500 my-2'>
            INVEST NOW <GoArrowUpRight className='inline' />
          </Link>
        </div>
      </article>

      <article className='article-style center-with-flex bg-green-500 '>
        <h2> section one</h2>
      </article>
      <article className='article-style center-with-flex'>
        <h2> section one</h2>
      </article>
      <article className='article-style center-with-flex bg-green-500 '>
        <h2> section one</h2>
      </article>
      <article className='article-style center-with-flex'>
        <h2> section one</h2>
      </article>
      <Footer />
    </section>
  );

  return content;
}
