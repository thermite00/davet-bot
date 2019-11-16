const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
let cpuStat = require("cpu-stat");
const { stripIndents } = require("common-tags");
require("moment-duration-format");

exports.run = async (bot, message, args) => {
  const db = require("quick.db");

  var m = await message.channel.send(
    `**___İstatistikler hesaplanmakta...___**`
  );

  var osType = await os.type();

  if (osType === "Darwin") osType = "macOS";
  else if (osType === "Linux") osType = "Windows";
  else if (osType === "Windows") osType = "Windows";
  else osType = os.type();

  //--------------------------//

  var osBit = await os.arch();

  if (osBit === "x64") osBit = "64 Bit";
  else if (osBit === "x82") osBit = "32 Bit";
  else osBit = os.arch();

  let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
    if (err) {
      return console.log(err);
    }
    const duration = moment
      .duration(bot.uptime)
      .format("D [gün], H [saat], m [dakika], s [saniye]");

    setTimeout(() => {
      const s = new Discord.RichEmbed()
        .setColor("BLACK")
        .setAuthor(`${bot.user.username} - İstatistik`, bot.user.avatarURL)

        .setFooter("Atom  İstatistikler", bot.user.avatarURL)
        .addField(
          "<a:ayarlar:645222594240315423> ● **Çalışma süresi**",
          duration,
          false
        )
        .addField(
          "<a:ayarlar:645222594240315423> ● **Kullanıcılar**",
          bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(),
          false
        )
        .addField(
          "<a:ayarlar:645222594240315423> ● **Sunucular**",
          bot.guilds.size.toLocaleString(),
          false
        )
        .addField(
          "<a:ayarlar:645222594240315423> ● **Ping**",
          bot.ping + " ms",
          false
        )
        .addField(
          "<a:ayarlar:645222594240315423> ● **İşletim sistemi**",
          `${osType} ${osBit}`,
          true
        )

        .addField(
          "<a:ayarlar:645222594240315423> ● **CPU Kullanımı**",
          `%${percent.toFixed(2)}`,
          false
        )
        .addField(
          "<a:ayarlar:645222594240315423> ● **RAM Kullanımı**",
          `%${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}`,
          true
        )
        .addField(
          "<a:ayarlar:645222594240315423> ● **DBL Vote:**",
          `[[Tıkla!]](https://discordbots.org/bot/619970522754580482/vote)`
        );

      return m.edit(s);
    }, 3000);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0,
  kategori: "bot"
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir.",
  usage: "istatistik"
};
