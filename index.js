const Discord = require('discord.js');
const client = new Discord.Client();
let selfbot = 'guildMemberAdd';

client.login("");

client.on('ready', () =>{
    console.log('iniciado!')
});

client.on('guildMemberAdd', member =>{

    client.users.get(member.id).send('**Venha fazer parte da nossa família da Yound Community :heart: ~~~~>https://discord.gg/TZvbXAe<~~~~**')
});