const Discord = require('discord.js');

exports.run = (bot,message,args) => {

 
    message.channel.send('<:KeelTa_msg:636763008093126657> | **Verificando a latência**...').then(message => {

     message.delete(400)
     let clientping = new Date() - message.createdAt;
     let embed = new Discord.RichEmbed()

 .setTitle("✅ | Informações sobre a **Latência**")
 .setAuthor(message.author.username, message.author.avatarURL)
 .setColor("RANDOM")
 .addField("⚠️ BOT: ", Math.floor(clientping) + "ms", true)
 .addField("🖥️ API: ", Math.floor(bot.ping) + "ms", true)
 .setTimestamp()
 .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL);
 message.channel.send(embed)

    })
}


