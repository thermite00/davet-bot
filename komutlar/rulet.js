const Discord = require("discord.js");
const db = require("quick.db");
const { stripIndents } = require("common-tags");
const slots = [
  "Siyah1",
  "Kırmızı2",
  "Siyah3",
  "Kırmızı4",
  "Siyah5",
  "Kırmızı6",
  "Siyah7",
  "Kırmızı8",
  "Siyah9",
  "Kırmızı10",
  "Siyah11",
  "Kırmızı12",
  "Siyah13",
  "Kırmızı14",
  "Siyah15",
  "Kırmızı16",
  "Siyah17",
  "Kırmızı18",
  "Siyah19",
  "Kırmızı20",
  "Siyah21",
  "Kırmızı22",
  "Siyah23",
  "Kırmızı24",
  "Siyah25",
  "Kırmızı26",
  "Siyah27",
  "Kırmızı28",
  "Siyah29",
  "Kırmızı30",
  "Siyah31",
  "Kırmızı32",
  "Siyah33",
  "Kırmızı34",
  "Siyah35",
  "Kırmızı36",
  "Kırmızı",
  "Siyah"
];

exports.run = async (client, message, args) => {
  let para = await db.fetch(`para_${message.guild.id}_${message.author.id}`);
  let prefix = "!";
  let sembol = (await db.fetch(`psembol_${message.guild.id}`)) || "₺";
  let miktar = args[0]
  let birim = args[1]
  var slot1 = slots[Math.floor(Math.random() * slots.length)];
  if (!miktar) {
    const embed = new Discord.RichEmbed()
      .setTitle("Hata!")
      .setColor("BLACK")
      .setDescription(`Bir miktar belirtiniz!`);
    message.channel.send(embed);
    return;
  }
  if (miktar < 100) {
    const embed = new Discord.RichEmbed()
      .setTitle("Hata!")
      .setColor("BLACK")
      .setDescription(`Minimum 100${sembol} kadar harcama yapmalısınız!`);
    message.channel.send(embed);
    return;
  }
  if (para < miktar) {
    const embed = new Discord.RichEmbed()
      .setDescription("Ne yazık ki bu kadar paranız yok!")
      .setColor("BLACK");
    message.channel.send(embed);
    return;
  }
  if (!birim) {
    const embed = new Discord.RichEmbed()
      .setTitle("Hata!")
      .setColor("BLACK")
      .setDescription(
        `Hatalı giriş!\nGirelecek değerler;\nSiyah1, Kırmızı2, Siyah3, Kırmızı4, Siyah5, Kırmızı6, Siyah7, Kırmızı8 gibidir! siyah ile başlar kırmızı ile biter!\n1-36 arasıda bir seçim yapınız.\nÇift sayılar kırmızıya düşer, tek sayılar siyaha.\n\nÖrnek; ${prefix}rulet 500 Siyah19`
      );
    message.channel.send(embed);
    return;
  }
  
  if (slot1 == birim) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `Tebrikler Kazandınız!\nSonuç;\nSeçtiğiniz: ${birim}\nÇıkan: ${slot1}`
      );
    db.add(`para_${message.guild.id}_${message.author.id}`, +miktar, +miktar);
    message.channel.send(embed);
    return;
  } else {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `Kaybettiniz!\nSonuç;\nSeçtiğiniz: ${birim}\nÇıkan: ${slot1}`
      );
    db.add(`para_${message.guild.id}_${message.author.id}`, -miktar);
    message.channel.send(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "rulet",
  description: "rulet",
  usage: "rulet"
};
