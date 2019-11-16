const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const client = new Discord.Client();
const db = require("quick.db");
exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  
  const embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setTitle("Realizm Bot Kullanıcı Komutları! (10)")
  .setDescription(`${prefix}roller = Rolleri gösterir.\n${prefix}yetkilerim = Yetkilerinizi gösterir.\n${prefix}servericon = Sunucu iconununu gösterir.\n${prefix}ascii = Ascii art ile yazı atarsınız\n${prefix}üyedurum = Üyelerin durumunu görürsünüz.\n${prefix}atatürk = Anlatmaya gerek olduğunu düşünmüyorum?\n${prefix}avatar = Avatar(ınızı) gösterir.\n${prefix}discrim = Belirtilen tagdaki kişileri listeler.\n${prefix}havadurumu = Havadurumunu gösterir.\n${prefix}hesapla = Ver işlemi cevaplasın!`)
  .setFooter(client.user.username, client.user.avatarURL)
  message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yk"],
  permLevel: 0,
  kategori: "bot"
};

exports.help = {
  name: "kullanıcı",
  description: "Yardım Menüsü",
  usage: "yetkili"
};
