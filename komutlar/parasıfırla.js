const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (msg, message, args) => {
  let para = await db.fetch(`para_${message.guild.id}_${message.author.id}`);
  let rMember =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.get(args[0]);
  if (!rMember) {
    const embed = new Discord.RichEmbed()
      .setDescription("Lütfen parayı alacağınız kişiyi etiketleyin!")
      .setColor("BLACK");
    message.channel.send(embed);
    return;
  }
  
  const embed = new Discord.RichEmbed()
      .setDescription("Belirtilen şahsın parası sıfırlandı!")
      .setColor("BLACK");
    message.channel.send(embed);
  
  db.delete(`para_${message.guild.id}_${rMember.id}`);
  db.delete(`bank_${message.guild.id}_${rMember.id}`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["parasıfırla"],
  permLevel: 2,
  kategori: "puan"
};

exports.help = {
  name: "para-sıfırla",
  description: "PARA",
  usage: "para-sıfırla"
};
