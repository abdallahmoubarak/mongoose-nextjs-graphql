import { gql } from "graphql-request";

export const userDefs = gql`
  type User {
    id: ID!
    name: String!
    phone: String!
    address: String!
  }

  input NewUserInput {
    name: String!
    phone: String!
    address: String!
  }

  input UpdateUserInput {
    id: ID!
    name: String!
    phone: String!
    address: String!
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(input: NewUserInput!): User
    updateUser(input: UpdateUserInput!): User
    deleteUser(id: ID!): String
  }
`;
