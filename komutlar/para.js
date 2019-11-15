const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let para = await db.fetch(`para_${message.guild.id}_${client.user.id}`);
  let user;
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  }else {
    user = message.author;
  }
  if (para == null) {
    const embed = new Discord.RichEmbed()
      .addField("Paran:", `0₺`)
      .setColor("BLACK");
    message.channel.send(embed);
    return;
  } else {
    const embed = new Discord.RichEmbed()
      .addField("Paran:", para + `₺`)
      .setColor("BLACK");
    message.channel.send(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pg"],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: "para",
  description: "Puanınızı gösterir.",
  usage: "para"
};
