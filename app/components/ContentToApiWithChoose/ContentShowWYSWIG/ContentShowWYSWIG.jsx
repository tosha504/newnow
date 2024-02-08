const ContentShowWYSWIG = ({ contentLeftData }) => {
  return (
    contentLeftData.fieldGroupName ===
      "DefaultTemplate_Fieldtoapi_Builder_ContentToApiWithChoose_ContentRightFlex_TextContent" && (
      <div
        dangerouslySetInnerHTML={{
          __html: contentLeftData.textContentValue,
        }}
      ></div>
    )
  );
};

export default ContentShowWYSWIG;
