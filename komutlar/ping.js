const Discord = require('discord.js');


exports.run = function(client, message) {

 
  const embed = new Discord.RichEmbed()
        .setDescription(`Pingim: ` + client.ping + " ms!")
        .setColor("BLACK")
        .setTimestamp()

             .setFooter(client.user.username, client.user.avatarURL)
    message.channel.send({embed})
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['p'],
  permLevel: 0,
  kategori: 'bot'
};

exports.help = {
  name: 'ping', 
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};
