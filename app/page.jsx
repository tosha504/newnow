import { getBuilderData } from "@/store/api";
import "./sass/page.scss";
import { Banner } from "./components/Banner/Banner";
import Works from "./components/Works/Works";
import ContentToApiWithChoose from "./components/ContentToApiWithChoose/ContentToApiWithChoose";
import ContactFormSection from "./components/ContactFormItems/ContactFormSection";

export async function generateMetadata({ params, searchParams }, parent) {
  const { data } = await getBuilderData(params.slug);
  const seo = data.pageBy.seo;
  return {
    generator: "Next.js",
    title: `${seo.opengraphSiteName} - ${seo.opengraphTitle}`,
    description: seo.metaDesc,
    keywords: seo.focuskw,
  };
}

const Home = async ({ params, searchParams }) => {
  const { data } = await getBuilderData(params.slug);
  const builder = data.pageBy.template.fieldToApi.builder;
  return (
    <>
      <main>
        {builder.map((builderItems, index) => {
          if (
            builderItems.fieldGroupName ===
            "DefaultTemplate_Fieldtoapi_Builder_Banner"
          ) {
            return <Banner key={index} banner={builderItems.bannerGroup} />;
          } else if (
            builderItems.fieldGroupName ===
            "DefaultTemplate_Fieldtoapi_Builder_OurWorks"
          ) {
            return <Works key={index} works={builderItems.groupOurWorks} />;
          } else if (
            builderItems.fieldGroupName ===
            "DefaultTemplate_Fieldtoapi_Builder_ContentToApiWithChoose"
          ) {
            return (
              <ContentToApiWithChoose key={index} builderItems={builderItems} />
            );
          }
        })}
        <ContactFormSection />
      </main>
    </>
  );
};
export default Home;
