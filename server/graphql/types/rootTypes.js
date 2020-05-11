import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLInt,
} from 'graphql';

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'This represents a User',
    fields: () => ({
      _id: { type: GraphQLString },
      firstName: { type: GraphQLString },
      middleName: { type: GraphQLString },
      lastName: { type: GraphQLString },
      email: {type: GraphQLString},
      username: {type: GraphQLString},
      password: {type: GraphQLString},
      role: {type: GraphQLInt},
      address: { type: GraphQLString },
      phone: { type: GraphQLString },
      created: { type: GraphQLString },
    }),
});

const envType = new GraphQLObjectType({
  name: 'Env',
  description: 'get env vars',
  fields: () => ({
    database: { type: GraphQLString },
    key: { type: GraphQLString }
  })
})

export { UserType, envType };
