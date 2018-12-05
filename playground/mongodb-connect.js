const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('unable to connect');	
	}
	console.log('connected');

	 db.collection('Todos').insertOne({
		text: 'omething to do',
		completed: false
		}, (err, result) => {
			if(err){
			return console.log('unable to connect', err);
			}
			console.log(JSON.stringify(result.ops, undefined, 2));
		});
	db.close();
});