const tmi = require('tmi.js');
const process = require('process');
var client;
var client2;
var num = 5;

getYourLobby = () => {
      
      // Define configuration options
      var opts2 = {
        identity: {
          username: <replace with the name of the bot in quotes and remove the brakets>,
          password: <replace with the oauth code you get from twitch surrounded by quotes and remove the brackets>
        },
        channels: [
          process.argv[2]
        ]
      };
      // Create client with our options
      client2 = new tmi.client(opts2);
      //register handlers
      client2.on('message', onMessageHandler);
      client2.on('connected', onConnectedHandler);
      client2.connect();
};

getOpponentLobby = () => { 
      // Define configuration options
      var opts = {
        identity: { 
          username: <replace with the name of the bot in quotes and remove the brakets>,
          password: <replace with the oauth code you get from twitch surrounded by quotes and remove the brackets>
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
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();
  if (commandName === '5' || commandName === "5 seconds!") {
    var timer1 = setInterval(function(){
      if(num > 0) {
        client2.say(process.argv[2], num.toString());
        console.log(num)
        num--;
      }
      if (num == 0) {
          clearInterval(timer1);
      }
    },1000);
    num = 5;
    return;
  } else if (commandName === "Ready") {
    num=4;
    var timer1 = setInterval(function(){
      if(num > 0) {
        client2.say(process.argv[2], num.toString());
        console.log(num)
        num--;
      }
      if (num == 0) {
          clearInterval(timer1);
      }
    },1000);
    num = 5;
    return;
  } else {
    console.log("unknown command")
  }
  
}


// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}