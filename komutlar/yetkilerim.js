const Discord = require('discord.js');
const { stripIndents } = require('common-tags');

exports.run = (client, msg, args) => {


let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    
    //yönetici
    if (msg.member.hasPermission("ADMINISTRATOR")) x = "<a:onay:645245193804578817> "
    if (!msg.member.hasPermission("ADMINISTRATOR")) x = "<a:red:645245163555520532> "
    
    //Denetim kaydı
    if (msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "<a:onay:645245193804578817>  "
    if (!msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "<a:red:645245163555520532> "
    
    //Sunucuyu yönet
    if (msg.member.hasPermission("MANAGE_GUILD")) x3 = "<a:onay:645245193804578817> "
    if (!msg.member.hasPermission("MANAGE_GUILD")) x3 = "<a:red:645245163555520532> "
    
    //Rolleri yönet
    if (msg.member.hasPermission("MANAGE_ROLES")) x4 = "<a:onay:645245193804578817> "
    if (!msg.member.hasPermission("MANAGE_ROLES")) x4 = "<a:red:645245163555520532> "
    
    //Kanalları yönet
    if (msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "<a:onay:645245193804578817> "
    if (!msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "<a:red:645245163555520532> "
    
    //üyeleri at
    if (msg.member.hasPermission("KICK_MEMBERS")) x6 = "<a:onay:645245193804578817> "
    if (!msg.member.hasPermission("KICK_MEMBERS")) x6 = "<a:red:645245163555520532> "
    
    //üyeleri yasakla
    if (msg.member.hasPermission("BAN_MEMBERS")) x7 = "<a:onay:645245193804578817> "
    if (!msg.member.hasPermission("BAN_MEMBERS")) x7 = "<a:red:645245163555520532> "
    
    //mesajları yönet
    if (msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "<a:onay:645245193804578817> "
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "<a:red:645245163555520532> "
    
    //kullanıcı adlarını yönet
    if (msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "<a:onay:645245193804578817> "
    if (!msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "<a:red:645245163555520532> "


    const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setTitle("İşte yetkileriniz!")
    .setDescription(stripIndents` ${x} - Yönetici\n${x2} - Denetim Kaydını Görüntüle\n${x3} - Sunucuyu Yönet\n${x4} - Rolleri Yönet\n${x5} - Kanalları Yönet\n${x6} - Üyeleri At\n${x7} - Üyeleri Yasakla\n${x8} - Mesajları Yönet\n${x9} - Kullanıcı Adlarını Yönet`)
    msg.channel.send(embed)
 /*   msg.channel.send(stripIndents`
**${x}- Yönetici
${x2} - Denetim Kaydını Görüntüle
${x3} - Sunucuyu Yönet
${x4} - Rolleri Yönet
${x5} - Kanalları Yönet
${x6} - Üyeleri At
${x7} - Üyeleri Yasakla
${x8} - Mesajları Yönet
${x9} - Kullanıcı Adlarını Yönet** 

   `) */
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
    kategori: "sunucu"
};

exports.help = {
  name: 'yetkilerim',
  description: 'Sunucudaki yetkilerinizi gösterir.',
  usage: 'yetkilerim'
};