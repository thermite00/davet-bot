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
  db.set(`logk_${message.guild.id}`, message.mentions.channels.first().id)
};
module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["durumüye"],
  permLevel: 0
};

module.exports.help = {
  name: "üyedurum",
  description: "Üye Durumlarını ve sunucudaki üye sayısını gösterir",
  usage: "üyedurum"
};
