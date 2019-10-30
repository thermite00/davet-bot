const Discord = require("discord.js");
const db = require("quick.db");
//2020-05-05:12:20
exports.run = async (message, client, args) => {

  let süre2 = args[0];
  if (!süre2) {
    const dembed = new Discord.RichEmbed()
      .setDescription(`Lütfen bir süre belirtiniz!\n(Format: YIL-AY-GÜN:SAAT:DAKİKA:SANİYE)`)
      .setColor("BLACK")
    message.channel.send(dembed);
    return;
  }
  if (süre2 > 16) {
    const embed = new Discord.RichEmbed()
      .setDescription(`Hatalı süre!`)
      .setColor("BLACK");
    message.channel.send(embed);
    return;
  }
  if (süre2 < 16) {
    const kembed = new Discord.RichEmbed()
      .setDescription(`Hatalı süre!`)
      .setColor("BLACK");
    message.channel.send(kembed);
    return;
  }
  const cembed = new Discord.RichEmbed()
    .setDescription(`hedef süre ${süre2} olarak ayarlandı!`)
    .setColor("BLACK");
  message.channel.send(cembed);

  db.set(`veri`, süre2);
  

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["veriekle"],
  permLevel: 4,
  kategori: "yapımcı"
};

exports.help = {
  name: "veri-ekle",
  description: "Sa-As sistemini ayarlarsınız.",
  usage: "veriekle"
};
