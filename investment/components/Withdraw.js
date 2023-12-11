export default function Withdraw() {
  const content = (
    <section className="mt-[7rem] px-5  bg-yellow-500">
      <h1 className="text-3xl text-center font-semibold dark:text-white mx-5 my-3">
        ASK FOR WITHDRAWAL
      </h1>
      <form className="mt-9 max-w-md mx-auto">
        <label className="text-base ">Amount:</label> <br />
        <input
          className="block  py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="$50.00"
        ></input>
        <br />
        <label>Wallet Address:</label>
        <br />
        <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></input>
        <br />
        <button
          type="button"
          class="py-2.5  px-5 me-2 mb-2 text-sm font-semibold font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Withdraw
        </button>
      </form>
    </section>
  );

  return content;
}
