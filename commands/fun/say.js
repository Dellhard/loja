const Discord = require('discord.js')

exports.run = async (bot, message, args, level) => {
    let member = args.slice(0).join(" ");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("você não tem permissão!")
    const baka = new Discord.RichEmbed()   
    let avatar1 = message.client.user.displayAvatarURL     
    baka.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
    baka.setTimestamp()
    baka.setColor(`RANDOM`)
    baka.setDescription(" ``/say`` \n\n**Fazer o bot escrever.**\n\n **Jeito de usar**: /say `<texto>`")
    baka.addField(`📗 Exemplos`, "`/say Olá.`")
    baka.setFooter(`Ações`, avatar1)
   if(!member) return message.reply(baka)
           
   message.delete(0)
   let mensagem = args.join(" ");

  message.delete().catch(O_o=>{});
  message.channel.send(mensagem); 
}

 
