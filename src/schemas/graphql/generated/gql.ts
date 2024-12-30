/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

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
    "\n  query contact {\n    contact {\n      data {\n        attributes {\n          email\n          phone\n        }\n      }\n    }\n  }\n": types.ContactDocument,
    "\n  query profiles {\n    contact {\n      data {\n        attributes {\n          linkedinUrl\n          githubUrl\n        }\n      }\n    }\n  }\n": types.ProfilesDocument,
    "\n  query cvFile {\n    about {\n      data {\n        attributes {\n          cv {\n            data {\n              attributes {\n                url\n                updatedAt\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.CvFileDocument,
    "\n  query education {\n    about {\n      data {\n        attributes {\n          education(sort: \"to:desc\") {\n            title\n            institution\n            location\n            from\n            to\n            icon {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.EducationDocument,
    "\n  query workExperiences {\n    about {\n      data {\n        attributes {\n          workExperience(sort: \"to:desc\") {\n            title\n            company\n            location\n            from\n            to\n            icon {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.WorkExperiencesDocument,
    "\n  query extras {\n    about {\n      data {\n        attributes {\n          extra {\n            title\n            text\n          }\n        }\n      }\n    }\n  }\n": types.ExtrasDocument,
    "\n  query projectDetail($id: ID!) {\n    project(id: $id) {\n      data {\n        attributes {\n          name\n          description\n          briefDescription\n          roles {\n            name\n          }\n          responsibilities {\n            name\n          }\n          technologies {\n            name\n          }\n          thumbnail {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          images {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.ProjectDetailDocument,
    "\n  query projectsOverview {\n    projects(sort: \"id:desc\") {\n      data {\n        id\n        attributes {\n          name\n          briefDescription\n          thumbnail {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          roles {\n            name\n          }\n        }\n      }\n    }\n  }\n": types.ProjectsOverviewDocument,
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
export function graphql(source: "\n  query contact {\n    contact {\n      data {\n        attributes {\n          email\n          phone\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query contact {\n    contact {\n      data {\n        attributes {\n          email\n          phone\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query profiles {\n    contact {\n      data {\n        attributes {\n          linkedinUrl\n          githubUrl\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query profiles {\n    contact {\n      data {\n        attributes {\n          linkedinUrl\n          githubUrl\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query cvFile {\n    about {\n      data {\n        attributes {\n          cv {\n            data {\n              attributes {\n                url\n                updatedAt\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query cvFile {\n    about {\n      data {\n        attributes {\n          cv {\n            data {\n              attributes {\n                url\n                updatedAt\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query education {\n    about {\n      data {\n        attributes {\n          education(sort: \"to:desc\") {\n            title\n            institution\n            location\n            from\n            to\n            icon {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query education {\n    about {\n      data {\n        attributes {\n          education(sort: \"to:desc\") {\n            title\n            institution\n            location\n            from\n            to\n            icon {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query workExperiences {\n    about {\n      data {\n        attributes {\n          workExperience(sort: \"to:desc\") {\n            title\n            company\n            location\n            from\n            to\n            icon {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query workExperiences {\n    about {\n      data {\n        attributes {\n          workExperience(sort: \"to:desc\") {\n            title\n            company\n            location\n            from\n            to\n            icon {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query extras {\n    about {\n      data {\n        attributes {\n          extra {\n            title\n            text\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query extras {\n    about {\n      data {\n        attributes {\n          extra {\n            title\n            text\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query projectDetail($id: ID!) {\n    project(id: $id) {\n      data {\n        attributes {\n          name\n          description\n          briefDescription\n          roles {\n            name\n          }\n          responsibilities {\n            name\n          }\n          technologies {\n            name\n          }\n          thumbnail {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          images {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query projectDetail($id: ID!) {\n    project(id: $id) {\n      data {\n        attributes {\n          name\n          description\n          briefDescription\n          roles {\n            name\n          }\n          responsibilities {\n            name\n          }\n          technologies {\n            name\n          }\n          thumbnail {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          images {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query projectsOverview {\n    projects(sort: \"id:desc\") {\n      data {\n        id\n        attributes {\n          name\n          briefDescription\n          thumbnail {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          roles {\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query projectsOverview {\n    projects(sort: \"id:desc\") {\n      data {\n        id\n        attributes {\n          name\n          briefDescription\n          thumbnail {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          roles {\n            name\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;