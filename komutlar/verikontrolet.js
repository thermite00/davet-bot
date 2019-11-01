const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (client, msg, args) => {
let date = new Date("2020-05-05:12:20");
let newdate = ms(date - Date.now());
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["verikontrol"],
  permLevel: 4,
  kategori: "yapımcı"
};

exports.help = {
  name: "veri-kontrol",
  description: "Sa-As sistemini ayarlarsınız.",
  usage: "veri-kontrol"
};
