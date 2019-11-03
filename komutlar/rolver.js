const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "k!";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
      .setColor("BLACK");

    message.channel.send(embed);
    return;
  }
  let rMember =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.get(args[1]);
  if (!rMember)
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setDescription(
          `Lütfen bir kullanıcı giriniz!\nÖrnek: ${prefix}rol-ver <@Rol> <@Kullanıcı>`
        )
        .setColor("BLACK")
    );
  let role = message.mentions.roles.first() || message.guild.roles.find(rol => rol.name === args[0]);

  if (!role)
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setDescription(
          `Lütfen bir rol belirtiniz!\nÖrnek: ${prefix}rol-ver <@Rol> <@Kullanıcı>`
        )
        .setColor("BLACK")
    );

  if (rMember.roles.has(role.id))
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setDescription("Kullanıcı zaten bu role sahip!")
        .setColor("BLACK")
    );
  await rMember.addRole(role.id);
  message.channel.sendEmbed(
    new Discord.RichEmbed()
      .setDescription(
        `${rMember} adlı şahsa \`${role.name}\` adlı rol verildi!`
      )
      .setColor("BLACK")
  );
};

module.exports.conf = {
  aliases: ["rolver"],
  permLevel: 1,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "rol-ver",
  description: "Etiketlenen şahsa etiketlenen rolü verirsiniz.",
  usage: "rol-ver"
};
