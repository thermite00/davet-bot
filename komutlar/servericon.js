const Discord = require("discord.js");

exports.run = function(client, message) {
  const embed = new Discord.RichEmbed()
    .setTitle("Sunucu Resmi;")
    .setImage(message.guild.iconURL)
    .setColor("BLACK")
    .setFooter(client.user.username, client.user.avatarURL);

  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sw"],
  permLevel: 0,
  kategori: "sunucu"
};

exports.help = {
  name: "servericon",
  description: "Serverin iconunu gösterir",
  usage: "servericon"
};
