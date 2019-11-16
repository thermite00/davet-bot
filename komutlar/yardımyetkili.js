const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const client = new Discord.Client();
const db = require("quick.db");
exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  
  const embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setTitle("Realizm Bot Yetkili Komutları! (9)")
  .setDescription(`${prefix}ad = Belirtilen şahsın adını değiştirir.\n${prefix}ban = Belirtilen şahsı sunucudan yasaklar.\n${prefix}rol-ver = Kişilere rol vermeye yarar.\n${prefix}rol-al = Kişilerden rol almaya yarar.\n${prefix}oylama = Oylama yapmaya yarar.\n${prefix}reklam-engel = Sunucunuzda reklam engelini açıp kapamaya yarar.\n${prefix}reklam-taraması = Sunucunuzda reklam taraması yapar.\n${prefix}sa-as = Selam sistemini ayarlamaya yarar.\n${prefix}slowmode = Kanallarda yavaş modu ayarlamaya yarar.`)
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
