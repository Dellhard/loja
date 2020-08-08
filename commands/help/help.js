
const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

        let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.id
        let bicon = message.client.user.displayAvatarURL
        let bnome = message.client.user.username
        var ajuda = new Discord.RichEmbed()
        
            .setThumbnail(bicon)
            .setAuthor(`${bnome}`, bicon)
            .setDescription("Sua Descrição")
            .addField(`Reação: 1⃣`, `Visualizar todos os comandos de **administrador**`)
            .addField(`Reação: 2⃣`, `Visualizar todos os comandos **públicos**.`)
            .addField(`Reação: ⬅`, `**Voltar ao menu**.`)
            .addField(`Reações: ❌`, `Fechar!`)
            .setColor("RANDOM")
            message.channel.send(ajuda).then(async msg => {
            await msg.react("1⃣")
            await msg.react("2⃣")
            await msg.react('⬅')
            await msg.react('❌')

            var ajuda2 = new Discord.RichEmbed()
            .setThumbnail(bicon)
            .setAuthor(`${bnome}`, bicon)
            .setTitle(`Comandos de administradores`)
            .addField(`/punir`, `Banir um jogador, que esteja quebrando as regras;`)
            .addField(`/banir`, `Banir um jogador, que esteja quebrando as regras;`)
            .addField(`/warn`, `ainda nao tem;`)
            .addField(`/kick`, `Expulsar um jogador, que esteja quebrando as regras.`)
            .addField(`/mute`, `Silenciar um jogador. que esteja quebrando as regras.`)
            .addField(`/unmute`, `Tirar o silencio do jogador.`)
            .addField(`/lock`, `Bloquear um canal, e ninguém poderá escrever.`)
            .addField(`/votar`, `Iniciar uma votação`)
            .addField(`/limpar`, `Limpar o bate-papo!`)
            .addField(`/say`, `Fazer o bot conversar!`)
            .addField(`/anunciar`, `Fazer um anúncio no servidor!`)
            .setFooter(`TDK - BOT`)
            .setTimestamp()
            .setColor("RANDOM")

            var ajuda3 = new Discord.RichEmbed()
            .setThumbnail(bicon)
            .setAuthor(`${bnome}`, bicon)
            .setTitle(`Comandos públicos.`)
            .addField(`/ping`, `Veja a latência da API e do BOT`) 
            .addField(`/serverinfo`, `Saber todas informações sobre o servidor!`)
            .addField(`/youtube`, `Pesquisar um canal no youtube.`)
            .addField(`/botinfo`, `Saber todas informações sobre o bot`)
            .addField(`/userinfo`, `Veja todas informações do jogador mencionado.`)
            .addField(`/avatar`, `Pegue um avatar de alguém, ou até mesmo o seu!`)    
            .addField(`/reportar`, `Reporte alguém!`)    
            .addField(`/infocanal`, `Informações do canal!`)
            .addField(`/encurtar`, `Encurtar um link grande!`)
            .addField(`/dono`, `ver o dono/criador do bot!`)
            .addField(`/skin`, `ver uma skin de minecraft!`)
            .setFooter(`TDK- BOT`)
            .setTimestamp()
            .setColor("RANDOM")

            const a1 = (reaction, user) => reaction.emoji.name ==='1⃣' && user.id === message.author.id
            const a2 = (reaction, user) => reaction.emoji.name ==='2⃣' && user.id === message.author.id
            const a3 = (reaction, user) => reaction.emoji.name ==='⬅' && user.id === message.author.id
            const a4 = (reaction, user) => reaction.emoji.name ==='❌' && user.id === message.author.id
        
            const b1 = msg.createReactionCollector(a1, { time: 300000 });
            const b2 = msg.createReactionCollector(a2, { time: 300000 });          
            const b3 = msg.createReactionCollector(a3, { time: 300000 });
            const b4 = msg.createReactionCollector(a4, { time: 3000000 });

            b1.on("collect", c1 => {
            msg.edit(ajuda2)
            c1.remove(message.author.id)
            })
            b2.on("collect", c2 => {
            msg.edit(ajuda3)
            c2.remove(message.author.id)
            })
            b3.on("collect", c3 => {
            msg.edit(ajuda)   
            c3.remove(message.author.id) 
            })
            b4.on("collect", c4 => {
            msg.delete(0);  
            c4.remove(message.author.id) 
         })

    })

}

module.exports.help = {
    nome: "help"
}