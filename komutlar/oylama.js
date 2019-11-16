const Discord = require('discord.js');

 exports.run = (client, message, args) => {
    if (!message.member.hasPermission('BAN_MEMBERS')) {const embed = new Discord.RichEmbed()
  .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
 .setColor("BLACK")
  
  
message.channel.send(embed)  
  return }
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()
.setColor("BLACK")
     .setDescription(`Lütfen bir oylama belirleyiniz.`)).then(m => m.delete(5000));

     message.channel.sendEmbed(

       new Discord.RichEmbed()

       .setColor("BLACK")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
          .setFooter(client.user.username, client.user.avatarURL)

       .addField(`**Oylama**`, `**${question}**`)).then(function(message) {

         message.react('✅');

         message.react('❌');

       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: true,
       aliases: [],
       permLevel: 2,
       kategori: 'moderasyon'
};

exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'oylama <oylama>'
};
