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
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  query GetAllRepositories {\n    repositories {\n      id\n      name\n      version\n    }\n  }\n": types.GetAllRepositoriesDocument,
    "\n  query GetUserRepoQuery($user_id: ID!) {\n    userRepositoriesByUserId(user_id: $user_id) {\n      id\n      user_repository_version\n      repository {\n        id\n        name\n        version\n      }\n    }\n  }\n": types.GetUserRepoQueryDocument,
    "\n  query GetRepository($id: ID!) {\n    repository(id: $id) {\n      id\n      name\n      description\n      version\n      release_notes\n    }\n  }\n": types.GetRepositoryDocument,
    "\n  query GetSearchRepoQuery($search: String!) {\n    searchRepository(search: $search) {\n      id\n      name\n      version\n      release_notes\n    }\n  }\n": types.GetSearchRepoQueryDocument,
    "\n  mutation AddUserRepo(\n    $user_id: ID!\n    $repository_id: ID!\n    $user_repository_version: String!\n  ) {\n    addUserRepository(\n      userRepo: {\n        user_id: $user_id\n        repository_id: $repository_id\n        user_repository_version: $user_repository_version\n      }\n    ) {\n      id\n      user {\n        id\n        username\n      }\n      repository {\n        name\n      }\n    }\n  }\n": types.AddUserRepoDocument,
    "\n  mutation RemoveUserRepo($user_id: ID!, $repository_id: ID!) {\n    removeUserRepository(\n      userRepo: { user_id: $user_id, repository_id: $repository_id }\n    ) {\n      id\n      user {\n        id\n        username\n      }\n      repository {\n        name\n      }\n    }\n  }\n": types.RemoveUserRepoDocument,
    "\n  mutation UpdateUserRepo($id: ID!, $user_repository_version: String!) {\n    updateUserRepository(\n      id: $id\n      edits: { user_repository_version: $user_repository_version }\n    ) {\n      id\n    }\n  }\n": types.UpdateUserRepoDocument,
    "\n  mutation UpdateLatestRepository($id: ID!) {\n    updateRepositoryById(id: $id) {\n      id\n      name\n      version\n    }\n  }\n": types.UpdateLatestRepositoryDocument,
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
export function graphql(source: "\n  query GetAllRepositories {\n    repositories {\n      id\n      name\n      version\n    }\n  }\n"): (typeof documents)["\n  query GetAllRepositories {\n    repositories {\n      id\n      name\n      version\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUserRepoQuery($user_id: ID!) {\n    userRepositoriesByUserId(user_id: $user_id) {\n      id\n      user_repository_version\n      repository {\n        id\n        name\n        version\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUserRepoQuery($user_id: ID!) {\n    userRepositoriesByUserId(user_id: $user_id) {\n      id\n      user_repository_version\n      repository {\n        id\n        name\n        version\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetRepository($id: ID!) {\n    repository(id: $id) {\n      id\n      name\n      description\n      version\n      release_notes\n    }\n  }\n"): (typeof documents)["\n  query GetRepository($id: ID!) {\n    repository(id: $id) {\n      id\n      name\n      description\n      version\n      release_notes\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSearchRepoQuery($search: String!) {\n    searchRepository(search: $search) {\n      id\n      name\n      version\n      release_notes\n    }\n  }\n"): (typeof documents)["\n  query GetSearchRepoQuery($search: String!) {\n    searchRepository(search: $search) {\n      id\n      name\n      version\n      release_notes\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddUserRepo(\n    $user_id: ID!\n    $repository_id: ID!\n    $user_repository_version: String!\n  ) {\n    addUserRepository(\n      userRepo: {\n        user_id: $user_id\n        repository_id: $repository_id\n        user_repository_version: $user_repository_version\n      }\n    ) {\n      id\n      user {\n        id\n        username\n      }\n      repository {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddUserRepo(\n    $user_id: ID!\n    $repository_id: ID!\n    $user_repository_version: String!\n  ) {\n    addUserRepository(\n      userRepo: {\n        user_id: $user_id\n        repository_id: $repository_id\n        user_repository_version: $user_repository_version\n      }\n    ) {\n      id\n      user {\n        id\n        username\n      }\n      repository {\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RemoveUserRepo($user_id: ID!, $repository_id: ID!) {\n    removeUserRepository(\n      userRepo: { user_id: $user_id, repository_id: $repository_id }\n    ) {\n      id\n      user {\n        id\n        username\n      }\n      repository {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation RemoveUserRepo($user_id: ID!, $repository_id: ID!) {\n    removeUserRepository(\n      userRepo: { user_id: $user_id, repository_id: $repository_id }\n    ) {\n      id\n      user {\n        id\n        username\n      }\n      repository {\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUserRepo($id: ID!, $user_repository_version: String!) {\n    updateUserRepository(\n      id: $id\n      edits: { user_repository_version: $user_repository_version }\n    ) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUserRepo($id: ID!, $user_repository_version: String!) {\n    updateUserRepository(\n      id: $id\n      edits: { user_repository_version: $user_repository_version }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateLatestRepository($id: ID!) {\n    updateRepositoryById(id: $id) {\n      id\n      name\n      version\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateLatestRepository($id: ID!) {\n    updateRepositoryById(id: $id) {\n      id\n      name\n      version\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;