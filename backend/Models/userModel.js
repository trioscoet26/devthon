const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Basic User Information
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  phoneNumber: {
    type: String,
    required: false,
    unique: true,
    match: [/^\d{10}$/, 'Please enter a valid phone number']
  },
  registrationDate: {
    type: Date,
    default: Date.now
  },

  // GreenCoin Balance and Tracking
  greenCoins: {
    type: Number,
    default: 0
  },
  greenCoinHistory: [{
    amount: {
      type: Number,
      required: true
    },
    transactionType: {
      type: String,
      enum: ['gain', 'spend'],
      required: true
    },
    description: {
      type: String,
      required: false
    },
    date: {
      type: Date,
      default: Date.now
    }
  }],

});

const User = mongoose.model('User', userSchema);

module.exports = User;
