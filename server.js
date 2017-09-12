const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const dal = require('./dal');
const bodyParser = require('body-parser')
const session = require('express-session')
const routes = require('./routes/routes')

//setting up mustache stuff
app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')

//setting up express static
app.use(express.static('public'))

// setting up bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(session({
  secret: process.env.SESH_SECRET || 'this is a secret',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: null}

}))

//settiung up middleware
app.use(function (req, res, next) {
  if (req.session.usr) {
    req.isAuthenticated = true;
  }
  else {
    req.isAuthenticated = false;
  }
  next();
})



//routes
app.use('/', routes)


//setting the port
app.set('port', 3000)

//listening at port and console log start
app.listen(app.get('port'), function () {
  console.log('Application has started at port 3000')
})
