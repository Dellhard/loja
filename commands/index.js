const Discord = require('discord.js'); //livraria do discord
const bot = new Discord.Client(); //definimos bot, como o novo client
const config = require('./config.json'); //define a pasta das configs
const fs = require('fs'); //define fs
const low = require('lowdb')
const links = require('./links.json')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('infinite.json')
const discloud = require("discloud-status");
const db = low(adapter)

bot.commands = new Discord.Collection(); //definimos o bot.commands

fs.readdir("./commands/", (err, files) => { //ele irá ler a pasta de comandos
    if(err) console.error(err);//se der erro, este irá mostrar no console.log

    let arquivojs = files.filter(f => f.split(".").pop() == "js"); //definimos arquivojs, com o split "." e que tenha js no final.
    arquivojs.forEach((f, i) => { //cada arquivojs...
        let props = require(`./commands/${f}`); //definimos props, que precisa dos arquivos da pasta comandos.
        console.log(`Comando ${f} carregado com sucesso.`);
        
    });
});
 fs.readdir("./commands/moderation/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/moderation/${file}`);
      let commandName = file.split(".")[0];
      console.log(`Carregado com sucesso: ${commandName}`);
      bot.commands.set(commandName, props);
    });
  });
  fs.readdir("./commands/fun/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/fun/${file}`);
      let commandName = file.split(".")[0];
      console.log(`Carregado com sucesso: ${commandName}`);
      bot.commands.set(commandName, props);
    });
  });
  fs.readdir("./commands/index/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/index/${file}`);
      let commandName = file.split(".")[0];
      console.log(`Carregado com sucesso: ${commandName}`);
      bot.commands.set(commandName, props);
    });
  });
  fs.readdir("./commands/help/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/help/${file}`);
      let commandName = file.split(".")[0];
      console.log(`Carregado com sucesso: ${commandName}`);
      bot.commands.set(commandName, props);
    });
  });
bot.on('message', message => {
    responseObject = links;
    if(responseObject[message.content]){
        message.channel.send(responseObject[message.content]);
    }
});

bot.on("guildMemberAdd", member => {

  
});



bot.on('ready', () => {
 
    console.log(`O bot foi iniciado com ${bot.users.size} jogadores, em ${bot.channels.size} canais, e estamos em ${bot.guilds.size} servidores.`)
     
    let status = [
        {name: 'Compre com segurança .', type: 'WATCHING', url: 'https://www.twitch.tv/dellhard'},
        {name: 'Compre com confiaça .', type: 'WATCHING', url: 'https://www.twitch.tv/dellhard'},
        {name: 'Entre na equipe de staff que sempre pensou em entrar .', type: 'WATCHING', url: 'https://www.twitch.tv/dellhard'},
    ]
        function setStatus() {
            let altStatus = status[Math.floor(Math.random()*status.length)]
            bot.user.setPresence({game: altStatus})
        }
        setStatus();
        setInterval(() => setStatus(), 6000)
});

bot.on("guildCreate", guild =>{
    console.log(`O bot entrou nos servidores: ${guild.name} ID: ${guild.id} Jogadores: ${guild.memberCount}`)
})
bot.on("guilDelete", guild =>{
    console.log(`O bot saiu do servidor: ${guild.name} ID: ${guild.id}`)
})

bot.on('message', message => { 
  
    if(message.author.bot) return; 
    if(message.channel.type === "dm") return message.channel.send("Não posso responder no **DM** 🚫") 
    let prefix = config.prefix; 
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(!message.content.startsWith(prefix)) return;
    let arquivocmd = bot.commands.get(command.slice(prefix.length));
    if(arquivocmd) arquivocmd.run(bot,message,args);
    
    if(message.content.startsWith(config.prefix + 'emoji')){ 
        message.guild.emojis.map(em => message.channel.send(`${em} | ${em.name} | ${em.id}`)).join('\n')
    }
    
});

bot.on("guildMemberAdd", member => {
  member.guild.channels.get('737415864776785942').send(member.user.username + ' Entrou no server!')
  var role = member.guild.roles.find("id", "737389927754498048");
  member.addRole(role);
})



bot.login(config.token)
