var mongoose = require('mongoose');
//connect to database
mongoose.connect('mongodb://localhost:27017/contacts',{useMongoClient: true}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("db connected-contacts");
  }

});
var db = mongoose.connection;

var Schema = mongoose.Schema;

var contactInfo = new Schema({
  fname: {
    type: String
  },
  sname:{
    type:String
  },
  phone:{
    type:String
  },
  email:{
    type:String
  },
  address:{
    type:String
  },
  postal:{
    type: String
  },
  favorite:{
    type: Boolean
  }
});

var contact = mongoose.model('contactinfo', contactInfo);
//module.exports = contact;

//defining methods for database interaction***
module.exports.retrieve = function(callback){
  contact.find({}, callback);
}

module.exports.addcontact = function(newContact, callback){
  newContact.save();
}

module.exports.removeCont = function(id, callback){
  contact.remove({_id: mongoose.mongo.ObjectId(id)});
}

module.exports.edit = function(id, callback){
  contact.update({_id : mongoose.mongo.ObjectId(id)}, {$set:{
    //new contact info
  }});
}
