
const Discord = require("discord.js");
const moment = require("moment");
moment.locale('pt-BR');

module.exports.run = async (bot, message, args) => {
  var mention = message.guild.member(message.mentions.users.first());

  const baka = new Discord.RichEmbed()  

    let avatar1 = message.client.user.displayAvatarURL   

    baka.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
    baka.addField(` | CHERO`, `QUEMADO`)
    baka.addField(` | DE`, `PNEU`)
    baka.addField(` | PNEU `, `DE`)
    baka.addField(` | QUEMADO`, `CHERO`)
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

}

module.exports.help = {
  name:"pneu"
}