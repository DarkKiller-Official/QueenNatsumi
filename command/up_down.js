/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta


const Asena = require('../control');
const {MessageType, Mimetype} = require('queen-natsumi-web-api');
const got = require('got')
const fs = require('fs')
const Language = require('../language');
const Lang = Language.getString('up_down');

Asena.addCommand({Pnatsumi: 'download ?(.*)', fromMe: true, desc: Lang.MEMES_DESC, usage: 'meme top;bottom'}, (async (message, match) => {    
    if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);

}));
*/
