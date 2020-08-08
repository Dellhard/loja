const Discord = require('discord.js')
const shorten = require('isgd');
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const baka = new Discord.RichEmbed()   
  let avatar1 = message.client.user.displayAvatarURL
      
  baka.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
  baka.setTimestamp()
  baka.setColor(`RANDOM`)
  baka.setDescription("``/encutar`` \n\n**Encurtar um link grande, e ficar pequeno.**\n\n **Jeito de usar**: /encutar `<URL> <nome>`")
  baka.addField(`📗 Exemplos`, "`/encurtar <URL> dellhard`")
  baka.setFooter(`Ações`, avatar1)
  if(!args[0])  return message.reply(baka)

    if (!args[1]) {

        shorten.shorten(args[0], function(res) {
            if (res.startsWith('Causa do erro:')) return message.channel.send('Por favor, mencione um **URL** válido.');
            message.channel.send(`**<${res}>**`);

        })

    } else { 

        shorten.custom(args[0], args[1], function(res) {

            if (res.startsWith('Erro ao tentar executar, motivo: ')) return message.channel.send(`**${res}**`);
              message.channel.send(`Seu link: **<${res}>**`);

        }) 

    }
    

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'encurtar',
   
};