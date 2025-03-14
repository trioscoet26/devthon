const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  // Seller and Marketplace Information
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Reference to the User collection (who is selling the product)
    required: true
  },
  marketplaceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Marketplace',  // Reference to the Marketplace where it's listed
    required: true
  },

  // Basic Product Information
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['electronics', 'clothing', 'home', 'books', 'toys', 'beauty', 'other'],
    description: 'Category of the item'
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  quantityAvailable: {
    type: Number,
    required: true,
    min: 1
  },
  status: {
    type: String,
    enum: ['active', 'sold-out', 'inactive'],
    default: 'active'
  },

  // Item Images
  imageUrls: [{
    type: String,
    required: false
  }],

  // Shipping Details
  shippingDetails: {
    cost: {
      type: Number,
      required: true,
      min: 0
    },
    estimatedDelivery: {
      type: String,
      required: true
    }
  },

  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
