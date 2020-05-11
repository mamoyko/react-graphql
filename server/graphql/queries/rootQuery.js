import {
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
} from 'graphql';
import { getAllUsers } from '../../controller/user.controller';
import EnvVars from '../data/EnvVars';
import {
    UserType,
    envType
} from '../types/rootTypes';

const QueryRootType = new GraphQLObjectType({
    name: 'RootQuery',
    description: 'Application Query Root',
    fields: () => ({
        users: {
            type: GraphQLList(UserType),
            description: 'Get all user list',
            resolve() {
                return getAllUsers();
            },
        },
        sample: {
            type: GraphQLList(envType),
            description: 'Get env vars',
            resolve() {
                return EnvVars
            },
        }
    })
});

export default QueryRootType;