const Discord = require("discord.js");
const db = require("quick.db")
module.exports.run = async (bot, message) => {
let prefix = "!";
  let kanal = await db.fetch(`davetkanal_${message.guild.id}`) || "Ayarlanmamış!"
		var page = 1;
		var totalpages = 4;
		var embed = new Discord.RichEmbed()
			.setTitle("Davet Yöneticisi - Ayarları")
			.addField(`1. Prefix`, `\`prefix\``)
    .addField(`2. Dil`, `\`tr (Yakında dil seçenekleri eklenecek!)\``)
    .addField(`3. Davet Log Kanalı`, `<#${kanal}>`)
			
			.setFooter(`Sayfa ${page}/${totalpages}`)
			.setColor('BLACK');
		message.channel.send(embed).then(async function (sentEmbed) {
	
			const emojiArray = ["◀", "▶"];
			const filter = (reaction, user) => emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
			await sentEmbed.react(emojiArray[0]).catch(function () { });
			await sentEmbed.react(emojiArray[1]).catch(function () { });
			var reactions = sentEmbed.createReactionCollector(filter, {
				time: 300000
			});
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
var embed = new Discord.RichEmbed()
			.setTitle("Davet Yöneticisi - Ayarları")
			.addField(`1. Prefix`, `\`prefix\``)
    .addField(`2. Dil`, `\`tr (Yakında dil seçenekleri eklenecek!)\``)
    .addField(`3. Davet Log Kanalı`, `<#${kanal}>`)
			
			.setFooter(`Sayfa ${page}/${totalpages}`)
			.setColor('BLACK');
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
  name: 'test',
  description: 'Sayfalı emojiler',
  usage: 'emoji'
};