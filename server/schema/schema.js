const graphql = require("graphql");
const R = require("ramda");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList
} = graphql;

//dummy data
let msgs = [
  {
    id: "1",
    content: `110 arranging described. Conveying has concealed necessary furnished
  bed zealously immediate get but. Terminated as middletons or by
  instrument. Bred do four so your felt w`,
    userId: "1"
  },
  {
    id: "2",
    content: `111 arranging described. Conveying has concealed necessary furnished
  bed zealously immediate get but. Terminated as middletons or by
  instrument. Bred do four so your felt w`,
    userId: "2"
  },
  {
    id: "3",
    content: `112 arranging described. Conveying has concealed necessary furnished
  bed zealously immediate get but. Terminated as middletons or by
  instrument. Bred do four so your felt w`,
    userId: "2"
  },
  {
    id: "4",
    content: `113 arranging described. Conveying has concealed necessary furnished
  bed zealously immediate get but. Terminated as middletons or by
  instrument. Bred do four so your felt w`,
    userId: "1"
  },
  {
    id: "5",
    content: `114 arranging described. Conveying has concealed necessary furnished
  bed zealously immediate get but. Terminated as middletons or by
  instrument. Bred do four so your felt w`,
    userId: "1"
  }
];
let users = [
  {
    id: "1",
    name: "HairyCap"
  },
  {
    id: "2",
    name: "HairyCap2"
  }
];

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
        return R.find(R.propEq("id", parent.userId))(users);
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
        return R.filter(R.propEq("userId", parent.id))(msgs);
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
        return R.find(R.propEq("id", args.id))(msgs);
      }
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return R.find(R.propEq("id", args.id))(users);
      }
    }
  }
});
// Msg(id:'123'){
//   conent
// }

module.exports = new GraphQLSchema({
  query: RootQuery
});
