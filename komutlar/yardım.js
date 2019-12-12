const Discord = require('discord.js'), 
      db = require("quick.db")


exports.run = async (client, message, args, tools) => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || "!"
  const embed = new Discord.RichEmbed()
      .setDescription(`Komutlar hakkında bilgi almak için; ${prefix}yardım <Komut Adı>\n(Örnek: ${prefix}yardım davet-kanal)`)
  .addField(`Davetler`, `\`davet-ekle\`, \`davet-sıfırla\`, \`davet-sil\`, \`davet-stokla\``)
  .addField(`Rütbeler`, `\`ÇOK YAKINDA! (v0.2)\``)
      .setColor("BLACK");
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