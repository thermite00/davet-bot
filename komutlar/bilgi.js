const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed()
.setColor("BLACK")
.setDescription(`**REALIZM BOT**\n\n15.11.2019 Günü yapımına başlanmıştır.\nKodlayan: <@404206792005124096>\nGeliştirici(ler): <@408351030179397635>\n\nHedef: Büyük bir aileye sahip olmak!`)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bilgi-ver"],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: "bilgi",
  description: "Puanınızı gösterir.",
  usage: "bilgi"
};
