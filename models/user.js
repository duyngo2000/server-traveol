const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/duy');

const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    age: Number,
    email: String,
    phone: Number,
    address: String,
    allTour: [
        {
            idTour : {
                type: String,
                ref: "tour"
            }
        }
    ],
    method: Number,
    pay: {
        type: Number,
        default: 0
    },
    account: {}
    
  },
  {timestamps: true},
  {
      collection: 'users'
  });
  
  const ModelUser = mongoose.model('users', userSchema);
  
  module.exports = ModelUser
  