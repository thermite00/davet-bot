const Discord = require("discord.js"),
  db = require("quick.db"),
  ms = require("parse-ms");

exports.run = async (bot, message, args) => {
  let oyun = args[0]
  let süre = args[1]
  let prefix = "k!"
  if(!oyun == "çalış"){
    const embed = new Discord.RichEmbed()
      .setTitle("Hata!")
      .setColor("BLACK")
      .setDescription(`Lütfen geçerli bir birim giriniz!\nBirim(ler): çalış\nSüre ayarlama;\n1 Saniye = 1000\nSıfırlamak için: ${prefix}süre-ayarla çalış sıfırla`);
    message.channel.send(embed);
    return;
  }
  if(!süre){
    const embed = new Discord.RichEmbed()
      .setTitle("Hata!")
      .setColor("BLACK")
      .setDescription(`Lütfen bir süre giriniz!`);
    message.channel.send(embed);
    return;
  }
  if(süre == "sıfırla"){
    db.delete(`çalışs_${message.guild.id}`)
    const embed = new Discord.RichEmbed()
      .setTitle("Hata!")
      .setColor("BLACK")
      .setDescription(`Çalışma süresi başarıyla sıfırlandı!`);
    message.channel.send(embed);
    return
  }
  if(oyun == "çalış"){
    db.set(`çalışs_${message.guild.id}`, süre)
    const embed = new Discord.RichEmbed()
      .setTitle("Hata!")
      .setColor("BLACK")
      .setDescription(`Çalışma süresi başarıyla ayarlandı!`);
    message.channel.send(embed);
    return
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: "süre-ayarla",
  description: "süre-ayarla",
  usage: "süre-ayarla"
};
