import { IoLogoBitcoin } from "react-icons/io";
import { FaBitcoin } from "react-icons/fa6";

export default function About() {
  const content = (
    <main>
      <div className="min-h-screen flex flex-row justify-center items-center lg:px-32 px-5 bg-gradient-to-br from-purple-600 to-blue-500 bg-cover bg-no-row">
        <div className="w-full lg:w-2/3 space-y-8">
          <h1 className="text-backgroundColor font-semibold text-5xl text-center">
            About BullHarvest
          </h1>
          <p className="text-backgroundColor text-center">
            By leveraging insights from our network of industry insiders, you’ll
            know exactly when to buy to maximize profit, and exactly when to
            sell to avoid painful losses.
          </p>
          <div className="flex justify-center items-center">
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
        <FaBitcoin className="text-[15em] lg:text-[60em] lg:mr-[10rem]" />
        <div className="space-y-4 lg:pt-14">
          <h1 className="font-semibold text-4xl text-center md:text-start">
            Why choose us
          </h1>
          <p>
            lorem10 hshs hshshshsh hshshs hshshhs hshshshs hshshshshs hshshshs
            hhshh hshs bsbsbs hs shshsh h hshshshs hshsh hsh shsh h h h hshsh h
            hs hshshshsjss h shhhs h shs h shshs h sh hhhshs hlorem10 hsh
          </p>
          <p>
            hshshshsh hshshs hshshhs hshshshs hshshshshs hshshshs hhshh hshs h h
            h hshsh h hs hshshshsjss h shhhs h shs h shshs h sh hhhshs hlorem10
            hshs hshshshsh hshshs hshshhs hshshshs hshshshshs hshshshs hhshh
            hshs h h h hshsh h hs hshshshsjss h shhhs h shs h shshs h sh hhhshs
            h
          </p>
          <p>
            lorem10 hshs hshshshsh hshshs hshshhs hshshshs hshshshshs hshshshs
            hhshh hshs h h h hshsh h hs hshshshsjss h shhhs h shs h shshs h sh
            hhhshs h
          </p>
        </div>
      </div>
    </main>
  );

  return content;
}
