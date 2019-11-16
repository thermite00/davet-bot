const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('**___Geliyooooor!___**').then(message => {
      var espriler = ['**1cm (agab)**', '**2cm (agab)**', '**3cm (agab)**', '**4cm (agab)**', '**5cm (agab)**', '**6cm (idare eder)**', '**7cm (yeani)**', '**8cm (az kaldı az)**', '**9cm (aha ilk tamı yakalıyoruz)**', '**10cm (Aha 10cm)**', '**31cm (...)**'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
     setTimeout(() => {
     message.edit(`___${espri}___`);
}, 3000)
            
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kcm', 'kaccm'],
  permLevel: 0
};

exports.help = {
  name: 'kaçcm',
  description: 'kaçcm',
  usage: 'kaçcm'
};