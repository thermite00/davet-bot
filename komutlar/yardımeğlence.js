const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const client = new Discord.Client();
const db = require("quick.db");
exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  
  const embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setTitle("Realizm Bot Kullanıcı Komutları! (6)")
  .setDescription(`${prefix}8ball = Sor sorunu cevaplasın!\n${prefix}adamasmaca = Adam asmaca oynarsınız.\n${prefix}düello = Düello oynarsınız.\n${prefix}kaçcm = Malın uzunluğunu ölçersiniz.\n${prefix}mc-kafa = Minehead.\n${prefix}şansısayım = Şanslısayınızı verir.`)
  .setFooter(client.user.username, client.user.avatarURL)
  message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yeğ"],
  permLevel: 0,
  kategori: "bot"
};

exports.help = {
  name: "eğlence",
  description: "Yardım Menüsü",
  usage: "yetkili"
};
