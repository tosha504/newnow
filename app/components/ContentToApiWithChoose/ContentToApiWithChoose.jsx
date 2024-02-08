import React from "react";
import ContentLeft from "./ContentLeft/ContentLeft";
import ContentRightFlex from "./ContentRightFlex/ContentRightFlex";
import "./ContentToApiWithChoose.scss";
const ContentToApiWithChoose = ({ builderItems }) => {
  return (
    <section
      className="multiple-choice"
      id={builderItems.anchor ? builderItems.anchor : ""}
    >
      <div className="container">
        <ContentLeft contentLeftData={builderItems.contentLeft.contentLeft} />
        <ContentRightFlex
          contentRightFlexData={builderItems.contentRightFlex}
        />
      </div>
    </section>
  );
};

export default ContentToApiWithChoose;
