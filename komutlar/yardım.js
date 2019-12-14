const Discord = require('discord.js'), 
      db = require("quick.db")


exports.run = async (bot, message, args, tools) => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || "!"
  const embed = new Discord.RichEmbed()
      .setDescription(`Bot sürümü; **v0.1**, Prefix: **${prefix}**, Dil: **tr**`)
  .addField(`Davetler`, `\`davet-kanal\`, \`davet-kanal-sıfırla\`, \`davet-ekle\`, \`davet-sıfırla\`, \`davet-sil\`, \`davet-stokla\`, \`davetlerim\`, \`davet-oluştur\``)
  .addField(`Rütbeler`, `\`ÇOK YAKINDA! (v0.2)\``)
  .addField(`Bot`, `\`bot-bilgi\`, \`yapımcılar\`, \`davet\`, \`yardım\`, \`üye-durum\`, \`ping\`, \`prefix\`, \`destek-sunucu\``)
  .addField(`Premium`, `\`ÇOK YAKINDA! (v0.2)\``)
  .addField(`Moderasyon`, `\`ban\`, \`kick\`, \`kanal-kilit\`, \`unban\`, \`mute\`, \`takma-ad\`, \`rol-al\`, \`rol-ver\`, \`reklam-taraması\`, \`slowmode\`, \`temizle\``)
  .addField(`Sistem`, `\`otorol\`, \`otorol-sıfırla\`, \`otorol-mesaj\`, \`otorol-mesaj-sıfırla\`, \`sayaç\`, \`sayaç-sıfırla\`, \`sayaç-mesaj-hg\`, \`sayaç-mesaj-bb\`, \`sayaç-mesaj-sıfırla\`, \`ever-engel\`, \`sa-as\`, \`reklam-engel\`, \`ototag\`, \`ototag-isim\`, \`ototag-sıfırla\`, \`hg-bb\``)
      .setColor("BLACK")
  .setFooter(bot.user.username, bot.user.avatarURL)
    message.channel.send(embed);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
};