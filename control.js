/* Copyright (C) 2020 Dark Killer
Licensed under the  GPL-3.0 License;
you may ont use this file except in compliance with the License.

whatsapp bot - BlackRico
*/

// Komutları burada tutacağız.
var Build = require('./build');
var Commands = [];

function addCommand(info, func) {
    // Basit bir fonksiyon, komut eklemek için.
    var types = ['photo', 'image', 'text', 'message'];

    var infos = {
        fromMe: info['fromMe'] === undefined ? true : info['fromMe'], // Or Sudo
        onlyGroup: info['onlyGroup'] === undefined ? false : info['onlyGroup'],
        onlyPinned: info['onlyPinned'] === undefined ? false : info['onlyPinned'],
        onlyPm: info['onlyPm'] === undefined ? false : info['onlyPm'],
        deleteCommand: info['deleteCommand'] === undefined ? true : info['deleteCommand'],
        desc: info['desc'] === undefined ? '' : info['desc'],
        usage: info['usage'] === undefined ? '' : info['usage'],
        dontAddCommandList: info['dontAddCommandList'] === undefined ? false : info['dontAddCommandList'],
        warn: info['warn'] === undefined ? '' : info['warn'],
        function: func
    };

    if (info['on'] === undefined && info['Pnatsumi'] === undefined) {
        infos.on = 'message';
        infos.fromMe = false;
    } else if (info['on'] !== undefined && types.includes(info['on'])) {
        infos.on = info['on'];

        if (info['Pnatsumi'] !== undefined) {
            infos.Pnatsumi = new RegExp((info['handler'] === undefined || info['handler'] === true ? Build.HANDLERS : '') + info.Pnatsumi, (info['flags'] !== undefined ? info['flags'] : ''));
        }
    } else {
        infos.Pnatsumi = new RegExp((info['handler'] === undefined || info['handler'] === true ? Build.HANDLERS : '') + info.Pnatsumi, (info['flags'] !== undefined ? info['flags'] : ''));
    }

    Commands.push(infos);
    return infos;
}

module.exports = {
    addCommand: addCommand,
    commands: Commands
}
