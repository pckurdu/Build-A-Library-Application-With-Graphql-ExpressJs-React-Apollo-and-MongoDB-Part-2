
//We use to produce express.
const express=require('express');
//for express-graphql packages
const graphqlHTTP=require('express-graphql');
//We are creating applications using express.
const app=express();
//create page where graphql will run

//import schema.js
const schema=require('./schema/schema');
app.use('/graphql',graphqlHTTP({
    schema:schema,
    graphiql:true //graphiql installation
}));

//Listen 4000. port for request.
app.listen(4000,()=>{
    console.log('listening port 4000');
    
});