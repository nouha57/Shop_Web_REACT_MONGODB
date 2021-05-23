const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: 
     {
      type: String,
      required: [True, "required"],
      maxlength: [30, "name must be of length shorter than 30 chars"]
    
},
email: 
     {
      type: String,
      required: [True, "required"],
      index: true
    
    
},
password: 
     {
      type: String,
      required: [True, "required"],

      
    
},

isActive: {
    type: Boolean,
    default: true,
},
isDeleted: {
    type: Boolean,
    default: false,
},

timestamps: true
}


)

const User= mongoose.model('users', userSchema) //users is our collection name 

module.exports = Users