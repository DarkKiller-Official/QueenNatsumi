/* Copyright (C) 2022 Natsumi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Natsumi - Natsumi
*/

const Natsumi = require('../control');
const {MessageType} = require('queen-natsumi-web-api');
const FilterDb = require('./sql/filters');
const Build = require('../build')
const Language = require('../language');
const Lang = Language.getString('filters');

var f_rep = ''
if (Build.LANG == 'TR') f_rep = '*Filtre Ayarlandı ✅*'
if (Build.LANG == 'EN') f_rep = '*Filter Setted ✅*'
if (Build.LANG == 'AZ') f_rep = '*Filtr Düzəldildi ✅*'
if (Build.LANG == 'SI') f_rep = '*පෙරණය සකසන ලදී ✅*'
if (Build.LANG == 'HI') f_rep = '*फ़िल्टर सेट ✅*'
if (Build.LANG == 'RU') f_rep = '*Фильтр настроен ✅*'
if (Build.LANG == 'ML') f_rep = '*ഫിൽട്ടർ സെറ്റ് ✅*'
if (Build.LANG == 'ID') f_rep = '*Filter Set ✅*'
if (Build.LANG == 'PT') f_rep = '*Filtro Ajustado ✅*'

Natsumi.addCommand({Pnatsumi: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC}, (async (message, match) => {
    Mat = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (Mat === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.Pnatsumi + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else if (message.reply_message && match[1] !== '') {
        await FilterDb.setFilter(message.jid, match[1].replace(/['"“]+/g, ''), message.reply_message.text);
        return await message.client.sendMessage(message.jid,f_rep,MessageType.text);
    } else {
        if (Mat.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "test" "test two"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, Mat[0].replace(/['"“]+/g, ''), Mat[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), Mat[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(Mat[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));

Natsumi.addCommand({Pnatsumi: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));


Natsumi.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    return filtreler.map(
        async (filter) => {
            Pnatsumi = new RegExp(filter.dataValues.regex ? filter.dataValues.Pnatsumi : ('\\b(' + filter.dataValues.Pnatsumi + ')\\b'), 'gm');
            if (message.message == filter.dataValues.Pnatsumi) {
                await new Promise(r => setTimeout(r, 900));
                return await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
Natsumi.addCommand({on: 'text', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    return filtreler.map(
        async (filter) => {
            Pnatsumi = new RegExp(filter.dataValues.regex ? filter.dataValues.Pnatsumi : ('\\b(' + filter.dataValues.Pnatsumi + ')\\b'), 'gm');
            var fo = message.message.replace('$', '')
            if (fo == filter.dataValues.Pnatsumi && message.message.startsWith('$')) {
                await new Promise(r => setTimeout(r, 100));
                return await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
