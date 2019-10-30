const Discord = require("discord.js")
const db = require("quick.db")
//2020-05-05:12:20
exports.run = async (message, client, args) => {
  let süre = await db.fetch(`veri`, süre)
  let süre2 = args[0]
  if(!args){
    const embed = new Discord.RichEmbed()
    .setDescription(`Lütfen bir süre belirtiniz!`)
    .setColor("BLACK")
    message.channel.send(embed)
    return;
  }
  if(args > 16){
    const embed = new Discord.RichEmbed()
    .setDescription(`Hatalı süre!`)
    .setColor("BLACK")
    message.channel.send(embed)
    return;
  }
  if(args < 16){
    const embed = new Discord.RichEmbed()
    .setDescription(`Hatalı süre!`)
    .setColor("BLACK")
    message.channel.send(embed)
    return;
  }
  const embed = new Discord.RichEmbed()
    .setDescription(`hedef süre ${süre2} olarak ayarlandı!`)
    .setColor("BLACK")
    message.channel.send(embed)
  
  db.add(`veri`, süre2)
}
