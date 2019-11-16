const Discord = require("discord.js"),
  db = require("quick.db"),
  ms = require("parse-ms");

exports.run = async (bot, message, args) => {
  let sembol = args[0];
  let sem = await db.fetch(`psembol_${message.guild.id}`, sembol);
  if (!sembol) {
    const embed = new Discord.RichEmbed()
      .setDescription("Lütfen bir para sembolü belirtiniz!")
      .setColor("BLACK");
    message.channel.send(embed);
    return;
  }
  if (sembol === "sıfırla") {
    if (!sem) {
      const embed = new Discord.RichEmbed()
        .setDescription("Para sembolü zaten ayarlanmamış!")
        .setColor("BLACK");
      message.channel.send(embed);
      return;
    }
    const embed = new Discord.RichEmbed()
      .setDescription("Para sembolü başarıyla sıfırlandı!")
      .setColor("BLACK");
    message.channel.send(embed);
    db.delete(`psembol_${message.guild.id}`);
    return;
  }
  const embed = new Discord.RichEmbed()
    .setDescription(`Para sembolü ${sembol} olarak ayarlandı!`)
    .setColor("BLACK");
  message.channel.send(embed);
  db.set(`psembol_${message.guild.id}`, sembol);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: "para-sembol",
  description: "Günlük ödül alırsınız.",
  usage: "para-sembol"
};
