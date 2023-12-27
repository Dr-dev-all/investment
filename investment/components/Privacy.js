import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function Privacy() {
  const content = (
    <main>
      <Link href="/login/userdash">
        <div className="p-5 bg-[#03045e] text-white">
          <FaArrowLeft />
        </div>
      </Link>
      <section className="container mt-7 mx-auto px-4  ">
        <h1 className="text-lg font-semibold leading-6 text-gray-900">
          Welcome to BullHarvest! Protecting your privacy is important to us.
          This Privacy Policy outlines how we collect, use, and safeguard your
          personal information.
        </h1>
      </section>

      <section className="container mt-7 mx-auto px-4 py-12 ">
        <h2 className="mb-1 text-2xl font-normal tracking-tight text-gray-900">
          Collection of Information
        </h2>
        <p className="mt-6 mb-2 max-w-3xl text-xl text-neutral-600">
          We collect the following types of information:
        </p>
        <div className=" lg:w-[100%] mx-auto mb-4 ">
          <p className=" mt-2 text-md text-gray-700 ">
            1.Personal Information: Includes your name, email address, and
            contact details.
          </p>
          <p className=" mt-2 text-md text-gray-700 ">
            2. Usage Data: Information about how you use our website.
          </p>
        </div>
      </section>

      <section className="container mt-1 mx-auto px-4 py-5 ">
        <h2 className="mb-1 text-2xl font-normal tracking-tight text-gray-900">
          Use of Your Information
        </h2>
        <p className="mt-6 mb-2 max-w-3xl text-xl text-neutral-600">
          We use your information for the following purposes:
        </p>
        <div className=" lg:w-[100%] mx-auto mb-4 ">
          <p className=" mt-2 text-md text-gray-700 ">
            1.Service Provision: To provide and maintain our services.
          </p>
          <p className=" mt-2 text-md text-gray-700 ">
            2. Communication: To communicate with you and respond to your
            inquiries.
          </p>
          <p className=" mt-2 text-md text-gray-700 ">
            3. Improvement: To enhance and personalize your experience with our
            website.
          </p>
        </div>
      </section>

      <section className="container mt-1 mx-auto px-4 py-5 ">
        <h2 className="mb-1 text-2xl font-normal tracking-tight text-gray-900">
          Sharing of Information
        </h2>
        <p className="mt-6 mb-2 max-w-3xl text-xl text-neutral-600">
          We may share your information with:
        </p>
        <div className=" lg:w-[100%] mx-auto mb-4 ">
          <p className=" mt-2 text-md text-gray-700 ">
            1.Service Providers: Trusted third-party service providers who
            assist us in delivering our services.
          </p>
          <p className=" mt-2 text-md text-gray-700 ">
            2. Legal Requirements: When required by law or to protect our
            rights.
          </p>
        </div>
      </section>

      <section className="container mt-1 mx-auto px-4 py-5 ">
        <h2 className="mb-1 text-2xl font-normal tracking-tight text-gray-900">
          Cookies and Tracking Technologies
        </h2>
        <p className="mt-6 mb-2 max-w-3xl text-xl text-neutral-600">
          We employ cookies and similar technologies for:
        </p>
        <div className=" lg:w-[100%] mx-auto mb-4 ">
          <p className=" mt-2 text-md text-gray-700 ">
            1.Analytics: To analyze user behavior and improve our services.
          </p>
          <p className=" mt-2 text-md text-gray-700 ">
            2. Functionality: To enhance and personalize your experience.
          </p>
        </div>
      </section>

      <section className="container mt-1 mx-auto px-4 py-5 ">
        <h2 className="mb-1 text-2xl font-normal tracking-tight text-gray-900">
          Security Measures
        </h2>
        <p className="mt-6 mb-2 max-w-3xl text-xl text-neutral-600">
          We have implemented security measures to protect your information from
          unauthorized access, alteration, or disclosure.
        </p>
      </section>

      <section className="container mt-1 mx-auto px-4 py-5 ">
        <h2 className="mb-1 text-2xl font-normal tracking-tight text-gray-900">
          Your Rights
        </h2>
        <p className="mt-6 mb-2 max-w-3xl text-xl text-neutral-600">
          You have the right to:
        </p>
        <div className=" lg:w-[100%] mx-auto mb-4 ">
          <p className=" mt-2 text-md text-gray-700 ">
            Access: Access the personal information we hold about you.
          </p>
          <p className=" mt-2 text-md text-gray-700 ">
            Correction: Correct any inaccuracies in your information.
          </p>
          <p className=" mt-2 text-md text-gray-700 ">
            Deletion: Request the deletion of your data.
          </p>
        </div>
      </section>

      <section className="container mt-1 mx-auto px-4 py-5 ">
        <h2 className="mb-1 text-2xl font-normal tracking-tight text-gray-900">
          Policy Updates
        </h2>
        <p className="mt-6 mb-2 max-w-3xl text-xl text-neutral-600">
          We may update this Privacy Policy, and the changes will be effective
          upon posting. Please review this page periodically for any updates.
        </p>
      </section>

      <section className="container mt-1 mx-auto px-4 py-5 ">
        <h2 className="mb-1 text-2xl font-normal tracking-tight text-gray-900">
          Contact Information
        </h2>
        <p className="mt-6 mb-2 max-w-3xl text-xl text-neutral-600">
          If you have questions or concerns regarding our Privacy Policy, please
          contact us at [Your Contact Information].
        </p>
      </section>

      <section className="container mt-1 mx-auto px-4 py-5 ">
        <h2 className="mb-1 text-2xl font-normal tracking-tight text-gray-900">
          Compliance
        </h2>
        <p className="mt-6 mb-2 max-w-3xl text-xl text-neutral-600">
          Our Privacy Policy aligns with [Applicable Laws and Regulations],
          including [GDPR, CCPA, etc.].
        </p>
      </section>
    </main>
  );

  return content;
}
