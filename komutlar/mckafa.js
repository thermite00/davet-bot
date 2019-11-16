const Discord = require("discord.js");
const client = new Discord.Client();
const Jimp = require("jimp");
const fs = require("fs");

exports.run = async (client, message) => {
  let user;

  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else {
    user = message.author;
  }

  const bg = await Jimp.read("https://cdn.discordapp.com/attachments/616363782922305554/640520433128439829/unnamed.png");
  const userimg = await Jimp.read(user.avatarURL);
  var font;
  let username = user.username;
  await userimg.resize(103, 103);
  await bg.composite(userimg, 50, 0).write("./img/" + user.id + ".png");
  setTimeout(function() {
    message.channel.send(new Discord.Attachment("./img/" + user.id + ".png"));
  }, 1000);
  setTimeout(function() {
    fs.unlink("./img/" + user.id + ".png");
  }, 10000);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mckafa"],
  permLevel: 0
};

exports.help = {
  name: "mc-kafa",
  description: "mc-kafa",
  usage: "mc-kafa"
};
