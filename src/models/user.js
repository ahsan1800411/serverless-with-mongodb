const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please provide all the Namme'],
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email address',
    },
    required: [true, 'Please provide Email'],
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'Please provide all the Password'],
    select: false,
  },
});

module.exports = mongoose.model('User', userSchema);
