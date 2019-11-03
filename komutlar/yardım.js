const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const client = new Discord.Client();
const db = require("quick.db");
exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "k!";
  
  const embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setTitle("Bot komutları!")
  .setDescription(`${prefix}ad = Üye adı değiştirmeye yarar.\n${prefix}rolal = Üyelerden rol almaya yarar.\n${prefix}rolver = Üyelere rol vermeye yarar.\n${prefix}sa-as = Selam sistemini ayarlarsınız.\n${prefix}toplu-rol-al = Üyelerderden topluca rol almaya yarar.\n${prefix}toplu-rol-ver = Üyelere topluca rol vermeye yarar.\n${prefix}seçim-sayaç = Seçime kalan süreyi saniyesine kadar gösterir\n${prefix}rol-şikayet = Rolu bozan kişiyi şikayet etmeye yarar.`)
  .setFooter(client.user.username, client.user.avatarURL)
  message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y"],
  permLevel: 0,
  kategori: "bot"
};

exports.help = {
  name: "yardım",
  description: "Yardım Menüsü",
  usage: "yardım"
};
