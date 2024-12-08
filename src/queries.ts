import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query GetAllRepositories {
    repositories {
      id
      name
      version
    }
  }
`;

export const GET_USER_REPOSITORIES = gql`
  query GetUserRepoQuery($user_id: ID!) {
    userRepositoriesByUserId(user_id: $user_id) {
      id
      repository {
        id
        name
        version
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query GetRepository($id: ID!) {
    repository(id: $id) {
      id
      name
      description
      version
      releaseNotes
    }
  }
`;

export const SEARCH_REPOSITORY = gql`
  query GetSearchRepoQuery($search: String!) {
    searchRepository(search: $search) {
      id
      name
      version
    }
  }
`;

export const ADD_USER_REPOSITORY = gql`
  mutation AddUserRepo($user_id: ID!, $repository_id: ID!) {
    addUserRepository(
      userRepo: { user_id: $user_id, repository_id: $repository_id }
    ) {
      id
      user {
        id
        username
      }
      repository {
        name
      }
    }
  }
`;

export const REMOVE_USER_REPOSITORY = gql`
  mutation RemoveUserRepo($user_id: ID!, $repository_id: ID!) {
    removeUserRepository(
      userRepo: { user_id: $user_id, repository_id: $repository_id }
    ) {
      id
      user {
        id
        username
      }
      repository {
        name
      }
    }
  }
`;
