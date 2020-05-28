const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot ready!');
});

client.on('message', message => {
    var firstWord = message.content.replace(/ .*/,'');
    var command = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);
    if (firstWord === 'volím') {

       message.reply('Koho volíš?');
       message.reply(command);

       }

});

 

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
