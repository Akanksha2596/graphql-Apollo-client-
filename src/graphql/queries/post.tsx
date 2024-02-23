import { gql } from "@apollo/client";

export const GET_USER = gql`
query user {
  user(id: 1) {
    id
    name  
  }
}
`;

export const GET_POST = gql `query {
    post(id: 1) {
      id
      title
      body
    }
  }
  `;

export const GETALL_POST = gql`query (
  $options: PageQueryOptions
) {
  posts(options: $options) {
    data {
      id
      title
    }
    meta {
      totalCount
    }
  }
}
`;