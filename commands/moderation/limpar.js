const Discord = require("discord.js");
const cooldown = new Set();

exports.run = (bot,message,args) => {

    if (cooldown.has(message.author.id)) {
        let cooldownemb = new Discord.RichEmbed()
        .setAuthor(`${message.author.username} espere..., message.author.displayAvatarURL`)
        .setDescription('Você precisa esperar 5 segundos!')
        .setColor('RANDOM')
        .setFooter('Mensagem vai ser deletada em 5sg...')
        return message.channel.send(cooldownemb).then(message => {
         message.delete(5000) 
        })
        
        }
        cooldown.add(message.author.id);
    
        setTimeout(() => {
            cooldown.delete(message.author.id);
        }, 10000);

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**você não tem permissão.**");
    let mensagemDeletar = args.slice(0).join(" ");
    

    const baka = new Discord.RichEmbed()   
    let avatar1 = message.client.user.displayAvatarURL     
    baka.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
    baka.setTimestamp()
    baka.setColor(`RANDOM`)
    baka.setDescription(" ``/limpar`` \n\n**Limpar o chat.**\n\n **Jeito de usar**: /limpar `<quantidade>`")
    baka.addField(`📗 Exemplos`, "`/limpar 100`")
    baka.setFooter(`Ações`, avatar1)
   if(!args[0])  return message.reply(baka);
   if(mensagemDeletar < 2 || mensagemDeletar > 100) return message.reply(baka);

    if(isNaN(args[0])) return message.reply("indique a quantidade que deseja deletar.");

    
    message.channel.bulkDelete(mensagemDeletar);
    message.channel.send(`> Foram limpas **${mensagemDeletar}** mensagens. \n>  Este chat foi limpo por ${message.author}.`)
    
}

exports.help = {
    name: "limpar"
}
//// Sistema editado por Dellhard