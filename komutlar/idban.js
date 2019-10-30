const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (client, msg, args) => {
let id = args[0]

if(!id){
  const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription("Bir id giriniz!");
    msg.channel.send(embed);
  return
}
  const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(`<@${args[0]}> adlı şahıs kalıcı olarak banlandı!`);
    msg.channel.send(embed);
  db.set(`idban_${args[0]}`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4,
  kategori: "yapımcı"
};

exports.help = {
  name: "id-ban",
  description: "İD-BAN",
  usage: "id-ban"
};
