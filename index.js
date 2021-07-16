require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

motsInterdits = ['bite', 'connard', 'pute', 'chier', 'merde'];

client.on('ready', () => {
	console.log(`logged in as ${client.user.tag}`);
	message.send(`I just arrived ! How's everyone`);
});

client.on('message', async (message) => {
	if (message.content == 'ping') {
		message.reply('pong !');
	}
	for (var i = 0; i < forbidenWords.length; i++) {
		if (message.content.includes(motsInterdits[i])) {
			message.reply(
				`eh oh dites donc c'est pas bien de dire ça non mais on est où là.`
			);
			break;
		}
	}
});
client.login(process.env.TOKEN);
