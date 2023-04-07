const { Schema } = require('mongoose');

const dogSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
      },
  fixed: {
    type: Boolean,
    required: true,
  }
});

module.exports = dogSchema;
