const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot ready!');
});

client.on('message', message => {
    var firstWord = message.content.replace(/ .*/,'');
    var command = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);
    if (firstWord === 'volím') { //command name
        if(firstWord === command){
            message.reply('Koho volíš?\nJestli chceš volit, napiš mi "volím uživatelské jméno"');
        }else{
            if ( typeof client.users.find("username", command) !== 'undefined' && client.users.find("username", command) ) {
                 let user = client.users.find("username", command);
                 message.reply('Opravdu chceš zvolit <@' + user.id + '>?');
            }else{
                message.reply('Uživatel, kterého chceš zvolit, neexistuje!');
            }
        }
    }

});

 

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
