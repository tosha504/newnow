import { getBuilderData } from "@/store/api";
import "./sass/page.scss";
import { Banner } from "./components/Banner/Banner";
import Works from "./components/Works/Works";
import ContentToApiWithChoose from "./components/ContentToApiWithChoose/ContentToApiWithChoose";
import ContactFormSection from "./components/ContactFormItems/ContactFormSection";
async function singlePage() {
  // const getPosts = await fetch(`http://newnow/wp-json/custom/v1/pages/${id}`, {
  //   cache: "force-cache",
  // });
  // // revalidatePath("/[slug]", "page");
  // const getPostsJa = await getPosts.json();
  // return getPostsJa;
}

const Home = async () => {
  const { data } = await getBuilderData();
  const builder = data.page.template.fieldToApi.builder;
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
