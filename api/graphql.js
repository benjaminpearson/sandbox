const { ApolloServer, gql } = require("apollo-server-micro");

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

const resolvers = {
  Query: {
    books: () => books
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  bodyParser: true
});

module.exports = server.createHandler({ path: "/api/graphql" });
