const graphql = require("graphql");
const R = require("ramda");
const User = require("../models/user");
const Msg = require("../models/user");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList
} = graphql;

const MsgType = new GraphQLObjectType({
  name: "Msg",
  fields: () => ({
    id: { type: GraphQLID },
    content: { type: GraphQLString },
    // fromUser:{type: GraphQLString},
    userId: { type: GraphQLID },
    user: {
      type: UserType,
      resolve(parent, args) {
        // return R.find(R.propEq("id", parent.userId))(users);
      }
    }
  })
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    msgs: {
      type: new GraphQLList(MsgType),
      resolve(parent, args) {
        // return R.filter(R.propEq("userId", parent.id))(msgs);
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    msg: {
      type: MsgType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //code to get data from db
        // return R.find(R.propEq("id", args.id))(msgs);
      }
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return R.find(R.propEq("id", args.id))(users);
      }
    },
    msgs: {
      type: new GraphQLList(MsgType),
      resolve(parent, args) {
        // return msgs;
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        // return users;
      }
    }
  }
});



module.exports = new GraphQLSchema({
  query: RootQuery
});
