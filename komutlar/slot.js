const Discord = require('discord.js');
const db = require("quick.db")
const { Command } = require('discord.js-commando');
const { stripIndents } = require('common-tags');
const slots = ['⭐', '🔥', '💀', '🥝', '🍋'];

exports.run = async (client, message, args) =>{
  let para = await db.fetch(`para_${message.guild.id}_${message.author.id}`);
  let miktar =p 
	var slot1 = slots[Math.floor(Math.random() * slots.length)];
	var slot2 = slots[Math.floor(Math.random() * slots.length)];
	var slot3 = slots[Math.floor(Math.random() * slots.length)];
	var slot4 = slots[Math.floor(Math.random() * slots.length)];
  var slot5 = slots[Math.floor(Math.random() * slots.length)];
  var slot6 = slots[Math.floor(Math.random() * slots.length)];
	if (slot1 === slot2 && slot1 === slot3) {
    const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(stripIndents`
   ${slot6} : ${slot4} : ${slot3} 

	 ${slot1} : ${slot2} : ${slot3}  <==

   ${slot1} : ${slot4} : ${slot5}  

		Tebrikler, kazandınız!
		`)
    message.channel.send(embed)
	} else {
		const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(stripIndents`
   ${slot6} : ${slot4} : ${slot3} 

	 ${slot1} : ${slot2} : ${slot3} <===

   ${slot1} : ${slot4} : ${slot5} 

		Kaybettiniz!
		`)
    message.channel.send(embed)
	}

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 4,
};

exports.help = {
  name: 'slot', 
  description: 'Slots oyunu oynatır',
  usage: 'slot'
};
