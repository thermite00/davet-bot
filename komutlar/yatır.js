const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {

  let para = await db.fetch(`para_${message.guild.id}_${message.author.id}`);
  let banka = await db.fetch(`bank_${message.guild.id}_${message.author.id}`);
    let sembol = await db.fetch(`psembol_${message.guild.id}`) || "₺";
  let miktar = args[0]
  if(!miktar){
    const embed = new Discord.RichEmbed()
      .setTitle("Hata!")
      .setColor("BLACK")
      .setDescription(`Lütfen bir miktar belirtiniz!`);
    message.channel.send(embed);
    return;
  }
  if(para < miktar){
    const embed = new Discord.RichEmbed()
      .setTitle("Hata!")
      .setColor("BLACK")
      .setDescription(`Ne yazık ki bu kadar paran yok!`);
    message.channel.send(embed);
    return;
  }
  const embed = new Discord.RichEmbed()
      .setTitle("Hata!")
      .setColor("BLACK")
      .setDescription(`${miktar}${sembol} kadar para depolandı!`);
    message.channel.send(embed);
  db.add(`para_${message.guild.id}_${message.author.id}`, -miktar)
  db.add(`bank_${message.guild.id}_${message.author.id}`, +miktar)
  return
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["depola"],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: "yatır",
  description: "Puanınızı gösterir.",
  usage: "yatır"
};
