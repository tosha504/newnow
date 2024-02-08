const ContentLeft = ({ contentLeftData }) => {
  return (
    contentLeftData && (
      <div
        className="multiple-choice__left"
        dangerouslySetInnerHTML={{
          __html: contentLeftData,
        }}
      ></div>
    )
  );
};

export default ContentLeft;
