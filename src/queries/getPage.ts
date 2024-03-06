import { request } from "graphql-request";
import { graphql } from "../gql"
import type { Stage } from "../gql/graphql";

const endpoint = import.meta.env.HYGRAPH_ENDPOINT;

const query = graphql(`
  query Page($slug: String!, $stage: Stage! = PUBLISHED) {
    page(where: { slug: $slug }, stage: $stage) {
      __typename
      id
      slug
      title
      description
      ogImage {
        url
      }
      components {
        ... on Editorial {
          id
          __typename
          image {
            url
          }
          components {
            ... on Card {
              id
              __typename
              cta
              image {
                url
              }
              title
              url
            }
            ... on Cta {
              id
              __typename
              chapeau
              cta
              description
              title
              url
            }
          }
        }
        ... on Hero {
          id
          __typename
          description
          image {
            url
          }
          title
        }
        ... on ProductHighlight {
          id
          __typename
          productFocus {
            id
            __typename
            cta
            description
            image {
              url
            }
            productId
            title
            url
            product {
              description
              id
              images {
                alt
                url
              }
              ingredients
              price
              name
              shortDescription
              slug
              stock
            }
          }
        }
        ... on Routine {
          id
          __typename
          chapeau
          cta
          description
          image {
            url
          }
          title
          url
        }
      }
    }
  
  }
`);

export default async function (slug: string, stage: "PUBLISHED" | "DRAFT") {
  const variables = {
    slug: slug || "home",
    stage: stage as Stage || "PUBLISHED" as Stage
  };

  const data = await request(
    endpoint,
    query,
    variables
  );

  return data;
}

