const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

mongoose.connect(
  'mongodb+srv://memon2572006f_db_user:test123@gql-memon.pkbugir.mongodb.net/gql-memon?retryWrites=true&w=majority&tls=true',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});
