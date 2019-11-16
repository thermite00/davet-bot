const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (msg, message, args) => {
  let para = await db.fetch(`para_${message.guild.id}_${message.author.id}`);
  let rMember =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.get(args[0]);

  const miktar = args[1];
  if (!rMember) {
    const embed = new Discord.RichEmbed()
      .setDescription("Lütfen parayı göndereceğiniz kişiyi etiketleyiniz!")
      .setColor("BLACK");
    message.channel.send(embed);
    return;
  }
  if (!miktar) {
    const embed = new Discord.RichEmbed()
      .setDescription("Lütfen bir miktar belirtiniz!")
      .setColor("BLACK");
    message.channel.send(embed);
    return;
  }
  if(para < miktar){
    const embed = new Discord.RichEmbed()
      .setDescription("Lütfen bir miktar belirtiniz!")
      .setColor("BLACK");
    message.channel.send(embed);
    return;
  }
  
  const embed = new Discord.RichEmbed()
      .setDescription("Belirtilen miktardaki para gönderildi!")
      .setColor("BLACK");
    message.channel.send(embed);
  db.add(`para_${message.guild.id}_${message.author.id}`, -miktar)
  db.add(`para_${message.guild.id}_${rMember.id}`, +miktar);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["paragönder"],
  permLevel: 2,
  kategori: "puan"
};

exports.help = {
  name: "para-gönder",
  description: "gönder",
  usage: "para-gönder"
};
