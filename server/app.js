import express from 'express';
import graphqlHTTP from 'express-graphql';
import graphQlSchema from './graphql/schema/index';
import graphQlResolvers from './graphql/resolvers/index'

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);

export default app;
