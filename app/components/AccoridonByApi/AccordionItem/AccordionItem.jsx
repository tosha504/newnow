"use client";
import "./AccordionItem.scss";
const AccordionItem = ({ title, content, number }) => {
  return (
    <details>
      <summary>
        <h3>
          {number < 10 ? `0${number + 1}` : number} <span> </span>
          {title}
        </h3>
      </summary>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </details>
  );
};

export default AccordionItem;
