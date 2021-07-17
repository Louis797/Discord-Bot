require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`logged in as ${client.user.tag}`);
});

client.on('message', async (msg) => {
	if (msg.content.toLowerCase().includes('ping') && msg.content.length < 7) {
		msg.reply('pong !');
	} else if (
		msg.content.toLowerCase().includes('pong') &&
		msg.content.length < 7
	) {
		msg.reply('...ping..?');
	} else if (msg.content == 'salut') {
		msg.channel.send('Yo !');
	}
	for (var i = 0; i < motsInterdits.length; i++) {
		if (msg.content.toLowerCase().includes(motsInterdits[i])) {
			msg.reply(
				`eh oh dites donc c'est pas bien de dire ça non mais on est où là.`
			);
			break;
		}
	}
});

client.on('messageDelete', (msg) => {
	message.reply(
		'Arrêtetout de suite de supprimer des messages. Je te vois, tu sais.'
	);
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
];

//! Fonctionalités implémentées :

//? Dit bonjour quand il se connecte à un serveur,
//? Dit Yo quand on dit salut,
//? Répond pond si on dit ping,
//? Répond ping si on dit pong,
//? Répond que c'est pas bien quand on dit un gros mot
