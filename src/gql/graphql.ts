/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddRepositoryInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  release_notes: Scalars['String']['input'];
  status: Scalars['String']['input'];
  version: Scalars['String']['input'];
};

export type AddUserInput = {
  email_id: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  username: Scalars['String']['input'];
};

export type AddUserRepositoryInput = {
  repository_id: Scalars['ID']['input'];
  user_id: Scalars['ID']['input'];
  user_repository_version: Scalars['String']['input'];
};

export type EditUserRepositoryInput = {
  user_repository_version: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addRepository: Repository;
  addUser: User;
  addUserRepository: UserRepository;
  deleteRepository?: Maybe<Scalars['String']['output']>;
  deleteUserRepository?: Maybe<Scalars['String']['output']>;
  removeUserRepository: UserRepository;
  updateRepository?: Maybe<Repository>;
  updateRepositoryById?: Maybe<Repository>;
  updateUserRepository: UserRepository;
};


export type MutationAddRepositoryArgs = {
  repo?: InputMaybe<AddRepositoryInput>;
};


export type MutationAddUserArgs = {
  user?: InputMaybe<AddUserInput>;
};


export type MutationAddUserRepositoryArgs = {
  userRepo?: InputMaybe<AddUserRepositoryInput>;
};


export type MutationDeleteRepositoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserRepositoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveUserRepositoryArgs = {
  userRepo?: InputMaybe<RemoveUserRepositoryInput>;
};


export type MutationUpdateRepositoryArgs = {
  edits?: InputMaybe<UpdateRepositoryInput>;
  id: Scalars['ID']['input'];
};


export type MutationUpdateRepositoryByIdArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateUserRepositoryArgs = {
  edits: EditUserRepositoryInput;
  id: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  repositories?: Maybe<Array<Maybe<Repository>>>;
  repository?: Maybe<Repository>;
  searchRepository?: Maybe<Array<Maybe<Repository>>>;
  user?: Maybe<User>;
  userRepositoriesByUserId?: Maybe<Array<Maybe<UserRepository>>>;
  userRepository?: Maybe<UserRepository>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryRepositoryArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySearchRepositoryArgs = {
  search: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserRepositoriesByUserIdArgs = {
  user_id: Scalars['ID']['input'];
};


export type QueryUserRepositoryArgs = {
  id: Scalars['ID']['input'];
};

export type RemoveUserRepositoryInput = {
  repository_id: Scalars['ID']['input'];
  user_id: Scalars['ID']['input'];
};

export type Repository = {
  __typename?: 'Repository';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  release_notes?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type UpdateRepositoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  release_notes?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email_id: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type UserRepository = {
  __typename?: 'UserRepository';
  id: Scalars['ID']['output'];
  repository: Repository;
  user: User;
  user_repository_version: Scalars['String']['output'];
};

export type GetAllRepositoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRepositoriesQuery = { __typename?: 'Query', repositories?: Array<{ __typename?: 'Repository', id: string, name: string, version?: string | null } | null> | null };

export type GetUserRepoQueryQueryVariables = Exact<{
  user_id: Scalars['ID']['input'];
}>;


export type GetUserRepoQueryQuery = { __typename?: 'Query', userRepositoriesByUserId?: Array<{ __typename?: 'UserRepository', id: string, user_repository_version: string, repository: { __typename?: 'Repository', id: string, name: string, version?: string | null } } | null> | null };

export type GetRepositoryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetRepositoryQuery = { __typename?: 'Query', repository?: { __typename?: 'Repository', id: string, name: string, description?: string | null, version?: string | null, release_notes?: string | null } | null };

export type GetSearchRepoQueryQueryVariables = Exact<{
  search: Scalars['String']['input'];
}>;


export type GetSearchRepoQueryQuery = { __typename?: 'Query', searchRepository?: Array<{ __typename?: 'Repository', id: string, name: string, version?: string | null, release_notes?: string | null } | null> | null };

export type AddUserRepoMutationVariables = Exact<{
  user_id: Scalars['ID']['input'];
  repository_id: Scalars['ID']['input'];
  user_repository_version: Scalars['String']['input'];
}>;


export type AddUserRepoMutation = { __typename?: 'Mutation', addUserRepository: { __typename?: 'UserRepository', id: string, user: { __typename?: 'User', id: string, username: string }, repository: { __typename?: 'Repository', name: string } } };

export type RemoveUserRepoMutationVariables = Exact<{
  user_id: Scalars['ID']['input'];
  repository_id: Scalars['ID']['input'];
}>;


export type RemoveUserRepoMutation = { __typename?: 'Mutation', removeUserRepository: { __typename?: 'UserRepository', id: string, user: { __typename?: 'User', id: string, username: string }, repository: { __typename?: 'Repository', name: string } } };

export type UpdateUserRepoMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  user_repository_version: Scalars['String']['input'];
}>;


export type UpdateUserRepoMutation = { __typename?: 'Mutation', updateUserRepository: { __typename?: 'UserRepository', id: string } };

export type UpdateLatestRepositoryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type UpdateLatestRepositoryMutation = { __typename?: 'Mutation', updateRepositoryById?: { __typename?: 'Repository', id: string, name: string, version?: string | null } | null };


export const GetAllRepositoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllRepositories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repositories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}}]}}]} as unknown as DocumentNode<GetAllRepositoriesQuery, GetAllRepositoriesQueryVariables>;
export const GetUserRepoQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserRepoQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userRepositoriesByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_repository_version"}},{"kind":"Field","name":{"kind":"Name","value":"repository"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserRepoQueryQuery, GetUserRepoQueryQueryVariables>;
export const GetRepositoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRepository"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repository"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"release_notes"}}]}}]}}]} as unknown as DocumentNode<GetRepositoryQuery, GetRepositoryQueryVariables>;
export const GetSearchRepoQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSearchRepoQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchRepository"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"release_notes"}}]}}]}}]} as unknown as DocumentNode<GetSearchRepoQueryQuery, GetSearchRepoQueryQueryVariables>;
export const AddUserRepoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddUserRepo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"repository_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_repository_version"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addUserRepository"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userRepo"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"repository_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"repository_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_repository_version"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_repository_version"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"repository"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<AddUserRepoMutation, AddUserRepoMutationVariables>;
export const RemoveUserRepoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveUserRepo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"repository_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeUserRepository"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userRepo"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"repository_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"repository_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"repository"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<RemoveUserRepoMutation, RemoveUserRepoMutationVariables>;
export const UpdateUserRepoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserRepo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_repository_version"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUserRepository"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"edits"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_repository_version"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_repository_version"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateUserRepoMutation, UpdateUserRepoMutationVariables>;
export const UpdateLatestRepositoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateLatestRepository"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRepositoryById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}}]}}]} as unknown as DocumentNode<UpdateLatestRepositoryMutation, UpdateLatestRepositoryMutationVariables>;