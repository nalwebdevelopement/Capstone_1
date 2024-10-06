const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      role: {
        type: String,
        enum: ['customer', 'admin'],  // Define roles: 'customer' or 'admin'
        required: true
      }
  });
  
  const User = mongoose.model('User', userSchema);
  module.exports = User;