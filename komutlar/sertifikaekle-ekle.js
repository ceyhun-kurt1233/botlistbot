  const Discord = require('discord.js');


  exports.run = function(client, message, args) {

	let sefamert = args[0]
	let prefix = args[1]
  let onaylımı = args[2]
  let basvuru = "805176612051353630"// başvurunun gideceği kanal
	let kanal = "805203657192636446" // başvurunun yapılacağı kanal
  let atlanticode = "805198023901577257" // bot eklendi / onaylandı / reddedildi kanalı
	message.delete()
  if (message.channel.id !== kanal) return message.channel.send(`**Botun için sertifika talebini yalnızca <#${kanal}> kanalında yapabilirsin.**`).then(msg => msg.delete(10000))
  message.delete()
	if (message.channel.id == kanal) {
  message.delete()
  if (!sefamert) return message.channel.send(`**Botunun idsini yazmalısın.**`).then(msg => msg.delete(10000))
  message.delete()
  if (!onaylımı) return message.channel.send(`**Botunun DBL onaylımı?**`).then(msg => msg.delete(10000))
  message.delete()
  if (!prefix) return message.channel.send(`Botunun prefixini yazmalısın.**`).then(msg => msg.delete(10000))
message.delete()


  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`[Botu Test İçin Ekle](https://discordapp.com/oauth2/authorize?client_id=${sefamert}&scope=bot&permissions=0)`, true)
  .setTitle("Nick | Botlist")
  .addField("Bot Sahibi", message.author.tag )
  .addField("Bot Sahibi İd", message.author.id)
  .addField("Bot ID", sefamert)

  client.channels.get(basvuru).send(embed)

  client.channels.get(atlanticode).send(`<a:barcode_idle:768558340757782548>  ${message.author} **adlı kullanıcının** <@${sefamert}> **adlı botu için sertifika talebi alındı.**`)
  message.channel.send(`**Botunuz İçin Olan Sertifika Talebiniz Sıraya Alındı.**`).then(msg => msg.delete(5000))
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sertifika-talep','sertifika-ekle'],
  permLevel: 0
};

exports.help = {
  name: 'sertifika', 
  description: "Botunuz için sertifika başvurusu yapar.",
  usage: 'sertifika <botid> <dbl-onaylımı> <prefix>'
};