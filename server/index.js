var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mongo/index.js');
var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false }))

app.post('/items',function(req,res){

	var data = req.body
	db.save(data,function(err,data){
		if( err ){
			console.log( err )
		}
		res.send( data )
	})
})

app.get('/items', function (req, res) {

	db.Item.find(function(err,data){
		if( err ){
			console.log( 'ERR RETURNED' )
		}
		res.send( data )
	})
});

app.listen(3000, function() {
	console.log('listening on port 3000!');
});

