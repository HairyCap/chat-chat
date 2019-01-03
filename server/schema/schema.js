const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const MsgType = new GraphQLObjectType({
  name:'Msg',
  fields:() => ({
    id:{type: GraphQLString},
    content:{type: GraphQLString},
    // fromUser:{type: GraphQLString},
    // toUser:{type: GraphQLString},
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  field: {
    msg: {
      type: MsgType,
      args: {id: {type: GraphQLString}},
      resolve(parent,args){
        //code to get data from db
      }
    }
  }
})
// Msg(id:'123'){
//   conent
// }


module.exports = new GraphQLSchema({
  query: RootQuery
})