import {
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
} from 'graphql';
import { getAllUsers } from '../../controller/user.controller';
import Authors from '../data/authors';
import {
    UserType,
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
        getenv: {
            type: GraphQLList(UserType),
            description: 'Get env vars',
            resolve() {
                return {
                    database: process.env.DATABASE
                }
            },
        }
    })
});

export default QueryRootType;