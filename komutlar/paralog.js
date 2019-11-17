const Discord = require("discord.js");
const client = new Discord.Client();
const Jimp = require("jimp");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  let log = message.mentions.channels.first();
  if (!log) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription("Lütfen bir kanal etiketleyiniz!");
    message.channel.send(embed);
    return;
  }
  const embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setDescription(`Para log kanalı ${log} olarak ayarlandı!`)
  message.channel.send(embed)
  db.set(`logk_${message.guild.id}`, message.mentions.channels.first().id)
};
module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["paralog"],
  permLevel: 2
};

module.exports.help = {
  name: "para-log",
  description: "Üye Durumlarını ve sunucudaki üye sayısını gösterir",
  usage: "para-log"
};
