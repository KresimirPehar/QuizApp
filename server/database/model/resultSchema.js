const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {},
  result: {},
  userSelections: {}
});

module.exports = mongoose.model('result', schema);
