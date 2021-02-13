const Discord = require('discord.js');


exports.run = function(client, message, args) {

if (!message.member.roles.has("808782058192633887")) return message.channel.send(`**Bu komutu kullanmnız için yetkiniz yetmiyor.**`);

let sefamert = args[0]
let sahip = args[1]
let prefix = args[2]
let kanal = "805201225292709948" // bot onaylama reddetme kanalı
let atlanticode = "805198023901577257" // bot durum log kanalı
let sertifikakanal = "805205147529510922" // sertifikaların gösterileceği kanal
message.delete()
if (message.channel.id !== kanal) return message.channel.send(`**Sertifika başvurusunda bulunulmuş bir botu yalnızca <#${kanal}> kanalında reddedebilirsin.**`).then(msg => msg.delete(5000))
message.delete()
if (!sefamert) return message.channel.send(`**Botun idsini yazmalısın.**`).then(msg => msg.delete(5000))
message.delete()
if (!sahip) return message.channel.send(`**Botun sahibinin idsini yazmalısın.**.`).then(msg => msg.delete(5000))
message.delete() 
if (!prefix) return message.channel.send(`**Botun prefixini yazmalısın.**.`).then(msg => msg.delete(5000))
message.delete()
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("Nick | Botlist")
.addField("Botu Sunucuna Ekle", "[0 Perm Ekle](https://discordapp.com/oauth2/authorize?client_id=${sefamert}&scope=bot&permissions=0) & [8 Perm Ekle](https://discordapp.com/oauth2/authorize?client_id=${sefamert}&scope=bot&permissions=8)")
.addField("Botun Geliştiricisinin İdsi", sahip)
.addField("Botun İdsi", sefamert)
.addField("Botun Prefixi", prefix)
.addField("Sertifika Veren Yetkili", message.author.tag )
.setImage("https://cdn.discordapp.com/attachments/794721957677367356/795212264214233098/20200806_002234.jpg")
.setThumbnail(message.author.avatarURL)
.setTimestamp()
client.channels.get(sertifikakanal).send(embed)

client.channels.get(atlanticode).send(`<@${sahip}> **adlı geliştiricinin; <@${sefamert}> adlı, __${sefamert}__ idli botuna sertifika verildi.** \n **Botunuzu bizlerle büyüttüğünüz için teşekkürler, <@${sahip}>!**\n <a:hyq:794637845255421953> __**Sertifika Veren Yetkili :**__ ${message.author} - **${message.author.tag}**`)
message.channel.send(`**Başarıyla bota sertifika verdiniz.**`).then(msg => msg.delete(10000))
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['sertifika-onayla'],
permLevel: 0
};

exports.help = {
name: 'sertifikaonayla', 
description: "Sertifika talebini onaylar.",
usage: 'sertifika <bot ismi>'
};6