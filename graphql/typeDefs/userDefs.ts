import { gql } from "graphql-request";

export const userDefs = gql`
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    age: Int!
    active: Boolean
    address: String
    phoneNumber: String
    image: String
    # placedOrder: [Order] @relationship(type: "PLACED", direction: OUT)
    # wishlist: [Product] @relationship(type: "WISHLIST", direction: OUT)
  }

  input NewUserInput {
    first_name: String!
    last_name: String!
    email: String!
    age: Int!
  }

  input UpdateUserInput {
    id: ID!
    first_name: String
    last_name: String
    email: String
    age: Int
    active: Boolean
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
