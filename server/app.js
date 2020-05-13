import express from 'express';
import bodyParser from 'body-parser';
import isAuth from './middleware/is-auth';
import graphqlHTTP from 'express-graphql';
import graphQlSchema from './graphql/schema/index';
import graphQlResolvers from './graphql/resolvers/index';

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(isAuth);

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);

app.get('/login', (req,res,next) => {
  res.json({
    success: true
  })
})

export default app;
