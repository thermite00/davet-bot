const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  let para = await db.fetch(`para_${message.guild.id}_${user.id}`);
  if(!user){
    message.channel.send("Lütfen birini etiketleyiniz!")
  }
  if (para == null) {
    const embed = new Discord.RichEmbed()
      .addField("Para:", `0₺`)
      .setColor("BLACK");
    message.channel.send(embed);
    return;
  } else {
    const embed = new Discord.RichEmbed()
      .addField("Para:", para + `₺`)
      .setColor("BLACK")
    message.channel.send(embed);
  }
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
