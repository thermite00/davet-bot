const Discord = require("discord.js");
const db = require("quick.db");
const moment = require("moment");
require("moment-duration-format");
module.exports.run = async (bot, message) => {
  const duration = moment
    .duration(bot.uptime)
    .format("D [gün], H [saat], m [dakika], s [saniye]");
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`Versiyon`, `0.1`, true)
    .addField(`Aktiflik Süresi`, duration, true)
    .addField(`Sunucular`, bot.guilds.size.toLocaleString(), true)
    .addField(`Kullanıcılar`, bot.users.size.toLocaleString(), true)
    .addField(`Ping`, bot.ping + "ms", true)
    .addField(
      `Ram Kullanımı`,
      `%${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}`,
      true
    )
    .addField(`Bu Sunucu Premium Mu?`, `Hayır! (v0.2)`, false)
    .addField(`Destek Sunucusu`, `http://bit.ly/davetyöneticisidestek`, false)
    .addField(`Botu Ekleyin`, `http://bit.ly/davetyöneticisiekle`, false)
  .addField(`Bota Oy Verin`, `http://bit.ly/davetyöneticisioy`, false)
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "bot-bilgi",
  description: "bot-bilgi",
  usage: "bot-bilgi"
};
