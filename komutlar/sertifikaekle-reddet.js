const Discord = require('discord.js');


exports.run = function(client, message, args) {

if (!message.member.roles.has("808782058192633887")) return message.channel.send(`**Bu komutu kullanmnız için yetkiniz yetmiyor.**`);

let sefamert = args[0]
let sahip = args[1]
let sebep = args[2]
let sebepp = args[3]
let sebeppp = args[4]
let kanal = "805201225292709948" // onaylama reddetme kanalı
let atlanticode = "805176612051353630" // bot eklendi / onaylandı / reddedildi kanalı
message.delete()
if (message.channel.id !== kanal) return message.channel.send(`**Sertifika başvurusunda bulunulmuş bir botu yalnızca <#${kanal}> kanalında reddetebilirsin.**`).then(msg => msg.delete(5000))
message.delete()
if (!sefamert) return message.channel.send(`**Botun idsini yazmalısın.**`).then(msg => msg.delete(5000))
message.delete()
if (!sahip) return message.channel.send(`**Botun sahibinin idsini yazmalısın.**.`).then(msg => msg.delete(5000))
message.delete()
if (!sebep) return message.channel.send(`**3 kelimelik sebep yazmalısın.**.`).then(msg => msg.delete(5000))
message.delete()

client.channels.get(atlanticode).send(`<@${sahip}> **adlı geliştiricinin; <@${sefamert}> adlı, __${sefamert}__ idli botu için yapılan sertifika başvurusu reddedildi.** \n **Sebep : ${sebep} ${sebepp} ${sebeppp}**\n  __**Sertifikayı Reddeden Yetkili :**__ ${message.author} - **${message.author.tag}**`)


message.channel.send(`**Başarıyla bota yapılan sertifika başvurusunu reddettiniz.**`).then(msg => msg.delete(10000))
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['sertfika-reddet'],
permLevel: 0
};

exports.help = {
name: 'sertifikareddet', 
description: "Başvuru yapılan botu reddeder.",
usage: 'botreddet <bot-id> <bot-sahip-id> <sebep>'
};6