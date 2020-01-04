const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = async client => {
  let shard = client.shard.id
  if(shard == 0){
    shard = 1
  }
  var oyun = ["Davet Community®", "Versiyon v0.2", "Rol Koruma Sistemi!", `Shard: ${client.shard.id}/${client.shard.count}`]

  setInterval(async () => {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], { type: "WATCHING" });
  }, 12000);
  client.user.setStatus("online");

  /*client.user.setActivity("a!yardım | a!davet | a!prefix ☣", { type: "WATCHING" });*/
};
