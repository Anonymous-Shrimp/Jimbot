const Discord  = require('discord.js');
const client = new Discord.Client();

prefix = 'jim ';

triggerMessage = 'sus';

designatedVC = null;

photoPaths = '/images';

client.once('ready', () => {
    console.log('Jimbot is online!')
});

client.on('message', message =>{
    args = [""];

    if(message.author.bot){ 
        return;
    }
    /*else if(message.content.contains(triggerMessage)){
        
        
        message.react('👨‍❤️‍💋‍👨');

        return;
    }*/
    else if(message.content.startsWith(prefix)){
        args = message.content.slice(prefix.length).split(/ +/);
        
        message.react('👨‍❤️‍💋‍👨');
    }
    const command = args.shift().toLowerCase();
    console.log(args);
    console.log(command);
    

    if(command === 'ping'){
        message.channel.send('pong!');
        
    }else if(command === 'join'){
        if(designatedVC != null){
        designatedVC.join();
        }
        
    }else if(command === 'set'){
        if (message.member.voice.channel) {
            let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
            
            designatedVC = message.member.voice.channel;
            
            message.channel.send('ID: ' + designatedVC.id);
            
        } else {
            message.channel.send('You need to join a voice channel first!')
            .then(message => {
            }).catch();
        }
    }else if(command === 'clear'){
        designatedVC = null;
    }else if(command === 'display'){
        message.channel.send('ID: ' + designatedVC.id);
    }else if(command === 'cycle'){
      
    }
    


    
})
client.login('OTM1MjUyNDk5Mzg3MDAzMDAw.Ye77xA.VwFxPl1YWO4rJcnNtDKvjjk_zyk'); 