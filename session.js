/* CODED BY CYBER DRAXO

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WHATSAPP BOT  - NATSUMI 
*/

const chalk = require('chalk');
const { WAConnection, MessageType } = require('queen-natsumi-web-api');
const fs = require('fs');

async function queenNatsumi() {
	const conn = new WAConnection();
	conn.logger.level = 'warn';
	conn.version = [2, 2123, 9]

	conn.on('connecting', async () => {
		console.log(`${chalk.green.bold('QUEEN')}${chalk.blue.bold('NATSUMI')}
${chalk.white.italic('Natsumi Strings')}
${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please wait.')}`);
	});

	conn.on('open', async () => {
		console.log(
			chalk.green.bold('QUEEN NATSUMI QR CODE: '),
			'QUEENNATSUMI;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				)
		);
		await conn.sendMessage(
			conn.user.jid,
			'QUEENNATSUMI;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				),
			MessageType.text
		);
		if (conn.user.jid.startsWith('94')) {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ PLEASE DO NOT SHARE THIS CODE ANYONE ' + conn.user.name + '* ⚠️',
				MessageType.text
			);
		} else {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ Please Do Not Share This Code With Anyone ' +
					conn.user.name +
					'* ⚠️',
				MessageType.text
			);
		}
		console.log(
			chalk.green.bold(
				"IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!"
			),
			chalk.green.bold(
				'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'
			)
		);
		process.exit(0);
	});

	await conn.connect();
}

queenNatsumi(); 
