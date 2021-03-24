var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
    title:  {type: String, required: [true, '"Title" is required']},
    description: {type: String, required: [true, '"Description" is required']},
    created: { type: Date, default: Date.now },
  });

module.exports = mongoose.model('News', newsSchema);