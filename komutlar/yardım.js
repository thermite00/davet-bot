const Discord = require('discord.js'), 
      db = require("quick.db")


exports.run = async (bot, message, args, tools) => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || "!"
  const embed = new Discord.RichEmbed()
      .setDescription(`Bot sürümü; **v0.1**, Prefix: **${prefix}**, Dil: **tr**`)
  .addField(`Davetler`, `\`davet-ekle\`, \`davet-sıfırla\`, \`davet-sil\`, \`davet-stokla\`,\`davetlerim\``)
  .addField(`Rütbeler`, `\`ÇOK YAKINDA! (v0.2)\``)
  .addField(`Bilgiler`, `\`bot-bilgi\`, \`yapımcılar\`, \`davet\`, \`yardım\`, \`üye-durum\`, \`ping\`, \`prefix\`, \`destek-sunucu\``)
  .addField(`Premium`, `\`ÇOK YAKINDA! (v0.2)\``)
  .addField(`Moderasyon`, `\`ban\`, \`kick\`, \`kanal-kilit\`, \`unban\`, \`mute\``)
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