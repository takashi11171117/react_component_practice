const cors = require('cors');
const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require( './schema/schema');
const app = express();

var corsOptions = {
  origin: '*',
  credentials: true
};
app.use(cors(corsOptions));

app.use('/graphql', expressGraphQL({
  graphiql: true,
  schema
}));

app.listen(4000, () => {
  console.log('listening');
});