const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const client = new Discord.Client();

exports.run = (client, message, args) => {
    var fotos = [
      "http://giphygifs.s3.amazonaws.com/media/ssxUuhriUoGQ0/giphy.gif",
      "http://giphygifs.s3.amazonaws.com/media/lbOK3uj00mqLC/giphy.gif",
      "http://giphygifs.s3.amazonaws.com/media/11KZ5xbbnE0EuY/giphy.gif",
      "http://giphygifs.s3.amazonaws.com/media/etd93UKSpRAIw/giphy.gif"
    ];
    var espri = fotos[Math.floor(Math.random() * fotos.length)];
    const embed = new Discord.RichEmbed().setColor("BLACK").setImage(espri);
    message.channel.send(embed);
};
//giflere ekleme veya çıkarma yapabilirsiniz.
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: 'kullanıcı'
};

exports.help = {
  name: "atatürk",
  description: "Mustafa Kemal Atatürk...",
  usage: "atatürk"
};