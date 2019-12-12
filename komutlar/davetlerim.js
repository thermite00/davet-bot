const Discord = require('discord.js'), 
      db = require("quick.db")


exports.run = async (client, message, args, tools) => {
  

let bilgi = await db.fetch(`davet_${message.author.id}_${message.guild.id}`);
    let sayı2;
    if (!bilgi) {
      sayı2 = 0;
    } else {
      sayı2 = await db.fetch(`davet_${message.author.id}_${message.guild.id}`);
    }
  const embed = new Discord.RichEmbed()
      .setDescription(`Total Davet: ${sayı2}`)
      .setColor("BLACK");
    message.channel.send(embed);
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['davetk'],
  permLevel: 0
};

exports.help = {
  name: 'davetlerim',
};