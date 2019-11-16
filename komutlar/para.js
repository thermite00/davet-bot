const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {

  let para = await db.fetch(`para_${message.guild.id}_${message.author.id}`);
    let sembol = await db.fetch(`psembol_${message.guild.id}`) || "₺";
  if (para == null) {
    const embed = new Discord.RichEmbed()
      .addField("Para:", `0${sembol}`)
      .setColor("BLACK");
    message.channel.send(embed);
    return;
  } else {
    const embed = new Discord.RichEmbed()
      .addField("Para:", para + `${sembol}`)
      .setColor("BLACK")
    message.channel.send(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["pg"],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: "para",
  description: "Puanınızı gösterir.",
  usage: "para"
};
