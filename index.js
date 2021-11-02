require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client({
	partials: ['MESSAGE'],
});

client.on('ready', () => {
	client.channels.cache
	.get(`866376359962214450`)
	.send('Je suis connecté désormais ahahahha');
});

setInterval(Thing, 10000);
function Thing() {
client.users.fetch('386810143268143106').then((user) => {
	user.send('Yooooooo !')})
}

client.on('message', async (message) => {
	if (
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
	message.author.send(`Le message : "${message.content}",  de ${message.author} a été supprimé.`);
});

client.on('channelCreate', function (channel) {
	client.channels.cache
		.get(`866376359962214450`)
		.send(`channelCreate: ${channel}`);
});

client.on('channelDelete', function (channel) {
	client.channels.cache
		.get(`866376359962214450`)
		.send(`channelDelete: ${channel}`);
});

client.login(process.env.TOKEN);

motsInterdits = ['connard'];
