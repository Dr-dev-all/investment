import { IoLogoBitcoin } from "react-icons/io";
import { FaBitcoin } from "react-icons/fa6";

export default function About() {
  const content = (
    <main>
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="opacity: 1; transform: none;">
            <h1>
              <span className="sm:mt-5 block font-display text-base font-semibold text-neutral-950">
                About Us
              </span>
              <span className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                Our strength is collaboration
              </span>
            </h1>
            <div className="mt-6 max-w-3xl text-xl text-neutral-600">
              <p>
                We believe that our strength lies in our collaborative approach,
                which puts our clients at the center of everything we do.
              </p>
            </div>
            <div className="mt-10 max-w-2xl space-y-6 text-base">
              <p>
                Studio was started by three friends who noticed that developer
                studios were charging clients double what an in-house team would
                cost. Since the beginning, we have been committed to doing
                things differently by charging triple instead.
              </p>
              <p>
                At Studio, we’re more than just colleagues — we’re a family.
                This means we pay very little and expect people to work late. We
                want our employees to bring their whole selves to work. In
                return, we just ask that they keep themselves there until at
                least 6:30pm.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto  lg:mx-0">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              If you have anything else you want to ask, reach out to us.
            </p>
            <div className="mx-auto mt-16 grid  grid-cols-1 gap-8 sm:mt-20 lg:max-w-full lg:grid-cols-3 ">
              <div className="space-y-10">
                <h3 className="text-lg font-semibold leading-6 text-gray-900">
                  How do I know the tips are good?
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Our whole business depends on our tips being good, so it’s in
                  our best interest that they are. The results of our customers
                  speak for themselves, just trust us.
                </p>
              </div>

              <div className="space-y-10">
                <h3 className="text-lg font-semibold leading-6 text-gray-900">
                  Isn’t this insider trading?
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Yes exactly. But at scale! Historically you could only make
                  insider trades with knowledge from your direct network. Pocket
                  brings you insider trading tips from people you don’t even
                  know.
                </p>
              </div>

              <div className="space-y-10">
                <h3 className="text-lg font-semibold leading-6 text-gray-900">
                  But isn’t insider trading illegal?
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Here’s the thing: you’re the one doing the insider trading,
                  not us. We’re just giving you the tips and some tools to make
                  trades. We’re not doing anything wrong here.
                </p>
              </div>
            </div>

            <div className="mx-auto mt-16 grid  grid-cols-1 gap-8 sm:mt-20 lg:max-w-full lg:grid-cols-3 ">
              <div className="space-y-10">
                <h3 className="text-lg font-semibold leading-6 text-gray-900">
                  How do I know the tips are good?
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Our whole business depends on our tips being good, so it’s in
                  our best interest that they are. The results of our customers
                  speak for themselves, just trust us.
                </p>
              </div>

              <div className="space-y-10">
                <h3 className="text-lg font-semibold leading-6 text-gray-900">
                  Isn’t this insider trading?
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Yes exactly. But at scale! Historically you could only make
                  insider trades with knowledge from your direct network. Pocket
                  brings you insider trading tips from people you don’t even
                  know.
                </p>
              </div>

              <div className="space-y-10">
                <h3 className="text-lg font-semibold leading-6 text-gray-900">
                  But isn’t insider trading illegal?
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Here’s the thing: you’re the one doing the insider trading,
                  not us. We’re just giving you the tips and some tools to make
                  trades. We’re not doing anything wrong here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );

  return content;
}
