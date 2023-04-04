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
  image: {
    type: String,
  },
});

module.exports = dogSchema;
