import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function Terms() {
  const content = (
    <main>
      <Link href="/login/userdash">
        <div className="p-5 bg-[#03045e] text-white">
          <FaArrowLeft />
        </div>
      </Link>
      <section className="container mt-3 mx-auto px-4  ">
        <h1 className="text-lg font-semibold leading-6 text-gray-900">
          Welcome to BullHarvest! By accessing or using our website, you agree
          to comply with and be bound by these Terms and Conditions. If you
          disagree with any part of these terms, please do not use our services.
        </h1>
      </section>

      <section className="container mt-3 mx-auto px-4 py-3 ">
        <h2 className="mb-1 text-2xl font-normal tracking-tight text-gray-900">
          Acceptance of Terms
        </h2>
        <div className=" lg:w-[100%] mx-auto mb-4 ">
          <p className=" mt-2 text-md text-gray-700 ">
            By using BullHarvest, you acknowledge that you have read,
            understood, and agree to be bound by these Terms and Conditions.
          </p>
        </div>
      </section>

      <section className="container mt-3 mx-auto px-4 py-3 ">
        <h2 className="mb-1 text-2xl font-normal tracking-tight text-gray-900">
          Use of the Service
        </h2>
        <div className=" lg:w-[100%] mx-auto mb-4 ">
          <p className=" mt-2 text-md text-gray-700 ">
            You agree to use our services only for lawful purposes and in
            accordance with these Terms. You must not use the service in any way
            that causes, or may cause, damage to the website or impairment of
            the availability or accessibility.
          </p>
        </div>
      </section>

      <section className="container mt-3 mx-auto px-4 py-3 ">
        <h2 className="mb-1 text-2xl font-normal tracking-tight text-gray-900">
          User Accounts
        </h2>
        <div className=" lg:w-[100%] mx-auto mb-4 ">
          <p className=" mt-2 text-md text-gray-700 ">
            Certain services may require you to create an account. You are
            responsible for maintaining the confidentiality of your account
            information and are fully responsible for all activities that occur
            under your account.
          </p>
        </div>
      </section>

      <section className="container mt-3 mx-auto px-4 py-3 ">
        <h2 className="mb-1 text-2xl font-normal tracking-tight text-gray-900">
          Content
        </h2>
        <div className=" lg:w-[100%] mx-auto mb-4 ">
          <p className=" mt-2 text-md text-gray-700 ">
            You are solely responsible for the content you submit to or through
            BullHarvest. By submitting content, you grant us a worldwide,
            non-exclusive, royalty-free license to use, reproduce, modify,
            adapt, publish, and distribute the content.
          </p>
        </div>
      </section>

      <section className="container mt-3 mx-auto px-4 py-3 ">
        <h2 className="mb-1 text-2xl font-normal tracking-tight text-gray-900">
          Intellectual Property
        </h2>
        <div className=" lg:w-[100%] mx-auto mb-4 ">
          <p className=" mt-2 text-md text-gray-700 ">
            All content on BullHarvest, including but not limited to text,
            graphics, logos, and images, is the property of BullHarvest and is
            protected by intellectual property laws.
          </p>
        </div>
      </section>

      <section className="container mt-3 mx-auto px-4 py-3 ">
        <h2 className="mb-1 text-2xl font-normal tracking-tight text-gray-900">
          Limitation of Liability
        </h2>
        <div className=" lg:w-[100%] mx-auto mb-4 ">
          <p className=" mt-2 text-md text-gray-700 ">
            BullHarvest and its affiliates shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages, or any loss
            of profits or revenues, whether incurred directly or indirectly.
          </p>
        </div>
      </section>

      <section className="container mt-3 mx-auto px-4 py-3 ">
        <h2 className="mb-1 text-2xl font-normal tracking-tight text-gray-900">
          Governing Law
        </h2>
        <div className=" lg:w-[100%] mx-auto mb-4 ">
          <p className=" mt-2 text-md text-gray-700 ">
            These Terms and Conditions are governed by and construed in
            accordance with the laws of [Your Jurisdiction].
          </p>
        </div>
      </section>

      <section className="container mt-3 mx-auto px-4 py-3 ">
        <h2 className="mb-1 text-2xl font-normal tracking-tight text-gray-900">
          Changes to Terms
        </h2>
        <div className=" lg:w-[100%] mx-auto mb-4 ">
          <p className=" mt-2 text-md text-gray-700 ">
            We reserve the right to modify or replace these Terms and Conditions
            at any time. The revised terms will be effective immediately upon
            posting.
          </p>
        </div>
      </section>

      <section className="container mt-3 mx-auto px-4 py-3 ">
        <h2 className="mb-1 text-2xl font-normal tracking-tight text-gray-900">
          Contact Information
        </h2>
        <div className=" lg:w-[100%] mx-auto mb-4 ">
          <p className=" mt-2 text-md text-gray-700 ">
            If you have any questions or concerns about these Terms and
            Conditions, please contact us at [Your Contact Information].
          </p>
        </div>
      </section>

      <section className="container mt-3 mx-auto px-4 py-3 ">
        <h2 className="mb-1 text-2xl font-normal tracking-tight text-gray-900">
          Compliance
        </h2>
        <div className=" lg:w-[100%] mx-auto mb-4 ">
          <p className=" mt-2 text-md text-gray-700 ">
            Our Terms and Conditions comply with [Applicable Laws and
            Regulations], including [Consumer Protection Laws, etc.].
          </p>
        </div>
      </section>
    </main>
  );

  return content;
}
