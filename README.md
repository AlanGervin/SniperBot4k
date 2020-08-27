Please note you must also have a copy of node.js installed to run the bot.

In the bot.js file replace the username and password in the two different functions. I've called them out in brackets in the file. examples of what to replace below

replace with the name of the bot in quotes and remove the brackets
example:
"BotName"

You can get an oauth token from twitch at https://twitchapps.com/tmi/ however I recommend setting up a second account so you're main account doesn't look like a bot. The oauth token will be used for the password.

replace with the oauth code you get from twitch surrounded by quotes and remove the brackets
example:
"oauth:1235f54g654g6f"

Make sure to add your bot to your channel mods by using the command /mod BotName on your twitch channel.

open this directory in cmd then type the following command replacing yourLobby with your channel name and sniperLobby with the channel name of the lobby you are trying to snipe. Make sure you get the order correct otherwise you'll send messages to the sniper lobby instead of your channel.


node bot.js yourLobby sniperLobby