require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);

client.on('ready', () => {
	console.log(`logged in as ${client.user.tag}`);
});

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
	} else if (message.content.toLowerCase() == 'salut') {
		message.channel.send('Yo !');
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
//? Répond pond si on dit ping,
//? Répond ping si on dit pong,
//? Répond que c'est pas bien quand on dit un gros mot
