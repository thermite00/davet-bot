const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const client = new Discord.Client();
const db = require("quick.db");
exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  
  const embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setTitle("Realizm Bot Ekonomi Komutları![BETA] (15)")
  .setDescription(`EKONOMİ B1;\n${prefix}para-sembol = Paranın sembolünü belirlersiniz.\n${prefix}başlangıç-para = Başlangıç miktarını belirtirsiniz.\npara-log`)
  .setFooter(client.user.username, client.user.avatarURL)
  message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ye"],
  permLevel: 0,
  kategori: "bot"
};

exports.help = {
  name: "ekonomi",
  description: "Yardım Menüsü",
  usage: "ekonomi"
};
