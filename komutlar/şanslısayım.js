const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('**___Geliyooooor!___**').then(message => {
      var espriler = ['Şansı sayın **1**', 'Şansı sayın **2**', 'Şansı sayın **3**', 'Şansı sayın **4**', 'Şansı sayın **5**', 'Şansı sayın **6**', 'Şansı sayın **7**', 'Şansı sayın **8**', 'Şansı sayın **9**', 'Şansı sayın **10**'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
     setTimeout(() => {
     message.edit(`___${espri}___`);
}, 3000)
            
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['şanslısayım', 'şs'],
  permLevel: 0
};

exports.help = {
  name: 'şanslı-sayım',
  description: 'Espri yapar.',
  usage: 'şanslı-sayım'
};