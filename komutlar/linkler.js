const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed()
.setColor("BLACK")
.setDescription(`Botu ekleyin! [[TIKLA]](https://discordapp.com/oauth2/authorize?client_id=644956885765718047&scope=bot&permissions=8)`)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["davet"],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: "linkler",
  description: "Puanınızı gösterir.",
  usage: "linkler"
};
