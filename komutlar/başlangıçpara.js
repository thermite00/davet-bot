const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let para = await db.fetch(`para_${message.guild.id}_${message.author.id}`);
  let sembol = (await db.fetch(`psembol_${message.guild.id}`)) || "₺";
  let miktar = args[0];
  if (!miktar) {
    const embed = new Discord.RichEmbed()
      .setDescription(`Lütfen bir başlangıç miktarı giriniz!`)
      .setColor("BLACK");
    message.channel.send(embed);
  }
  const embed = new Discord.RichEmbed()
    .setDescription(`Başlangıç miktarı ${miktar}${sembol} olarak ayarlandı!`)
    .setColor("BLACK");
  message.channel.send(embed);
  db.set(`girişmiktar_${message.guild.id}`, miktar);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["başlangıçpara"],
  permLevel: 2,
  kategori: "puan"
};

exports.help = {
  name: "başlangıç-para",
  description: "Puanınızı gösterir.",
  usage: "başlangıç-para"
};
