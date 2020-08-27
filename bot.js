const tmi = require('tmi.js');
const process = require('process');
var client;
var client2;
var opts;
var timer1;


getYourLobby = () => {      
  // Define configuration options
  var opts = {
    identity: {
      //replace the <> with the bot name in quotes. example: "BotName123"
      username: <>,
      //reaplce the next line <> with the oauth code you get get from twitch surrounded by quotes. example "oauth1as2fd1asdf54f"
      password: <>
    },
    channels: [
      process.argv[2]
    ]
  };
  // Create client with our options
  client2 = new tmi.client(opts);
  //register handlers
  client2.on('message', onMessageHandler);
  client2.on('connected', onConnectedHandler);
  client2.connect();
};

getOpponentLobby = () => { 
  // Define configuration options
  opts = {
    identity: { 
      //replace the <> with the bot name in quotes. example: "BotName123"
      username: <>,
      //replace the next line <> with the oauth code you get get from twitch surrounded by quotes. example "oauth1as2fd1asdf54f"
      password: <>
    },
    channels: [
      process.argv[3]
    ]
  };
  // Create client with our options
  client = new tmi.client(opts);
  //register handlers
  client.on('message', onMessageHandler);
  client.on('connected', onConnectedHandler);
  client.connect();
};

getOpponentLobby();
getYourLobby();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  var num;
  if (self) { return; } // Ignore messages from the bot
  
  // Remove whitespace from chat message
  const commandName = msg.trim();
  
  //Check if anyone in chat said 5 or 5 Seconds! or Ready
  if (commandName === '5' || commandName === "5 seconds!") {
    num = 5;
    timer(num,client2);
    
    return;
  } else if (commandName === "Ready") {
    num = 4;
    timer(num,client2); 
  }
}

function timer(number,client) {
  var num = number;
  timer1 = setInterval(function(){
      if(num > 0) {
        client.say(process.argv[2], num.toString());
        console.log(num)
        num--;
      }
      if (num == 0) {
        clearInterval(timer1);
    }
  },1000);
}


// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}