const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const config = require('./config/config');
const mongoose = require('mongoose');
const env = process.env.NODE_ENV; // production or development
mongoose.connect(
		env == 'development' ? 'mongodb://localhost/test' : 
		`mongodb://${config.mongo_username}:${config.mongo_password}@ds233218.mlab.com:33218/heroku_2267tp7m`
);
mongoose.Promise = Promise;

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
// 	console.log(db);
//   console.log('connected');
// });

const api_routes = require('./routes/api_routes');

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api', api_routes);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
