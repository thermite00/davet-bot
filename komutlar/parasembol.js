const Discord = require("discord.js"),
  db = require("quick.db"),
  ms = require("parse-ms");

exports.run = async (bot, message, args) => {
  let sembol = args[0];
  if (!sembol) {
    const embed = new Discord.RichEmbed()
      .setDescription("Lütfen bir para sembolü belirtiniz!")
      .setColor("BLACK");
    message.channel.send(embed);
    return;
  } else {
    const embed = new Discord.RichEmbed()
      .setDescription(`Para sembolü ${sembol} olarak ayarlandı!`)
      .setColor("BLACK");
    message.channel.send(embed);
    db.set(`psembol_${message.guild.id}`);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: "para-sembol",
  description: "Günlük ödül alırsınız.",
  usage: "para-sembol"
};
