const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const client = new Discord.Client();
const db = require("quick.db");
exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";

  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setTitle("Realizm Bot Yardım Menüsü!")
    .addField(`**${prefix}yetkili**`, `Ban, Kick gibi komutları gösterir.`)
    .addField(`**${prefix}eğlence**`, `8ball, düello gibi komutları gösterir.`)
    .addField(`**${prefix}kullanıcı**`, `8ball, Avatar gibi komutları gösterir.`)
    .addField(`**${prefix}ekonomi**`, `Para, çalış gibi komutları gösterir.`)
    .addField(`**${prefix}bot**`, `İstatistik, Davet gibi komutları gösterir.`)   
    .setFooter(client.user.username, client.user.avatarURL);

  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y"],
  permLevel: 0,
  kategori: "bot"
};

exports.help = {
  name: "yardım",
  description: "Yardım Menüsü",
  usage: "yardım"
};
