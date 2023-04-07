const { Schema } = require('mongoose');

const dogBreed = new Schema({
  breed: {
    type: String,
    required: true
  }
});

module.exports = dogBreed;