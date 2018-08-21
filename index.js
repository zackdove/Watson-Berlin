const dotenv = require( 'dotenv');
dotenv.config()
var AssistantV1 = require( 'watson-developer-cloud/assistant/v1');

var assistant = new AssistantV1({
	version: '2018-07-10',
    username: '4bfcd302-746c-46e9-b7a7-82b33035d877',
    password: '1mfw0036JJbH',
	url: 'https://gateway.watsonplatform.net/assistant/api'
});

assistant.message({
    workspace_id: '79f2ee39-52a1-4460-8b6e-e95e2afc9cb2',
	input: {
		text: ' '
	},
}, function(err, response) { 
  if (err) {
	console.error(err);
  } else {
console.log(JSON.stringify(response, null, 2));
  }
});
