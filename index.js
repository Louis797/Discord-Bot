require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ['MESSAGE'],
});

let motsInterdits = ['connard'];
let x = 100000;
let y = 0;
let moi = '386810143268143106';

client.on('presenceUpdate', () => {
    client.users.fetch(moi).then((user) => {
        user.send('Bonjour à toi, plus moi...');
})

function Timer() {
    if (x >= 2) {
        x -= 1;
        client.users.fetch(id).then((user) => {
            user.send(x);
        });
    } else {
        if (y == 0) {
            y += 1;
            x -= 1;
            client.users.fetch(id).then((user) => {
                user.send(x);
                user.send('Youpi !');
            });
        }
    }
}

client.on('ready', () => {
    client.channels.cache
        .get(`866376359962214450`)
        .send('Je suis connecté désormais ahahahha');
});

client.on('message', async (message) => {
    if (
        message.content.toLowerCase() == 'timer' &&
        message.author.tag == 'Siu0l#8218'
    ) {
        Timer();
        setInterval(Timer, 60000);
    } else if (
        message.content.toLowerCase().includes('ping') &&
        message.content.length < 7
    ) {
        message.reply('pong !');
    } else if (
        message.content.toLowerCase().includes('pong') &&
        message.content.length < 7
    ) {
        message.reply('...ping..?');
    } else if (message.content == 'salut') {
        message.channel.send('Bonjour !');
    } else if (message.content == 'comment ça va ?') {
        message.channel.send('ça va :grin: ');
    } else if (message.content == 'vive les bots') {
        message.react('❤️');
    } else if (message.content == '69') {
        message.react('6️⃣');
        message.react('9️⃣');
        message.reply('Nice.');
    }
    for (var i = 0; i < motsInterdits.length; i++) {
        if (message.content.toLowerCase().includes(motsInterdits[i])) {
            message.author.send(
                `eh oh dites donc c'est pas bien de dire ça non mais on est où là.`
            );
            break;
        }
    }
});

client.on('messageDelete', (message) => {
    message.author.send(
        `Le message : "${message.content}",  de ${message.author} a été supprimé.`
    );
});

client.on('channelDelete', function (channel) {
    client.channels.cache
        .get(`866376359962214450`)
        .send(`channelDelete: ${channel}`);
});

client.login(process.env.TOKEN);

/*
client.on('presenceUpdate', (oldPresence, newPresence) => {
    let member = newPresence.member;
    if (member.id === moi) {
        if (oldPresence.status !== newPresence.status) {
            let channel = channel.cache.get('866376359962214450');
            let text = '';
            if (newPresence.status === 'online') {
                text = 'Our special member is online!';
            } else if (newPresence.status === 'offline') {
                text = 'Oh no! Our special member is offline.';
            }
            channel.send(text);
        }
    }
});
*/