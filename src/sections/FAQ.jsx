import React from "react";
import Accordion from "../components/faqs/Accordion";

const FAQ = () => {
  return (
    <div
      className="bg-[#FAFAFA] py-12 px-5 lg:p-24 flex flex-col items-center"
      id="faqs"
    >
      <div className="text-center space-y-5">
        <h1 className="text-4xl lg:text-5xl font-bold">
          Frequently asked questions
        </h1>
        <p className="text-lg lg:2xl">
          Everything you need to know about the product and billing.
        </p>
      </div>
      <div className="mt-14 w-full lg:w-1/2">
        <Accordion title="Is there a free trial available?">
          <p>
            Yes, you can try us for free for 30 days. If you want, we’ll provide
            you with a free, personalized 30-minute onboarding call to get you
            up and running as soon as possible..
          </p>
        </Accordion>
        <Accordion title="Can I change my plan later?">
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Accordion>
        <Accordion title="What is your cancellation policy?">
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </Accordion>
        <Accordion title="Can other info be added to an invoice?">
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </Accordion>
        <Accordion title="How does billing work?">
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </Accordion>
        <Accordion title="How do I change my account email??">
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
