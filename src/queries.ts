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
    seachRepository(search: $search) {
      id
      name
      version
    }
  }
`;
