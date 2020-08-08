const Discord = require("discord.js");
const cooldown = new Set()

module.exports.run = async (bot, message) => {
    
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

    
    var user = message.mentions.users.first();

    if (!user) user = message.author;

    var targetInvites = await message.guild.fetchInvites();

    var invitesUses = 0;

    targetInvites.forEach(invite => {
        if (invite.inviter.id === user.id) {
            invitesUses += invite.uses;
          }
    });

    var embed = new Discord.RichEmbed()
    
    .setThumbnail(user.displayAvatarURL)
    .setTitle(`Nick : ${user.tag}`)
    .addField("Total de invites:", `\`\`\`md\n${invitesUses}\`\`\``)
    .setColor('RANDOM')
    .setFooter(`ID : ${user.id}`)
    .setTimestamp();

    message.channel.send(embed)
};
module.exports.help = {
    name: "checar"
}