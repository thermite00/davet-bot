const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const client = new Discord.Client();
const db = require("quick.db");
exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  
  const embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setTitle("Realizm Bot Ekonomi Komutları![BETA] (11)")
  .setDescription(`${prefix}çalış = Para kazanırsınız.\n${prefix}slot = Kumar oynayarak para katlamak?\n${prefix}süre-ayarla = Para kaynaklarının sürelerini ayarlarsınız.\n${prefix}rulet = Rulet oynarsınız.\n${prefix}para-gönder = İstediğiniz kişiye para gönderirsiniz.\n${prefix}parasıfırla = Belirtilen kişinin parasını sıfırlarsınız.\n${prefix}parasil = Belirtilen miktarda belirtilen kişinin parasını silersiniz.\n${prefix}para-sembol = Paranın sembolünü ayarlarsınız.\n${prefix}paragöster = Belirtilen kişinin parasını gösterir.\n${prefix}para-ekle = Para eklersiniz.\n${prefix}para = Paranızı gösterir.`)
  .setFooter(client.user.username, client.user.avatarURL)
  message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ye"],
  permLevel: 0,
  kategori: "bot"
};

exports.help = {
  name: "ekonomi",
  description: "Yardım Menüsü",
  usage: "ekonomi"
};
