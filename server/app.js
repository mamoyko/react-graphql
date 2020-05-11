import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './graphql/schema';

const app = express();

app.use('/', graphqlHTTP({
  schema,
  graphiql: true,
}));

export default app;

// const PORT = process.env.PORT || 5000;

// app.listen(PORT,() => console.log(`Listening to port ${PORT}`))
