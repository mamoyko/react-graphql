const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema
} = require('graphql');

// Events Type
const EventsType = new GraphQLObjectType({
    name: 'Events',
    fields: () => ({
      flight_number: { type: GraphQLInt },
      mission_name: { type: GraphQLString },
      launch_year: { type: GraphQLString },
      launch_date_local: { type: GraphQLString },
    })
  });