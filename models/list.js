var mongoose = require('mongoose');
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
