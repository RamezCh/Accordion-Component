import AccordionItem from './AccordionItem';
import { useState } from 'react';

export function Accordion({ data }) {
  const [curOpen, setIsOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem
          key={index}
          title={faq.title}
          num={index}
          curOpen={curOpen}
          onOpen={setIsOpen}
        >
          {faq.text}
        </AccordionItem>
      ))}
      <AccordionItem
        key="Thinking in React"
        title="Thinking in React"
        num={22}
        curOpen={curOpen}
        onOpen={setIsOpen}
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into Components</li>
          <li>Make Components reusable</li>
          <li>Place State efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}
