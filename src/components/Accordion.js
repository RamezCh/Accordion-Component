import AccordionItem from './AccordionItem';

export function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem
          key={index}
          title={faq.title}
          text={faq.text}
          num={index}
        />
      ))}
    </div>
  );
}
