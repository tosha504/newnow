import React from "react";
import { AccoridonByApi } from "../../AccoridonByApi/AccoridonByApi";
import ContentShowWYSWIG from "../ContentShowWYSWIG/ContentShowWYSWIG";

const ContentRightFlex = ({ contentRightFlexData }) => {
  return (
    <div className="multiple-choice__right">
      {contentRightFlexData.map((contentRightFlexItems, index) => {
        return (
          <React.Fragment key={index}>
            <ContentShowWYSWIG contentLeftData={contentRightFlexItems} />
            <AccoridonByApi accordionFieldsData={contentRightFlexItems} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ContentRightFlex;
