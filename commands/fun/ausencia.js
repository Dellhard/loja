const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  
  message.delete(1000).catch(O_o=>{}); 

 
   if(!args[0])  return message.reply("Use /ausencia <data> / <motivo>")

  .catch(O_o=>{});

  let texto = args.join(" ").split(" / ")
  let primeiro = texto[0];
  let segundo = texto[1];
  
  if(!segundo) return message.reply("Você não definiu sua ausência.");
  if(!primeiro) return message.reply("Você não definiu sua data.");

  let reportEmbed = new Discord.RichEmbed()
  reportEmbed.setDescription("**Ausência - LOGS** <:redestyle:640649568937181185>")
  reportEmbed.setColor("#E5DA2A")
  reportEmbed.addField("Nickname:", `${message.author}`, true)
  reportEmbed.addField("Servidor:", `Minigames`, true)
  reportEmbed.addField("Data:", primeiro, true)
  reportEmbed.addField("Motivo:", segundo);
  reportEmbed.setFooter(`${bot.user.username}`)

    let reportschannel = message.guild.channels.find(`name`, "ausência");

    if(!reportschannel) return message.channel.send(":x: | Você precisa criar um canal com nome => `#ausência`.") 
   

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed).then(message => {
        message.react("✅")
        message.react("⛔")
    })
  
}
module.exports.help = {
  name : "ausencia"
}
