  const Discord = require('discord.js');


  exports.run = function(client, message, args) {

  if (!message.member.roles.has("808782058192633887")) return message.channel.send(`**:warning: ・ Bu komutu kullanmnız için yetkiniz yetmiyor.**`);

	let sefamert = args[0]
  let sahip = args[1]
  let prefix = args[2]
  let kanal = "808777088537985024" // bot onaylama reddetme kanalı
	let atlanticode = "808779433024553031" // bot durum log kanalı
  let botsahipkanal = "808781575738097684" // bot sahiplerinin gösterileceği kanal
message.delete()  
	if (message.channel.id !== kanal) return message.channel.send(`**ℹ ・ Başvuruda bulunulmuş bir botu yalnızca <#${kanal}> kanalında onaylayabilirsin.**`).then(msg => msg.delete(5000))
message.delete()  
if (!sefamert) return message.channel.send(`**:exclamation: ・ Botun idsini yazmalısın.**`).then(msg => msg.delete(5000))
message.delete()  
if (!sahip) return message.channel.send(`**:exclamation: ・ Botun sahibinin idsini yazmalısın.**.`).then(msg => msg.delete(5000))
message.delete()  
 if (!prefix) return message.channel.send(`**:exclamation: ・ Botun prefixini yazmalısın.**.`).then(msg => msg.delete(5000))
  message.delete()
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Nick | Botlist")
  .addField("Botu Sunucuna Ekle", "[0 Perm Ekle](https://discordapp.com/oauth2/authorize?client_id=${sefamert}&scope=bot&permissions=0) & [8 Perm Ekle](https://discordapp.com/oauth2/authorize?client_id=${sefamert}&scope=bot&permissions=8)")
  .addField("Botun Geliştiricisinin İdsi", sahip)
  .addField("Botun İdsi", sefamert)
  .addField("Botun Prefixi", prefix)
  .addField("Botu Onaylayan Yetkili", message.author.tag )
  .setImage("https://cdn.discordapp.com/attachments/794721957677367356/795212264214233098/20200806_002234.jpg")
  .setThumbnail(message.author.avatarURL)
  .setTimestamp()
  client.channels.get(botsahipkanal).send(embed)
  
  client.channels.get(atlanticode).send(`<@${sahip}> **adlı geliştiricinin; <@${sefamert}> adlı, __${sefamert}__ idli botu onaylandı.** \n **Bizimle çalıştığınız için teşekkürler, <@${sahip}>!**\n __**Botu Onaylayan Yetkili :**__ ${message.author} - **${message.author.tag}**`)
  message.channel.send(`**:white_check_mark: ・ Başarıyla botu onayladınız.**`).then(msg => msg.delete(10000))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-onayla','onayla'],
  permLevel: 0
};

exports.help = {
  name: 'botonayla', 
  description: "Başvuru yapılan botu onaylar.",
  usage: 'botonayla <bot ismi>'
};6
