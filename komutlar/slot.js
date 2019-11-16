const Discord = require("discord.js");
const db = require("quick.db");
const { stripIndents } = require("common-tags");
const slots = ["⭐", "🔥", "💀", "🥝", "🍋"];

exports.run = async (client, message, args) => {
  let para = await db.fetch(`para_${message.guild.id}_${message.author.id}`);
  let sembol = (await db.fetch(`psembol_${message.guild.id}`)) || "₺";
  let miktar = args[0];
  var slot1 = slots[Math.floor(Math.random() * slots.length)];
  var slot2 = slots[Math.floor(Math.random() * slots.length)];
  var slot3 = slots[Math.floor(Math.random() * slots.length)];
  var slot4 = slots[Math.floor(Math.random() * slots.length)];
  var slot5 = slots[Math.floor(Math.random() * slots.length)];
  var slot6 = slots[Math.floor(Math.random() * slots.length)];

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
  if (slot1 === slot2 && slot1 === slot3) {
    const embed = new Discord.RichEmbed().setColor("BLACK")
      .setDescription(stripIndents`
   ${slot6} : ${slot4} : ${slot3} 

	 ${slot1} : ${slot2} : ${slot3}  <==

   ${slot1} : ${slot4} : ${slot5}  

		Tebrikler, kazandınız!
		`);
    let miktar2 = miktar + miktar
    db.add(`para_${message.guild.id}_${message.author.id}`, +miktar2);
    message.channel.send(embed);
  } else {
    const embed = new Discord.RichEmbed().setColor("BLACK")
      .setDescription(stripIndents`
   ${slot6} : ${slot4} : ${slot3} 

	 ${slot1} : ${slot2} : ${slot3} <===

   ${slot1} : ${slot4} : ${slot5} 

		Kaybettiniz!
		`);
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
