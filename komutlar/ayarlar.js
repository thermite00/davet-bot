const Discord = require("discord.js");
const db = require("quick.db");
const moment = require("moment");
module.exports.run = async (bot, message) => {
  const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`Versiyon`, `0.1`, true)
  .addField(`Aktiflik Süresi`, duration)
  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
  kategori: "sunucu"
};

module.exports.help = {
  name: "bot-bilgi",
  description: "Sayfalı emojiler",
  usage: "emoji"
};
