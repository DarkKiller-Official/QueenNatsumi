/* Copyright (C) 2022 CyberDraxo.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Natsumi - CyberDraxo
*/

const Natsumi = require('../control');
const Build = require('../build');
const {MessageType} = require('queen-natsumi-web-api');

const Language = require('../language');
const Lang = Language.getString('_natsumi');

if (Build.WORKTYPE == 'private') {

    Natsumi.addCommand({Pnatsumi: 'NATSUMI ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        var CMD_HELP = '';
        if (match[1] === '') {
            Natsumi.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.Pnatsumi === undefined) return;
                    try {
                        var match = command.Pnatsumi.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var mmatch = command.Pnatsumi.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var match = [command.Pnatsumi];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Build.HANDLERS)) {
                        HANDLER = Build.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*❖ ' + Lang.DESC + ':* ```' + command.desc + '``` \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*❖ ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*❖ ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*❖ ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                }
            );
            await message.client.sendMessage(
                message.jid,'●▬▬▬ *Natsumi Private* ▬▬▬●\n\n' + CMD_HELP, MessageType.text
            );    
        } else {
            var CMD_HELP = '';
            Natsumi.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.Pnatsumi === undefined) return;
                    try {
                        var cmatch = command.Pnatsumi.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var cmmatch = command.Pnatsumi.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var cmatch = [command.Pnatsumi];
                    }
                    if (cmmatch.endsWith(' ')) {
                        var cmmatch = command.Pnatsumi.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
                    }
                    if (cmmatch == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Build.HANDLERS)) {
                            HANDLER = Build.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        }
                        if (!command.desc == '' && command.usage == '' && command.warn == '') {
                            CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*❖ ' + Lang.DESC + ':* ```' + command.desc + '``` \n\n';
                        }
                        if (command.desc == '' && command.usage == '' && !command.warn == '') {
                            CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                            CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*❖ ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        }
                        if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                            CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*❖ ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                            CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if  (command.desc == '' && command.usage == '' && command.warn == '') {
                            CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n\n'
                        }
                        if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                            CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*❖ ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(
                message.jid,'●▬▬▬ *Natsumi Private* ▬▬▬●\n\n' + CMD_HELP, MessageType.text
            );
        }
    }));
}
else if (Build.WORKTYPE == 'public') {

    Natsumi.addCommand({Pnatsumi: 'NATSUMI ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        var CMD_HELP = '';
        if (match[1] === '') {
            Natsumi.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.Pnatsumi === undefined) return;
                    try {
                        var match = command.Pnatsumi.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var mmatch = command.Pnatsumi.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var match = [command.Pnatsumi];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Build.HANDLERS)) {
                        HANDLER = Build.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*❖ ' + Lang.DESC + ':* ```' + command.desc + '``` \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*❖ ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*❖ ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*❖ ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                }
            );
            await message.client.sendMessage(
                message.jid,'●▬▬▬ *Natsumi Public* ▬▬▬●\n\n' + CMD_HELP, MessageType.text {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Build.BOT, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/Natsumi.jpg')}}}});
                  
        } else {
            var CMD_HELP = '';
            Natsumi.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.Pnatsumi === undefined) return;
                    try {
                        var cmatch = command.Pnatsumi.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var cmmatch = command.Pnatsumi.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var cmatch = [command.Pnatsumi];
                    }
                    if (cmmatch.endsWith(' ')) {
                        var cmmatch = command.Pnatsumi.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
                    }
                    if (cmmatch == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Build.HANDLERS)) {
                            HANDLER = Build.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        }
                        if (!command.desc == '' && command.usage == '' && command.warn == '') {
                            CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*❖ ' + Lang.DESC + ':* ```' + command.desc + '``` \n\n';
                        }
                        if (command.desc == '' && command.usage == '' && !command.warn == '') {
                            CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                            CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*❖ ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        }
                        if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                            CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*❖ ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                            CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if  (command.desc == '' && command.usage == '' && command.warn == '') {
                            CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n\n'
                        }
                        if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                            CMD_HELP += '*📌 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*❖ ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(
                message.jid,'●▬▬▬ *Natsumi Public* ▬▬▬●\n\n' + CMD_HELP, MessageType.text {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Build.BOT, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/Natsumi.jpg')}}}});
            );
        }
    }));
}
