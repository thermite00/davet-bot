const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  let üyesayi = message.guild.memberCount;
    let botlar = message.guild.members.filter(m => m.user.bot).size;
    let kullanıcılar = üyesayi - botlar;
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`Toplam Kişi`, üyesayi, true)
  .addField(`Toplam Kullanıcı`, kullanıcılar, true)
  .addField(`Botlar`, botlar, true)
  .addField(`Aktif Üyeler`, `${message.guild.members.filter(o => o.presence.status === 'online').size} <a:uwu:630044717106855996>`, true)
  .addField(`Boşta Üyeler`, `${message.guild.members.filter(i => i.presence.status === 'idle').size} <a:uwu:630044786425987093>`, true)
  .addField(`Rahatsız Modda Üyeler`, `${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size} <a:nou:630044752146071593>`, true)
  .addField(`İnaktif Üyeler`, `${message.guild.members.filter(off => off.presence.status === 'offline').size} <a:niu:630044809859432449>`, true)
  
  
.setFooter(client.user.username, client.user.avatarURL)

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "üye-durum",
  description: "üye-durum",
  usage: "üye-durum"
};
