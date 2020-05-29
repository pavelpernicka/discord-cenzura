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
            message.reply('Koho volíš?\nJestli chceš volit, napiš mi "volím @jméno" (prostě jako zmínku)');
        }else{
            if ( typeof message.mentions.users.first() !== 'undefined' && message.mentions.users.first() ) {
                 let user = message.mentions.users.first();
                 if(message.author.id !== user.id){
                     
                https.get('http://www.programy1.borec.cz/gjs-meteo/discord-volby.php?kdo=' + message.author.id +'&koho=' + user.id, (resp) => {
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
                     

                     var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > 1000){
      break;
    }
  }
                     
                     
  https.get('http://www.programy1.borec.cz/gjs-meteo/discord-volby-read.php?kdo=' + user.id, (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data)[0]);
      var hlasu = parseInt(JSON.parse(data)[0]);
    message.reply('Hotovo, právě jsi volil/a pro <@' + user.id + '>\nTento člověk má tolik hlasů: ' + hlasu + '\nPokud chceš znát aktualní pořadí, napiš "pořadí" nebo "výsledky"\n(svůj hlas můžeš kdykoliv během hlasování změnit)')
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
                     
                     
            ;
                 }else{
                     message.reply('Nemůžeš volit sám sebe!');
                 }
                
            }else{
                message.reply('Uživatel, kterého chceš zvolit, neexistuje!');
            }
        }
    }else if((firstWord === 'pořadí') || (firstWord === 'výsledky')){
        
        
        
https.get('http://www.programy1.borec.cz/gjs-meteo/discord-volby-vysledky.php', (resp) => {
let data = '';
  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
       pole = "";
       for(let i = 0; i < JSON.parse(data).length; i++) {
           var por = i+1;
            pole=pole + por + ') <@' + JSON.parse(data)[i].kdo + '>  Počet hlasů: *' + JSON.parse(data)[i].kolik + "*\n";
      //pole.push({name: "Jméno1", value: "Počet hlasů: 0"});
       }
           message.reply("**Výsledky voleb:**\n" + pole);
      
      
      
      
      
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

        
       
    }else if((message.content === 'drz picu') || (message.content === 'drž picu') || (message.content === 'drž piču') || (message.content === 'Drz picu') || (message.content === 'Drž piču') || (message.content === 'drz picu!') || (message.content === 'drž picu!') || (message.content === 'drž piču!') || (message.content === 'Drz picu!') || (message.content === 'Drž piču!')){
        message.reply("**Jdi do prdele!**");
    }else if(message.content === 'resetuj volby'){
        message.reply("**Dobře, resetuji**");
        
        
        
    }else if((message.content === 'jak mam volit') || (message.content === 'Jak mám volit') || (message.content === 'Jak mam volit') || (message.content === 'Jak mám volit?') || (message.content === 'jak mám volit?') || (message.content === 'jak mam volit?')){
        message.reply("**Všechny příkazy, které bot ovládá:**\nvolím *@jméno*\n(svůj hlas můžete kdykoliv během hlasování měnit)\npořadí/výsledky/výsledky voleb\n(vypíše aktuální pořadí)\nReaguje na některé nadávky");
    }

});

 

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
