export async function getHeaderData() {
  const apiUrl = `${process.env.WORDPRESS_BASE_URL}graphql`;
  const query = `
  query Header {
    menus {
      nodes {
        id
        name
        menuItems {
          edges {
            node {
              id
              title
              uri
              label
            }
          }
        }
      }
    }
    themeHeaderSettings {
      header {
        logo {
          sourceUrl
        }
      }
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

export async function getBuilderData() {
  const apiUrl = `${process.env.WORDPRESS_BASE_URL}graphql`;
  const query = `
  query HomePageData {
    page(id: "cG9zdDoyMg==") {
      id
      template {
        ... on DefaultTemplate {
          templateName
          fieldToApi {
            builder {
              ... on DefaultTemplate_Fieldtoapi_Builder_OurWorks {
                fieldGroupName
                groupOurWorks {
                  ourWorks {
                    ... on Work {
                      id
                      slug
                      title
                      featuredImage {
                        node {
                          sourceUrl(size: LARGE)
                          altText
                          sizes(size: LARGE)
                        }
                      }
                    }
                  }
                  title
                  anchor
                }
              }
              ... on DefaultTemplate_Fieldtoapi_Builder_ContentToApiWithChoose {
                fieldGroupName
                contentRightFlex {
                  ... on DefaultTemplate_Fieldtoapi_Builder_ContentToApiWithChoose_ContentRightFlex_Accordion {
                    fieldGroupName
                    accordionFields {
                      fieldGroupName
                      opis
                      title
                    }
                  }
                  ... on DefaultTemplate_Fieldtoapi_Builder_ContentToApiWithChoose_ContentRightFlex_TextContent {
                    fieldGroupName
                    textContentValue
                  }
                }
                contentLeft {
                  contentLeft
                }
                anchor
              }
              ... on DefaultTemplate_Fieldtoapi_Builder_Banner {
                fieldGroupName
                bannerGroup {
                  title
                  background {
                    title
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
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

const base64Credentials = btoa(
  process.env.NEXT_PUBLIC_GRAVITY_PUBLIC_KEY +
    ":" +
    process.env.NEXT_PUBLIC_GRAVITY_PRIVET_KEY
);

export async function formApiData() {
  const response = await fetch(
    `https://fredommaster.pl/antondev/wp-json/gf/v2/forms/1`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + base64Credentials,
      },
    }
  );
  const res = await response.json();
  return res;
}

export async function postApiDataToForm(formData) {
  const response = await fetch(
    "https://fredommaster.pl/antondev/wp-json/gf/v2/forms/1/submissions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + base64Credentials,
      },
      body: JSON.stringify(formData),
    }
  );
  const res = await response.json();
  if (response.status === 200) {
    return res;
  }
  return res;
}

export async function getSingleWorkPost(param) {
  const apiUrl = `${process.env.WORDPRESS_BASE_URL}graphql`;
  const query = `
    query works($uri: String = "${param}") {
    workBy(uri: $uri) {
      slug
      title
      status
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

export async function getFooterData() {
  const apiUrl = `${process.env.WORDPRESS_BASE_URL}graphql`;
  const query = `
  query Footer {
    themeFooterSettings {
      footer {
        footerBottom {
          link {
            target
            title
            url
          }
        }
        logo {
          sourceUrl
          altText
        }
        topRight {
          link {
            target
            title
            url
          }
        }
      }
    }
  }
`;

  const responseFooter = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });
  if (!responseFooter.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return responseFooter.json();
}
