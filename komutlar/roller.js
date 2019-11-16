const Discord = require('discord.js')
exports.run = (client, message, args) => {
	try {
		const embed = new Discord.RichEmbed()
			.addField(`İşte roller;`, message.guild.roles.filter(r => r.name !== "@everyone").map(r => r).join(' - '))
			.setColor("BLACK")
			.setTimestamp()
		message.channel.send({embed})
	} catch (err) {
		const embed = new Discord.RichEmbed()
			.addField(`İşte roller;`, 'Sunucuda rol yok veya benim yetkim yok hatta ve hatta sunucuda fazla rol bulunuyor olabilir!')
			.setColor("BLACK")
			.setTimestamp()
		message.channel.send({embed})
	}
}
exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['roles'],
	permLevel: 0,
	kategori: 'kullanıcı'
}
exports.help = {
	name: 'roller',
	description: 'Sunucuda bulunan rolleri gösterir.',
	usage: 'roller'
}