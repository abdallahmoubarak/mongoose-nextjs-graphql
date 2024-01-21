import { connectDB } from "@/mongoose";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
import { ApolloServer } from "@apollo/server";

connectDB();

export const server: any = new ApolloServer({ resolvers, typeDefs });
