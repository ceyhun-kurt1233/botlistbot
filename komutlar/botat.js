  const Discord = require('discord.js');


  exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu komutu kullanmnız için yetkiniz yetmiyor.**`);
  
  let sefamert = args[0]
  let sebep = args[1]
  let kanal = "808777088537985024" // bot anaylama reddetme kanalı
	let atlanticode = "805198023901577257" // bot durum log kanalı
	
message.delete() 
 if (message.channel.id !== kanal) return message.channel.send(`**Sistemimizde bulunan bir botu yalnızca <#${kanal}> kanalında atabilirsin.**`).then(msg => msg.delete(5000))
message.delete()
	if (!sefamert) return message.channel.send(`**Botun idsini yazmalısın.**`).then(msg => msg.delete(10000))
message.delete()
  if (!sebep) return message.channel.send(`**en az 1kelimelik sebep yazmalısın.**`).then(msg => msg.delete(10000))
  
  client.channels.get(atlanticode).send(`<@${sefamert}> **adlı bot atıldı.** \n **Sebep :** **${sebep}**. \n  __**Botu Atan Yetkili :**__ ${message.author} - **${message.author.tag}**`);
	message.channel.send(`**Başarıyla botu attınız.**`).then(msg => msg.delete(10000))
  
  message.delete()
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-at', 'at'],
  permLevel: 0
};

exports.help = {
  name: 'botat', 
  description: "Sunucuya eklenmiş botu atar.",
  usage: 'botat <bot-id> <sebep>'
};6
