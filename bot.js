const Discord = require('discord.js');
const client = new Discord.Client();

    const {Pool} = require('pg');
    let pool;
    if (process.env.DATABASE_URL) {
        pool = new Pool({
            connectionString: process.env.DATABASE_URL,
            ssl: {
    rejectUnauthorized: false
  },
        });
    } else {
        // Error message or
    	// connect to local data base
    }
pool.connect();

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
                 //message.reply('Opravdu chceš zvolit <@' + user.id + '>?');
                 
                pool.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
      message.reply("jede to");
  }
  client.end();
});
                
            }else{
                message.reply('Uživatel, kterého chceš zvolit, neexistuje!');
            }
        }
    }

});

 

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
