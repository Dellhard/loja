const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  
  message.delete(1000).catch(O_o=>{}); //delete previous message (input command)

  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  const baka = new Discord.RichEmbed()   
    let avatar1 = message.client.user.displayAvatarURL     
    baka.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
    baka.setTimestamp()
    baka.setColor(`RANDOM`)
    baka.setDescription(" ``/reportar`` \n\n**Denunciar alguém do servidor.**\n\n **Jeito de usar**: /reportar `@jogador <motivo>`")
    baka.addField(`📗 Exemplos`, "`/reportar @dellhard Palavras inapropriadas.`")
    baka.setFooter(`Ações`, avatar1)
   if(!rUser)  return message.reply(baka)

  .catch(O_o=>{});
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  reportEmbed.setDescription("Reportes")
    reportEmbed.setColor("#E5DA2A")
    reportEmbed.addField("Acusado:", `${rUser} ID: ${rUser.id}`)
    reportEmbed.addField("Vitíma:", `${message.author} ID: ${message.author.id}`)
    reportEmbed.addField("Canal:", message.channel)
    reportEmbed.addField("Dia:", message.createdAt)
    reportEmbed.addField("Motivo:", reason);
    reportEmbed.setFooter('TDK')
    reportEmbed.setTimestamp()


    let reportschannel = message.guild.channels.find(`name`, "reportes");
    if(!reportschannel) return message.channel.send(":x: | Não consegui achar o chat `reportes`.");
  
  
    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
}

module.exports.help = {
  name : "report"
}
