import { getSingleWorkPost } from "@/store/api";
// import "../../sass/page.scss";
import "./Works-slug.scss";

const Works = async ({ params }) => {
  const { data } = await getSingleWorkPost(params.slug);
  return (
    <main className="works-single-page">
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: data?.workBy?.content }}></div>
      </div>
    </main>
  );
};

export default Works;
