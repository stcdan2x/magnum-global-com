'use client';
import React, { useState } from 'react';

const Accordion = ({ title, content }: { title: string; content: string }) => {
  const minusIcon = '-';
  const plusIcon = '+';
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div
      className="my-2 sm:my-4 md:my-6 shadow-sm cursor-pointer bg-gradient-to-br from-black to-tileGray text-white w-full"
      onClick={toggleExpanded}
    >
      <div className="px-6 text-left items-center h-20 select-none flex justify-between flex-row shadow-md shadow-gray-500">
        <h5 className="flex-1">{title}</h5>
        <div className="flex-none pl-2">{expanded ? minusIcon : plusIcon}</div>
      </div>
      <div
        className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-[0.5s] shadow-sm shadow-gray-500 ${
          expanded
            ? 'max-h-[996px] ease-in'
            : 'max-h-0 ease-[cubic-bezier(0,1,0,1)]'
        }`}
      >
        <p
          className={`p-6 text-left [transition:transform_1s,opacity_4s] ease-out ${
            expanded
              ? 'scale-100 opacity-100 [transition:transform_1s,opacity_3s]'
              : 'scale-0 opacity-0 [transition:transform_1s,opacity_1s]'
          }`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

Accordion.defaultProps = {
  title: 'Accordion Title',
  content:
    'Perferendis quod consequatur quisquam incidunt dolorem facere vero voluptate non nulla, accusamus delectus autem ducimus! Libero, inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed explicabo et ipsa doloribus necessitatibus pariatur ut totam ipsum facilis vero mollitia libero veniam, eos molestiae quidem reprehenderit! Deleniti rem voluptatibus quasi earum.',
};

export default Accordion;
