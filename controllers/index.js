var express = require('express');
var router = express.Router();

var contact = require('../models/list.js');

router.get('/', function(req, res){
  contact.retrieve(function(err, data){
    if(err) throw err;
    res.json(data)
  });
});

module.exports = router;
