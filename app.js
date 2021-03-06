/* importar as configurações do servidor */
var app = require('./config/server');
var Twit = require('twit');

const mongoClient = require('./config/dbConnection');
const MongoExports = require('./config/dbDataExports');

require('dotenv').config();

var client = new Twit({
    consumer_key:        process.env.CONSUMER_KEY,
    consumer_secret:     process.env.CONSUMER_SECRET,
    access_token:        process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000
});

/* Método que busca os tweets mais recentes baseado na query */
app.get('/api', function(req, res){
	var tweets = '';
	var name = '';
	var count = '';
	client.get('https://api.twitter.com/1.1/search/tweets.json', {q: '#openbanking' , count: 100}, function(error, res) {
		if (error) {
			console.log('Desculpe, mas o Bot não conseguiu encontrar o último tweet, : ' + error);
		 } 
	
		else res.statuses.forEach(function(tweet) {
			tweets += tweet.entities.hashtags,
			name += tweet.user.screen_name,
			count += tweet.user.statuses_count
			// console.log('user_name: ', tweet.user.screen_name + ' count: ' + tweet.user.statuses_count + ' created at: ' + tweet.user.created_at),
			// console.log('hashtags: ', tweet.entities.hashtags)
			// console.log('photo:', tweet.user.profile_image_url)
			// console.log('language:', tweet.metadata.iso_language_code)
        
		});
		mongoClient.insertAll(res.statuses);
		MongoExports.selectAll(res.statuses);
	});

	client.get('https://api.twitter.com/1.1/search/tweets.json', {q: '#apifirst' , count: 100}, function(error, res) {
		if (error) {
			console.log('Desculpe, mas o Bot não conseguiu encontrar o último tweet, : ' + error);
		 } 
	
		else res.statuses.forEach(function(tweet) {
			tweets += tweet.entities.hashtags,
			name += tweet.user.screen_name,
			count += tweet.user.statuses_count
			// console.log('user_name: ', tweet.user.screen_name + ' count: ' + tweet.user.statuses_count + ' created at: ' + tweet.user.created_at),
			// console.log('hashtags: ', tweet.entities.hashtags)
			// console.log('photo:', tweet.user.profile_image_url)
			// console.log('language:', tweet.metadata.iso_language_code)

		});

		mongoClient.insertAll(res.statuses);

	});

	client.get('https://api.twitter.com/1.1/search/tweets.json', {q: '#cloudfirst' , count: 100}, function(error, res) {
		if (error) {
			console.log('Desculpe, mas o Bot não conseguiu encontrar o último tweet, : ' + error);
		 } 
	
		else res.statuses.forEach(function(tweet) {
			tweets += tweet.entities.hashtags,
			name += tweet.user.screen_name,
			count += tweet.user.statuses_count
			// console.log('user_name: ', tweet.user.screen_name + ' count: ' + tweet.user.statuses_count + ' created at: ' + tweet.user.created_at),
			// console.log('hashtags: ', tweet.entities.hashtags)
			// console.log('photo:', tweet.user.profile_image_url)
			// console.log('language:', tweet.metadata.iso_language_code)

		});

		mongoClient.insertAll(res.statuses);

	});

	client.get('https://api.twitter.com/1.1/search/tweets.json', {q: '#microservices' , count: 100}, function(error, res) {
		if (error) {
			console.log('Desculpe, mas o Bot não conseguiu encontrar o último tweet, : ' + error);
		 } 
	
		else res.statuses.forEach(function(tweet) {
			tweets += tweet.entities.hashtags,
			name += tweet.user.screen_name,
			count += tweet.user.statuses_count
			// console.log('user_name: ', tweet.user.screen_name + ' count: ' + tweet.user.statuses_count + ' created at: ' + tweet.user.created_at),
			// console.log('hashtags: ', tweet.entities.hashtags)
			// console.log('photo:', tweet.user.profile_image_url)
			// console.log('language:', tweet.metadata.iso_language_code)

		});

		mongoClient.insertAll(res.statuses);

	});

	client.get('https://api.twitter.com/1.1/search/tweets.json', {q: '#apigateway' , count: 100}, function(error, res) {
		if (error) {
			console.log('Desculpe, mas o Bot não conseguiu encontrar o último tweet, : ' + error);
		 } 
	
		else res.statuses.forEach(function(tweet) {
			tweets += tweet.entities.hashtags,
			name += tweet.user.screen_name,
			count += tweet.user.statuses_count
			// console.log('user_name: ', tweet.user.screen_name + ' count: ' + tweet.user.statuses_count + ' created at: ' + tweet.user.created_at),
			// console.log('hashtags: ', tweet.entities.hashtags)
			// console.log('photo:', tweet.user.profile_image_url)
			// console.log('language:', tweet.metadata.iso_language_code)

		});

		mongoClient.insertAll(res.statuses);

	});

	client.get('https://api.twitter.com/1.1/search/tweets.json', {q: '#oauth' , count: 100}, function(error, res) {
		if (error) {
			console.log('Desculpe, mas o Bot não conseguiu encontrar o último tweet, : ' + error);
		 } 
	
		else res.statuses.forEach(function(tweet) {
			tweets += tweet.entities.hashtags,
			name += tweet.user.screen_name,
			count += tweet.user.statuses_count
			// console.log('user_name: ', tweet.user.screen_name + ' count: ' + tweet.user.statuses_count + ' created at: ' + tweet.user.created_at),
			// console.log('hashtags: ', tweet.entities.hashtags)
			// console.log('photo:', tweet.user.profile_image_url)
			// console.log('language:', tweet.metadata.iso_language_code)

		});

		mongoClient.insertAll(res.statuses);

	});

	client.get('https://api.twitter.com/1.1/search/tweets.json', {q: '#swagger' , count: 100}, function(error, res) {
		if (error) {
			console.log('Desculpe, mas o Bot não conseguiu encontrar o último tweet, : ' + error);
		 } 
	
		else res.statuses.forEach(function(tweet) {
			tweets += tweet.entities.hashtags,
			name += tweet.user.screen_name,
			count += tweet.user.statuses_count
			// console.log('user_name: ', tweet.user.screen_name + ' count: ' + tweet.user.statuses_count + ' created at: ' + tweet.user.created_at),
			// console.log('hashtags: ', tweet.entities.hashtags)
			// console.log('photo:', tweet.user.profile_image_url)
			// console.log('language:', tweet.metadata.iso_language_code)

		});

		mongoClient.insertAll(res.statuses);

	});

	client.get('https://api.twitter.com/1.1/search/tweets.json', {q: '#raml' , count: 100}, function(error, res) {
		if (error) {
			console.log('Desculpe, mas o Bot não conseguiu encontrar o último tweet, : ' + error);
		 } 
	
		else res.statuses.forEach(function(tweet) {
			tweets += tweet.entities.hashtags,
			name += tweet.user.screen_name,
			count += tweet.user.statuses_count
			// console.log('user_name: ', tweet.user.screen_name + ' count: ' + tweet.user.statuses_count + ' created at: ' + tweet.user.created_at),
			// console.log('hashtags: ', tweet.entities.hashtags)
			// console.log('photo:', tweet.user.profile_image_url)
			// console.log('language:', tweet.metadata.iso_language_code)

		});

		mongoClient.insertAll(res.statuses);

	});

	client.get('https://api.twitter.com/1.1/search/tweets.json', {q: '#openapis' , count: 100}, function(error, res) {
		if (error) {
			console.log('Desculpe, mas o Bot não conseguiu encontrar o último tweet, : ' + error);
		 } 
	
		else res.statuses.forEach(function(tweet) {
			tweets += tweet.entities.hashtags,
			name += tweet.user.screen_name,
			count += tweet.user.statuses_count
			// console.log('user_name: ', tweet.user.screen_name + ' count: ' + tweet.user.statuses_count + ' created at: ' + tweet.user.created_at),
			// console.log('hashtags: ', tweet.entities.hashtags)
			// console.log('photo:', tweet.user.profile_image_url)
			// console.log('language:', tweet.metadata.iso_language_code)

		});

		mongoClient.insertAll(res.statuses);

	});

	client.get('https://api.twitter.com/1.1/search/tweets.json', {q: '#devops' , count: 100}, function(error, res) {
		if (error) {
			console.log('Desculpe, mas o Bot não conseguiu encontrar o último tweet, : ' + error);
		 } 
	
		else res.statuses.forEach(function(tweet) {
			tweets += tweet.entities.hashtags,
			name += tweet.user.screen_name,
			count += tweet.user.statuses_count
			// console.log('user_name: ', tweet.user.screen_name + ' count: ' + tweet.user.statuses_count + ' created at: ' + tweet.user.created_at),
			// console.log('hashtags: ', tweet.entities.hashtags)
			// console.log('photo:', tweet.user.profile_image_url)
			// console.log('language:', tweet.metadata.iso_language_code)

		});

		mongoClient.insertAll(res.statuses);

	});
});

/* parametrizar a porta de escuta */
const PORT = process.env.PORT || 32321;
app.listen(PORT, "0.0.0.0", function() {
  console.log(`Servidor online na porta: ${PORT}`);
});

console.log('O Bot console esta iniciando...\r\n');
client.get('account/verify_credentials', {
    include_entities: false,
    skip_status: true,
    include_email: false
}, onAuthenticated)

function onAuthenticated(err, res) {
    if (err) {
        throw err
    }
    console.log('Autenticado no Twetter com sucesso.\r\n')
}