/* Copyright (C) 2022 Natsumi
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Natsumi - Natsumi
*/

const Natsumi = require('../control');
const Build = require('../build');
const {MessageType} = require('queen-natsumi-web-api');

const Language = require('../language');
const Lang = Language.getString('_natsumi');

if (Build.WORKTYPE == 'private') {

    Natsumi.addCommand({Pnatsumi: Build.CUS_PANEL + '?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

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
                        CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.DESC + ':* ```' + command.desc + '``` \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*' + Build.D_EMOJI + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*' + Build.D_EMOJI + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                }
            );
            await message.client.sendMessage(
                message.jid,'●▬▬▬ *Natsumi Public* ▬▬▬●\n\n' + CMD_HELP, MessageType.text, { quoted: message.data });
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
                        CMD_HELP += Build.C_EMOJI + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        }
                        if (!command.desc == '' && command.usage == '' && command.warn == '') {
                            CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.DESC + ':* ```' + command.desc + '``` \n\n';
                        }
                        if (command.desc == '' && command.usage == '' && !command.warn == '') {
                            CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                            CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*' + Build.D_EMOJI + + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        }
                        if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                            CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                            CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if  (command.desc == '' && command.usage == '' && command.warn == '') {
                            CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n\n'
                        }
                        if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                            CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*' + Build.D_EMOJI + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(
                message.jid,'●▬▬▬ *Mizuki Public* ▬▬▬●\n\n' + CMD_HELP, MessageType.text, { quoted: message.data });
        }
    }));
}
else if (Build.WORKTYPE == 'public') {

    Natsumi.addCommand({Pnatsumi: Build.CUS_PANEL + '?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

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
                        CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.DESC + ':* ```' + command.desc + '``` \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*' + Build.D_EMOJI + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*' + Build.D_EMOJI + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                }
            );
            await message.client.sendMessage(
                message.jid,'●▬▬▬ *Natsumi Public* ▬▬▬●\n\n' + CMD_HELP, MessageType.text, { quoted: message.data });
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
                        CMD_HELP += Build.C_EMOJI + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        }
                        if (!command.desc == '' && command.usage == '' && command.warn == '') {
                            CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.DESC + ':* ```' + command.desc + '``` \n\n';
                        }
                        if (command.desc == '' && command.usage == '' && !command.warn == '') {
                            CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                            CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*' + Build.D_EMOJI + + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        }
                        if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                            CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                            CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if  (command.desc == '' && command.usage == '' && command.warn == '') {
                            CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n\n'
                        }
                        if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                            CMD_HELP += '*' + Build.C_EMOJI + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.Pnatsumi) + '```\n' + '*' + Build.D_EMOJI + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*' + Build.D_EMOJI + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(
                message.jid,'●▬▬▬ *Natsumi Public* ▬▬▬●\n\n' + CMD_HELP, MessageType.text, { quoted: message.data });
        }
    }));
}
