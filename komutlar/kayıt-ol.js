const db = require("quick.db");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let ad = args.slice(0).join(" ");
  let role = 631565196179275816
  
  if (!ad) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        "Lütfen bir ad belirtiniz!\nÖrnek: k!kayıt-ol İsim Soyisim"
      );
    message.channel.send(embed);
    return;
  }
  if(message.channel.id !== "642993856500989952"){
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        "Burası kayıt kanalı değil!"
      );
    message.channel.send(embed);
    return;
  }

  const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        "Başarıyla kayıt oldun!"
      );
    message.channel.send(embed);
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
