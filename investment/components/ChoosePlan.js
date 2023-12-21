export default function ChoosePlan() {
  const content = (
    <section className='min-h-screen w-full text-[#03045e]  mt-[6.9rem] mb-[9em]  rounded-b-lg  flex flex-col'>
      <h1 className=' mt-2 text-2xl font-bold text-center text-gray-700 flex items-center justify-center mb-3 '>
        Make a deposit
      </h1>

      <div className='w-full px-3'>
        <h2 className=' mt-2 text-[1.2rem] font-bold text-center text-gray-700 flex items-center justify-center mb-1 '>
          choose wallet
        </h2>
        <h3 className='text-lg font-medium text-md text-center text-gray-700 flex items-center justify-center  '>
          BTC
        </h3>
        <p className=' flex items-center justify-center'>
          19S3BzZG3bf5EkL4iWF4Hxd
          <br />
          wanKkXp14tM
        </p>

        <h3 className='text-lg font-medium text-md tecxt-center text-gray-700 flex items-center justify-center  '>
          ETH
        </h3>
        <p className='flex items-center justify-center'>
          0x3096cD7ae641E6dc4aABc338
          <br />
          87454C233cbEA102
        </p>

        <h3 className='text-lg font-medium text-md tecxt-center text-gray-700 flex items-center justify-center  '>
          USDT
        </h3>
        <p className='flex items-center justify-center'>
          TVZaNnUTc9Tr6JxwimLtd
          <br />
          7bfR3UT6ds5sJ
        </p>

        <h3 className='text-lg font-medium text-md tecxt-center text-gray-700 flex items-center justify-center  '>
          TRX
        </h3>
        <p className='flex items-center justify-center'>
          TVZaNnUTc9Tr6JxwimLtd7bfR
          <br />
          3UT6ds5sJ
        </p>
      </div>
      <div>
        <h2 className='text-lg font-medium mt-5 text-md tecxt-center text-gray-700 flex items-center justify-center mb-3 '>
          Choose a plan
        </h2>
        <div className='mb-5 bg-white text-[#03045e] text-[1rem] font-bold mx-auto  border-none gap-5 min-h-[17rem] shadow-gray-500 shadow-2xl rounded-[1rem] text-left p-2  w-[94%]'>
          <h1>Starter Plan</h1>
          <div className='plan'>
            <h3>
              Interest <span className='float-right'>20%</span>
            </h3>
            <h3>
              Investment <span className='float-right'>$50.00 - $500.00</span>
            </h3>
            <h3>
              Withdraw <span className='float-right'>Anytime</span>
            </h3>
          </div>
          <form>
            <label>Amount</label>
            <input
              type='number'
              name='amount'
              className='mb-2 border border-gray-300 rounded-md focus:outline-none focus-border-blue-500'
              placeholder='$50 - $500'
            />

            <div className='flex'>
              <select
                name='cryptocurrency'
                className='mb-2 w-full  border p-2 border-gray-300 rounded-md focus:outline-none focus-border-blue-500'>
                <option value='bitcoin'>BTC</option>
                <option value='ethereum'>ETH</option>
                <option value='litecoin'>LIT</option>
              </select>
              <select
                name='currency'
                className='block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus-border-blue-500'>
                <option value='usd'>USd</option>
                <option value='eur'>EUR</option>
                <option value='gpb'>GPB</option>
              </select>
            </div>
            <button className=' mt-1 bg-black text-white font-bold py-2 px-4 rounded flex-center'>
              Deposit
            </button>
          </form>
        </div>

        <div className='mb-5 bg-white text-[#03045e] text-[1rem] font-bold mx-auto  border-none gap-5 min-h-[17rem] shadow-gray-500 shadow-2xl rounded-[1rem] text-left p-2  w-[94%]'>
          <h1>Plan B</h1>
          <div className='plan'>
            <h3>
              Interest <span className='float-right'>130.1%</span>
            </h3>
            <h3>
              Investment{' '}
              <span className='float-right'>$5000.00 - $10000.00</span>
            </h3>
            <h3>
              Withdraw <span className='float-right'>Anytime</span>
            </h3>
          </div>
          <form>
            <label>Amount</label>
            <input
              type='number'
              name='amount'
              className='mb-2 border border-gray-300 rounded-md focus:outline-none focus-border-blue-500'
              placeholder='$500 - $5000'
            />

            <div className='flex'>
              <select
                name='cryptocurrency'
                className='mb-2 w-full  border p-2 border-gray-300 rounded-md focus:outline-none focus-border-blue-500'>
                <option value='bitcoin'>BTC</option>
                <option value='ethereum'>ETH</option>
                <option value='litecoin'>LIT</option>
              </select>
              <select
                name='currency'
                className='block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus-border-blue-500'>
                <option value='usd'>USd</option>
                <option value='eur'>EUR</option>
                <option value='gpb'>GPB</option>
              </select>
            </div>
            <button className='mt-1 bg-black text-white font-bold py-2 px-4 rounded flex-center'>
              Deposit
            </button>
          </form>
        </div>

        <div className=' bg-white text-[#03045e] text-[1rem] mb-[4em] font-bold mx-auto  border-none gap-5 min-h-[17rem] shadow-gray-500 shadow-2xl rounded-[1rem] text-left p-2  w-[94%]'>
          <h1>Plan C</h1>
          <div className='plan'>
            <h3>
              Interest <span className='float-right'>180%</span>
            </h3>
            <h3>
              Investment{' '}
              <span className='float-right'>$10000.00 - $50000.00</span>
            </h3>
            <h3>
              Withdraw <span className='float-right'>Anytime</span>
            </h3>
          </div>
          <form>
            <label>Amount</label>
            <input
              type='number'
              name='amount'
              className='mb-2 border border-gray-300 rounded-md focus:outline-none focus-border-blue-500'
              placeholder='$5000 - $15000'
            />

            <div className='flex'>
              <select
                name='cryptocurrency'
                className='mb-2 w-full  border p-2 border-gray-300 rounded-md focus:outline-none focus-border-blue-500'>
                <option value='bitcoin'>BTC</option>
                <option value='ethereum'>ETH</option>
                <option value='litecoin'>LIT</option>
              </select>
              <select
                name='currency'
                className='block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus-border-blue-500'>
                <option value='usd'>USd</option>
                <option value='eur'>EUR</option>
                <option value='gpb'>GPB</option>
              </select>
            </div>
            <button className='mt-1 bg-black text-white font-bold py-2 px-4 rounded flex-center'>
              Deposit
            </button>
          </form>
        </div>
      </div>
    </section>
  );

  return content;
}
