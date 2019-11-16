const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const client = new Discord.Client();
const db = require("quick.db");
exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  
  const embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setTitle("Realizm Bot Kullanıcı Komutları! (9)")
  .setDescription(`${prefix}8ball = Sorunuzu cevaplar.\n${prefix}atatürk = Anlatmaya gerek olduğunu düşünmüyorum?\n${prefix}avatar = Avatar(ınızı) gösterir.\n${prefix}discrim = Belirtilen tagdaki kişileri listeler.\n${prefix}havadurumu = Havadurumunu gösterir.\n${prefix}hesapla = Ver işlemi cevaplasın!`)
  .setFooter(client.user.username, client.user.avatarURL)
  message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yy"],
  permLevel: 0,
  kategori: "bot"
};

exports.help = {
  name: "yetkili",
  description: "Yardım Menüsü",
  usage: "yetkili"
};
