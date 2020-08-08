const Discord = require('discord.js')

module.exports = {
    run: (client, message, args) => {

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Apenas superiores podem executar esse comando.")
        message.delete(2000).catch()

        let splitarg = args.join(" ").split(" / ")

        let votacao = splitarg[0]

    

        const baka = new Discord.RichEmbed()   
    let avatar1 = message.client.user.displayAvatarURL     
    baka.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
    baka.setTimestamp()
    baka.setColor(`RANDOM`)
    baka.setDescription(" ``/votar`` \n\n**Iniciar uma votação no servidor.**\n\n **Jeito de usar**: /votar `<texto>`")
    baka.addField(`📗 Exemplos`, "`/votar Querem doce?`")
    baka.setFooter(`Ações`, avatar1)
   if(!votacao)  return message.reply(baka)
let nomedaguild = message.guild

let anuncioembed = new Discord.RichEmbed()
anuncioembed.setColor("RANDOM")
anuncioembed.setDescription(`Ao usar **/votar**, você estará prestes a mencionar várias pessoas. Tem certeza?`)
anuncioembed.setFooter('Você tem 13s para concordar, ou exclua essa mensagem.')
anuncioembed.setTimestamp();

return message.channel.send(anuncioembed).then(async msg => {
     msg.react("✅") 


    let anuncioembed = new Discord.RichEmbed()  

    .setAuthor(`${message.guild.name}`,`${message.author.avatarURL}`)
    .setColor("RANDOM")
    .setDescription(`${votacao}`)
    .setColor('#fe1862')
    .setFooter(`Votação iniciada por ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp();

    const a1 = (reaction, user) => reaction.emoji.name ==='✅' && user.id === message.author.id
    const b1 = msg.createReactionCollector(a1, { time: 13000 });
   
    b1.on("collect", c1 => {
    msg.edit(anuncioembed)
    msg.edit('${message.guild.roles.size - 1}')
    msg.react('✅') && msg.react("🚫")
    c1.remove(message.author.id)

})

})
}}