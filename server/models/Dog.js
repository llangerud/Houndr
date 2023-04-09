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
    required: false,
  },
  age: {
    type: String,
    required: false,
      },
  fixed: {
    type: String,
    required: false,
  }
});

module.exports = dogSchema;
