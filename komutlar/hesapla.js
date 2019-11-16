const Discord = require("discord.js");
const math = require("math-expression-evaluator");
const stripIndents = require("common-tags").stripIndents;
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  var soru = args.join(" ");

  if (!soru) {
    const debmed = new Discord.RichEmbed()
      .setDescription(`Yanlış kullanım! örnek: ${prefix}hesapla <işlem>`)
      .setColor("BLACK");
    message.channel.send(debmed);
  } else {
    let cevap;
    try {
      cevap = math.eval(soru);
    } catch (err) {
      const dsebmed = new Discord.RichEmbed()
        .setDescription("**Hatalı işlem!**")
        .setColor("BLACK");
      message.channel.send(dsebmed);
      return;
    }

    const embed = new Discord.RichEmbed()
      .addField("İşlem:", soru)
      .addField("Sonuç:", cevap)
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "kullanıcı"
};

exports.help = {
  name: "hesapla",
  description: "Belirtilen işlemi yapar.",
  usage: "hesapla <işlem>"
};
