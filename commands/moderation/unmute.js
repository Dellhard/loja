const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  
       if(message.guild === null)return;

  //!nomute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send("Use, /unmute @jogador 1s/m/h/d");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("você não tem permissão!");
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

  await
  message.channel.send(`<@${tomute.id}> não está mais silenciado!`)
  (tomute.removeRole(muterole.id));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> não está mais silenciado!`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "unmute"
}