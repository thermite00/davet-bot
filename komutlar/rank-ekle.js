const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let rol = message.mentions.roles.first();
  let davet = args[0]
  if (!rol) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(`Lütfen bir rol etiketleyiniz!`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return
  }
  if(!davet){
      const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(`Lütfen bir davet miktarı belirtiniz!`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return
  }
  let data = await db.push(`rol_${message.guild.id}`)
  if(rol.id == data){
        const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(`Bu rol zaten eklenmiş!`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return
  }
  let data2 = await db.push(`rol_${message.guild.id}`)
  message.channel.send("Old")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rank"],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: "rank2",
  description: "rank2",
  usage: "rank"
};
