
const Discord = require("discord.js");
const moment = require("moment");
moment.locale('pt-BR');

module.exports.run = async (bot, message, args) => {
  var mention = message.guild.member(message.mentions.users.first());

  const baka = new Discord.RichEmbed()  

    let avatar1 = message.client.user.displayAvatarURL   

    baka.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
    baka.addField(` | Comando`, `/warn`,true)
    baka.addField(` | Descrição`, `dar aviso em alguem.`)
    baka.addField(` | Jeito correto de usar:`, `/warn <@jogador> 1/2 ou 2/2`)
    baka.addField(` | Exemplo:`, `/warn @dellhard 1/2`)
    baka.setColor(` | RANDOM`)
    baka.setTimestamp()
    baka.setThumbnail('https://cdn.discordapp.com/attachments/633072624737583119/644705285608439809/emoji.png')
    baka.setFooter(`Clique em ⛔ para fechar.`, avatar1)

   if(!mention)  return message.reply(baka).then(async msg => {

    msg.react("⛔")

   const a1 = (reaction, user) => reaction.emoji.name ==='⛔' && user.id === message.author.id
   const b1 = msg.createReactionCollector(a1, { time: 300000 });

   anuncioembed.setColor("RANDOM")
   anuncioembed.setDescription(`Jogador punido com sucesso! `)
   anuncioembed.setTimestamp();
  
   b1.on("collect", c1 => {
   msg.delete(baka)
   c1.remove(message.author.id)
})
   say 
})
}

module.exports.help = {
  name:"warn"
}