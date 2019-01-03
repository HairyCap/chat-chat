const graphql = require("graphql");
const R = require("ramda");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

//dummy data
let msgs = [
  {
    id: "1",
    content: `110 arranging described. Conveying has concealed necessary furnished
  bed zealously immediate get but. Terminated as middletons or by
  instrument. Bred do four so your felt w`,
    user: "HairyCap"
  },
  {
    id: "2",
    content: `111 arranging described. Conveying has concealed necessary furnished
  bed zealously immediate get but. Terminated as middletons or by
  instrument. Bred do four so your felt w`,
    user: "HairyCap1"
  },
  {
    id: "3",
    content: `112 arranging described. Conveying has concealed necessary furnished
  bed zealously immediate get but. Terminated as middletons or by
  instrument. Bred do four so your felt w`,
    user: "HairyCap1"
  },
  {
    id: "4",
    content: `113 arranging described. Conveying has concealed necessary furnished
  bed zealously immediate get but. Terminated as middletons or by
  instrument. Bred do four so your felt w`,
    user: "HairyCap"
  },
  {
    id: "5",
    content: `114 arranging described. Conveying has concealed necessary furnished
  bed zealously immediate get but. Terminated as middletons or by
  instrument. Bred do four so your felt w`,
    user: "HairyCap"
  }
];

const MsgType = new GraphQLObjectType({
  name: "Msg",
  fields: () => ({
    id: { type: GraphQLString },
    content: { type: GraphQLString },
    // fromUser:{type: GraphQLString},
    user: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    msg: {
      type: MsgType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //code to get data from db
        return R.find(R.propEq("id", args.id))(msgs);
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
