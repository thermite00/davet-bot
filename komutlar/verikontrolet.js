const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (client, msg, args) => {
  let süre = await db.fetch(`veri`); //bzk bu
  let newdate = ms(süre - Date.now());

  if (!süre) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription("Herhangi bir hedef ayarlanmamış!");
    msg.channel.send(embed);
  }
    const dembed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(`Kalan zaman!\n${süre.days} gün! ,${newdate.hours} saat! ${newdate.days} dakika! ${newdate.seconds} saniye!`)
    msg.channel.send(dembed);
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["verikontrol"],
  permLevel: 4,
  kategori: "yapımcı"
};

exports.help = {
  name: "veri-kontrol",
  description: "Sa-As sistemini ayarlarsınız.",
  usage: "veri-kontrol"
};
