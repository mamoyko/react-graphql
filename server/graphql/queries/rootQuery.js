import {
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
} from 'graphql';
import { getAllUsers, signInUsers } from '../../controller/user.controller';
import {
    UserType,
    AuthType
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
        login: {
            type: AuthType,
            description: 'sign in users',
            args: {
                username: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            resolve(parentValue,args){
                return signInUsers(args).then((res) => {
                    console.log(res)
                    return res
                });
            }
        }
    })
});

export default QueryRootType;