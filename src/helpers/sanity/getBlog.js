import client from "./client";


export const getBlog = async () => {
  const response = await client.fetch(
    `*[_type == "post"] {
      title,
      slug,
      mainImage {
        asset -> {
          _id,
          url
        },
      }
    }`
  );
  return response;
};

export const getPostDetails = async (slug) => {
  const response = await client.fetch(
    `*[_type == "post" && slug.current == "${slug}"] {
      title,
      body,
      publishedAt,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt
      }
    }`
  );
  return response[0];
};
