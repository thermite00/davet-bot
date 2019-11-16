const Discord = require("discord.js"),
  db = require("quick.db"),
  ms = require("parse-ms");

exports.run = async (bot, message, args) => {
  let oyun = args[0]
  let süre = args[1]
  if(!oyun == "çalış"){
    const embed = new Discord.RichEmbed()
      .setTitle("Hata!")
      .setColor("BLACK")
      .setDescription(`Lütfen geçerli bir birim giriniz!\nBirim(ler): çalış`);
    message.channel.send(embed);
    return;
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: "çalış",
  description: "Günlük ödül alırsınız.",
  usage: "çalış"
};
