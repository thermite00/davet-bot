const Discord = require("discord.js"),
  db = require("quick.db"),
  ms = require("parse-ms");

exports.run = async (bot, message, args) => {
try{
  message.channel.send("")
}catch (err) {
    return
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["eşya-oluştur"],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: "eşyaoluştur",
  description: "Günlük ödül alırsınız.",
  usage: "eşyaoluştur"
};
