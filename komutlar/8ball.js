const Discord = require("discord.js");
const db = require("quick.db");

const cevaplar = [
  "Evet",
  "Hayır",
  "Belki",
  "Olabilir",
  "Daha sonra tekrar sor",
  "İmkansız"
];

exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "a!";

  var soru = args.join(" ");

  var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

  if (!soru) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `Lütfen bir soru belirtiniz!\nÖrnek: ${prefix}8ball Yakışıklı mıyım?`
      );
    message.channel.send(embed);
  } else {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .addField(`Soru:`, soru)
      .addField(`Cevap:`, cevap);

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
  name: "8ball",
  description: "8Ball sorularınızı cevaplar.",
  usage: "8ball <soru>"
};
