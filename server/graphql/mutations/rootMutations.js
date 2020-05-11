import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInt,
} from 'graphql';
import {
    registerUser,
    signInUsers
  } from '../../controller/user.controller';
  import {
    UserType    
} from '../types/rootTypes';

const QueryMutationRootType = new GraphQLObjectType({
    name: 'QueryMutation',
    description: 'Create or update',
    fields: () => ({
        register: {
            type: UserType,
            description: 'add a new users',
            args: {
                firstName: { type: new GraphQLNonNull(GraphQLString) },
                middleName: { type: new GraphQLNonNull(GraphQLString) },
                lastName: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                phone: { type: new GraphQLNonNull(GraphQLString) },
                username: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) },
                role: { type: new GraphQLNonNull(GraphQLInt) },
                address: { type: new GraphQLNonNull(GraphQLString) },
                phone: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parentValue, args) {
                return registerUser(args);
            },
        }
    })
});

export default QueryMutationRootType;