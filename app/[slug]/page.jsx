import { getBuilderData } from "@/store/api";
import "../sass/page.scss";
import "./slug-page.scss";

export async function generateMetadata({ params, searchParams }, parent) {
  const { data } = await getBuilderData(params.slug);
  // const seo = data?.pageBy?.seo;
  // return {
  //   title: `${seo.opengraphSiteName} - ${seo.opengraphTitle}`,
  //   description: seo.metaDesc,
  //   keywords: seo.focuskw,
  // };
}

const page = async ({ params }) => {
  const { data } = await getBuilderData(params.slug);
  return (
    <main className="slug-page">
      <div className="container">
        {data?.pageBy?.content && (
          <div
            dangerouslySetInnerHTML={{ __html: data?.pageBy?.content }}
          ></div>
        )}
      </div>
    </main>
  );
};

export default page;
