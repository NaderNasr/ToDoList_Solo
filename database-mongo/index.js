var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  todo: String
});

var Item = mongoose.model('Item', itemSchema);

var save = function(data,callback){
  var item = new Item(data)
  item.save(function(err,dataRes){
    if(err){
      callback(err)
    }
    callback(dataRes)
  })
}

module.exports.Item = Item;
module.exports.save = save;
