/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const Asena = require('../control');
const {MessageType,Mimetype} = require('queen-natsumi-web-api');
const translatte = require('translatte');
const Build = require('../build');
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Build.HEROKU.API_KEY
});
let baseURI = '/apps/' + Build.HEROKU.APP_NAME;
//============================== LYRICS =============================================
const axios = require('axios');
const { requestLyricsFor, requestAuthorFor, requestTitleFor, requestIconFor } = require("solenolyrics");
const solenolyrics= require("solenolyrics"); 
//============================== CURRENCY =============================================
const { exchangeRates } = require('exchange-rates-api');
const ExchangeRatesError = require('exchange-rates-api/src/exchange-rates-error.js')
//============================== TTS ==================================================
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
//=====================================================================================
//============================== YOUTUBE ==============================================
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const yts = require( 'yt-search' )
const got = require("got");
const ID3Writer = require('browser-id3-writer');
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
});
//=====================================================================================
const Language = require('../language');
const Lang = Language.getString('scrapers');
const Glang = Language.getString('github');
const Slang = Language.getString('lyrics');
const Clang = Language.getString('covid');

const wiki = require('wikijs').default;
var gis = require('g-i-s');

var dlang_dsc = ''
var closer_res = ''
var dlang_lang = ''
var dlang_similarity = ''
var dlang_other = ''
var dlang_input = ''

if (Build.LANG == 'TR') {
    dlang_dsc = 'Yanıtlanan mesajın dilini tahmin eder.'
    closer_res = 'En Yakın Sonuç:'
    dlang_lang = 'Dil:'
    dlang_similarity = 'Benzerlik:'
    dlang_other = 'Diğer Diller'
    dlang_input = 'İşlenen Metin:'
}
if (Build.LANG == 'EN') {
    dlang_dsc = 'Guess the language of the replied message.'
    closer_res = 'Closest Result:'
    dlang_lang = 'Language:'
    dlang_similarity = 'Similarity:'
    dlang_other = 'Other Languages'
    dlang_input = 'Processed Text:'
}
if (Build.LANG == 'AZ') {
    dlang_dsc = 'Cavablanan mesajın dilini təxmin edin.'
    closer_res = 'Ən yaxın nəticə:'
    dlang_lang = 'Dil:'
    dlang_similarity = 'Bənzərlik:'
    dlang_other = 'Başqa Dillər'
    dlang_input = 'İşlənmiş Mətn:'
}
if (Build.LANG == 'ML') {
    dlang_dsc = 'മറുപടി നൽകിയ സന്ദേശത്തിന്റെ ഭാഷ ess ഹിക്കുക.'
    closer_res = 'ഏറ്റവും അടുത്ത ഫലം:'
    dlang_lang = 'നാവ്:'
    dlang_similarity = 'സമാനത:'
    dlang_other = 'മറ്റ് ഭാഷകൾ'
    dlang_input = 'പ്രോസസ്സ് ചെയ്ത വാചകം:'
}
if (Build.LANG == 'HI') {
    dlang_dsc = 'उत्तर दिए गए संदेश की भाषा का अनुमान लगाएं'
    closer_res = 'निकटतम परिणाम:'
    dlang_lang = 'जुबान:'
    dlang_similarity = 'समानता:'
    dlang_other = 'अन्य भाषाएँ'
    dlang_input = 'संसाधित पाठ:'
}
if (Build.LANG == 'ES') {
    dlang_dsc = 'Adivina el idioma del mensaje respondido.'
    closer_res = 'Resultado más cercano:'
    dlang_lang = 'Lengua:'
    dlang_similarity = 'Semejanza:'
    dlang_other = 'Otros idiomas:'
    dlang_input = 'Texto procesado:'
}
if (Build.LANG == 'PT') {
    dlang_dsc = 'Adivinhe o idioma da mensagem respondida.'
    closer_res = 'Resultado mais próximo:'
    dlang_lang = 'Língua:'
    dlang_similarity = 'Similaridade:'
    dlang_other = 'Outras línguas'
    dlang_input = 'Texto Processado:'
}
if (Build.LANG == 'ID') {
    dlang_dsc = 'Tebak bahasa pesan yang dibalas.'
    closer_res = 'Hasil Terdekat:'
    dlang_lang = 'Lidah:'
    dlang_similarity = 'Kesamaan:'
    dlang_other = 'Bahasa Lainnya'
    dlang_input = 'Teks yang Diproses:'
}
if (Build.LANG == 'RU') {
    dlang_dsc = 'Угадай язык ответного сообщения.'
    closer_res = 'Ближайший результат:'
    dlang_lang = 'Язык:'
    dlang_similarity = 'Сходствo:'
    dlang_other = 'Другие языки'
    dlang_input = 'Обработанный текст:'
}


if (Build.WORKTYPE == 'private') {

    Asena.addCommand({Pnatsumi: 'trt(?: |$)(\\S*) ?(\\S*)', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: true}, (async (message, match) => {

        if (!message.reply_message) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY,MessageType.text);
        }

        ceviri = await translatte(message.reply_message.message, {from: match[1] === '' ? 'auto' : match[1], to: match[2] === '' ? Build.LANG : match[2]});
        if ('text' in ceviri) {
            return await message.reply('*▶️ ' + Lang.LANG + ':* ```' + (match[1] === '' ? 'auto' : match[1]) + '```\n'
            + '*◀️ ' + Lang.FROM + '*: ```' + (match[2] === '' ? Build.LANG : match[2]) + '```\n'
            + '*🔎 ' + Lang.RESULT + ':* ```' + ceviri.text + '```');
        } else {
            return await message.client.sendMessage(message.jid,Lang.TRANSLATE_ERROR,MessageType.text)
        }
    }));
    var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var succ_on = ''
    var succ_off = ''
    if (Build.LANG == 'TR') {
        l_dsc = 'Antilink aracını etkinleştirir.'
        alr_on = 'Antilink halihazırda açık!'
        alr_off = 'Antilink halihazırda kapalı!'
        succ_on = 'Antilink Başarıyla Açıldı!'
        succ_off = 'Antilink Başarıyla Kapatıldı!'
    }
    if (Build.LANG == 'EN') {
        l_dsc = 'Activates the Antilink tool.'
        alr_on = 'Antilink is already open!'
        alr_off = 'Antilink is currently closed!'
        succ_on = 'Antilink Opened Successfully!'
        succ_off = 'Antilink Closed Successfully!'
    }
    if (Build.LANG == 'AZ') {
        l_dsc = 'Antilink alətini aktivləşdirir.'
        alr_on = 'Antilink hazırda açıqdır!'
        alr_off = 'Antilink hazırda bağlıdır!'
        succ_on = 'Antilink Uğurla Açıldı!'
        succ_off = 'Antilink Uğurla Bağlandı!'
    }
    if (Build.LANG == 'HI') {
        l_dsc = 'एंटीलिंक टूल को सक्रिय करता है।'
        alr_on = 'एंटीलिंक पहले से ही खुला है!'
        alr_off = 'एंटीलिंक वर्तमान में बंद है!'
        succ_on = 'एंटीलिंक सफलतापूर्वक खोला गया!'
        succ_off = 'एंटीलिंक सफलतापूर्वक बंद!'
    }
    if (Build.LANG == 'ML') {
        l_dsc = 'ആന്റിലിങ്ക് ഉപകരണം സജീവമാക്കുന്നു.'
        alr_on = 'ആന്റിലിങ്ക് ഇതിനകം തുറന്നു!'
        alr_off = 'ആന്റിലിങ്ക് നിലവിൽ അടച്ചിരിക്കുന്നു!'
        succ_on = 'ആന്റിലിങ്ക് വിജയകരമായി തുറന്നു!'
        succ_off = 'ആന്റിലിങ്ക് വിജയകരമായി അടച്ചു!'
    }
    if (Build.LANG == 'PT') {
        l_dsc = 'Ativa a ferramenta Antilink.'
        alr_on = 'O Antilink já está aberto!'
        alr_off = 'Antilink está fechado no momento!'
        succ_on = 'Antilink aberto com sucesso!'
        succ_off = 'Antilink fechado com sucesso!'
    }
    if (Build.LANG == 'RU') {
        l_dsc = 'Активирует инструмент Antilink.'
        alr_on = 'Антилинк уже открыт!'
        alr_off = 'Антилинк сейчас закрыт!'
        succ_on = 'Антилинк успешно открыт!'
        succ_off = 'Антилинк успешно закрыт!'
    }
    if (Build.LANG == 'SI') {
        l_dsc = 'සබැඳි අවහිර කිරීම ක්‍රියාත්මක කරයි.'
        alr_on = 'දැනටමත් ක්‍රියාත්මකයි!'
        alr_off = 'ක්‍රියාත්මක කර නැත.!'
        succ_on = '¡Antilink se abrió con éxito!'
        succ_off = 'Antilink cerrado correctamente!'
    }
    if (Build.LANG == 'ID') {
        l_dsc = 'Mengaktifkan alat Antilink.'
        alr_on = 'Antilink sudah terbuka!'
        alr_off = 'Antilink saat ini ditutup!'
        succ_on = 'Antilink Berhasil Dibuka!'
        succ_off = 'Antilink Berhasil Ditutup!'
    }
    Asena.addCommand({Pnatsumi: 'antilink ?(.*)', fromMe: true, desc: l_dsc, usage: '.antilink on / off' }, (async (message, match) => {
        const anti_status = `${Build.ANTİLİNK}`
        if (match[1] == 'on') {
            if (anti_status == 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_on + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/Build-vars', { 
                    body: { 
                        ['ANTİ_LİNK']: 'true'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_on + '*', MessageType.text)
            }
        }
        else if (match[1] == 'off') {
            if (anti_status !== 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_off + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/Build-vars', { 
                    body: { 
                        ['ANTİ_LİNK']: 'false'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_off + '*', MessageType.text)
            }
        }
    }));
    var auto_dsc = ''
    var alr_on_bio = ''
    var alr_off_bio = ''
    var succ_on_bio = ''
    var succ_off_bio = ''
    if (Build.LANG == 'TR') {
        auto_dsc = 'Biyografinize canlı saat ekleyin!'
        alr_on_bio = 'Autobio halihazırda açık!'
        alr_off_bio = 'Autobio halihazırda kapalı!'
        succ_on_bio = 'Autobio Başarıyla Açıldı!'
        succ_off_bio = 'Autobio Başarıyla Kapatıldı!'
    }
    if (Build.LANG == 'EN') {
        auto_dsc = 'Add live clock to your bio!'
        alr_on_bio = 'Autobio is already open!'
        alr_off_bio = 'Autobio is currently closed!'
        succ_on_bio = 'Autobio Opened Successfully!'
        succ_off_bio = 'Autobio Closed Successfully!'
    }
    if (Build.LANG == 'AZ') {
        auto_dsc = 'Bio-ya canlı saat əlavə et!'
        alr_on_bio = 'Autobio hazırda açıqdır!'
        alr_off_bio = 'Autobio hazırda bağlıdır!'
        succ_on_bio = 'Autobio Uğurla Açıldı!'
        succ_off_bio = 'Autobio Uğurla Bağlandı!'
    }
    if (Build.LANG == 'HI') {
        auto_dsc = 'अपने बायो में लाइव घड़ी जोड़ें!'
        alr_on_bio = 'Autobio पहले से ही खुला है!'
        alr_off_bio = 'Autobio वर्तमान में बंद है!'
        succ_on_bio = 'Autobio सफलतापूर्वक खोला गया!'
        succ_off_bio = 'Autobio सफलतापूर्वक बंद!'
    }
    if (Build.LANG == 'ML') {
        auto_dsc = 'നിങ്ങളുടെ ബയോയിലേക്ക് തത്സമയ ക്ലോക്ക് ചേർക്കുക!'
        alr_on_bio = 'Autobio ഇതിനകം തുറന്നു!'
        alr_off_bio = 'Autobio നിലവിൽ അടച്ചിരിക്കുന്നു!'
        succ_on_bio = 'Autobio വിജയകരമായി തുറന്നു!'
        succ_off_bio = 'Autobio വിജയകരമായി അടച്ചു!'
    }
    if (Build.LANG == 'PT') {
        auto_dsc = 'Adicione um relógio ao vivo à sua biografia!'
        alr_on_bio = 'O Autobio já está aberto!'
        alr_off_bio = 'Autobio está fechado no momento!'
        succ_on_bio = 'Autobio aberto com sucesso!'
        succ_off_bio = 'Autobio fechado com sucesso!'
    }
    if (Build.LANG == 'RU') {
        auto_dsc = 'Добавьте живые часы в свою биографию!'
        alr_on_bio = 'Autobio уже открыт!'
        alr_off_bio = 'Autobio сейчас закрыт!'
        succ_on_bio = 'Autobio успешно открыт!'
        succ_off_bio = 'Autobio успешно закрыт!'
    }
    if (Build.LANG == 'ES') {
        auto_dsc = '¡Agrega un reloj en vivo a tu biografía!'
        alr_on_bio = '¡Autobio ya está abierto!'
        alr_off_bio = '¡Autobio está cerrado actualmente!'
        succ_on_bio = '¡Autobio se abrió con éxito!'
        succ_off_bio = 'Autobio cerrado correctamente!'
    }
    if (Build.LANG == 'ID') {
        auto_dsc = 'Tambahkan jam langsung ke bio Anda!'
        alr_on_bio = 'Autobio sudah terbuka!'
        alr_off_bio = 'Autobio saat ini ditutup!'
        succ_on_bio = 'Autobio Berhasil Dibuka!'
        succ_off_bio = 'Autobio Berhasil Ditutup!'
    }
    Asena.addCommand({Pnatsumi: 'autobio ?(.*)', fromMe: true, desc: auto_dsc, usage: '.autobio on / off' }, (async (message, match) => {
        const bio_status = `${Build.AUTOBİO}`
        if (match[1] == 'on') {
            if (bio_status == 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_on_bio + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/Build-vars', { 
                    body: { 
                        ['AUTO_BİO']: 'true'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_on_bio + '*', MessageType.text)
            }
        }
        else if (match[1] == 'off') {
            if (bio_status !== 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_off_bio + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/Build-vars', { 
                    body: { 
                        ['AUTO_BİO']: 'false'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_off_bio + '*', MessageType.text)
            }
        }
    }));
    Asena.addCommand({Pnatsumi: 'detectlang$', fromMe: true, desc: dlang_dsc}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text)
        const msg = message.reply_message.text
        var ldet = lngDetector.detect(msg)
        async function upperfirstLetter(letter) {
            return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
        }
        var cls1 = await upperfirstLetter(ldet[0][0])
        var cls2 = ldet[0][1].toString()
        var cls3 = await upperfirstLetter(ldet[1][0])
        var cls4 = ldet[1][1].toString()
        var cls5 = await upperfirstLetter(ldet[2][0])
        var cls6 = ldet[2][1].toString()
        var cls7 = await upperfirstLetter(ldet[3][0])
        var cls8 = ldet[3][1].toString()
        const res_1 = '*' + dlang_input + '* ' + '_' + msg + '_ \n'
        const res_2 = '*' + closer_res + '* ' + '_' + cls1 + '_\n*' + dlang_similarity + '* ' + '_' + cls2 + '_ \n\n'
        const res_3 = '```[ ' + dlang_other + ' ]```\n\n'
        const res_4 = '#2 *' + dlang_lang + '* ' + '_' + cls3 + '_\n*' + dlang_similarity + '* ' + '_' + cls4 + '_ \n'
        const res_5 = '#3 *' + dlang_lang + '* ' + '_' + cls5 + '_\n*' + dlang_similarity + '* ' + '_' + cls6 + '_ \n'
        const res_6 = '#4 *' + dlang_lang + '* ' + '_' + cls7 + '_\n*' + dlang_similarity + '* ' + '_' + cls8 + '_'
        const rep_7 = res_1 + res_2 + res_3 + res_4 + res_5 + res_6
        await message.client.sendMessage(message.jid,rep_7,MessageType.text);
    }));
    Asena.addCommand({Pnatsumi: 'currency(?: ([0-9.]+) ([a-zA-Z]+) ([a-zA-Z]+)|$|(.*))', fromMe: true}, (async (message, match) => {

        if(match[1] === undefined || match[2] == undefined || match[3] == undefined) {
            return await message.client.sendMessage(message.jid,Lang.CURRENCY_ERROR,MessageType.text);
        }
        let opts = {
            amount: parseFloat(match[1]).toFixed(2).replace(/\.0+$/,''),
            from: match[2].toUpperCase(),
            to: match[3].toUpperCase()
        }
        try {
            result = await exchangeRates().latest().symbols([opts.to]).base(opts.from).fetch()
            result = parseFloat(result).toFixed(2).replace(/\.0+$/,'')
            await message.reply(`\`\`\`${opts.amount} ${opts.from} = ${result} ${opts.to}\`\`\``)
        }
        catch(err) {
            if (err instanceof ExchangeRatesError) 
                await message.client.sendMessage(message.jid,Lang.INVALID_CURRENCY,MessageType.text)
            else {
                await message.client.sendMessage(message.jid,Lang.UNKNOWN_ERROR,MessageType.text)
                console.log(err)
            }
        }
    }));

    if (Build.LANG == 'TR' || Build.LANG == 'AZ') {

        Asena.addCommand({Pnatsumi: 'tts (.*)', fromMe: true, desc: Lang.TTS_DESC}, (async (message, match) => {

            if(match[1] === undefined || match[1] == "")
                return;
    
            let 
                LANG = 'tr',
                ttsMessage = match[1],
                SPEED = 1.0

            if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
                LANG = langMatch[1]
                ttsMessage = ttsMessage.replace(langMatch[0], "")
            } 
            if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
                SPEED = parseFloat(speedMatch[1])
                ttsMessage = ttsMessage.replace(speedMatch[0], "")
            }
    
            var buffer = await googleTTS.synthesize({
                text: ttsMessage,
                voice: LANG
            });
            await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
        }));
    }
    else {
        Asena.addCommand({Pnatsumi: 'tts (.*)', fromMe: true, desc: Lang.TTS_DESC}, (async (message, match) => {

            if(match[1] === undefined || match[1] == "")
                return;
    
            let 
                LANG = Build.LANG.toLowerCase(),
                ttsMessage = match[1],
                SPEED = 1.0

            if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
                LANG = langMatch[1]
                ttsMessage = ttsMessage.replace(langMatch[0], "")
            } 
            if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
                SPEED = parseFloat(speedMatch[1])
                ttsMessage = ttsMessage.replace(speedMatch[0], "")
            }
    
            var buffer = await googleTTS.synthesize({
                text: ttsMessage,
                voice: LANG
            });
            await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
        }));
    }
    Asena.addCommand({Pnatsumi: 'song ?(.*)', fromMe: true, desc: Lang.SONG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text);    
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_SONG,MessageType.text);

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'highestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text);
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
    }));

    Asena.addCommand({Pnatsumi: 'video ?(.*)', fromMe: true, desc: Lang.VIDEO_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text);    
    
        var VID = '';
        try {
            if (match[1].includes('watch')) {
                var tsts = match[1].replace('watch?v=', '')
                var alal = tsts.split('/')[3]
                VID = alal
            } else {     
                VID = match[1].split('/')[3]
            }
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        }
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_VIDEO,MessageType.text);

        var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));

        yt.on('end', async () => {
            reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_VIDEO,MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4, thumbnail: thumb});
        });
    }));

    Asena.addCommand({Pnatsumi: 'yt ?(.*)', fromMe: true, desc: Lang.YT_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.GETTING_VIDEOS,MessageType.text);

        try {
            var arama = await yts(match[1]);
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NOT_FOUND,MessageType.text);
        }
    
        var mesaj = '';
        arama.all.map((video) => {
            mesaj += '*' + video.title + '* - ' + video.url + '\n'
        });

        await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        await reply.delete();
    }));

    Asena.addCommand({Pnatsumi: 'wiki ?(.*)', fromMe: true, desc: Lang.WIKI_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.SEARCHING,MessageType.text);

        var arama = await wiki({ apiUrl: 'https://' + Build.LANG + '.wikipedia.org/w/api.php' })
            .page(match[1]);

        var info = await arama.rawContent();
        await message.client.sendMessage(message.jid, info, MessageType.text);
        await reply.delete();
    }));

    Asena.addCommand({Pnatsumi: 'img ?(.*)', fromMe: true, desc: Lang.IMG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);
        gis(match[1], async (error, result) => {
            for (var i = 0; i < (result.length < 5 ? result.length : 5); i++) {
                var get = got(result[i].url, {https: {rejectUnauthorized: false}});
                var stream = get.buffer();
                
                stream.then(async (image) => {
                    await message.client.sendMessage(message.jid,image, MessageType.image);
                });
            }

            message.reply(Lang.IMG.format((result.length < 5 ? result.length : 5), match[1]));
        });
    }));

    Asena.addCommand({ Pnatsumi: 'github ?(.*)', fromMe: true, desc: Glang.GİTHUB_DESC }, async (message, match) => {

        const userName = match[1]
 
        if (userName === '') return await message.client.sendMessage(message.jid, Glang.REPLY, MessageType.text)

        await axios
          .get(`https://videfikri.com/api/github/?username=${userName}`)
          .then(async (response) => {

            const {
              hireable,
              company,
              profile_pic,
              username,
              fullname, 
              blog, 
              location,
              email,
              public_repository,
              biografi,
              following,
              followers,
              public_gists,
              profile_url,
              last_updated,
              joined_on,
            } = response.data.result

            const githubscrap = await axios.get(profile_pic, 
              {responseType: 'arraybuffer',
            })

            const msg = `*${Glang.USERNAME}* ${username} \n*${Glang.NAME}* ${fullname} \n*${Glang.FOLLOWERS}* ${followers} \n*${Glang.FOLLOWİNG}* ${following} \n*${Glang.BİO}* ${biografi} \n*${Glang.REPO}* ${public_repository} \n*${Glang.GİST}* ${public_gists} \n*${Glang.LOCATİON}* ${location} \n*${Glang.MAİL}* ${email} \n*${Glang.BLOG}* ${blog} \n*${Glang.COMPANY}* ${company} \n*${Glang.HİRE}* ${hireable === "true" ? Glang.HİRE_TRUE : Glang.HİRE_FALSE} \n*${Glang.JOİN}* ${joined_on} \n*${Glang.UPDATE}* ${last_updated} \n*${Glang.URL}* ${profile_url}`

            await message.sendMessage(Buffer.from(githubscrap.data), MessageType.image, { 
              caption: msg,
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, Glang.NOT, MessageType.text),
          )
      },
    )

    Asena.addCommand({Pnatsumi: 'lyric ?(.*)', fromMe: true, desc: Slang.LY_DESC }, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid, Slang.NEED, MessageType.text);

        var aut = await solenolyrics.requestLyricsFor(`${match[1]}`); 
        var son = await solenolyrics.requestAuthorFor(`${match[1]}`);
        var cov = await solenolyrics.requestIconFor(`${match[1]}`);
        var tit = await solenolyrics.requestTitleFor(`${match[1]}`);

        var buffer = await axios.get(cov, {responseType: 'arraybuffer'});

        await message.client.sendMessage(message.jid, Buffer.from(buffer.data),  MessageType.image, {caption: `*${Slang.ARAT}* ` + '```' + `${match[1]}` + '```' + `\n*${Slang.BUL}* ` + '```' + tit + '```' + `\n*${Slang.AUT}* ` + '```' + son + '```' + `\n*${Slang.SLY}*\n\n` + aut });

    }));

    Asena.addCommand({Pnatsumi: "covid ?(.*)", fromMe: true, desc: Clang.COV_DESC}, (async (message, match) => {
        if (match[1] === "") {
            try{
                //const resp = await fetch("https://coronavirus-19-api.herokuapp.com/all").then(r => r.json());
                const respo = await got("https://coronavirus-19-api.herokuapp.com/all").then(async ok => {
                    const resp = JSON.parse(ok.body);
                    await message.reply(`🌍 *World-Wide Results:*\n🌐 *Total Cases:* ${resp.cases}\n☠️ *Total Deaths:* ${resp.deaths}\n⚕️ *Total Recovered:* ${resp.recovered}`);
 
                });

            } catch (err) {
                await message.reply(`Error :\n${err.message}`, MessageType.text)
            }

        }
        else if (match[1] === "tr" || match[1] === "Tr" || match[1] === "TR" || match[1].includes('turkiye') || match[1].includes('türkiye') || match[1].includes('türk') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Turkey").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇹🇷 *Türkiye İçin Sonuçlar:*\n😷 *Toplam Vaka:* ${resp.cases}\n🏥 *Günlük Hasta:* ${resp.todayCases}\n⚰️ *Toplam Ölü:* ${resp.deaths}\n☠️ *Günlük Ölü:* ${resp.todayDeaths}\n💊 *Toplam İyileşen:* ${resp.recovered}\n😷 *Aktif Vaka:* ${resp.active}\n🆘 *Ağır Hasta:* ${resp.critical}\n🧪 *Toplam Test:* ${resp.totalTests}`);
                });
            } catch (err) {
                await message.reply(`Bir Hata Oluştu, İşte Hata : \n${err.message}`, MessageType.text)
            }

        }
        else if (match[1] === "usa" || match[1] === "Usa" || match[1] === "USA" || match[1] === "america" || match[1] === "America") {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/USA").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇺🇲 *Datas for USA:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "de" || match[1] === "De" || match[1] === "DE" || match[1] === "Germany" || match[1] === "germany" || match[1].includes('deutschland') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Germany").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇩🇪 *Daten für Deutschland:*\n😷 *Fälle İnsgesamt:* ${resp.cases}\n🏥 *Tägliche Fälle:* ${resp.todayCases}\n⚰️ *Totale Todesfälle:* ${resp.deaths}\n☠️ *Tägliche Todesfälle:* ${resp.todayDeaths}\n💊 *Insgesamt Wiederhergestellt:* ${resp.recovered}\n😷 *Aktuelle Fälle:* ${resp.active}\n🆘 *Kritische Fälle:* ${resp.critical}\n🧪 *Gesamttests:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "az" || match[1] === "AZ" || match[1] === "Az" || match[1].includes('azerbaycan') || match[1].includes('azeri') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Azerbaijan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇦🇿 *Azərbaycan üçün məlumatlar:*\n😷 *Ümumi Baş Tutan Hadisə:* ${resp.cases}\n🏥 *Günlük Xəstə:* ${resp.todayCases}\n⚰️ *Ümumi Ölüm:* ${resp.deaths}\n☠️ *Günlük Ölüm:* ${resp.todayDeaths}\n💊 *Ümumi Sağalma:* ${resp.recovered}\n😷 *Aktiv Xəstə Sayı:* ${resp.active}\n🆘 *Ağır Xəstə Sayı:* ${resp.critical}\n🧪 *Ümumi Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "uk" || match[1] === "Uk" || match[1] === "UK" || match[1] === "United" || match[1].includes('kingdom') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/UK").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇬🇧 *Datas for UK:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "in" || match[1] === "ın" || match[1] === "In" || match[1] === "İn" || match[1] === "IN" ||  match[1] === "İN" || match[1] === "india" || match[1] === "India" || match[1].includes('indian') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/India").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇮🇳 *भारत के लिए डेटा:*\n😷 *कुल मामले:* ${resp.cases}\n🏥 *दैनिक मामले:* ${resp.todayCases}\n⚰️ *कुल मौतें:* ${resp.deaths}\n☠️ *रोज की मौत:* ${resp.todayDeaths}\n💊 *कुल बरामद:* ${resp.recovered}\n😷 *एक्टिव केस:* ${resp.active}\n🆘 *गंभीर मामले:* ${resp.critical}\n🧪 *कुल टेस्ट:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "cn" || match[1] === "Cn" || match[1] === "CN" || match[1].includes('china') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/China").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇨🇳 *Datas for China:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "gr" || match[1] === "Gr" || match[1] === "GR" || match[1].includes('greek') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Greece").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇬🇷 *Datas for Greece:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "fr" || match[1] === "Fr" || match[1] === "FR" || match[1].includes('france') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/France").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇫🇷 *Datas for France:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "jp" || match[1] === "Jp" || match[1] === "JP" || match[1].includes('japan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Japan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇯🇵 *Datas for Japan:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });
 
            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "kz" || match[1] === "Kz" || match[1] === "KZ" || match[1].includes('kazakistan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Kazakhstan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇰🇿 *Datas for Kazakhstan:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "pk" || match[1] === "Pk" || match[1] === "PK" || match[1].includes('pakistan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Pakistan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇵🇰 *Datas for Pakistan:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "ru" || match[1] === "Ru" || match[1] === "RU" || match[1].includes('russia') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Russia").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇷🇺 *Datas for Russia:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "id" || match[1] === "İd" || match[1] === "İD" || match[1] === "ıd" || match[1] === "Id" || match[1] === "ID" || match[1].includes('ındonesia') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Indonesia").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇮🇩 *Datas for Indonesia:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "nl" || match[1] === "Nl" || match[1] === "NL" || match[1].includes('netherland') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Netherlands").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇳🇱 *Datas for Netherlands:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else {
            return await message.client.sendMessage(
                message.jid,
                Clang.NOT,
                MessageType.text
            );
        }
    }));

}

//====================================================
//====================PUBLIC MODE=====================

else if (Build.WORKTYPE == 'public') {

    Asena.addCommand({Pnatsumi: 'trt(?: |$)(\\S*) ?(\\S*)', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: false}, (async (message, match) => {

        if (!message.reply_message) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY,MessageType.text);
        }

        ceviri = await translatte(message.reply_message.message, {from: match[1] === '' ? 'auto' : match[1], to: match[2] === '' ? Build.LANG : match[2]});
        if ('text' in ceviri) {
            return await message.reply('*▶️ ' + Lang.LANG + ':* ```' + (match[1] === '' ? 'auto' : match[1]) + '```\n'
            + '*◀️ ' + Lang.FROM + '*: ```' + (match[2] === '' ? Build.LANG : match[2]) + '```\n'
            + '*🔎 ' + Lang.RESULT + ':* ```' + ceviri.text + '```');
        } else {
            return await message.client.sendMessage(message.jid,Lang.TRANSLATE_ERROR,MessageType.text)
        }
    }));
    Asena.addCommand({Pnatsumi: 'detectlang$', fromMe: false, desc: dlang_dsc}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text)
        const msg = message.reply_message.text
        var ldet = lngDetector.detect(msg)
        async function upperfirstLetter(letter) {
            return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
        }
        var cls1 = await upperfirstLetter(ldet[0][0])
        var cls2 = ldet[0][1].toString()
        var cls3 = await upperfirstLetter(ldet[1][0])
        var cls4 = ldet[1][1].toString()
        var cls5 = await upperfirstLetter(ldet[2][0])
        var cls6 = ldet[2][1].toString()
        var cls7 = await upperfirstLetter(ldet[3][0])
        var cls8 = ldet[3][1].toString()
        const res_1 = '*' + dlang_input + '* ' + '_' + msg + '_ \n'
        const res_2 = '*' + closer_res + '* ' + '_' + cls1 + '_\n*' + dlang_similarity + '* ' + '_' + cls2 + '_ \n\n'
        const res_3 = '```[ ' + dlang_other + ' ]```\n\n'
        const res_4 = '#2 *' + dlang_lang + '* ' + '_' + cls3 + '_\n*' + dlang_similarity + '* ' + '_' + cls4 + '_ \n'
        const res_5 = '#3 *' + dlang_lang + '* ' + '_' + cls5 + '_\n*' + dlang_similarity + '* ' + '_' + cls6 + '_ \n'
        const res_6 = '#4 *' + dlang_lang + '* ' + '_' + cls7 + '_\n*' + dlang_similarity + '* ' + '_' + cls8 + '_'
        const rep_7 = res_1 + res_2 + res_3 + res_4 + res_5 + res_6
        await message.client.sendMessage(message.jid,rep_7,MessageType.text, { quoted: message.data });
    }));
    Asena.addCommand({Pnatsumi: 'currency(?: ([0-9.]+) ([a-zA-Z]+) ([a-zA-Z]+)|$|(.*))', fromMe: false}, (async (message, match) => {

        if(match[1] === undefined || match[2] == undefined || match[3] == undefined) {
            return await message.client.sendMessage(message.jid,Lang.CURRENCY_ERROR,MessageType.text);
        }
        let opts = {
            amount: parseFloat(match[1]).toFixed(2).replace(/\.0+$/,''),
            from: match[2].toUpperCase(),
            to: match[3].toUpperCase()
        }
        try {
            result = await exchangeRates().latest().symbols([opts.to]).base(opts.from).fetch()
            result = parseFloat(result).toFixed(2).replace(/\.0+$/,'')
            await message.reply(`\`\`\`${opts.amount} ${opts.from} = ${result} ${opts.to}\`\`\``)
        }
        catch(err) {
            if (err instanceof ExchangeRatesError) 
                await message.client.sendMessage(message.jid,Lang.INVALID_CURRENCY,MessageType.text)
            else {
                await message.client.sendMessage(message.jid,Lang.UNKNOWN_ERROR,MessageType.text)
                console.log(err)
            }
        }
    }));

    Asena.addCommand({Pnatsumi: 'tts (.*)', fromMe: false, desc: Lang.TTS_DESC}, (async (message, match) => {

        if(match[1] === undefined || match[1] == "")
            return;
    
        let 
            LANG = Build.LANG.toLowerCase(),
            ttsMessage = match[1],
            SPEED = 1.0

        if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
            LANG = langMatch[1]
            ttsMessage = ttsMessage.replace(langMatch[0], "")
        } 
        if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
            SPEED = parseFloat(speedMatch[1])
            ttsMessage = ttsMessage.replace(speedMatch[0], "")
        }
    
        var buffer = await googleTTS.synthesize({
            text: ttsMessage,
            voice: LANG
        });
        await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
    }));

    Asena.addCommand({Pnatsumi: 'song ?(.*)', fromMe: false, desc: Lang.SONG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text);    
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_SONG,MessageType.text);

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'highestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text);
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
    }));

    Asena.addCommand({Pnatsumi: 'video ?(.*)', fromMe: false, desc: Lang.VIDEO_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text);    
    
        var VID = '';
        try {
            if (match[1].includes('watch')) {
                var tsts = match[1].replace('watch?v=', '')
                var alal = tsts.split('/')[3]
                VID = alal
            } else {     
                VID = match[1].split('/')[3]
            }
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        }
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_VIDEO,MessageType.text);

        var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));

        yt.on('end', async () => {
            reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_VIDEO,MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4, thumbnail: thumb});
        });
    }));

    Asena.addCommand({Pnatsumi: 'yt ?(.*)', fromMe: false, desc: Lang.YT_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.GETTING_VIDEOS,MessageType.text);

        try {
            var arama = await yts(match[1]);
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NOT_FOUND,MessageType.text);
        }
    
        var mesaj = '';
        arama.all.map((video) => {
            mesaj += '*' + video.title + '* - ' + video.url + '\n'
        });

        await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        await reply.delete();
    }));

    Asena.addCommand({Pnatsumi: 'wiki ?(.*)', fromMe: false, desc: Lang.WIKI_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.SEARCHING,MessageType.text);

        var arama = await wiki({ apiUrl: 'https://' + Build.LANG + '.wikipedia.org/w/api.php' })
            .page(match[1]);

        var info = await arama.rawContent();
        await message.client.sendMessage(message.jid, info, MessageType.text);
        await reply.delete();
    }));

    Asena.addCommand({Pnatsumi: 'img ?(.*)', fromMe: false, desc: Lang.IMG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);
        gis(match[1], async (error, result) => {
            for (var i = 0; i < (result.length < 5 ? result.length : 5); i++) {
                var get = got(result[i].url, {https: {rejectUnauthorized: false}});
                var stream = get.buffer();
                
                stream.then(async (image) => {
                    await message.client.sendMessage(message.jid,image, MessageType.image);
                });
            }

            message.reply(Lang.IMG.format((result.length < 5 ? result.length : 5), match[1]));
        });
    }));

    Asena.addCommand({ Pnatsumi: 'github ?(.*)', fromMe: false, desc: Glang.GİTHUB_DESC }, async (message, match) => {

        const userName = match[1]
 
        if (userName === '') return await message.client.sendMessage(message.jid, Glang.REPLY, MessageType.text)

        await axios
          .get(`https://videfikri.com/api/github/?username=${userName}`)
          .then(async (response) => {

            const {
              hireable,
              company,
              profile_pic,
              username,
              fullname, 
              blog, 
              location,
              email,
              public_repository,
              biografi,
              following,
              followers,
              public_gists,
              profile_url,
              last_updated,
              joined_on,
            } = response.data.result

            const githubscrap = await axios.get(profile_pic, 
              {responseType: 'arraybuffer',
            })

            const msg = `*${Glang.USERNAME}* ${username} \n*${Glang.NAME}* ${fullname} \n*${Glang.FOLLOWERS}* ${followers} \n*${Glang.FOLLOWİNG}* ${following} \n*${Glang.BİO}* ${biografi} \n*${Glang.REPO}* ${public_repository} \n*${Glang.GİST}* ${public_gists} \n*${Glang.LOCATİON}* ${location} \n*${Glang.MAİL}* ${email} \n*${Glang.BLOG}* ${blog} \n*${Glang.COMPANY}* ${company} \n*${Glang.HİRE}* ${hireable === "true" ? Glang.HİRE_TRUE : Glang.HİRE_FALSE} \n*${Glang.JOİN}* ${joined_on} \n*${Glang.UPDATE}* ${last_updated} \n*${Glang.URL}* ${profile_url}`

            await message.sendMessage(Buffer.from(githubscrap.data), MessageType.image, { 
              caption: msg,
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, Glang.NOT, MessageType.text),
          )
      },
    )

    Asena.addCommand({Pnatsumi: 'lyric ?(.*)', fromMe: false, desc: Slang.LY_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, Slang.NEED, MessageType.text);

        var aut = await solenolyrics.requestLyricsFor(`${match[1]}`); 
        var son = await solenolyrics.requestAuthorFor(`${match[1]}`);
        var cov = await solenolyrics.requestIconFor(`${match[1]}`);
        var tit = await solenolyrics.requestTitleFor(`${match[1]}`);

        var buffer = await axios.get(cov, {responseType: 'arraybuffer'});

        await message.client.sendMessage(message.jid, Buffer.from(buffer.data),  MessageType.image, {caption: `*${Slang.ARAT}* ` + '```' + `${match[1]}` + '```' + `\n*${Slang.BUL}* ` + '```' + tit + '```' + `\n*${Slang.AUT}* ` + '```' + son + '```' + `\n*${Slang.SLY}*\n\n` + aut });

    }));

    Asena.addCommand({Pnatsumi: "covid ?(.*)", fromMe: false, desc: Clang.COV_DESC}, (async (message, match) => {
        if (match[1] === "") {
            try{
                //const resp = await fetch("https://coronavirus-19-api.herokuapp.com/all").then(r => r.json());
                const respo = await got("https://coronavirus-19-api.herokuapp.com/all").then(async ok => {
                    const resp = JSON.parse(ok.body);
                    await message.reply(`🌍 *World-Wide Results:*\n🌐 *Total Cases:* ${resp.cases}\n☠️ *Total Deaths:* ${resp.deaths}\n⚕️ *Total Recovered:* ${resp.recovered}`);
 
                });

            } catch (err) {
                await message.reply(`Error :\n${err.message}`, MessageType.text)
            }

        }
        else if (match[1] === "tr" || match[1] === "Tr" || match[1] === "TR" || match[1].includes('turkiye') || match[1].includes('türkiye') || match[1].includes('türk') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Turkey").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇹🇷 *Türkiye İçin Sonuçlar:*\n😷 *Toplam Vaka:* ${resp.cases}\n🏥 *Günlük Hasta:* ${resp.todayCases}\n⚰️ *Toplam Ölü:* ${resp.deaths}\n☠️ *Günlük Ölü:* ${resp.todayDeaths}\n💊 *Toplam İyileşen:* ${resp.recovered}\n😷 *Aktif Vaka:* ${resp.active}\n🆘 *Ağır Hasta:* ${resp.critical}\n🧪 *Toplam Test:* ${resp.totalTests}`);
                });
            } catch (err) {
                await message.reply(`Bir Hata Oluştu, İşte Hata : \n${err.message}`, MessageType.text)
            }

        }
        else if (match[1] === "usa" || match[1] === "Usa" || match[1] === "USA" || match[1] === "america" || match[1] === "America") {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/USA").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇺🇲 *Datas for USA:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "de" || match[1] === "De" || match[1] === "DE" || match[1] === "Germany" || match[1] === "germany" || match[1].includes('deutschland') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Germany").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇩🇪 *Daten für Deutschland:*\n😷 *Fälle İnsgesamt:* ${resp.cases}\n🏥 *Tägliche Fälle:* ${resp.todayCases}\n⚰️ *Totale Todesfälle:* ${resp.deaths}\n☠️ *Tägliche Todesfälle:* ${resp.todayDeaths}\n💊 *Insgesamt Wiederhergestellt:* ${resp.recovered}\n😷 *Aktuelle Fälle:* ${resp.active}\n🆘 *Kritische Fälle:* ${resp.critical}\n🧪 *Gesamttests:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "az" || match[1] === "AZ" || match[1] === "Az" || match[1].includes('azerbaycan') || match[1].includes('azeri') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Azerbaijan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇦🇿 *Azərbaycan üçün məlumatlar:*\n😷 *Ümumi Baş Tutan Hadisə:* ${resp.cases}\n🏥 *Günlük Xəstə:* ${resp.todayCases}\n⚰️ *Ümumi Ölüm:* ${resp.deaths}\n☠️ *Günlük Ölüm:* ${resp.todayDeaths}\n💊 *Ümumi Sağalma:* ${resp.recovered}\n😷 *Aktiv Xəstə Sayı:* ${resp.active}\n🆘 *Ağır Xəstə Sayı:* ${resp.critical}\n🧪 *Ümumi Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "uk" || match[1] === "Uk" || match[1] === "UK" || match[1] === "United" || match[1].includes('kingdom') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/UK").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇬🇧 *Datas for UK:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "in" || match[1] === "ın" || match[1] === "In" || match[1] === "İn" || match[1] === "İN" ||  match[1] === "IN" || match[1] === "india" || match[1] === "India" || match[1].includes('indian') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/India").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇮🇳 *भारत के लिए डेटा:*\n😷 *कुल मामले:* ${resp.cases}\n🏥 *दैनिक मामले:* ${resp.todayCases}\n⚰️ *कुल मौतें:* ${resp.deaths}\n☠️ *रोज की मौत:* ${resp.todayDeaths}\n💊 *कुल बरामद:* ${resp.recovered}\n😷 *एक्टिव केस:* ${resp.active}\n🆘 *गंभीर मामले:* ${resp.critical}\n🧪 *कुल टेस्ट:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "cn" || match[1] === "Cn" || match[1] === "CN" || match[1].includes('china') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/China").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇨🇳 *Datas for China:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "gr" || match[1] === "Gr" || match[1] === "GR" || match[1].includes('greek') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Greece").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇬🇷 *Datas for Greece:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "fr" || match[1] === "Fr" || match[1] === "FR" || match[1].includes('france') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/France").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇫🇷 *Datas for France:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "jp" || match[1] === "Jp" || match[1] === "JP" || match[1].includes('japan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Japan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇯🇵 *Datas for Japan:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });
 
            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "kz" || match[1] === "Kz" || match[1] === "KZ" || match[1].includes('kazakistan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Kazakhstan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇰🇿 *Datas for Kazakhstan:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "pk" || match[1] === "Pk" || match[1] === "PK" || match[1].includes('pakistan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Pakistan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇵🇰 *Datas for Pakistan:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "ru" || match[1] === "Ru" || match[1] === "RU" || match[1].includes('russia') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Russia").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇷🇺 *Datas for Russia:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "id" || match[1] === "İd" || match[1] === "İD" || match[1] === "ıd" || match[1] === "Id" || match[1] === "ID" || match[1].includes('ındonesia') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Indonesia").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇮🇩 *Datas for Indonesia:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "nl" || match[1] === "Nl" || match[1] === "NL" || match[1].includes('netherland') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Netherlands").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇳🇱 *Datas for Netherlands:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else {
            return await message.client.sendMessage(
                message.jid,
                Clang.NOT,
                MessageType.text
            );
        }
    }));
    
}

const thumb= "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"
