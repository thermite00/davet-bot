const Discord = require("discord.js");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {
let date = new Date("2019-11-25:00:00");
let newdate = ms(date - Date.now());
  
const embed = new Discord.RichEmbed()
.setColor("BLACK")
.setDescription(`Seçimlerin başlamasına son!\n${newdate.days} Gün!\n${newdate.hours} Saat!\n${newdate.minutes} Dakika!\n${newdate.seconds} Saniye!`)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "seçim-sayaç",
  description: "ds",
  usage: "seçim-sayaç"
};
