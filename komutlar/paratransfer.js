const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async(msg, message, args) => {
    let para = await db.fetch(`para_${message.guild.id}_${message.author.id}`);
  const miktar = args[0]
  if(!miktar.content == 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 0){
    const embed = new Discord.RichEmbed()
  .setDescr("Lütfen geçerli bir miktar giriniz!")
  .setColor("BLACK")
message.channel.send(embed)
    
  } else{
  const embed = new Discord.RichEmbed()
  .addField("Paran:", para)
  .setColor("BLACK")
message.channel.send(embed)
  }
}


exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['pn'],
  permLevel: 0,
  kategori: 'puan'
};

exports.help = {
  name: 'puan', 
  description: 'Puanınızı gösterir.',
  usage: 'puan'
};