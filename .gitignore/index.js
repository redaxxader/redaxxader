const discord = require( 'discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);

var prefix = ("vb!");

client.on("message",(message) => {
  
  if(message.content === "bonjour") {
    message.channel.send("salutation")
    }
  
  if(message.content === prefix + "help"){
    message.channel.send("Veux-tu de l'aide?")
     }
  
 });
