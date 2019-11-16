const Discord = require('discord.js');
const Jimp = require('jimp'); 

exports.run = (client, message, args) => {
    var figlet = require('figlet');
    figlet(args.join(' '), function (err, data) {
      if (err) {
        return;
      }
      message.delete()
      const embed = new Discord.RichEmbed()
      .setColor('BLACK')
      .setDescription('```fix\n' + data + '\n```')
      .setTimestamp()
      message.channel.send(embed);
        });
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ascii',
  description: 'Ascii',
  usage: 'ascii'
};
