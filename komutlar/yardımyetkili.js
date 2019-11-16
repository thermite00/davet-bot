const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const client = new Discord.Client();
const db = require("quick.db");
exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  
  const embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setTitle("Atom Bot Yetkili Komutları! (13)")
  .setDescription(`${prefix}ad = Belirtilen şahsın adını değiştirir.\n${prefix}ban = Belirtilen şahsı sunucudan yasaklar.\n${prefix}rol-ver = Kişilere rol vermeye yarar.\n${prefix}rol-al = Kişilerden rol almaya yarar.\n${prefix}toplu-rol-al = Herkesten toplu rol almaya yarar.\n${prefix}toplu-rol-ver = Toplu rol vermeye yarar.\n${prefix}ban = Kişileri banlamaya yarar.\n${prefix}kick = Kişileri sunucudan atmaya yarar.\n${prefix}slowmode = Kanallara yavaşmod eklemeye yarar.\n${prefix}temizle = Mesajları silmeye yarar.\n${prefix}oylama = Oylama yapmaya yarar.\n${prefix}reklam-taraması = Reklam taraması yapmaya yarar.\n${prefix}emoji-ekle = Emoji eklemeye yarar.`)
  .setFooter(client.user.username, client.user.avatarURL)
  message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yy"],
  permLevel: 0,
  kategori: "bot"
};

exports.help = {
  name: "yetkili",
  description: "Yardım Menüsü",
  usage: "yetkili"
};
