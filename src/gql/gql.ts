/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query Page($slug: String!, $stage: Stage! = PUBLISHED) {\n    page(where: { slug: $slug }, stage: $stage) {\n      __typename\n      id\n      slug\n      title\n      description\n      ogImage {\n        url\n      }\n      components {\n        ... on Editorial {\n          id\n          __typename\n          image {\n            url\n          }\n          components {\n            ... on Card {\n              id\n              __typename\n              cta\n              image {\n                url\n              }\n              title\n              url\n            }\n            ... on Cta {\n              id\n              __typename\n              chapeau\n              cta\n              description\n              title\n              url\n            }\n          }\n        }\n        ... on Hero {\n          id\n          __typename\n          description\n          image {\n            url\n          }\n          title\n        }\n        ... on ProductHighlight {\n          id\n          __typename\n          productFocus {\n            id\n            __typename\n            cta\n            description\n            image {\n              url\n            }\n            productId\n            title\n            url\n            product {\n              description\n              id\n              images {\n                alt\n                url\n              }\n              ingredients\n              price\n              name\n              shortDescription\n              slug\n              stock\n            }\n          }\n        }\n        ... on Routine {\n          id\n          __typename\n          chapeau\n          cta\n          description\n          image {\n            url\n          }\n          title\n          url\n        }\n      }\n    }\n  \n  }\n": types.PageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Page($slug: String!, $stage: Stage! = PUBLISHED) {\n    page(where: { slug: $slug }, stage: $stage) {\n      __typename\n      id\n      slug\n      title\n      description\n      ogImage {\n        url\n      }\n      components {\n        ... on Editorial {\n          id\n          __typename\n          image {\n            url\n          }\n          components {\n            ... on Card {\n              id\n              __typename\n              cta\n              image {\n                url\n              }\n              title\n              url\n            }\n            ... on Cta {\n              id\n              __typename\n              chapeau\n              cta\n              description\n              title\n              url\n            }\n          }\n        }\n        ... on Hero {\n          id\n          __typename\n          description\n          image {\n            url\n          }\n          title\n        }\n        ... on ProductHighlight {\n          id\n          __typename\n          productFocus {\n            id\n            __typename\n            cta\n            description\n            image {\n              url\n            }\n            productId\n            title\n            url\n            product {\n              description\n              id\n              images {\n                alt\n                url\n              }\n              ingredients\n              price\n              name\n              shortDescription\n              slug\n              stock\n            }\n          }\n        }\n        ... on Routine {\n          id\n          __typename\n          chapeau\n          cta\n          description\n          image {\n            url\n          }\n          title\n          url\n        }\n      }\n    }\n  \n  }\n"): (typeof documents)["\n  query Page($slug: String!, $stage: Stage! = PUBLISHED) {\n    page(where: { slug: $slug }, stage: $stage) {\n      __typename\n      id\n      slug\n      title\n      description\n      ogImage {\n        url\n      }\n      components {\n        ... on Editorial {\n          id\n          __typename\n          image {\n            url\n          }\n          components {\n            ... on Card {\n              id\n              __typename\n              cta\n              image {\n                url\n              }\n              title\n              url\n            }\n            ... on Cta {\n              id\n              __typename\n              chapeau\n              cta\n              description\n              title\n              url\n            }\n          }\n        }\n        ... on Hero {\n          id\n          __typename\n          description\n          image {\n            url\n          }\n          title\n        }\n        ... on ProductHighlight {\n          id\n          __typename\n          productFocus {\n            id\n            __typename\n            cta\n            description\n            image {\n              url\n            }\n            productId\n            title\n            url\n            product {\n              description\n              id\n              images {\n                alt\n                url\n              }\n              ingredients\n              price\n              name\n              shortDescription\n              slug\n              stock\n            }\n          }\n        }\n        ... on Routine {\n          id\n          __typename\n          chapeau\n          cta\n          description\n          image {\n            url\n          }\n          title\n          url\n        }\n      }\n    }\n  \n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;