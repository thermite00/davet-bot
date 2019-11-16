const Discord = require("discord.js");
const db = require("quick.db");
const { stripIndents } = require("common-tags");
const slots = ["Siyah 1", "Kırmızı 2", "Siyah 3", "Kırmızı 4", "Siyah 5", "Kırmızı 6", "Siyah 7", "Kırmızı 8", "Siyah 9", "Kırmızı 10", "Siyah 11", "Kırmızı 12", "Siyah 13", "Kırmızı 14", "Siyah 15", "Kırmızı 16", "Siyah 17", "Kırmızı 18", "Siyah 19", "Kırmızı 20", "Siyah 21", "Kırmızı 22", "Siyah 23", "Kırmızı 24", "Siyah 25", "Kırmızı 26", "Siyah 27", "Kırmızı 28", "Siyah 29", "Kırmızı 30", "Siyah 31", "Kırmızı 32", "Siyah 33", "Kırmızı 34", "Siyah 35", "Kırmızı 36", "Kırmızı", "Siyah"];

exports.run = async (client, message, args) => {
  let para = await db.fetch(`para_${message.guild.id}_${message.author.id}`);
  let sembol = (await db.fetch(`psembol_${message.guild.id}`)) || "₺";
  let miktar = args[1];
  let birim = args.slice(0).join(" ")
  var slot1 = slots[Math.floor(Math.random() * slots.length)];
if(!birim == "Siyah 1" || "Kırmızı 2" || "Siyah 3" || "Kırmızı 4" || "Siyah 5" || "Kırmızı 6" || "Siyah 7" || "Kırmızı 8" || "Siyah 9" || "Kırmızı 10" || "Siyah 11" || "Kırmızı 12" || "Siyah 13" || "Kırmızı 14" || "Siyah 15" || "Kırmızı 16" || "Siyah 17" || "Kırmızı 18" || "Siyah 19" || "Kırmızı 20" || "Siyah 21" || "Kırmızı 22" || "Siyah 23" || "Kırmızı 24" || "Siyah 25" || "Kırmızı 26" || "Siyah 27" || "Kırmızı 28" || "Siyah 29" || "Kırmızı 30" || "Siyah 31" || "Kırmızı 32" || "Siyah 33" || "Kırmızı 34" || "Siyah 35" || "Kırmızı 36" || "Kırmızı" || "Siyah"){
  const embed = new Discord.RichEmbed()
      .setTitle("Hata!")
      .setColor("BLACK")
      .setDescription(`Hatalı birim!\nGirelecek değerler;\nSiyah 1, Kırmızı 2, Siyah 3, Kırmızı 4, Siyah 5, Kırmızı 6, Siyah 7, Kırmızı 8 gibidir! siyah ile başlar kırmızı ile biter! 1-36 arasıda bir seçim yapınız.\nÇift sayılar kırmızıya düşer, tek sayılar siyaha.`);
    message.channel.send(embed);
    return;
}
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
  if(para < miktar){
    const embed = new Discord.RichEmbed()
      .setDescription("Ne yazık ki bu kadar paranız yok!")
      .setColor("BLACK");
    message.channel.send(embed);
    return;
  }
  if (slot1 === birim) {
    const embed = new Discord.RichEmbed().setColor("BLACK")
      .setDescription(`Tebrikler Kazandınız!\nSonuç;\nSeçtiğiniz: ${birim}\nÇıkan: ${slot1}`);
    db.add(`para_${message.guild.id}_${message.author.id}`, +miktar, +miktar, +miktar);
    message.channel.send(embed);
  } else {
    const embed = new Discord.RichEmbed().setColor("BLACK")
      .setDescription(`Kaybettiniz!\nSonuç;\nSeçtiğiniz: ${birim}\nÇıkan: ${slot1}`);
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
  name: "slot",
  description: "Slots oyunu oynatır",
  usage: "slot"
};
