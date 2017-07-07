var express = require('express'),
    mongoose = require('mongoose'),
    join = require('path').join,
    bodyParser = require('body-parser');

var app = express();
var port = 3100;

//connect to database
mongoose.connect('mongodb://localhost:27017/contacts', function(err){
  console.log(err);
});
var db = mongoose.connection;

//get route files
var index = require('./controllers/index.js');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//setting the templating engine
app.set('veiw engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//setting the views folder
app.set('views', join(__dirname, 'views'));

//setting the static folder
app.use(express.static(join(__dirname, 'staticFiles')));

//include app
app.use('/', index);

app.listen(port, function(){
  console.log('listening on port '+port);
});
