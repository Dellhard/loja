const Discord = require('discord.js')
const ms = require('ms');
exports.run = (client, message, args) => {
         if(message.guild === null)return;

               let role = message.member.hasPermission('MANAGE_MESSAGES')
    if(!message.member.hasPermission('MANAGE_MESSAGES'))
      return message.reply("Você não tem permissão de `MANAGE_MESSAGES` ");
  
  
  if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock'];

  const baka = new Discord.RichEmbed()   
    let avatar1 = message.client.user.displayAvatarURL     
    baka.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
    baka.setTimestamp()
    baka.setColor(`RANDOM`)
    baka.setDescription(" ``/lock`` \n\n**Bloquear um canal.**\n\n**Jeito de usar**: /lock `<1s/2m/3h/4d>`")
    baka.addField(`📗 Exemplos`, "`/lock 10s`")
    baka.addField(`🔁 Como tirar`, "`/lock unlock`")
    baka.setFooter(`Ações`, avatar1)
   if(!time)  return message.reply(baka)

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.sendMessage('> Bloqueio do canal foi suspenso.');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.sendMessage(`Canal bloqueado por ${ms(ms(time), { long:true })}`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.sendMessage('Bloqueio suspenso.')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ld'],
  permLevel: 2
};

exports.help = {
  name: 'lockdown',
  description: 'Ele bloqueará um canal pela duração definida, em horas, minutos ou segundos.',
  usage: 'lockdown <tempo>'
};
//// Sistema editado por Dellhard