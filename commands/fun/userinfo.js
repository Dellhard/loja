
const Discord = require("discord.js");
const moment = require("moment");
moment.locale('pt-BR');

module.exports.run = async (bot, message, args) => {
  var mention = message.guild.member(message.mentions.users.first());

  const baka = new Discord.RichEmbed()  

    let avatar1 = message.client.user.displayAvatarURL   

    baka.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
    baka.addField(` | Comando`, `/userinfo`,true)
    baka.addField(` | Descrição`, `Ver informações de alguém.`)
    baka.addField(` | Jeito correto de usar:`, `/userinfo <@jogador>`)
    baka.addField(` | Exemplo:`, `/userinfo @XxGadoxXBr`)
    baka.addField(` | Alternativas:`, `Não definido.`,true)
    baka.setColor(` | RANDOM`)
    baka.setTimestamp()
    baka.setThumbnail('https://cdn.discordapp.com/attachments/633072624737583119/644705285608439809/emoji.png')
    baka.setFooter(`Clique em ⛔ para fechar.`, avatar1)

   if(!mention)  return message.reply(baka).then(async msg => {

    msg.react("⛔")

   const a1 = (reaction, user) => reaction.emoji.name ==='⛔' && user.id === message.author.id
   const b1 = msg.createReactionCollector(a1, { time: 300000 });
  
   b1.on("collect", c1 => {
   msg.delete(baka)
   c1.remove(message.author.id)
})
})

  const userlol = new Discord.RichEmbed()

  let onff = mention.presence.status;
 
  userlol.setThumbnail(mention.user.avatarURL)
  userlol.setColor("RANDOM")
  userlol.setAuthor(message.author.username, message.author.avatarURL)
  userlol.setTitle(`Informações do usuário ${mention.user.username} 📲`)
  userlol.addField(`📥 Conta foi criada no dia:`, moment(mention.user.createdAt).format('LLL'))
  userlol.addField(`🔰 Primeiro login:`, moment(mention.user.joinedAt).format('LLL'))
  userlol.addField(`🏷 Cargos do usuário:`, mention.roles.filter((r) => r.name !== '@everyone').map((role) => role.name).join(', '))
  userlol.addField(`🌐 Status do ${mention.user.username}`, ` | ${onff}`)
  userlol.addField(`⚠️ Usuário:`, mention.user.tag)
  userlol.addField(`🔱 ID:`,mention.user.id)
  userlol.setFooter(`${bot.user.username}`)
  userlol.setTimestamp()
  message.channel.send(userlol)
  console.log(`==========================================`)
  console.log(`Informações do: ${message.author.tag}`)
  console.log(`ID de usuário: ${message.author.id}`)
  console.log(`==========================================`)
}

module.exports.help = {
  name:"userinfo"
}