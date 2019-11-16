const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  let sembol = await db.fetch(`psembol_${message.guild.id}`) || "₺";
  let para = await db.fetch(`para_${message.guild.id}_${user.id}`);
  let banka = await db.fetch(`bank_${message.guild.id}_${user.id}`);
  if(!user){
    message.channel.send("Lütfen birini etiketleyiniz!")
  }
if (para == null) {
    const embed = new Discord.RichEmbed()
      .addField("Para:", `0${sembol}`, true)
    .addField("Banka:", banka+`${sembol}`, true)
      .setColor("BLACK");
    message.channel.send(embed);
    return;
  }
  if (banka == null) {
    const embed = new Discord.RichEmbed()
      .addField("Para:", para+ `${sembol}`, true)
    .addField("Banka:", `0${sembol}`, true)
      .setColor("BLACK");
    message.channel.send(embed);
    return;
  }
  if (banka == null && para == null) {
    const embed = new Discord.RichEmbed()
      .addField("Para:", `0${sembol}`, true)
    .addField("Banka:", `0${sembol}`, true)
      .setColor("BLACK");
    message.channel.send(embed);
    return;
  }
    const embed = new Discord.RichEmbed()
      .addField("Para:", para+`${sembol}`, true)
    .addField("Banka:", banka+`${sembol}`, true)
      .setColor("BLACK");
    message.channel.send(embed);
    return;
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["para-göster"],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: "paragöster",
  description: "Puanınızı gösterir.",
  usage: "paragöster"
};
