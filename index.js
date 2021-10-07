const { Client, Intents } = require('discord.js');
const { token } = require('./config/config.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { prefix } = require('./config/config.js')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(token);