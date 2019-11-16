const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {

    let mesaj = args.slice(0).join(" ");
    if (mesaj.length < 1) {
      const nsf = new RichEmbed()
        .setColor("BLACK")
        .setDescription("Lütfen bir şey yazınız!");
      message.channel.send(nsf);
      return;
    }
    message.delete();
    let yazıİçeriği = args.slice().join(" ");
    const Mesaj = new RichEmbed().setColor("BLACK").setDescription(yazıİçeriği);
    message.delete();
    message.channel.send(Mesaj);
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["embed", "embedyaz"],
  permLevel: 4,
  kategori: "gold"
};

exports.help = {
  name: "embedyazı",
  description: "Golda özel!",
  usage: "embedyazı"
};
