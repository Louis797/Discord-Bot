require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client({
	partials: ['MESSAGE'],
});

client.on('ready', () => {
	console.log(`logged in as ${client.user.tag}`);
});

client.on('message', async (message) => {
	if (
		message.content.toLowerCase().includes('ping') &&
		message.content.length < 7
	) {
		message.reply('pong !');
		message.reply(message.content);
		message.reply(message.author);
		client.channels.cache.get(`866376359962214450`).send(`Text`);
	} else if (
		message.content.toLowerCase().includes('pong') &&
		message.content.length < 7
	) {
		message.reply('...ping..?');
	} else if (message.content == 'salut') {
		message.channel.send('Yo !');
	} else if (message.content == 'comment ça va ?') {
		message.channel.send('Bof :slight_frown: ');
	} else if (message.content == 'vive les bots') {
		message.react('❤️');
	} else if (message.content == '69') {
		message.react('6️⃣');
		message.react('9️⃣');
		message.reply('Nice.');
	}
	for (var i = 0; i < motsInterdits.length; i++) {
		if (message.content.toLowerCase().includes(motsInterdits[i])) {
			message.reply(
				`eh oh dites donc c'est pas bien de dire ça non mais on est où là.`
			);
			break;
		}
	}
});

client.on('messageDelete', (message) => {
	message.reply(
		`Un de tes messages a été suprimé : '${message.content}', ${message.createdAt}`
	);
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

motsInterdits = [
	'bite',
	'connard',
	'pute',
	'chier',
	'merde',
	'baiser',
	'baise',
	'branler',
	'branlette',
	'salope',
	'enculer',
	'trou du cul',
	'foutre',
	'caca',
	'chibre',
	'pisse',
	'pipi',
	'couille',
	'con',
	'abruti',
	'niquer',
	'batard',
	'nique',
];

//! Fonctionalités implémentées :

//? Dit bonjour quand il se connecte à un serveur,
//? Dit Yo quand on dit salut,
//? Répond pond si on dit ping,
//? Répond ping si on dit pong,
//? Répond que c'est pas bien quand on dit un gros mot
//? ...
