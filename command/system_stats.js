const Natsumi = require('../control');
const Build = require('../build');
const {MessageType, MessageOptions, Mimetype} = require('queen-natsumi-web-api');
const {spawnSync} = require('child_process');
const chalk = require('chalk');
const axios = require('axios');
const fs = require('fs');
let Work_Mode = Build.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const Lang = Language.getString('system_stats');

var SYSDTXT = ''
if (Build.LANG == 'SI') SYSDTXT = '💻 පද්ධති තත්ත්වය'
if (Build.LANG == 'EN') SYSDTXT = '💻 System status'

var VER = ''
if (Build.LANG == 'SI') VER = '🧬 Version'
if (Build.LANG == 'EN') VER = '🧬 Version'

var MSG = ''
if (Build.ALIVEMSG == 'default') MSG = '```👸 𝗛𝗘𝗬 𝗧𝗛𝗘𝗥𝗘 𝗕𝗢𝗧 𝗢𝗡𝗟𝗜𝗡𝗘 𝗡𝗢𝗪 ❣️``` \n👸 𝗬𝗢𝗨 𝗖𝗔𝗡 𝗨𝗦𝗘 𝗠𝗘 👸\n𝗗𝗘𝗩𝗢𝗟𝗢𝗣𝗘𝗥 :- 𝗖𝗬𝗕𝗘𝗥 𝗗𝗥𝗔𝗫𝗢\n```𝗧𝗛𝗔𝗡𝗞𝗦 𝗙𝗢𝗥 𝗨𝗦𝗜𝗡𝗚 𝗤𝗨𝗘𝗘𝗡 𝗡𝗔𝗧𝗦𝗨𝗠𝗜 𝗕𝗢𝗧 💞```'
else MSG = Build.ALIVEMSG


Natsumi.addCommand({Pnatsumi: 'alive', fromMe: Work_Mode, desc: Lang.ALIVE_DESC,  deleteCommand: false}, (async (message, match) => {
    var logo = await axios.get (Build.ALIVE_LOGO, {responseType: 'arraybuffer'})
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })

    var BUTTHANDLE = '';
    if (/\[(\W*)\]/.test(Build.HANDLERS)) {
        BUTTHANDLE = Build.HANDLERS.match(/\[(\W*)\]/)[1][0];
    } else {
        BUTTHANDLE = '.';
    }
        
    const buttons = [
        {buttonId: BUTTHANDLE + 'qnversion', buttonText: {displayText: VER }, type: 1},
        {buttonId: BUTTHANDLE + 'qnsysstats', buttonText: {displayText: SYSDTXT }, type: 1}
    ]
    const buttonMessage = {
        contentText: MSG,
        footerText: 'ᴾᴼᵂᴱᴿᴰ ᴮʸ © Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ ᴮᴼᵀ ©',
        buttons: buttons,
        headerType: 4,
        imageMessage: media.message.imageMessage    
    }
    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage);
}))

Natsumi.addCommand({Pnatsumi: 'qnsysstats', fromMe: Work_Mode, desc: Lang.SYSD_DESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
    const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
    await message.sendMessage(
        '```' + child + '```', MessageType.text, {quoted: message.data}
    );
}));

Natsumi.addCommand({Pnatsumi: 'qnversion', fromMe: Work_Mode, desc: Lang.SYSD_DESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
    await message.client.sendMessage(message.jid, 
        `*🧬 Queen Natsumi Version 🧬*\n\n` + 
        '```Installed version :```\n' +
        Lang.version + 
        `\n\nCheck official website : https://github.com/CyberDraxo/QueenNatsumi`
   , MessageType.text, {quoted: message.data});
    
}));