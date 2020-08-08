const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply("Você não tem **permissão** suficiente!")
    let member = message.mentions.members.first()

    const baka = new Discord.RichEmbed()   
    let avatar1 = message.client.user.displayAvatarURL     
    baka.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
    baka.setTimestamp()
    baka.setColor(`RANDOM`)
    baka.setDescription(" ``/punir`` \n\n**Banir um jogador.**\n\n **Jeito de usar**: /punir `@jogador <motivo>`")
    baka.addField(`📗 Exemplos`, "`/punir @Dellhard :)`")
    baka.addField(`🔁 Outra forma:`, "`/banir`")
    baka.setFooter(`Ações`, avatar1)
   if(!member)  return message.reply(baka)

   let anuncioembed = new Discord.RichEmbed()
   
   anuncioembed.setColor("RANDOM")
   anuncioembed.setDescription(`Jogador punido com sucesso! Clique em ✅ para ver todas informações!`)
   anuncioembed.setTimestamp();
   
   return message.channel.send(anuncioembed).then(async msg => {
   
        msg.react("✅")
        
    if(!member.bannable)
    return message.reply("Eu não posso banir esse usuário, ele pode ter um cargo maior que o meu.")
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Não informado"
    await member.ban(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não consigo expulsar esse jogador, devido: ${error}`));

        let pEmbed = new Discord.RichEmbed()
        .setTitle("🚔 Punição.")
        .addField("Jogador punido:", `${member.user.tag}`)
        .addField("Author:", `${message.author.tag}`)
        .addField("Motivo:", `${reason}`)
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("RANDOM").setTimestamp()
   
       const a1 = (reaction, user) => reaction.emoji.name ==='✅' && user.id === message.author.id
       const b1 = msg.createReactionCollector(a1, { time: 3000000 });
      
       b1.on("collect", c1 => {
       msg.edit(pEmbed)
       c1.remove(message.author.id);

})

module.exports.help = {
    name: "punir"
}
})
//// Sistema editado por Dellhard

}