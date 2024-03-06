import { request } from "graphql-request";
import { graphql } from "../gql"
import type { Stage } from "../gql/graphql";

const endpoint = import.meta.env.HYGRAPH_ENDPOINT;

const query = graphql(`
  query Pdp($slug: String!, $stage: Stage! = PUBLISHED) {
    pdp(where: { slug: $slug }, stage: $stage) {
      id
      __typename
      slug
      title
      description
      ogImage {
        url
      }
      components {
        ... on Tutorial {
          __typename
          id
          title
          image {
            url
          }
          items {
            __typename
            text
          }
        }
        ... on Routine {
          __typename
          id
          chapeau
          cta
          description
          image {
            url
          }
          title
          url
        }
        ... on ProductList {
          __typename
          title
          relatedProductList {
            relatedProductId
            relatedProducts {
              products {
                description
                id
                images {
                  alt
                  url
                }
                ingredients
                name
                price
                shortDescription
                slug
                stock
              }
            }
          }
        }
      }

      product {
        id
        slug
        name
        price
        ingredients
        shortDescription
        description
        stock
        images {
          alt
          url
        }
      }
    }
  }
`);



export default async function (slug: string, stage: "PUBLISHED" | "DRAFT") {
  const variables = {
    slug: slug || "face-serum",
    stage: stage as Stage || "PUBLISHED" as Stage
  };

  const data = await request(
    endpoint,
    query,
    variables
  );

  return data;
}
