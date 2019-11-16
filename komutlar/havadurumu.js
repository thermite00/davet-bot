const Discord = require("discord.js");
const weather = require("weather-js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
const Sunny = "Güneşli"
    weather.find({ search: args.join(" "), degreeType: "C" }, function(
      err,
      result
    ) {
      
      if (result === undefined || result.length === 0) {
        message.channel.sendEmbed(
          new Discord.RichEmbed()
            .setDescription("Lokasyon bulunamadı!")
            .setColor("BLACK")
        );
        return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(
          `Lokasyon olan; ${current.observationpoint} için hava durumu`
        )
        .setThumbnail(current.imageUrl)
        .setColor("BLACK")
        .addField("Zaman Dilimi", `UTC${location.timezone}`, true)
        .addField("Sıcaklık", `${current.temperature} Derece`, true)
        .addField("Durum Türü", `${current.feelslike}`, true)
        .addField("Esen Rüzgar", current.winddisplay, true)
        .addField("Nem", `${current.humidity}%`, true);
      message.channel.send({ embed });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["hava"],
  permLevel: "0",
  kategori: "gold"
};

exports.help = {
  name: "havadurumu",
  description: "havadurumunu sergiler.",
  usage: "havadurumu"
};
