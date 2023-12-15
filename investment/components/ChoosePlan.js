export default function ChoosePlan() {
  const content = (
    <section className="min-h-screen w-full text-[#03045e]  mt-[6.9rem] mb-[5em]  rounded-b-lg  flex flex-col">
      <h1 className=" mt-2 text-2xl font-bold text-center text-gray-700 flex items-center justify-center mb-3 ">
        Make a deposit
      </h1>
      <div>
        <h2 className="text-lg font-medium mt-1 text-md tecxt-center text-gray-700 flex items-center justify-center mb-3 ">
          Choose a plan
        </h2>
        <div className="mb-5 bg-white text-[#03045e] text-[1rem] font-bold mx-auto  border-none gap-5 min-h-[17rem] shadow-gray-500 shadow-2xl rounded-[1rem] text-left p-2  w-[94%]">
          <h1>Plan A</h1>
          <div className="plan">
            <h3>
              Interest <span className="float-right">128.8%</span>
            </h3>
            <h3>
              Investment <span className="float-right">$50.00 - $500.00</span>
            </h3>
            <h3>
              Withdraw <span className="float-right">Anytime</span>
            </h3>
          </div>
          <form>
            <label>Amount</label>
            <input
              type="number"
              name="amount"
              className="mb-2 border border-gray-300 rounded-md focus:outline-none focus-border-blue-500"
              placeholder="$50 - $500"
            />

            <div className="flex">
              <select
                name="cryptocurrency"
                className="mb-2 w-full  border p-2 border-gray-300 rounded-md focus:outline-none focus-border-blue-500"
              >
                <option value="bitcoin">BTC</option>
                <option value="ethereum">ETH</option>
                <option value="litecoin">LIT</option>
              </select>
              <select
                name="currency"
                className="block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus-border-blue-500"
              >
                <option value="usd">USd</option>
                <option value="eur">EUR</option>
                <option value="gpb">GPB</option>
              </select>
            </div>
            <button className=" mt-1 bg-black text-white font-bold py-2 px-4 rounded flex-center">
              Deposit
            </button>
          </form>
        </div>

        <div className="mb-5 bg-white text-[#03045e] text-[1rem] font-bold mx-auto  border-none gap-5 min-h-[17rem] shadow-gray-500 shadow-2xl rounded-[1rem] text-left p-2  w-[94%]">
          <h1>Plan B</h1>
          <div className="plan">
            <h3>
              Interest <span className="float-right">128.8%</span>
            </h3>
            <h3>
              Investment <span className="float-right">$500.00 - $5000.00</span>
            </h3>
            <h3>
              Withdraw <span className="float-right">Anytime</span>
            </h3>
          </div>
          <form>
            <label>Amount</label>
            <input
              type="number"
              name="amount"
              className="mb-2 border border-gray-300 rounded-md focus:outline-none focus-border-blue-500"
              placeholder="$500 - $5000"
            />

            <div className="flex">
              <select
                name="cryptocurrency"
                className="mb-2 w-full  border p-2 border-gray-300 rounded-md focus:outline-none focus-border-blue-500"
              >
                <option value="bitcoin">BTC</option>
                <option value="ethereum">ETH</option>
                <option value="litecoin">LIT</option>
              </select>
              <select
                name="currency"
                className="block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus-border-blue-500"
              >
                <option value="usd">USd</option>
                <option value="eur">EUR</option>
                <option value="gpb">GPB</option>
              </select>
            </div>
            <button className="mt-1 bg-black text-white font-bold py-2 px-4 rounded flex-center">
              Deposit
            </button>
          </form>
        </div>

        <div className=" bg-white text-[#03045e] text-[1rem] font-bold mx-auto  border-none gap-5 min-h-[17rem] shadow-gray-500 shadow-2xl rounded-[1rem] text-left p-2  w-[94%]">
          <h1>Plan C</h1>
          <div className="plan">
            <h3>
              Interest <span className="float-right">128.8%</span>
            </h3>
            <h3>
              Investment{" "}
              <span className="float-right">$5000.00 - $15000.00</span>
            </h3>
            <h3>
              Withdraw <span className="float-right">Anytime</span>
            </h3>
          </div>
          <form>
            <label>Amount</label>
            <input
              type="number"
              name="amount"
              className="mb-2 border border-gray-300 rounded-md focus:outline-none focus-border-blue-500"
              placeholder="$5000 - $15000"
            />

            <div className="flex">
              <select
                name="cryptocurrency"
                className="mb-2 w-full  border p-2 border-gray-300 rounded-md focus:outline-none focus-border-blue-500"
              >
                <option value="bitcoin">BTC</option>
                <option value="ethereum">ETH</option>
                <option value="litecoin">LIT</option>
              </select>
              <select
                name="currency"
                className="block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus-border-blue-500"
              >
                <option value="usd">USd</option>
                <option value="eur">EUR</option>
                <option value="gpb">GPB</option>
              </select>
            </div>
            <button className="mt-1 bg-black text-white font-bold py-2 px-4 rounded flex-center">
              Deposit
            </button>
          </form>
        </div>
      </div>
    </section>
  );

  return content;
}
