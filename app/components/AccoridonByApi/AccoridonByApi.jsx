import Accordion from "./AccordionItem/AccordionItem";
import AccordionItem from "./AccordionItem/AccordionItem";
import "./AccoridonByApi.scss";
export const AccoridonByApi = ({ accordionFieldsData }) => {
  return (
    accordionFieldsData.fieldGroupName ===
      "DefaultTemplate_Fieldtoapi_Builder_ContentToApiWithChoose_ContentRightFlex_Accordion" && (
      <div className="accordion">
        {accordionFieldsData.accordionFields.map(
          (accordionFieldData, index) => (
            <Accordion
              key={index}
              number={index}
              title={accordionFieldData.title}
              content={accordionFieldData.opis}
            />
          )
        )}
      </div>
    )
  );
};
