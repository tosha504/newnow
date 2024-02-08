import { getSingleWorkPost } from "@/store/api";
import "../sass/page.scss";

export async function getSinglePage(param) {
  const apiUrl = `${process.env.WORDPRESS_BASE_URL}graphql`;
  const query = `
  query PageData($uri: String = "${param}") {
    pageBy(uri: $uri) {
      id
      content
    }
  }
`;

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async ({ params }) => {
  const { data } = await getSinglePage(params.slug);
  console.log(data);
  return (
    <main style={{ background: "white", color: "#000" }}>
      <div className="container">
        sdfsdf
        <div dangerouslySetInnerHTML={{ __html: data?.pageBy?.content }}></div>
      </div>
    </main>
  );
};

export default page;
