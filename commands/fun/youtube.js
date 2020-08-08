const Discord = require("discord.js");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube(`AIzaSyCatYRqrPFyzIhaQ7bdl_n7tT5sUvrK-MY`);



module.exports.run = async (bot, message, args) => {

    const baka = new Discord.RichEmbed()   
    let avatar1 = message.client.user.displayAvatarURL
        
           baka.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
           baka.setTimestamp()
           baka.setColor(`RANDOM`)
           baka.setDescription(" ``-youtube`` \n\n**Pesquisar um vídeo no youtube.**\n\n **Jeito de usar**: /youtube `<nome>`")
           baka.addField(`📗 Exemplos`, "`/youtube dellhard`")
           baka.setFooter(`Ações`, avatar1)

            if(!args[0])  return message.reply(baka)
               youtube.searchVideos(args, 1).then(results => {

          const ytEmbed = new Discord.RichEmbed()
          .setAuthor(`Procurando: ${args}`.split(',').join(' '))
          .setThumbnail(results[0].thumbnails.high.url)
          .setColor('RANDOM') 
          .addField('Canal', results[0].channel.title, true)
          .addField('Título', results[0].title, true)
          .addField('Descrição', results[0].description)
          .addField('Link Direto', `https://youtu.be/${results[0].id}`);

          message.channel.send(ytEmbed);
      }).catch(console.log);

}

module.exports.help = {
  name: "youtube"
}