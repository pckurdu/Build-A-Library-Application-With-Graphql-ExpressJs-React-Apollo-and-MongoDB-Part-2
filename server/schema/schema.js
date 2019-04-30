
//for schema
const graphql=require('graphql');
//for lodash library
const _=require('lodash');

//dummy datas
var books=[
    {name:'Harry Potter',type:'fantastic',id:'1'},
    {name:'Lord of the Rings',type:'fantastic',id:'2'},
    {name:'Sherlock Holmes',type:'detective',id:'3'},
];


//for book type and book fields
const {GraphQLObjectType,GraphQLString,GraphQLSchema,GraphQLID}=graphql;

//create a book type
const bookType=new GraphQLObjectType({
    name:'Book',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        type:{type:GraphQLString}
    })
});

const RootQuery=new GraphQLObjectType({
    //query name
    name:'RootQueryType',
    //query fields
    fields:{
        //first type for book use bookType
        book:{
            type:bookType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                //Data coming from database
                return _.find(books,{id:args.id});
            }
        }
    }
});

//we export the schema with root query.
module.exports=new GraphQLSchema({
    query:RootQuery
});

