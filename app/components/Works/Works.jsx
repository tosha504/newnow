import Image from "next/image";
import Link from "next/link";
import "./Works.scss";
const Works = ({ works }) => {
  // console.log(works);
  return (
    <>
      <div className="container" id={works?.anchor ? works?.anchor : ""}>
        <h2 className="m-title">{works?.title}</h2>
        <section className="portfolio">
          {works?.ourWorks?.map((work) => (
            <article key={work?.id}>
              <Link href={`works/${work?.slug}`} title={work?.title}>
                <div className="wrap-img">
                  {work.featuredImage?.node && (
                    <Image
                      src={`${work?.featuredImage?.node?.sourceUrl}`}
                      width={1024}
                      height={640}
                      alt={`${work?.featuredImage?.node?.altText}`}
                      loading="lazy"
                    />
                  )}
                </div>
                <h3>{work?.title}</h3>
              </Link>
            </article>
          ))}
        </section>
      </div>
    </>
  );
};

export default Works;
