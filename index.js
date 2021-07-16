require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`logged in as ${client.user.tag}`);
	message.send(`I just arrived ! How's everyone`);
});

client.on('message', async (message) => {
	if (message.content == 'ping') {
		message.reply('pong !');
	} else if (message.content == 'bite') {
		message.reply(`eh oh dites donc c'est pas bien de dire ça là oh !`);
	}
});
client.login(process.env.TOKEN);
