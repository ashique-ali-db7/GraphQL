import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./typeDefs.js";
import { resolvers } from "./resolver.js";
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
//Actaully we need appollo server and it cannot acces request we use exprees for that and bridge a gap
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app here expressius handllingyour incoming request
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
