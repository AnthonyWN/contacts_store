var express = require('express'),
    mongoose = require('mongoose'),
    join = require('path').join,
    bodyParser = require('body-parser');

var app = express();
var port = 3100;

//get route files
var index = require('./controllers/index.js');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//setting the templating engine
app.set('veiw engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//setting the static folder
app.use(express.static(join(__dirname, 'staticFiles')));

app.get('*', (req, res)=>{
  res.sendFile(join(__dirname, 'staticFiles/src/index.html'));
});

//include app
app.use('/api', index);


app.listen(port, function(){
  console.log('listening on port '+port);
});
