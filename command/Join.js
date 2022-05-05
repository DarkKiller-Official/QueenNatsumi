const Asena = require("./control");
const Build = require('../build');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('queen-natsumi-web-api');

const Language = require('../language');
const Lang = Language.getString('admin');

let Work_Mode = Build.WORKTYPE == 'public' ? false : true
var ric = '📛 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 𝐆𝐑𝐎𝐔𝐏 𝐉𝐎𝐈𝐍𝐄𝐃 📛'
var jsc = '🌟 𝐆𝐑𝐎𝐔𝐏 𝐉𝐎𝐈𝐍𝐄𝐃 𝐒𝐔𝐂𝐂𝐄𝐒𝐅𝐔𝐋 🌟\nᴊᴏɪɴᴇᴅ ʙʏ ǫᴜᴇᴇɴ ɴᴀᴛsᴜᴍɪ'

Asena.addCommand({Pnatsumi: 'joi ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    match = match || message.reply_message.text
    if (!match) return await message.sendMessage(Lang.JOIN_ERR)
    const wa = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/
    const [_, code] = match.match(wa) || []
    if (!code) return await message.sendMessage(Lang.JOIN_ERR)
    const { size } = await message.inviteCodeInfo(code)
    if (size > 256) return await message.sendMessage("*📛 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 𝐆𝐑𝐎𝐔𝐏 𝐈𝐒 𝐅𝐔𝐋𝐋 📛*")
    await message.client.InviteJoin(code)
    return await message.sendMessage(ric)

  
}));

Asena.addCommand({Pnatsumi: 'join ?(.*)', fromMe: Work_Mode, desc: 'Send Whatsapp Link Join Group', dontAddCommandList: true}, (async (message, match) => {

    match = match || message.reply_message.text
    if (!match) return await message.sendMessage(Lang.JOIN_ERR)
    const wa = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/
    const [_, code] = match.match(wa) || []
    if (!code) return await message.sendMessage(Lang.JOIN_ERR)
    const { size } = await message.inviteCodeInfo(code)
    if (size > 256) return await message.sendMessage("*📛 Group is full! 📛*")
    await message.client.InviteJoin(code)
    return await message.sendMessage(jsc)

}));
