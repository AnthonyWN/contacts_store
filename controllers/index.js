var express = require('express');
var router = express.Router();

var contact = require('../models/list.js');

router.get('/', function(req, res){
  contact.retrieve(function(err, data){
    if(err) throw err;
    res.json(data)
  });
});

router.post('/add_contacts', function(req, res){
  var newCont = new contact({
    /*fname = req.body.f_name;
    sname = req.body.s_name;
    phone = req.body.phone;
    email = req.body.email;
    address = req.body.address;
    postal = req.body.postal_ad;
    fav = false;*/
  });

  contact.addcontact(newCont, function(err, cont){
    if(err) throw err;
    console.log("Contact added");
    console.log(cont);
  });

});

router.delete('/:id', function(req, res){
  contact.removeCont(req.params.id, function(err){
    if(err) throw err;
  });
});


module.exports = router;
