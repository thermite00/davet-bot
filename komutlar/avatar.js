const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let user;

  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else {
    user = message.author;
  }

  const avatar = new Discord.RichEmbed()
    .setColor("BLACK")
    .setImage(user.avatarURL)
    .setFooter(client.user.username, client.user.avatarURL);
  message.channel.sendEmbed(avatar);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pp"],
  permLevel: 0,
  kategori: "kullanıcı"
};

exports.help = {
  name: "avatar",
  description: "Taglanan kişinin avatarını atar.",
  usage: "avatar"
};
