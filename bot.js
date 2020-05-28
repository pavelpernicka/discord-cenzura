const Discord = require('discord.js');
const client = new Discord.Client();
const https = require('http');

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
            if ( typeof message.mentions.users.first() !== 'undefined' && message.mentions.users.first() ) {
                 let user = message.mentions.users.first();
                 message.reply('Opravdu chceš zvolit <@' + user.id + '>?');
                 
                https.get('http://www.programy1.borec.cz/gjs-meteo/discord-volby.php?kdo=1&koho=' + user.id, (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
                
                
                
            }else{
                message.reply('Uživatel, kterého chceš zvolit, neexistuje!');
            }
        }
    }

});

 

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
