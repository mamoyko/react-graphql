import { buildSchema } from 'graphql';

module.exports = buildSchema(`

    type User {
        _id: ID!,
        firstName: String!,
        middleName: String!,
        lastName: String!,
        email: String!,
        username: String!,
        password: String!,
        role: Int!,
        address: String!,
        phone: String!,
        created: String!,
    }

    type AuthData {
        userId: ID!,
        token: String!
    }

    type ClassType {
        _id : ID!,
        className: String!,
        member: [String!]!,
        createdBy: ID!,
        created: String!
    }

    input RegistrationInput {
        firstName: String!,
        middleName: String!,
        lastName: String!,
        email: String!,
        phone: String!,
        username: String!,
        password: String!,
        role: Int!,
        address: String!
    }

    input ClassInput {
        className: String!,
        member: [ID!]!,
        createdBy: String!,
    }

    type RootQuery {
        users: [User!]!,
        login(username: String!, password: String!): AuthData!,
        getClass: [ClassType!]!
    }

    type RootMutation  {
        register(data:RegistrationInput): User
        addClass(data:ClassInput):ClassType
    }

    schema {
        query: RootQuery,
        mutation: RootMutation 
    }
`);