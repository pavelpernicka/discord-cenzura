const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot ready!');
});

client.on('message', message => {
    var firstWord = message.content.replace(/ .*/,'');
    if (firstWord === 'volím') {

       message.reply('Koho volíš?');

       }

});

 

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
