import express from 'express';
import router from './router';
const app = express();

app.get('/', function (request, response) {
  response.send('HelloWorld');
});

app.use('/', router);

module.exports = {
  path: '/api/',
  handler: app,
};
