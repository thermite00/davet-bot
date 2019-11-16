const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, args) => {
  try {
    const embed = new Discord.RichEmbed()
      .addField(
        `Sunucudaki Emojiler`,
        message.guild.emojis.map(emoji => emoji).join(" - ")
      )
      .setColor("BLACK")
      .setTimestamp();
    message.channel.send({ embed });
  } catch (err) {
    const embed = new Discord.RichEmbed()
      .addField(
        `Sunucudaki Emojiler`,
        "Evet.. Gerçekten bu sunucuda emoji yok veya yeterli yetkiye sahip değilim!"
      )
      .setColor("BLACK")
      .setTimestamp();
    message.channel.send({ embed });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "sunucu"
};

exports.help = {
  name: "emojiler",
  description: "Sunucudaki emojileri gösterir.",
  usage: "emojiler"
};
