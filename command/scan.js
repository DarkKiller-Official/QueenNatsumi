/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../control');
const {MessageType} = require('queen-natsumi-web-api');
const Build = require('../build');

const Language = require('../language');
const Lang = Language.getString('tagall');

if (Build.WORKTYPE == 'private') {
    Asena.addCommand({ Pnatsumi: 'scan ?(.*)', fromMe: true, desc: Lang.SCAN}, (async (message, match) => { 

        if (match[1] == '') return await message.client.sendMessage(message.jid, Lang.NO, MessageType.text);

        var exists = await message.client.isOnWhatsApp(match[1])
        if (exists) {
            await message.client.sendMessage(message.jid, '```' + match[1] + '``` \n' + Lang.SUC + '\n' + exists.jid, MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,'```' + match[1] + '``` \n' + Lang.UNSUC, MessageType.text);
        }
    }));
}
else if (Build.WORKTYPE == 'public') {
    Asena.addCommand({ Pnatsumi: 'scan ?(.*)', fromMe: false, desc: Lang.SCAN}, (async (message, match) => { 

        if (match[1] == '') return await message.client.sendMessage(message.jid, Lang.NO, MessageType.text);

        var exists = await message.client.isOnWhatsApp(match[1])
        if (exists) {
            await message.client.sendMessage(message.jid, '```' + match[1] + '``` \n' + Lang.SUC + '\n' + exists.jid, MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,'```' + match[1] + '``` \n' + Lang.UNSUC, MessageType.text);
        }
    }));
}
