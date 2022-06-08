const Natsumi = require('../control');
const
{
	WAConnection,
	MessageType
} = require('queen-natsumi-web-api');
const Build = require('../build');
const conn = new WAConnection()


Natsumi.addCommand(
{
	Pnatsumi: 'check',
	fromMe: true,
	deleteCommand: true,
	desc: 'Natsumi verify 🤖'
}, (async (NatsumiDMSG) =>
{

	await NatsumiDMSG.client.sendMessage(NatsumiDMSG.jid, fs.readFileSync("./media/verify.jpg"), MessageType.image,
	{
		caption: '▮✰ 𝐐𝐔𝐄𝐄𝐍 𝐍𝐀𝐓𝐒𝐔𝐌𝐈 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓 𝐕𝐄𝐑𝐈𝐅𝐘 ✰▮/n/n 🄱🄾🅃 🄾🅆🄽🄴🅁 ► ${conn.user.name} /n 🅅🄴🅁🄸🄵🅈 🄽🄾🄼🄱🄴🅁 ► ${conn.user.phone.wa_version}${conn.user.phone.os_version}',
	});

}));