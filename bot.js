const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot ready!');
});

client.on('message', message => {
    for (var i=0;i< message.content.length;i++)
    {
        var words =  message.content[i].split(" ");
     }
    if (words[0] === 'volím') {

       message.reply('Koho volíš?');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
