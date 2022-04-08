/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsQueenNatsumi - Yusuf Usta
Developer & Co-Founder - Phaticusthiccy
*/

const QueenNatsumi = require('../control');
const {MessageType} = require('queen-natsumi-web-api');
const {spawnSync} = require('child_process');
const Build = require('../build');
const chalk = require('chalk');
const Axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Build.WORKTYPE == 'private') {

    QueenNatsumi.addCommand({Pnatsumi: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Build.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'╭──────────◅\n│\n│🎧ʜᴇʟʟᴏ ᴜꜱᴇʀ\n│╭──────────────╮\n│ 👸🏻Ｉ ＡＭ A L I V E  👸\n│╰──────────────╯\n│\n├►ɪ ᴀᴍ ɴᴀᴛsᴜᴍɪ ʙᴏᴛ\n│\n│▻ᴠᴇʀꜱɪᴏɴ - ᴡɪᴛʜᴏᴜᴛ ʙᴜᴛᴛᴏɴꜱ\n│\n├▻ᴅᴇᴠᴇʟᴏᴘᴇʀ - ᴄʏʙᴇʀᴅʀᴀxᴏ\n│\n├▻ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅ - .Natsumi\n│\n│💞ᴛʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ᴜꜱɪɴɢ ᴍᴇ👸\n│\n╰────────────▻\nـــ٨ـہہـ♡ـ٨ـہـ' , MessageType.text);
        }
        else {
            const pow = '*Powered by Natsumi*'
            const payload = Build.ALIVEMSG
            const status = await message.client.getStatus()
            const ppUrl = await message.client.getProfilePicture() 
            const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})

            if (!payload.includes('{pp}')) {
                await message.client.sendMessage(message.jid,payload.replace('{version}', Build.VERSION).replace('{info}', `${status.status}`).replace('{plugin}', Build.CHANNEL) + '\n' + pow, MessageType.text);
            }
            else if (payload.includes('{pp}')) {
                await message.sendMessage(Buffer(resim.data), MessageType.image, { caption: payload.replace('{version}', Build.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Build.CHANNEL) + '\n' + pow });
            }
        }
    }));

    QueenNatsumi.addCommand({Pnatsumi: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Build.WORKTYPE == 'public') {

    QueenNatsumi.addCommand({Pnatsumi: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Build.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'╭──────────◅\n│\n│🎧ʜᴇʟʟᴏ ᴜꜱᴇʀ\n│╭──────────────╮\n│ 👸🏻Ｉ ＡＭ A L I V E  👸\n│╰──────────────╯\n│\n├►ɪ ᴀᴍ ɴᴀᴛsᴜᴍɪ ʙᴏᴛ\n│\n│▻ᴠᴇʀꜱɪᴏɴ - ᴡɪᴛʜᴏᴜᴛ ʙᴜᴛᴛᴏɴꜱ\n│\n├▻ᴅᴇᴠᴇʟᴏᴘᴇʀ - ᴄʏʙᴇʀᴅʀᴀxᴏ\n│\n├▻ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅ - .ɴᴀᴛsᴜᴍɪ\n│\n│💞ᴛʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ᴜꜱɪɴɢ ᴍᴇ👸\n│\n╰────────────▻\nـــ٨ـہہـ♡ـ٨ـہـ', MessageType.text);
        }
        else {
            const pow = '*Powered by Natsumi*'
            const payload = Build.ALIVEMSG
            const status = await message.client.getStatus()
            const ppUrl = await message.client.getProfilePicture() 
            const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})

            if (!payload.includes('{pp}')) {
                await message.client.sendMessage(message.jid,payload.replace('{version}', Build.VERSION).replace('{info}', `${status.status}`).replace('{plugin}', Build.CHANNEL) + '\n' + pow, MessageType.text);
            }
            else if (payload.includes('{pp}')) {
                await message.sendMessage(Buffer(resim.data), MessageType.image, { caption: payload.replace('{version}', Build.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Build.CHANNEL) + '\n' + pow });
            }
        }
    }));

    QueenNatsumi.addCommand({Pnatsumi: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
