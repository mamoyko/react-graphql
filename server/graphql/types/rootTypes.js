import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLID
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

const AuthType = new GraphQLObjectType({
  name: 'authdata',
  description: 'authdata',
  fields: () => ({
    userId: { type: GraphQLID },
    token: { type: GraphQLString }
  })
})

export { UserType, AuthType };
