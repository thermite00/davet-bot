const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const client = new Discord.Client();
const db = require("quick.db");
exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  
  const embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setTitle("Realizm Bot Bot Komutları! (3)")
  .setDescription(`${prefix}istatistik = Bot istatistiklerini gösterir.\n${prefix}linkler = Botun davet linklerini gösterir.\n${prefix}ping = Botun pingini gösterir.`)
  .setFooter(client.user.username, client.user.avatarURL)
  message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yb"],
  permLevel: 0,
  kategori: "bot"
};

exports.help = {
  name: "bot",
  description: "Yardım Menüsü",
  usage: "bot"
};
