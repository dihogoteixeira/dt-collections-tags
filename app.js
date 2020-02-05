/* importar as configurações do servidor */
var app = require('./config/server');
var Twit = require('twit');

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
	client.get('https://api.twitter.com/1.1/search/tweets.json', {q: '#openbanking', count: 100}, function(error, tweets) {
		if (error) {
			console.log('Desculpe, mas o Bot não conseguiu encontrar o último tweet, : ' + error);
		 } 
	
		else tweets.statuses.forEach(function(tweet) {
			tweets += tweet.entities.hashtags,
			name += tweet.user.screen_name,
			count += tweet.user.statuses_count
			console.log('user_name: ', tweet.user.screen_name + ' count: ' + tweet.user.statuses_count + ' created at: ' + tweet.user.created_at),
			console.log('hashtags: ', tweet.entities.hashtags)
			console.log('photo:', tweet.user.profile_image_url)
			console.log('language:', tweet.metadata.iso_language_code)
		});
	});
});












/* parametrizar a porta de escuta */
app.listen(8080, function(){
	console.log('Servidor online');
})

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

    console.log('Autenticado com sucesso.\r\n')
}