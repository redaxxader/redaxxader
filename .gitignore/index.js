const discord = require( 'discord.js');
const client = new Discord.Client();

client.login("ODU1NzU2OTM5NTUxOTY1MjI1.YM3HwQ.0QBvBk6vod0F_xsAbnHHavUIekM");

var prefix = ("vb!");

client.on("message",(message) => {
  
  if(message.content === "bonjour") {
    message.channel.send("salutation")
    }
  
  if(message.content === prefix + "help"){
    message.channel.send("Veux-tu de l'aide?")
     }
  
 });
