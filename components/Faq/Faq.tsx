import React from 'react';
import Accordion from '../Accordion/Accordion';
import tempData from './tempData/data';

const Faq = () => {
  return (
    <section className="faq px-4 sm:px-6 lg:px-8 pt-10 pb-14 md:pt-12 md:pb-16 bg-mineShaftBlack">
      <h2 className="faq-header text-gray-100 text-4xl pb-7">FAQ's</h2>
      <div className="accordion-container mx-auto dt:px-24">
        {tempData.map((accData, idx) => (
          <Accordion
            title={accData.title}
            content={accData.content}
            key={`key${idx}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
