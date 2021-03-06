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
if (Build.LANG == 'SI') SYSDTXT = '๐ป เถดเถฏเทเถฐเถญเท เถญเถญเทเถญเทเทเถบ'
if (Build.LANG == 'EN') SYSDTXT = '๐ป System status'

var VER = ''
if (Build.LANG == 'SI') VER = '๐งฌ Version'
if (Build.LANG == 'EN') VER = '๐งฌ Version'

var MSG = ''
if (Build.ALIVEMSG == 'default') MSG = '```๐ธ ๐๐๐ฌ ๐ง๐๐๐ฅ๐ ๐๐ข๐ง ๐ข๐ก๐๐๐ก๐ ๐ก๐ข๐ช โฃ๏ธ``` \n๐ธ ๐ฌ๐ข๐จ ๐๐๐ก ๐จ๐ฆ๐ ๐ ๐ ๐ธ\n๐๐๐ฉ๐ข๐๐ข๐ฃ๐๐ฅ :- ๐๐ฌ๐๐๐ฅ ๐๐ฅ๐๐ซ๐ข\n```๐ง๐๐๐ก๐๐ฆ ๐๐ข๐ฅ ๐จ๐ฆ๐๐ก๐ ๐ค๐จ๐๐๐ก ๐ก๐๐ง๐ฆ๐จ๐ ๐ ๐๐ข๐ง ๐```'
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
        footerText: 'แดพแดผแตแดฑแดฟแดฐ แดฎสธ ยฉ Qแตแดฑแดฑแดบ แดบแดฌแตหขแตแดนแดต แดฎแดผแต ยฉ',
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
        `*๐งฌ Queen Natsumi Version ๐งฌ*\n\n` + 
        '```Installed version :```\n' +
        Lang.version + 
        `\n\nCheck official website : https://github.com/CyberDraxo/QueenNatsumi`
   , MessageType.text, {quoted: message.data});
    
}));