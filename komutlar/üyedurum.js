const Discord = require("discord.js");
const client = new Discord.Client();
const Jimp = require("jimp")
const fs = require("fs")
  
module.exports.run = async (bot, message, args) => {
    let üyesayi = message.guild.memberCount;
    let botlar = message.guild.members.filter(m => m.user.bot).size;
    let kullanıcılar = üyesayi - botlar;
const embed = new Discord.RichEmbed()
.setColor("BLACK")
.setTimestamp()
.addField(`Sunucudaki Toplam Kişi Sayısı`, `**${üyesayi}**`, false)
.addField(`Toplam Kullanıcılar`, `**${kullanıcılar}**`, false)
.addField(`Toplam Botlar`, `**${botlar}**`, false)
.addField(`Üye Durumları`, `**${message.guild.members.filter(o => o.presence.status === 'online').size}** <a:uwu:630044717106855996>\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** <a:uwu:630044786425987093>\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** <a:nou:630044752146071593>\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** <a:niu:630044809859432449>`, true)
message.channel.send(embed)
}
module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["durumüye"],
  permLevel: 0
};

module.exports.help = {
  name: 'üyedurum',
  description: 'Üye Durumlarını ve sunucudaki üye sayısını gösterir',
  usage: 'üyedurum'
};