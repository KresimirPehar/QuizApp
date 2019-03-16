const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema = new Schema({ 
    name: {
        type: String,
        required: true
    },
    date: {},
    result: {},
    userSelections: {}
})

module.exports = mongoose.model('result', schema);