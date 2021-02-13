  const Discord = require('discord.js');


  exports.run = function(client, message, args) {
  
  if (!message.member.roles.has("808782058192633887")) return message.channel.send(`**Bu komutu kullanmnız için yetkiniz yetmiyor.**`);

	let sefamert = args[0]
  let zaman = args[1]
  let kanal = "808777088537985024" // onaylama reddetme kanalı
	let atlanticode = "808777088537985028" // bot eklendi / onaylandı / reddedildi kanalı
	message.delete()
  if (message.channel.id !== kanal) return message.channel.send(`**Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.**`).then(msg => msg.delete(10000))
message.delete()  
if (!sefamert) return message.channel.send(`**Botun idsini yazmalısın.**`).then(msg => msg.delete(10000))
message.delete()  
if (!zaman) return message.channel.send(`**Gün sayısı belirtmelisin.**`).then(msg => msg.delete(10000))
 
  message.delete()

	client.channels.get(atlanticode).send(`<@${sefamert}> **adlı bot kapalıdır.** **__${zaman}__** **günden fazla kapalı kalırsa atılacakdır!** \n **Botun geliştiricisinin durumu düzeltmesi önemle rica olunur.**  \n**Botla ilgili bir maruziyetiniz varsa <@797099022237171732> ve <@770639694056783874>'e yazabilirsiniz.**`);
	message.channel.send(`**Başarıyla botu sahibine bildirdiniz.**`).then(msg => msg.delete(10000))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-kapalı', 'kapalı','k'],
  permLevel: 0
};

exports.help = {
  name: 'botkapalı', 
  description: "Sunucuya eklenen botu uyarır.",
  usage: 'botkapalı <bot-id> <gün>'
};