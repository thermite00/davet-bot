const keep_alive = require("./keep_alive.js"); //index.js Const Kısımlarına

var http = require("http");

http
  .createServer(function(req, res) {
    res.write("sa");
    res.end();
  })
  .listen(8080);

///////////////////////////////////////////////////////////////////////////////

const Discord = require("discord.js");
const { Client, Util } = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const ayarlar = require("./ayarlar.json");
const { promisify } = require("util");
const chalk = require("chalk");
require("./util/eventLoader")(client);
const moment = require("moment");
const db = require("quick.db");
const ms = require("parse-ms");

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Komut - ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.on("message", async message => {
  if (message.author.id == "404206792005124096") {
    if (message.content === "gir") {
      client.emit(
        "guildMemberAdd",
        message.member || (await message.guild.fetchMember(message.author))
      );
    }
  }
});

client.on("message", async message => {
  if (message.author.id == "404206792005124096") {
    if (message.content === "çık") {
      client.emit(
        "guildMemberRemove",
        message.member || (await message.guild.fetchMember(message.author))
      );
    }
  }
});

client.on("ready", () => {
  setInterval(() => {
    let botdurum = client.channels.find(c => c.id === "657226299496202269");
    const botistatistik = new Discord.RichEmbed()
      .setColor("GREEN")
      .addField(`Sunucular`, `${client.guilds.size.toLocaleString()}`)
      .addField(`Kullanıcılar`, client.users.size.toLocaleString())
      .addField(`Ping`, `${client.ping}`)
      .setTimestamp();
    botdurum.send(botistatistik);
  }, 30000);
});
//////////////////////////////////////////////////////////////////////////////
client.on("roleDelete", async role => {
  let kanal = await db.fetch(`rolk_${role.guild.id}`);
  if (!kanal) return;
  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then(audit => audit.entries.first());
  if (entry.executor.id == "642436223314558976") return;
  if (entry.executor.hasPermission("ADMINISTRATOR")) return;
  role.guild.createRole({
    name: role.name,
    color: role.hexColor,
    permissions: role.permissions
  });

  const embed = new Discord.RichEmbed()
    .setTitle(`Bir rol silindi!`)
    .addField(`Silen`, entry.executor.tag)
    .addField(`Silinen Rol`, role.name);
  client.channels.get(kanal).send(embed);
});

client.on("roleCreate", async role => {
  let kanal = await db.fetch(`rolk_${role.guild.id}`);
  if (!kanal) return;
  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_CREATE" })
    .then(audit => audit.entries.first());
  if (entry.executor.id == "642436223314558976") return;
  if (entry.executor.hasPermission("ADMINISTRATOR")) return;
  role.delete();
  const embed = new Discord.RichEmbed()
    .setTitle(`Bir rol açıldı!`)
    .addField(`Açan`, entry.executor.tag)
    .addField(`Açılan Rol`, role.name);
  client.channels.get(kanal).send(embed);
});
//////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  const a = message.content.toLowerCase();
  if (
    a === "slam" ||
    a === "sa" ||
    a === "selamun aleyküm" ||
    a === "selamın aleyküm" ||
    a === "selam" ||
    a === "slm"
  ) {
    let i = await db.fetch(`saas_${message.guild.id}`);
    if (i === "acik") {
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setTitle("Sa-As sistemi!")
        .setDescription(
          "<a:krstl:645227930208829450> **Aleyküm Selam, Hoşgeldin!**"
        )
        .setFooter(client.user.username, client.user.avatarURL);

      message.channel.send(embed).then(msg => msg.delete(5000));
    }
  }
});

client.on("guildMemberAdd", async member => {
  db.fetch(`dmgrşçkş_${member.guild.id}`).then(i => {
    if (i == "acik") {
      const msj = new Discord.RichEmbed()
        .setColor("BLACK")
        .setDescription(
          `<@${member.user.id}> sunucuya hoşgeldin!\nBu sunucu **<@${client.user.id}>** kullanıyor!\nKomutlarımı görmek için: !yardım\nEğer beni eklemek istersen: [[Tıkla!]](https://discordapp.com/oauth2/authorize?client_id=642436223314558976&scope=bot&permissions=8)`
        )
        .setFooter(client.user.username, client.user.avatarURL);

      member.send(msj);
    } else if (i == "kapali") {
    }
    if (!i) return;
  });
});

client.on("guildMemberRemove", async member => {
  db.fetch(`dmgrşçkş_${member.guild.id}`).then(i => {
    if (i == "acik") {
      let msj = new Discord.RichEmbed()
        .setColor("BLACK")
        .setDescription(
          `<@${member.user.id}> Güle güle, özleneceksin!\nEğer beni eklemek istersen: [[Tıkla!]](https://discordapp.com/oauth2/authorize?client_id=642436223314558976&scope=bot&permissions=8)`
        )
        .setFooter(client.user.username, client.user.avatarURL);

      member.send(msj);
    } else if (i == "kapali") {
    }
    if (!i) return;
  });
});

const { GOOGLE_API_KEY } = require("./anahtarlar.json");
const YouTube = require("simple-youtube-api");
const queue = new Map();
const youtube = new YouTube(GOOGLE_API_KEY);
const ytdl = require("ytdl-core");

client.on("message", async msg => {
  let prefix = (await db.fetch(`prefix_${msg.guild.id}`)) || "!";
  if (msg.author.bot) return undefined;
  if (!msg.content.startsWith(prefix)) return undefined;

  const args = msg.content.split(" ");
  const searchString = args.slice(1).join(" ");
  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
  const serverQueue = queue.get(msg.guild.id);
  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);

  if (command === "çal") {
    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel)
      return msg.channel.send(
        new Discord.RichEmbed()
          .setColor("RED")
          .setDescription("Lütfen bir sesli kanala katılınız!")
      );
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has("CONNECT")) {
      return msg.channel.send(
        new Discord.RichEmbed()
          .setColor("RED")
          .setDescription(
            "Ne yazık ki sesli kanala katılabilmem için yeterili yetkim yok!"
          )
      );
    }
    if (!permissions.has("SPEAK")) {
      return msg.channel.send(
        new Discord.RichEmbed()
          .setColor("RED")
          .setDescription(
            "Ne yazık ki sesli kanala katılabilmem için yeterili yetkim yok!"
          )
      );
    }
    if (!searchString) {
      const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setDescription(
          "Lütfen aranacak müziğin adını giriniz veya bir url giriniz!"
        );

      msg.channel.send(embed);
      return;
    }

    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
        await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
      }
      return msg.channel
        .send(new Discord.RichEmbed())
        .setColor("GREEN")
        .setDescription(`${playlist.title} adlı şarkı sıraya eklendi!`);
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(searchString, 10);
          let index = 0;

          msg.channel.send(
            new Discord.RichEmbed()
              .setDescription(
                `1 ile 10 arasında bir değer belirtiniz;
${videos.map(video2 => `[**${++index}**] **${video2.title}**`).join("\n")}`
              )
              .setFooter(
                "Lütfen 1-10 arasında bir rakam seçiniz 10 saniye içinde liste iptal edilecektir."
              )
              .setColor("GREEN")
          );
          msg.delete(5000);
          try {
            var response = await msg.channel.awaitMessages(
              msg2 => msg2.content > 0 && msg2.content < 11,
              {
                maxMatches: 1,
                time: 10000,
                errors: ["time"]
              }
            );
          } catch (err) {
            console.error(err);
            return msg.channel.send(
              new Discord.RichEmbed()
                .setColor("RED")
                .setDescription(
                  "Uzun süre bir değer belirtilmediği için komut sıfırlandı!"
                )
            );
          }
          const videoIndex = parseInt(response.first().content);
          var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
        } catch (err) {
          console.error(err);
          return msg.channel.send(
            new Discord.RichEmbed()
              .setColor("RED")
              .setDescription("Hiçbir sonuç bulunamadı!")
          );
        }
      }
      return handleVideo(video, msg, voiceChannel);
    }
  } else if (command === "geç") {
    if (!msg.member.voiceChannel)
      return msg.channel.send(
        new Discord.RichEmbed()
          .setColor("RED")
          .setDescription("Lütfen bir sesli kanala katılınız!")
      );
    if (!serverQueue)
      return msg.channel.send(
        new Discord.RichEmbed()
          .setColor("RED")
          .setDescription("Ne yazık ki şuan herhangi bir müzik çalmamakta!")
      );

    serverQueue.connection.dispatcher.end("Sıradaki müziğe geçildi!");
    return undefined;
  } else if (command === "ses") {
    if (!msg.member.voiceChannel)
      return msg.channel.send(
        new Discord.RichEmbed()
          .setColor("RED")
          .setDescription("Lütfen bir sesli kanala katılınız!")
      );
    if (!serverQueue)
      return msg.channel.send(
        new Discord.RichEmbed()
          .setColor("RED")
          .setDescription("Ne yazık ki şuan herhangi bir müzik çalmamakta!")
      );
    if (!args[1])
      return msg.channel.send(
        new Discord.RichEmbed()
          .setDescription(`Şuanki ses seviyesi: **${serverQueue.volume}**`)
          .setColor("GREEN")
      );
    serverQueue.volume = args[1];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
    return msg.channel.send(
      new Discord.RichEmbed()
        .setDescription(`Ses seviyesi **${args[1]}** olarak ayarlandı!`)
        .setColor("GREEN")
    );
  } else if (command === "liste") {
    let index = 0;
    if (!serverQueue)
      return msg.channel.send(
        new Discord.RichEmbed()
          .setDescription("Ne yazık ki şuan herhangi bir müzik çalmamakta!")
          .setColor("RED")
      );
    return msg.channel
      .send(
        new Discord.RichEmbed()
          .setColor("GREEN")
          .setDescription(
            `${serverQueue.songs
              .map(song => `[**${++index}**] - [**${song.title}**]`)
              .join("\n")}`
          )
      )
      .addField("Çalınan", `${serverQueue.songs[0].title}`);
  } else if (command === "durdur") {
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      return msg.channel.send(
        new Discord.RichEmbed()
          .setDescription("Müzik durduruldu!")
          .setColor("GREEN")
      );
    }
    return msg.channel.send("Ne yazık ki şuan herhangi bir müzik çalmamakta!");
  } else if (command === "devam") {
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      return msg.channel.send(
        new Discord.RichEmbed()
          .setDescription("Müzik keyfi devam ediyor :)")
          .setColor("GREEN")
      );
    }
    return msg.channel.send(
      new Discord.RichEmbed()
        .setDescription("Ne yazık ki şuan herhangi bir müzik çalmamakta!")
        .setColor("RED")
    );
  }

  return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
  const serverQueue = queue.get(msg.guild.id);
  console.log(video);
  const song = {
    id: video.id,
    title: video.title,
    url: `https://www.youtube.com/watch?v=${video.id}`,
    durationh: video.duration.hours,
    durationm: video.duration.minutes,
    durations: video.duration.seconds,
    views: video.views
  };
  if (!serverQueue) {
    const queueConstruct = {
      textChannel: msg.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };
    queue.set(msg.guild.id, queueConstruct);

    queueConstruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(msg.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(`Sistemde bir hata var! Hata: ${error}`);
      queue.delete(msg.guild.id);
      return msg.channel.send(
        new Discord.RichEmbed()
          .setDescription(`Sistemde bir hata var! Hata: ${error}`)
          .setColor("RED")
      );
    }
  } else {
    serverQueue.songs.push(song);
    console.log(serverQueue.songs);
    if (playlist) return undefined;
    return msg.channel.send(
      new Discord.RichEmbed()
        .setDescription(`**${song.title}** adlı müzik sıraya eklendi!`)
        .setColor("GREEN")
    );
  }
  return undefined;
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  console.log(serverQueue.songs);

  const dispatcher = serverQueue.connection
    .playStream(ytdl(song.url))
    .on("end", reason => {
      if (reason === "Yayın hızı yetersiz!") console.log("GG");
      else console.log(reason);
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

  serverQueue.textChannel.send(
    new Discord.RichEmbed()
      .setImage(song.eyad)
      .addField(`Şarkı Adı`, `[${song.title}](${song.url})`, true)
      .addField(`Şarkı Süresi`, `${song.durationm}:${song.durations}`, true)
      .addField(`Ses Seviyesi`, serverQueue.volume, true)
      .setColor("GREEN")
  );
}

client.on("message", async message => {
  let uyarisayisi = await db.fetch(`reklamuyari_${message.author.id}`);
  let reklamkick = await db.fetch(`kufur_${message.guild.id}`);
  let kullanici = message.member;
  if (!reklamkick) return;
  if (reklamkick == "Açık") {
    const reklam = [
      "discord.app",
      "discord.gg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      ".party",
      ".rf.gd",
      ".az"
    ];
    if (reklam.some(word => message.content.toLowerCase().includes(word))) {
      if (!message.member.hasPermission("BAN_MEMBERS")) {
        message.delete();
        db.add(`reklamuyari_${message.author.id}`, 1); //uyarı puanı ekleme
        if (uyarisayisi === null) {
          let uyari = new Discord.RichEmbed()
            .setColor("BLACK")
            .setTitle("Reklam-Engel!")
            .setDescription(
              `<@${message.author.id}> reklam yapmayı kes! bu ilk uyarın! (1/3)`
            )
            .setFooter(client.user.username, client.user.avatarURL)
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 1) {
          let uyari = new Discord.RichEmbed()
            .setColor("BLACK")
            .setTitle("Reklam-Engel!")
            .setDescription(
              `<@${message.author.id}> reklam yapmayı kes! bu ikinci uyarın! (2/3)`
            )
            .setFooter(client.user.username, client.user.avatarURL)
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 2) {
          message.delete();
          await kullanici.kick({
            reason: `Reklam-Engel sistemi!`
          });
          let uyari = new Discord.RichEmbed()
            .setColor("BLACK")
            .setTitle("Reklam-Engel!")
            .setDescription(
              `<@${message.author.id}> üç kere reklam yaptığı için sunucudan atıldı!`
            )
            .setFooter(client.user.username, client.user.avatarURL)
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 3) {
          message.delete();
          await kullanici.ban({
            reason: `Reklam-Engel sistemi!`
          });
          db.delete(`reklamuyari_${message.author.id}`);
          let uyari = new Discord.RichEmbed()
            .setColor("BLACK")
            .setTitle("Reklam kick sistemi")
            .setDescription(
              `<@${message.author.id}> atıldıktan sonra tekrar reklam yaptığı için sunucudan yasaklandı!`
            )
            .setFooter(client.user.username, client.user.avatarURL)
            .setTimestamp();
          message.channel.send(uyari);
        }
      }
    }
  }
});

const invites = {};

const wait = require("util").promisify(setTimeout);

client.on("ready", () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on("guildMemberRemove", async member => {
  let kanal = await db.fetch(`davetkanal_${member.guild.id}`);
  if (!kanal) return;

  let d = await db.fetch(`bunudavet_${member.id}`);
  const sa = client.users.get(d);
  db.add(`davet_${d}_${member.guild.id}`, -1);

  if (!d) {
    const aa = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `\`\`${member.user.tag}\`\` **adlı şahıs aramızdan ayrıldı.\nŞahsı davet eden:** \`\`Bulunamadı!\`\``
      )
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(aa);
    return;
  } else {
    const aa = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `\`\`${member.user.tag}\`\` **adlı şahıs aramızdan ayrıldı.\nŞahsı davet eden:** \`\`${sa.tag}\`\``
      )
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(aa);
    return;
  }
});

client.on("guildMemberAdd", async member => {
  member.guild.fetchInvites().then(async guildInvites => {
    let kanal = await db.fetch(`davetkanal_${member.guild.id}`);
    if (!kanal) return;
    const ei = invites[member.guild.id];

    invites[member.guild.id] = guildInvites;

    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);

    const davetçi = client.users.get(invite.inviter.id);

    db.add(`davet_${invite.inviter.id}_${member.guild.id}`, +1);
    db.set(`bunudavet_${member.id}`, invite.inviter.id);
    let sayı = await db.fetch(`davet_${invite.inviter.id}_${member.guild.id}`);

    let sayı2;
    if (!sayı) {
      sayı2 = 0;
    } else {
      sayı2 = await db.fetch(`davet_${invite.inviter.id}_${member.guild.id}`);
    }

    const aa = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `\`\`${member.user.tag}\`\` **adlı şahıs sunucuya katıldı.\nŞahsı davet eden:** \`\`${davetçi.tag}\`\`\n**Toplam \`\`${sayı2}\`\` daveti oldu!**`
      )
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(aa);
    return;
  });
});
//////////////////////////////////////////////////////////////////////////////
client.on("guildMemberAdd", async member => {
  let rol = await db.fetch(`otorol_${member.guild.id}`);
  let kanal = await db.fetch(`otokanal_${member.guild.id}`);
  let msj = await db.fetch(`otorolmsj_${member.guild.id}`);
  if (!rol) return;
  if (!kanal) return;

  member.addRole(rol);
  if (!msj) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `<a:tik:627830420070727690> - :loudspeaker: **@${member.user.tag}** adlı şahsa rolü verildi! :inbox_tray:`
      )
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(embed);
    return;
  } else {
    var msj2 = msj
      .replace(`-sunucu-`, `${member.guild.name}`)
      .replace(`-uye-`, `${member.user.tag}`)
      .replace(`-uyetag-`, `<@${member.user.id}>`)
      .replace(`-rol-`, `${member.guild.roles.get(rol).name}`);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(msj2)
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(embed);
    return;
  }
});
//////////////////////////////////////////////////////////////////////////////

client.on("guildMemberAdd", async member => {
  let rol = await db.fetch(`sayaçhedef_${member.guild.id}`);
  let kanal = await db.fetch(`sayaçkanal_${member.guild.id}`);
  let msj = await db.fetch(`sayaçmsjhg_${member.guild.id}`);
  if (!rol) return;
  if (!kanal) return;

  if (rol == member.guild.memberCount) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(`Tebrikler! başarılı bir şekilde ${rol} kişi olduk!`)
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(embed);
    db.delete(`sayaçhedef_${member.guild.id}`);
    db.delete(`sayaçkanal_${member.guild.id}`);
    db.delete(`sayaçmsjhg_${member.guild.id}`);
    db.delete(`sayaçmsjbb_${member.guild.id}`);
    return;
  }
  if (rol < member.guild.memberCount) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(`Tebrikler! başarılı bir şekilde ${rol} kişi olduk!`)
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(embed);
    db.delete(`sayaçhedef_${member.guild.id}`);
    db.delete(`sayaçkanal_${member.guild.id}`);
    db.delete(`sayaçmsjhg_${member.guild.id}`);
    db.delete(`sayaçmsjbb_${member.guild.id}`);
    return;
  }
  if (!msj) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `<a:tik:627830420070727690> - :loudspeaker: **@${
          member.user.tag
        }** adlı şahsa aramıza katıldı! ${rol} kişi olmamıza ${rol -
          member.guild.memberCount} kişi kaldı! :inbox_tray:`
      )
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(embed);
    return;
  } else {
    var msj2 = msj
      .replace(`-sunucu-`, `${member.guild.name}`)
      .replace(`-uye-`, `${member.user.tag}`)
      .replace(`-uyetag-`, `<@${member.user.id}>`)
      .replace(`-hedef-`, `${rol}`)
      .replace(`-hedefkalan-`, `${rol - member.guild.memberCount}`);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(msj2)
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(embed);
    return;
  }
});

///////////////////////////////////////

client.on("guildMemberAdd", async member => {
  let rol = await db.fetch(`ototag_${member.guild.id}`);
  let kanal = await db.fetch(`ototagk_${member.guild.id}`);
  let msj = await db.fetch(`ototagmsj_${member.guild.id}`);
  if (!rol) return;
  if (!kanal) return;

  if (!msj) {
    member.setNickname(`${rol} | ${member.user.username}`);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `<a:tik:627830420070727690> - :loudspeaker: **@${member.user.tag}** adlı şahsa tag verildi!`
      )
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(embed);
    return;
  } else {
    var msj2 = msj
      .replace(`-uye-`, `${member.user.username}`)
      .replace(`-tag-`, `${rol}`);
    member.setNickname(msj2);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `<a:tik:627830420070727690> - :loudspeaker: **@${member.user.tag}** adlı şahsa tag verildi!`
      )
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(embed);
    return;
  }
});
//////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  let ever = await db.fetch(`ever_${message.guild.id}`);
  let sayı = await db.fetch(`sayi_${message.author.id}`);
  if (ever === "acik") {
    const a = message.content;
    if (a === "@everyone" || a === "@here") {
      if (message.member.hasPermission("BAN_MEMBERS")) return;
      db.add(`sayi_${message.author.id}`, 1);
      if (sayı == null) {
        const embed = new Discord.RichEmbed()
          .setColor("BLACK")
          .setDescription(
            "Bu 1. uyarın! Lütfen tekrarlama! Aksi taktirde atılacaksın!\n(1/3)"
          )
          .setFooter(client.user.username, client.user.avatarURL);
        message.channel.send(embed);
        message.delete();
        return;
      }
      if (sayı === 1) {
        const embed = new Discord.RichEmbed()
          .setColor("BLACK")
          .setDescription(
            "Bu 2. uyarın! Lütfen tekrarlama! Aksi taktirde atılacaksın!\n(2/3)"
          )
          .setFooter(client.user.username, client.user.avatarURL);
        message.channel.send(embed);
        message.delete();
        return;
      }
      if (sayı > 2) {
        message.delete();
        const embed = new Discord.RichEmbed()
          .setColor("BLACK")
          .setDescription("Sunucudan atılıyorsun!")
          .setFooter(client.user.username, client.user.avatarURL);
        message.channel.send(embed);
        db.delete(`sayi_${message.author.id}`);
        message.member.kick();
        return;
      }
    }
  } else {
    return;
  }
});

client.on("guildMemberRemove", async member => {
  let rol = await db.fetch(`sayaçhedef_${member.guild.id}`);
  let kanal = await db.fetch(`sayaçkanal_${member.guild.id}`);
  let msj = await db.fetch(`sayaçmsjbb_${member.guild.id}`);
  if (!rol) return;
  if (!kanal) return;

  if (!msj) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `<a:tik:627830420070727690> - :loudspeaker: **@${
          member.user.tag
        }** adlı şahsa aramızdan ayrıldı! ${rol} kişi olmamıza ${rol -
          member.guild.memberCount} kişi kaldı! :inbox_tray:`
      )
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(embed);
    return;
  } else {
    var msj2 = msj
      .replace(`-sunucu-`, `${member.guild.name}`)
      .replace(`-uye-`, `${member.user.tag}`)
      .replace(`-uyetag-`, `<@${member.user.id}>`)
      .replace(`-hedef-`, `${rol}`)
      .replace(`-hedefkalan-`, `${rol - member.guild.memberCount}`);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(msj2)
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(embed);
    return;
  }
});

const DBL = require("dblapi.js");
const dbl = new DBL(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjQzNjIyMzMxNDU1ODk3NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTc2MzIwMDMxfQ.fbbZYB4SuE42yGFuvSASSbiYt6XTYi_VcmmyghLo7Fw",
  client
);

// Optional events
dbl.on("posted", () => {
  console.log("Server count posted!");
});

dbl.on("error", e => {
  console.log(`Oops! ${e}`);
});

client.on("guildCreate", async guild => {
  const embed = new Discord.RichEmbed()
    .setColor(`GREEN`)
    .setTitle(`EKLENDİM!`)
    .setDescription(
      `Sunucu Adı: ${guild.name}\nSunucu Id: ${guild.id}\nSunucu Sahibi: ${guild.owner}\nSunucudaki Kişi Sayısı: ${guild.memberCount}\nSunucu Oluşturulma Zamanı: ${guild.createdAt}\nDoğrulama Seviyesi: ${guild.verificationLevel}`
    );
  client.channels.get(`655384931538829322`).send(embed);
});
client.on("guildDelete", async guild => {
  const embed = new Discord.RichEmbed()
    .setColor(`RED`)
    .setTitle(`ATILDIM!`)
    .setDescription(
      `Sunucu Adı: ${guild.name}\nSunucu Id: ${guild.id}\nSunucu Sahibi: ${guild.owner}\nSunucudaki Kişi Sayısı: ${guild.memberCount}\nSunucu Oluşturulma Zamanı: ${guild.createdAt}\nDoğrulama Seviyesi: ${guild.verificationLevel}`
    );
  client.channels.get(`655384931538829322`).send(embed);
});

client.elevation = message => {
  if (!message.guild) {
    return;
  }

  let permlvl = 0;
  if (message.member.hasPermission("KICK_MEMBERS")) permlvl = 1;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);
