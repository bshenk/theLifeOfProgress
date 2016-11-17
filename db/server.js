import express from 'express'
import { graphqlExpress } from 'graphql-server-express'

const myGraphQLSchema = {};
const PORT = 3030;

var app = express();

app.use('/', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));

app.listen(PORT);

if(require.main === module) {
	console.log('GraphQL server listening on port 3030.');
}
