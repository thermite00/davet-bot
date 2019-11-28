const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (msg, message, args) => {
  let role = message.mentions.roles.first() || message.guild.roles.find(rol => rol.name === args[0]);
  if(!role){
    return
    message.channel.send(`Lütfen bir rol belirtiniz!`)
  }
  // let para = await db.fetch(`para_${message.guild.id}_${message.author.id}`);
  /*let rMember =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.get(args[0]);*/

  const miktar = args[1];
  /*if (!rMember) {
    const embed = new Discord.RichEmbed()
      .setDescription("Lütfen parayı göndereceğiniz kişiyi etiketleyiniz!")
      .setColor("BLACK");
    message.channel.send(embed);
    return;
  }*/
  if (!miktar) {
    const embed = new Discord.RichEmbed()
      .setDescription("Lütfen bir miktar belirtiniz!")
      .setColor("BLACK");
    message.channel.send(embed);
    return;
  }
  message.guild.members.roles.has(role.id).forEach(u => {
     await db.add(`para_${message.guild.id}_${u.id}`, +miktar);
    });
  const embed = new Discord.RichEmbed()
      .setDescription("Belirtilen miktardaki para eklendi!")
      .setColor("BLACK");
    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["paraekle"],
  permLevel: 2,
  kategori: "puan"
};

exports.help = {
  name: "para-ekle",
  description: "PARA",
  usage: "para-ekle"
};
