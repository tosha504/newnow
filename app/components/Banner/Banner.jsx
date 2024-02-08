import "./Banner.scss";
export const Banner = ({ banner }) => {
  return (
    <section
      className="banner anim-background "
      style={{
        backgroundImage: `url(${banner?.background?.sourceUrl})`,
      }}
    >
      <div className="container">
        <h1>{banner?.title}</h1>
      </div>
    </section>
  );
};
