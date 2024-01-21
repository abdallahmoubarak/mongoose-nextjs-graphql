import { userQueries, userMutations } from "./user";

export const resolvers = {
  Mutation: {
    ...userMutations,
  },
  Query: {
    ...userQueries,
  },
};
