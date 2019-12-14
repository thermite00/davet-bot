exports.run = (message, args) => {
    let bahadırabe = args[0]
      message.channel.bulkDelete(bahadırabe)
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'temizle'
};