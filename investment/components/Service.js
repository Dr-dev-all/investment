export default function Service() {
  const content = (
    <main className="min-h-screen">
      <section className="  mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
        <div className="mt-[6em] text-center">
          <h1 className="text-[1.5em] font-bold mb-4 color-primary lg:text-[2.5em]">
            Invest with Confidence <br /> Harvest Success
          </h1>
          <p className="lg:text-[1.2em] text-[1] font-md">
            Welcome to BullHarvest, where financial success meets expert
            guidance. Discover investment opportunities tailored to your goals
          </p>
        </div>
        <div className="mt-[4em]">
          <h2 className="sm:pl-5 text-[1.5em] font-bold mb-6 color-primary lg:text-[2em]">
            Services Offered
          </h2>
          <div className="min-w-screen grid grid-cols-1 md:grid-cols-3 gap-3  ">
            <div className=" lg:w-[90%] mx-auto mb-4">
              <h3 className="text-[1.3em] lg:text-[1.5em] bold mb-2 font-black">
                Investment Plans
              </h3>
              <p className=" text-[1em] lg:text-[1.2em] ">
                Diverse Investment Portfolios to Suit Your Ambitions.
              </p>
            </div>

            <div className="lg:w-[90%] mx-auto mb-4">
              <h3 className="text-[1.3em] lg:text-[1.5em] bold mb-2 font-black">
                Risk Management
              </h3>
              <p className="text-[1em] lg:text-[1.2em]">
                Our Proven Approach to Mitigating Risks in Your Investment
                Journey.
              </p>
            </div>

            <div className="lg:w-[90%] mx-auto">
              <h3 className="text-[1.3em] lg:text-[1.5em] font-black mb-2">
                Performance History
              </h3>
              <p className="ttext-[1em] lg:text-[1.2em]">
                Track Record of Success: Consistent Returns and Satisfied
                Investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="  mx-auto max-w-7xl px-6 lg:px-8 mt-8 sm:mt-32 lg:mt-20">
        <div className="mt-[4em]">
          <h2 className="sm:pl-5 sm:text-start  text-[1.3em] font-bold mb-9 color-primary lg:text-[1.6em]">
            Why Choose BullHarvest
          </h2>
          <div className="min-w-screen grid grid-cols-1 md:grid-cols-3 gap-3  ">
            <div className=" lg:w-[90%] mx-auto mb-4">
              <h3 className="text-[1.2em] lg:text-[1.4em] bold mb-2 font-extrabold">
                Expert Team
              </h3>
              <p className=" text-[1em] lg:text-[1.2em] ">
                Meet Our Seasoned Team of Financial Experts Dedicated to Your
                Success.
              </p>
            </div>

            <div className="lg:w-[90%] mx-auto mb-4">
              <h3 className="text-[1.2em] lg:text-[1.4em] bold mb-2 font-extrabold">
                Innovative Approach
              </h3>
              <p className="text-[1em] lg:text-[1.2em]">
                Experience Innovation in Wealth Management - Your Future, Our
                Expertise.
              </p>
            </div>

            <div className="lg:w-[90%] mx-auto">
              <h3 className="text-[1.2em] lg:text-[1.4em] bold mb-2 font-extrabold">
                Client Testimonials
              </h3>
              <p className="ttext-[1em] lg:text-[1.2em]">
                Hear What Our Clients Say About Their BullHarvest Experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="  mx-auto max-w-7xl px-6 lg:px-8 mt-8 sm:mt-32 lg:mt-20">
        <div className="mt-[4em]">
          <h2 className="sm:pl-5 text-[1.3em] font-bold mb-6 color-primary lg:text-[1.6em]">
            How It Works
          </h2>
          <div className="min-w-screen grid grid-cols-1 md:grid-cols-2 gap-3  ">
            <div className=" lg:w-[90%] mx-auto mb-4">
              <h3 className="text-[1.2em] lg:text-[1.4em] bold mb-2 font-extrabold">
                Step-by-Step Guide
              </h3>
              <p className=" text-[1em] lg:text-[1.2em] ">
                Simple Steps to Start Your Investment Journey with BullHarvest.
              </p>
            </div>

            <div className="lg:w-[90%] mx-auto mb-4">
              <h3 className="text-[1.2em] lg:text-[1.4em] bold mb-2 font-extrabold">
                Account Setup
              </h3>
              <p className="text-[1em] lg:text-[1.2em]">
                Seamless Account Creation - Your Gateway to Financial Growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
  return content;
}
