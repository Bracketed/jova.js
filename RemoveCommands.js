import dotenv from 'dotenv';
dotenv.config();
import '@sapphire/plugin-logger/register';
import { REST, Routes, GatewayIntentBits } from 'discord.js';
import { SapphireClient } from '@sapphire/framework';
import ora from 'ora';

const OraSpinner1 = ora('Getting client info...');
OraSpinner1.start();

const Client = new SapphireClient({
	intents: [GatewayIntentBits.Guilds],
});

await Client.login();
OraSpinner1.succeed('Logged into client and got info!');

const OraSpinner2 = ora('Removing Commands...');
OraSpinner2.start();

const rest = new REST().setToken(process.env.BOT_TOKEN);

await rest
	.put(Routes.applicationCommands(Client.user.id), { body: [] })
	.then(() => {
		OraSpinner2.succeed(
			`Removed all commands from ${Client.user.username}`
		);
		process.exit(0);
	})
	.catch((err) => {
		OraSpinner2.fail(
			'Commands were not removed due to a fault, please read below for more info.'
		);
		console.error(err);
		process.exit(0);
	});
