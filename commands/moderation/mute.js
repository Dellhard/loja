const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  
       if(message.guild === null)return;

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.reply("você não tem permissão!");
  const baka = new Discord.RichEmbed()   
  let avatar1 = message.client.user.displayAvatarURL    

  baka.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
    baka.addField(` | Comando`, `/mute`,true)
    baka.addField(` | Descrição`, `Silenciar alguém do servidor.`)
    baka.addField(` | Jeito correto de usar:`, `/mute <@jogador> [1s/m/h/d]`)
    baka.addField(` | Exemplo:`, `/mute @Dellhard 30m`)
    baka.addField(` | Alternativas:`, `Não definido.`,true)
    baka.setColor(` | RANDOM`)
    baka.setTimestamp()
    baka.setThumbnail('https://cdn.discordapp.com/attachments/633072624737583119/644705285608439809/emoji.png')
    baka.setFooter(`Clique em ⛔ para fechar.`, avatar1)

            if(!tomute)  return message.reply(baka).then(async msg => {

                msg.react("⛔")
   
               const a1 = (reaction, user) => reaction.emoji.name ==='⛔' && user.id === message.author.id
               const b1 = msg.createReactionCollector(a1, { time: 300000 });
              
               b1.on("collect", c1 => {
               msg.delete(baka)
               c1.remove(message.author.id)
            })
        })

  let muterole = message.guild.roles.find(`name`, "Silenciado");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Silenciado",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  let mutetime = args[1];
  if(!mutetime) return message.reply(baka);

  await(tomute.addRole(muterole.id));
  message.react('✅')

  let mute = new Discord.RichEmbed()
   mute.setTitle(message.guild.name)
   mute.setDescription(`Olá amigo, você foi silenciado no servidor **${message.guild.name}**.`)
   mute.addField("Tipo de puniçao", `Mute`)
   mute.addField("Tempo restante:", `Falta: **${ms(ms(mutetime))}**`)
   mute.setThumbnail(message.guild.iconURL)
   mute.setColor('RED')
   mute.setFooter(`${bot.user.username}`, message.client.user.avatarURL)
  tomute.send(mute);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}>, **não está mais silenciado**! ⛔`);
    let mute1 = new Discord.RichEmbed()
    mute1.setTitle(message.guild.name)
    mute1.setDescription(`Olá amigo, você não está mais silenciado no servidor **${message.guild.name}**.`)
    mute1.addField("Tipo de puniçao", `Mute`)
    mute1.setThumbnail(message.guild.iconURL)
    mute1.setColor('RED')
    mute1.setFooter(`${bot.user.username}`, message.client.user.avatarURL)
    tomute.send(mute1);
  }, ms(mutetime));

}

module.exports.help = {
  name: "mute"
}
//// Sistema criado por Dellhard