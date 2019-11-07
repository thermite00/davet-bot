const db = require("quick.db");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args, client) => {
  let ad = args[0];
  let role = 631565196179275816

  if (!ad) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        "Lütfen bir ad belirtiniz!\nÖrnek: k!kayıt-ol İsim_Soyisim"
      );
    message.channel.send(embed);
    return;
  }

  db.set(`kayıtoldu_${message.member.id}`);
  message.member.setNickname(`${ad}`);
  message.member.addRole(`631565196179275816`)
};

exports.conf = {
  enbaled: true,
  guildOnly: true,
  aliases: ["kayıtol"],
  permLevel: 0
};

module.exports.help = {
  name: "kayıt-ol",
  description: "kayıt-ol",
  usage: "kayıt-ol"
};
