const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const app = express();


app.use('/graphql', expressGraphQL({
  // schema: schema       could be schema itself ES6
  schema,
  // only intended to use dev enviroment
  graphiql: true
}));


app.listen(4000, () => {
  console.log('Listening');
});