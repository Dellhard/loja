/**
 * Criado por Dellhard
 * Name: KeelTa
 * Version: 1.0.0
 * Modificação: 24/10/2019 - 00/16
 */

const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-BR');

exports.run = (bot, message, args) => {
    let embed = new Discord.RichEmbed()
message.delete(0);
    embed.setTitle(`🤖 Informações do ${bot.user.username}`)
    embed.addField(`Nome:`, `❣ ${bot.user.username}`)
    embed.addField(`💗 Usuários:`, ` ${bot.users.size}`)
    embed.addField(` Canais:`, `🔊 ${bot.channels.size}`)
    embed.addField(`🙅 Servidores:`, `${bot.guilds.size}`)
    embed.addField(`País:`, `:flag_br: Brazil`)
    embed.setFooter(`${bot.user.username}`, "https://images-ext-1.discordapp.net/external/iO5KlC8vLfnj6qNxlElgwT5VYC_I1Y7KeK_ft5mU1GY/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/627704612857839629/bf7034526da28c7d3c8fbf4f0af98a3e.png?width=480&height=480")
    embed.setThumbnail('https://cdn.discordapp.com/avatars/627704612857839629/bf7034526da28c7d3c8fbf4f0af98a3e.png?size=2048')
    embed.setTimestamp()
    embed.setColor("RANDOM")

    message.channel.send(embed);
}

module.exports.help = {
    name: "botinfo"
}
