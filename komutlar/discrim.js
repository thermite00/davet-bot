const Discord = require("discord.js");

exports.run = (client, message, args, tools) => {
  const embed = new Discord.RichEmbed().setColor("BLACK");

  if (isNaN(args[0]) || args[0] > 9999 || args[0] < 1) {
    embed.setDescription("Hatalı discrim!\nÖrnek: 0164");

    return message.channel.send(embed);
  }

  let resp = "";

  client.users.map(function(user) {
    if (user.discriminator == args[0]) return (resp += `${user.username}\n`);
    else return; //hata varsa dönüyoruz.
  });

  embed.setTitle(`Discrim: #${args[0]}`).setDescription(resp);

  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "discrim"
};
