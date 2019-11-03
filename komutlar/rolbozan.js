const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let rMember =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.get(args[0]);

  let sebep = args.slice(1).join(" ");

  
  if (!rMember) {
    const dembed = new Discord.RichEmbed()
      .setDescription("Rol bozan kişiyi etiketleyiniz!")
      .setColor("BLACK");
    message.channel.send(dembed);
    return;
  }
  
  if (!sebep) {
    const embed = new Discord.RichEmbed()
      .setDescription("Rol bozma sebebini giriniz!")
      .setColor("BLACK");
    message.channel.send(embed);
    return;
  }
  else{
  const kembed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setTitle("Rol bozan var!")
  .addField(`Şikayetçi:`, `<@${message.author.id}>`)
  .addField(`Şikayet Edilen:`, `<@${rMember.id}>`)
  .addField(`Şikayet Sebebi:`, `${sebep}`)
  client.channels.get("640494897270489096").send(kembed);
    
    message.delete()
    message.channel.send("Şikayetiniz yetkililere iletilmiştir!")
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "rol-şikayet",
  description: "Üye Durumlarını ve sunucudaki üye sayısını gösterir",
  usage: "rol-şikayet"
};
