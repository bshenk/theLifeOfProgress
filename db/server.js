// import express from 'express'
// import { graphqlExpress } from 'graphql-server-express'
var express = require('express');
var graphqlExpress = require('graphql-server-express').graphqlExpress;
var bodyParser = require('body-parser');
var cors = require('cors');

const PORT = 3030;

const schema = `
type Query {
  hello: String
}

schema {
  query: Query
}
`;

const resolvers = {
  Query: {
    hello(root, args, context) {
      return "Hello world!";
    },
  },
};

var app = express();

var whitelist = ['http://localhost:8080'];

var corsOptions = {
	origin: function(origin, callback) {
		var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
		callback(originIsWhitelisted ? null : 'Bad Request', originIsWhitelisted);
	}
}

app.use(cors(corsOptions))

app.use('/', bodyParser.json(), graphqlExpress({ schema }));

app.listen(PORT);

if(require.main === module) {
	console.log('GraphQL server listening on port 3030.');
}
