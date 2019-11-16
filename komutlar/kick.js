const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
      .setColor("BLACK");

    message.channel.send(embed);
    return;
  }

  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("`kick` adlı komut özel mesajlarda kullanıma kapanmıştır.")
      .setFooter(client.user.username, client.user.avatarURL);
    let kick = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    return message.author.sendEmbed(ozelmesajuyari);
  }
  let guild = message.guild;
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(" ");
  if (message.mentions.users.size < 1) {
    const embed = new Discord.RichEmbed()
      .setDescription(`Lütfen atılacak kişiyi etiketleyiniz.`)
      .setColor("BLACK");

    message.channel.send(embed);
    return;
  }

  if (!message.guild.member(user).kickable) {
    const embed = new Discord.RichEmbed()
      .setDescription(`Rolümün üstünde olan kişiyi banlayamam.`)
      .setColor("BLACK");

    message.channel.send(embed);
    return;
  }
  if (!reason) {
    message.guild.member(user).kick();

    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTimestamp()
      .addField("Eylem:", "Sunucudan Atma")
      .addField(
        "Atılan Kullanıcı:",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "Atan Yetkili:",
        `${message.author.username}#${message.author.discriminator}`
      )
      .addField("Sebep:", `Sebep yok!`)
      .setFooter(client.user.username, client.user.avatarURL);
    return message.channel.send(embed);
  }
  if (reason) {
    message.guild.member(user).kick();

    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTimestamp()
      .addField("Eylem:", "Sunucudan Atma")
      .addField(
        "Atılan Kullanıcı:",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "Atan Yetkili:",
        `${message.author.username}#${message.author.discriminator}`
      )
      .addField("Sebep:", reason)
      .setFooter(client.user.username, client.user.avatarURL);
    return message.channel.send(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["at"],
  permLevel: 1,
  kategori: "moderasyon"
};

exports.help = {
  name: "kick",
  description: "İstediğiniz kişi sunucudan atar. (Mod-Logsuz)",
  usage: "kick <kullanıcı> <sebep>"
};
