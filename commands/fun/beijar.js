
const Discord = require("discord.js");
const superagent = require("snekfetch");
const cooldown = new Set();
module.exports.run = async(bot, message, args) => {
  if (cooldown.has(message.author.id)) {
      let cooldownemb = new Discord.RichEmbed()
      .setAuthor(`${message.author.username} espere...`, message.author.displayAvatarURL)
      .setDescription(`Você precisa esperar um pouco para executar novamente!`)
      .setColor(`RED`)
      .setFooter(`Está bem, vou esperar. ⛔`)
      return message.channel.send(cooldownemb).then(message => {
       message.react('⛔') 
      })
      
      }
      cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 3000);
        let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.id
        let bicon = message.client.user.displayAvatarURL
        let bnome = message.client.user.username

        
        const baka = new Discord.RichEmbed()   

        if(message.guild === null)return;

        let avatar1 = message.client.user.displayAvatarURL
        
        baka.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
        baka.setTimestamp()
        baka.setColor(`RANDOM`)
        baka.setDescription("⚠️Comando: ``/beijar`` \n\n🔄 **Beijar alguém querido.**\n\n🤖 **Jeito de usar**: /beijar `<@jogador>`")
        baka.addField(`📗 Exemplos`, "`/beijar @dellhard`")
        baka.setFooter(`Clique em para ⛔ fechar.`, avatar1)

            if(!args[0])  return message.reply(baka).then(async msg => {

              msg.react("⛔")
 
             const a1 = (reaction, user) => reaction.emoji.name ==='⛔' && user.id === message.author.id
             const b1 = msg.createReactionCollector(a1, { time: 300000 });
            
             b1.on("collect", c1 => {
             msg.delete(baka)
             c1.remove(message.author.id)
          })
      })
            
             const user = message.mentions.users.first();

        superagent.get('https://nekos.life/api/v2/img/kiss')
            .end((err, response) => {
          const lewdembed = new Discord.RichEmbed()
          .setImage(response.body.url)
          .setColor(`RANDOM`)
          .setDescription(("💏" + message.author.toString() + " **beijou** " + user.toString()))
          .setFooter(`Clique em ✅ para retribuir!`)
          .setURL(response.body.url);
          
        message.reply(lewdembed).then(async msg => {
            await msg.react("✅")
          

            })
            
        })

}

/**
 * Criado por Dellhard
 * Name: TheDarks - BOT
 * Version: 2.3.3
 * Modificação: 12/11/2019 - 22/06
 */