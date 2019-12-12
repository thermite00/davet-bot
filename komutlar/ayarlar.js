const Discord = require("discord.js");
module.exports.run = async (bot, message) => {

		var page = 1;
		var totalpages = 4;
		var embed = new Discord.RichEmbed()
			.setTitle("Davet Yöneticisi Ayarları")
			.addField(`Bot Ayarları`, `prefix ve dil gibi ayarları düzenlersiniz.`)
			
			.setFooter(`Sayfa ${page}/${totalpages}`)
			.setColor('BLACK');
		message.channel.send(embed).then(async function (sentEmbed) {
			const emojiArray = ["◀", "▶"];
			
			reactions.on("collect", async function (reaction) {
				await reaction.remove(message.author);
				if (reaction.emoji.name === "◀") {
					if (page !== 1) {
						page = page - 1;
					} else {
						page = totalpages;
					}
				} else {
					if (page !== totalpages) {
						page = page + 1;
					} else {
						page = 1;
					}
				}
				embed = new Discord.RichEmbed()
					.setTitle("Konya Bot - Sunucuya Eklenen Emojiler")
					.setDescription(` Emoji Adı:[ :${emojis[page - 1].name}: ]`)
					.setImage(emojis[page - 1].url)
					.setFooter(`Sayfa ${page}/${totalpages} | Emoji ID: ${emojis[page - 1].id}`)
					.setColor('RANDOM');
				sentEmbed.edit(embed).catch(function () { });
			});
			reactions.on("end", () => sentEmbed.edit("Etkileşimli komut sona erdi: 5 dakika geçti."));
		}).catch(() => {
			message.reply("Bu embed'i göndermeye çalışırken bir hata oluştu.").catch(() => {
				message.author.send(`Komut zaten çalışmakta ${message.channel}`).catch(function () { });
			});
		});
	
	
}



module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
      kategori: "sunucu",

};

module.exports.help = {
  name: 'emoji',
  kategori: "genel",
  description: 'Sayfalı emojiler',
  usage: 'emoji'
};