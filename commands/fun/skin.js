const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {

    let skin = args.slice(0).join(' ');
    if (skin.length < 1) return message.reply('você precisa colocar um nickname de um jogador premium.');
      
    let skin1 = new Discord.RichEmbed()
    
    .setTitle(`Nick: **${args[0]}**`)
    .setColor("#0051FF")
    .setImage(`https://mc-heads.net/body/${args[0]}`)
    .setDescription(`**[Clique aqui](https://mc-heads.net/download/${args[0]})** para baixar: 📥`)
    .setFooter(`${bot.user.username}`, `${message.author.avatarURL}`)
    .setTimestamp()
    message.channel.send(skin1)
};

module.exports.help = {
    name: "skin"
}