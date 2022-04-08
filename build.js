/* Copyright (C) 2021 Draxo

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whatsapp Bot - QueenNatsumi
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// QueenNatsumi WA BOT
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './QueenNatsumi.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v5.0.5 Button Update',
    SESSION: process.env.QUEEN_NATSUMI_SESSION === undefined ? '' : process.env.QUEEN_NATSUMI_SESSION,
    ANTILINK: process.env.ANTI_LINK === undefined ? 'true' : process.env.ANTI_LINK,
    TIME: process.env.TIME_ZONE === undefined ? 'Asia/Colombo' : process.env.TIME_ZONE,
    INBO: process.env.INBO_BLOCK === undefined ? 'false' : process.env.INBO_BLOCK,
    Bad_Word: process.env.BAD_KICK === undefined ? 'true' : process.env.BAD_KICK,
    BYE_LOGO: process.env.BYE_LOGO === undefined ? 'https://i.ibb.co/3vSHqHb/e5693cca4e3d.jpg' : process.env.BYE_LOGO,
    BOT: process.env.BOT_NAME === undefined ? 'ǫᴜᴇᴇɴ ɴᴀᴛsᴜᴍɪ' : process.env.BOT_NAME,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://telegra.ph/file/24cacd9938446a38180fd.png' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://telegra.ph/file/7a747865ed8fe436de4fc.jpg' : process.env.ALIVE_LOGO,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WELCOME_LOGO: process.env.WELCOME_LOGO === undefined ? 'https://i.ibb.co/d54sGdd/f2097d7ddc39.jpg' : process.env.WELCOME_LOGO,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    AUTO_BIO: process.env.AUTO_BIO === undefined ? 'true' : process.env.AUTO_BIO,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    psw: process.env.QN_PASSWORD === undefined ? '' : process.env.QN_PASSWORD,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './QueenNatsumi.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    OWN: process.env.OWN === undefined ? '94761209144,0' : process.env.OWN,
    OWN2: process.env.OWN2 === undefined ? '94775625576,0' : process.env.OWN2,
    OWN3: process.env.OWN3 === undefined ? '94763459864,0' : process.env.OWN3,
    OWN4: process.env.OWN4 === undefined ? '94741026902,0' : process.env.OWN4,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    SUPPORT1: "94784621232-1635496328",
    SUPPORT2: "94711176745"
}; 
