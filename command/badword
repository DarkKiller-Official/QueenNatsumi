/* Codded by @Dark Killer

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Dark Killer
*/

const Natsumi = require('../control');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Build = require('../build')
const Language = require('../language');
const Lang = Language.getString('evaluators');
const googleTTS = require('google-translate-tts');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Build.HEROKU.API_KEY
});
let baseURI = '/apps/' + Build.HEROKU.APP_NAME;


async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
const ADD = '94761209144'
var badkick_var = ''
async function badwd() {
    await heroku.get(baseURI + '/Build-vars').then(async (vars) => {
        badkick_var = vars.BAD_KICK
    });
}
badwd()
var ldc = ''
if (Build.LANG == 'AZ') ldc = '_*👸 Bad word Not Allowed This Group 👸*_\n👑Aⁿᵗⁱᵇᵃᵈ Wᵒʳᵈ Bʸ 👸 Qᵘᵉᵉⁿ ᴺᵃᵗˢᵘᵐⁱ ᴮᴼᵀ 👸 👑\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸'
if (Build.LANG == 'SI') ldc = '_*👸 Bad word Not Allowed This Group 👸*_\n👑Aⁿᵗⁱᵇᵃᵈ Wᵒʳᵈ Bʸ 👸 Qᵘᵉᵉⁿ ᴺᵃᵗˢᵘᵐⁱ ᴮᵒᵗ 👸 👑\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸'
if (Build.LANG == 'EN') ldc = '_*👸 Bad word Not Allowed This Group 👸*_\n👑Aⁿᵗⁱᵇᵃᵈ Wᵒʳᵈ Bʸ 👸 Qᵘᵉᵉⁿ ᴺᵃᵗˢᵘᵐⁱ ᴮᵒᵗ 👸 👑\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸'

var NATSUMI = ''
if (Build.LANG == 'AZ') NATSUMI = '_*Group Links Not Allowed This Group*_\n👑Aⁿᵗⁱᵍʳᵒᵘᵖ Lⁱⁿᵏ Bʸ BLACK NATSUMI 👑\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸'
if (Build.LANG == 'SI') NATSUMI = '_*Group Links Not Allowed This Group*_\n👑Aⁿᵗⁱᵍʳᵒᵘᵖ Lⁱⁿᵏ Bʸ 👸 Qᵘᵉᵉⁿ ᴺᵃᵗˢᵘᵐⁱ ᴮᵒᵗ 👸 👑\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸'
if (Build.LANG == 'EN') NATSUMI = '_*Group Links Not Allowed This Group*_\n👑Aⁿᵗⁱᵍʳᵒᵘᵖ Lⁱⁿᵏ Bʸ 👸 Qᵘᵉᵉⁿ ᴺᵃᵗˢᵘᵐⁱ ᴮᵒᵗ 👸 👑\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸'

var BNATSUMI = ''
if (Build.LANG == 'SI') BNATSUMI = '*‎.\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n*අසරණ ජීවිත සදහා ඉඩක් නොමැත 😂*'
if (Build.LANG == 'EN') BNATSUMI = '*.\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n*Spam Not Allowed Here 🥴!*'

var ANATSUMI = ''
if (Build.LANG == 'SI') ANATSUMI = '*************************************\n*👑ANTI SPAM CLEAR RIBBON👑*\n\n       👑By 👸 Qᵘᵉᵉⁿ ᴺᵃᵗˢᵘᵐⁱ ᴮᵒᵗ 👸 👑\n       \n\n\n\n```✨✨Do Not Go Up✨✨```\n*ඉහලට යෑමෙන් වලිකින්න.*\n            *Clear Ribbon*\n    _👑by      👸 Qᵘᵉᵉⁿ ᴺᵃᵗˢᵘᵐⁱ ᴮᵒᵗ 👸 👑_\n    \n    \n\n```✨✨Do Not Go Up✨✨```\n*ඉහලට යෑමෙන් වලිකින්න.*\n            *Clear Ribbon*\n    _👑by      👸 Qᵘᵉᵉⁿ ᴺᵃᵗˢᵘᵐⁱ ᴮᵒᵗ 👸 👑_\n    \n\n\n\n```✨✨Do Not Go Up✨✨```\n*ඉහලට යෑමෙන් වලිකින්න.*\n            *Clear Ribbon*\n    _👑by      👸 Qᵘᵉᵉⁿ ᴺᵃᵗˢᵘᵐⁱ ᴮᵒᵗ 👸 👑_\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸\n*************************************'
if (Build.LANG == 'EN') ANATSUMI = '*************************************\n*👑ANTI SPAM CLEAR RIBBON👑*\n\n       👑By 👸 Qᵘᵉᵉⁿ ᴺᵃᵗˢᵘᵐⁱ ᴮᵒᵗ 👸 👑\n       \n\n\n\n```✨✨Do Not Go Up✨✨```\n*ඉහලට යෑමෙන් වලිකින්න.*\n            *Clear Ribbon*\n    _👑by      👸 Qᵘᵉᵉⁿ ᴺᵃᵗˢᵘᵐⁱ ᴮᵒᵗ 👸 👑_\n    \n    \n\n```✨✨Do Not Go Up✨✨```\n*ඉහලට යෑමෙන් වලිකින්න.*\n            *Clear Ribbon*\n    _👑by      👸 Qᵘᵉᵉⁿ ᴺᵃᵗˢᵘᵐⁱ ᴮᵒᵗ 👸 👑_\n    \n\n\n\n```✨✨Do Not Go Up✨✨```\n*ඉහලට යෑමෙන් වලිකින්න.*\n            *Clear Ribbon*\n    _👑by      👸 Qᵘᵉᵉⁿ ᴺᵃᵗˢᵘᵐⁱ ᴮᵒᵗ 👸 👑_\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸\n*************************************'
  if (Build.PSW !== 'kingraviya') {
Natsumi.addComand({on: 'text', fromMe: false, delowndinukacmd: false}, (async (message, match) => {
    if (badkick_var == 'true') {
        let regex1NATSUMI = new RegExp('fuck')
        let regex2NATSUMI = new RegExp('f u c k')
        let regex3NATSUMI = new RegExp('Fuck')
        let regex4NATSUMI = new RegExp('F u c k')
        let regex5NATSUMI = new RegExp('Huththa')
        let regex6NATSUMI = new RegExp('huththa')
        let regex7NATSUMI = new RegExp('Hutta')
        let regex8NATSUMI = new RegExp('hutta')
        let regex9NATSUMI = new RegExp('huththi')
        let regex10NATSUMI = new RegExp('Huththi')
        let regex11NATSUMI = new RegExp('hutti')
        let regex12NATSUMI = new RegExp('Hutti')
        let regex13NATSUMI = new RegExp('Baduwa')
        let regex14NATSUMI = new RegExp('baduwa')
        let regex15NATSUMI = new RegExp('paka ')
        let regex16NATSUMI = new RegExp('Paka ')
        let regex17NATSUMI = new RegExp('Pakaya')
        let regex18NATSUMI = new RegExp('pakaya')
        let regex19NATSUMI = new RegExp('Pakichchi')
        let regex20NATSUMI = new RegExp('pakichchi')
        let regex21NATSUMI = new RegExp('wesawa')
        let regex22NATSUMI = new RegExp('Wesawa')
        let regex23NATSUMI = new RegExp('Wesi ')
        let regex24NATSUMI = new RegExp('wesi ')
        let regex25NATSUMI = new RegExp('Payya')
        let regex26NATSUMI = new RegExp('payya')
        let regex27NATSUMI = new RegExp('Wesige')
        let regex28NATSUMI = new RegExp('wesige')
        let regex29NATSUMI = new RegExp('hukanawa')
        let regex30NATSUMI = new RegExp('Hukanawa')
        let regex31NATSUMI = new RegExp('Hukanna')
        let regex32NATSUMI = new RegExp('hukanna')
        let regex33NATSUMI = new RegExp('Huka ')
        let regex34NATSUMI = new RegExp('huka ')
        let regex35NATSUMI = new RegExp('Hikuna')
        let regex36NATSUMI = new RegExp('hikuna')
        let regex37NATSUMI = new RegExp('Hikila')
        let regex38NATSUMI = new RegExp('hikila')
        let regex39NATSUMI = new RegExp('kariya')
        let regex40NATSUMI = new RegExp('Kariya')
        let regex41NATSUMI = new RegExp('Kari ')
        let regex42NATSUMI = new RegExp('kari ')
        let regex43NATSUMI = new RegExp('Hukana')
        let regex44NATSUMI = new RegExp('hukana')
        let regex45NATSUMI = new RegExp('හුත්තා')
        let regex46NATSUMI = new RegExp('හුත්ති')
        let regex47NATSUMI = new RegExp('හුකන්නා')
        let regex48NATSUMI = new RegExp('හුකනවා')
        let regex49NATSUMI = new RegExp('හිකුනා')
        let regex50NATSUMI = new RegExp('හිකිලා')
        let regex51NATSUMI = new RegExp('හුත්')
        let regex52NATSUMI = new RegExp('හුකා')
        let regex53NATSUMI = new RegExp('කැරියා')
        let regex54NATSUMI = new RegExp('කැරි')
        let regex55NATSUMI = new RegExp('පකයා')
        let regex56NATSUMI = new RegExp('පක')
        let regex57NATSUMI = new RegExp('පකා')
        let regex58NATSUMI = new RegExp('පක්')
        let regex59NATSUMI = new RegExp('ෆක්')
        let regex60NATSUMI = new RegExp('පින්නයා')
        let regex61NATSUMI = new RegExp('pinnaya')
        let regex62NATSUMI = new RegExp('Pinnaya')
        let regex63NATSUMI = new RegExp('බඩුව')
        let regex64NATSUMI = new RegExp('වේසාවා')
        let regex65NATSUMI = new RegExp('වේසි')
        let regex66NATSUMI = new RegExp('පයිය')
        let regex67NATSUMI = new RegExp('පයියා')
        let regex68NATSUMI = new RegExp('esawa ')
        let regex69NATSUMI = new RegExp(' esi ')
        let regex70NATSUMI = new RegExp('uddika ')
        let regex71NATSUMI = new RegExp('Uddika ')
        let regex72NATSUMI = new RegExp('උද්දික ')
        let regex73NATSUMI = new RegExp('ඒසාවා ')
        let regex74NATSUMI = new RegExp('ඒසි')
        let regex75NATSUMI = new RegExp('Esawa ')
        let regex76NATSUMI = new RegExp('Esi ')
        let regex77NATSUMI = new RegExp('හුකන්නා')
        let regex78NATSUMI = new RegExp('හුත්තිගෙ')
        let regex79NATSUMI = new RegExp('Huththige')
        let regex80NATSUMI = new RegExp('huththige')
        let regex81NATSUMI = new RegExp('වේසිගෙ')
        let regex82NATSUMI = new RegExp('ponnaya')
        let regex83NATSUMI = new RegExp('ponnay')
        let regex84NATSUMI = new RegExp('ponnayage')
        let regex85NATSUMI = new RegExp('ponnayek')
        let regex86NATSUMI = new RegExp('ponnayekne')
        let regex87NATSUMI = new RegExp('ponnayekge')
        let regex88NATSUMI = new RegExp('පොන්නයා')
        let regex89NATSUMI = new RegExp('පොන්නයෙක්')
        let regex90NATSUMI = new RegExp('පොන්නයෙක්නෙ')
        let regex91NATSUMI = new RegExp('පොන්නයෙක්ගෙ')
        let regex92NATSUMI = new RegExp('vesi ')
        let regex93NATSUMI = new RegExp('vesawa')
        let regex94NATSUMI = new RegExp('vesiyak')
        let regex95NATSUMI = new RegExp('wesiyak')
        let regex96NATSUMI = new RegExp('Wesiyak')
        let regex97NATSUMI = new RegExp('Vesi ')
        let regex98NATSUMI = new RegExp('Vesawa')
        let regex99NATSUMI = new RegExp('වේසියක්ගෙ')
        let regex100NATSUMI = new RegExp('Huththiyak')
        let regex101NATSUMI = new RegExp('huththiyak')
        let regex102NATSUMI = new RegExp('payyek')
        let regex103NATSUMI = new RegExp('Payyek')
        let regex104NATSUMI = new RegExp('pakayek')
        let regex105NATSUMI = new RegExp('Pakayek')
        let regex106NATSUMI = new RegExp('Huththek')
        let regex107NATSUMI = new RegExp('huththek')
        let regex108NATSUMI = new RegExp('හුත්තියක්')
        let regex109NATSUMI = new RegExp('පයියෙක්')
        let regex110NATSUMI = new RegExp('වේසියක්')
        let regex111NATSUMI = new RegExp('බඩුවක්')
        let regex112NATSUMI = new RegExp('baduwak')
        let regex113NATSUMI = new RegExp('Baduwak')
        let regex114NATSUMI = new RegExp('pinnayek')
        let regex115NATSUMI = new RegExp('Pinnayek')
        let regex116NATSUMI = new RegExp('පින්නයෙක්')
        let regex117NATSUMI = new RegExp('Huththage')
        let regex118NATSUMI = new RegExp('huththage')
        let regex119NATSUMI = new RegExp('හුත්තගෙ')
        let regex120NATSUMI = new RegExp('Huththata')
        let regex121NATSUMI = new RegExp('හුත්තට')
        let regex122NATSUMI = new RegExp('huththata')
        let regex123NATSUMI = new RegExp('pakata')
        let regex124NATSUMI = new RegExp('Pakata')
        let regex125NATSUMI = new RegExp('පකට')
        let regex126NATSUMI = new RegExp('පකාට')
        let regex127NATSUMI = new RegExp('ponnayata')
        let regex128NATSUMI = new RegExp('Ponnayata')
        let regex129NATSUMI = new RegExp('Huththata')
        let regex130NATSUMI = new RegExp('huththata')
        let regex131NATSUMI = new RegExp('හුත්තට')
        let regex132NATSUMI = new RegExp('පොන්නයට')
        let regex133NATSUMI = new RegExp('පයියට')
        let regex134NATSUMI = new RegExp('payyata')
        let regex135NATSUMI = new RegExp('Payyata')
        let regex136NATSUMI = new RegExp('vesita')
        let regex137NATSUMI = new RegExp('Vesita')
        let regex138NATSUMI = new RegExp('wesita')
        let regex139NATSUMI = new RegExp('Wesita')
        let regex140NATSUMI = new RegExp('වේසිට')
        let regex141NATSUMI = new RegExp('vesiyek')
        let regex142NATSUMI = new RegExp('Vesiyek')
        let regex143NATSUMI = new RegExp('Wesiyek')
        let regex144NATSUMI = new RegExp('vesiyek')
        let regex145NATSUMI = new RegExp('වේසියෙක්')
        let regex146NATSUMI = new RegExp('හුත්තියෙක්')
        let regex147NATSUMI = new RegExp('huththiyek')
        let regex148NATSUMI = new RegExp('Huththiyek')
        let regex149NATSUMI = new RegExp('huttiyek')
        let regex150NATSUMI = new RegExp('Huttiyek')
        let regex151NATSUMI = new RegExp('huttek')
        let regex152NATSUMI = new RegExp('Huttek')
        let regex153NATSUMI = new RegExp('ponni')
        let regex154NATSUMI = new RegExp('Ponni')
        let regex155NATSUMI = new RegExp('පොන්නි')
        let regex156NATSUMI = new RegExp('ponniyak')
        let regex157NATSUMI = new RegExp('Ponniyak')
        let regex158NATSUMI = new RegExp('Ponniyek')
        let regex159NATSUMI = new RegExp('ponniyek')
        let regex160NATSUMI = new RegExp('Bacic')
        let regex161NATSUMI = new RegExp('becic')
        let regex162NATSUMI = new RegExp('becige')
        let regex163NATSUMI = new RegExp('Basige')
        let regex164NATSUMI = new RegExp('Bacige')
        let regex165NATSUMI = new RegExp('besige')
        let regex166NATSUMI = new RegExp('hukaam')
        let regex167NATSUMI = new RegExp('Hukaam')
        let regex168NATSUMI = new RegExp('Hukaham')
        let regex169NATSUMI = new RegExp('Hukahan')
        let regex170NATSUMI = new RegExp('hukahan')
        let regex171NATSUMI = new RegExp('hukaham')
        let regex172NATSUMI = new RegExp('hukapu')
        let regex173NATSUMI = new RegExp('Hukapu')
        let regex174NATSUMI = new RegExp('හුකාම්')
        let regex175NATSUMI = new RegExp('හුකහම්')
        let regex176NATSUMI = new RegExp('pakeer')
        let regex177NATSUMI = new RegExp('fakeer')
        let regex178NATSUMI = new RegExp('පකීර්')
        let regex179NATSUMI = new RegExp('හුකහන්')
        let regex180NATSUMI = new RegExp('ෆකීර්')
        let regex181NATSUMI = new RegExp('පිත්තම්')
        let regex182NATSUMI = new RegExp('කල්ලතෝනි')
        let regex183NATSUMI = new RegExp('මරිමොංගල්')
        let regex184NATSUMI = new RegExp('සිපයියා')
        let regex185NATSUMI = new RegExp('පිම්පි')
        let regex186NATSUMI = new RegExp('වඳ')
        let regex187NATSUMI = new RegExp('පීචන්')
        let regex188NATSUMI = new RegExp('කැරිය')
        let regex189NATSUMI = new RegExp('ලෙස්බියන්')
        let regex190NATSUMI = new RegExp('හොරහුත්ති')
        let regex191NATSUMI = new RegExp('නාට්ටාමි')
        let regex192NATSUMI = new RegExp('බැල්ලි')
        let regex193NATSUMI = new RegExp('පක')
        let regex194NATSUMI = new RegExp('ඇටදෙක')
        let regex195NATSUMI = new RegExp('මන්දමානසික')
        let regex196NATSUMI = new RegExp('කණ්ඩම්')
        let regex197NATSUMI = new RegExp('කොණ්ඩම්')
        let regex198NATSUMI = new RegExp('පීචන්')
        let regex199NATSUMI = new RegExp('පකෝ')
        let regex200NATSUMI = new RegExp('කනවැන්දුමා')
        let regex201NATSUMI = new RegExp('මෑඇටේ')
        let regex202NATSUMI = new RegExp('මෑමල')
        let regex203NATSUMI = new RegExp('අවජාතක')
        let regex204NATSUMI = new RegExp('බලුජානෙ')
        let regex205NATSUMI = new RegExp('හුකන්නා')
        let regex206NATSUMI = new RegExp('බඩුව')
        let regex207NATSUMI = new RegExp('ගොම්බඩුව')
        let regex208NATSUMI = new RegExp('පොන්නහුකන්නා')
        let regex209NATSUMI = new RegExp('කැරිහුත්ති')
        let regex210NATSUMI = new RegExp('පොට්ටහුත්ති')
        let regex211NATSUMI = new RegExp('පොට්ටවේසි')
        let regex212NATSUMI = new RegExp('ෆක්')
        let regex213NATSUMI = new RegExp('වඳහුත්ති')
        let regex214NATSUMI = new RegExp('ලෙඩබැල්ලි')
        let regex215NATSUMI = new RegExp('වේසබඩුව')
        let regex216NATSUMI = new RegExp('පිත්තම්')
        let regex217NATSUMI = new RegExp('piththam')
        let regex218NATSUMI = new RegExp('Piththam')
        let regex219NATSUMI = new RegExp('marimongal')
        let regex220NATSUMI = new RegExp('Marimongal')
        let regex221NATSUMI = new RegExp('pimpi')
        let regex222NATSUMI = new RegExp('Pimpi')
        let regex223NATSUMI = new RegExp('pichan')
        let regex224NATSUMI = new RegExp('Pichan')
        let regex225NATSUMI = new RegExp('kariya')
        let regex226NATSUMI = new RegExp('Kariya')
        let regex227NATSUMI = new RegExp('හොරහුත්ති')
        let regex228NATSUMI = new RegExp('horahuththi')
        let regex229NATSUMI = new RegExp('Horahuththi')
        let regex230NATSUMI = new RegExp('nattami')
        let regex231NATSUMI = new RegExp('Nattami')
        let regex232NATSUMI = new RegExp('paka ')
        let regex233NATSUMI = new RegExp('Paka ')
        let regex234NATSUMI = new RegExp('hukaham')
        let regex235NATSUMI = new RegExp('Hukaham')
        let regex236NATSUMI = new RegExp('mandamanasika')
        let regex237NATSUMI = new RegExp('Mandamanasika')
        let regex238NATSUMI = new RegExp('kandam')
        let regex239NATSUMI = new RegExp('Kandam')
        let regex240NATSUMI = new RegExp('kondam')
        let regex241NATSUMI = new RegExp('Kondam')
        let regex242NATSUMI = new RegExp('pichan')
        let regex243NATSUMI = new RegExp('Pichan')
        let regex244NATSUMI = new RegExp('pako ')
        let regex245NATSUMI = new RegExp('Pako ')
        let regex246NATSUMI = new RegExp('kanawanduma')
        let regex247NATSUMI = new RegExp('Kanawanduma')
        let regex248NATSUMI = new RegExp('ma ate ')
        let regex249NATSUMI = new RegExp('Ma ate ')
        let regex250NATSUMI = new RegExp('ma mfdfsgggala ')
        let regex251NATSUMI = new RegExp('Ma maggddsdla')
        let regex252NATSUMI = new RegExp('awajathaka')
        let regex253NATSUMI = new RegExp('Awajathaka')
        let regex254NATSUMI = new RegExp('balujane')
        let regex255NATSUMI = new RegExp('Balujane')
        let regex256NATSUMI = new RegExp('hukanna')
        let regex257NATSUMI = new RegExp('Hukanna')
        let regex258NATSUMI = new RegExp('gonbaduwa')
        let regex259NATSUMI = new RegExp('Gonbaduwa')
        let regex260NATSUMI = new RegExp('ponnahukanna')
        let regex261NATSUMI = new RegExp('Ponnahukanna')
        let regex262NATSUMI = new RegExp('karihuththu')
        let regex263NATSUMI = new RegExp('Karihuththi')
        let regex264NATSUMI = new RegExp('pottahuththi')
        let regex265NATSUMI = new RegExp('Pottahuththi')
        let regex266NATSUMI = new RegExp('pottawesi')
        let regex267NATSUMI = new RegExp('Pottawesi')
        let regex268NATSUMI = new RegExp('kbgigihogkgkgggjvuug')
        let regex269NATSUMI = new RegExp('ffhhufffufjjffjjjfjjjifjffhhhfhfh')
        let regex270NATSUMI = new RegExp('wadahuththi')
        let regex271NATSUMI = new RegExp('Wadahuththi')
        let regex272NATSUMI = new RegExp('ledaballi')
        let regex273NATSUMI = new RegExp('Ledaballi')
        let regex274NATSUMI = new RegExp('wesabaduwa')
        let regex275NATSUMI = new RegExp('Wesabaduwa')
        let regex276NATSUMI = new RegExp('pinnayek')
        let regex277NATSUMI = new RegExp('Pinnayek')
        let regex278NATSUMI = new RegExp('හුත්තෝ')
        let regex279NATSUMI = new RegExp('huththo')
        let regex280NATSUMI = new RegExp('Huththo')
        let regex281NATSUMI = new RegExp('hutto')
        let regex282NATSUMI = new RegExp('Hutto')
        let regex283NATSUMI = new RegExp('පකෝ')
        let regex284NATSUMI = new RegExp('pako')
        let regex285NATSUMI = new RegExp('Pako ')
        let regex286NATSUMI = new RegExp('පයියො')
        let regex287NATSUMI = new RegExp('payyo')
        let regex288NATSUMI = new RegExp('Payyo')
        let regex289NATSUMI = new RegExp('කැරියෝ')
        let regex290NATSUMI = new RegExp('kariyo')
        let regex291NATSUMI = new RegExp('Kariyo')
        let regex292NATSUMI = new RegExp('puthcfsdfghjjo ')
        let regex293NATSUMI = new RegExp('පුvghjiiiiiතෝ ')
        let regex294NATSUMI = new RegExp('හුකන්නො ')
        let regex295NATSUMI = new RegExp('hukanno')
        let regex296NATSUMI = new RegExp('Hukanno')
        let regex297NATSUMI = new RegExp('keriyo')
        let regex298NATSUMI = new RegExp('Keriyo')
        let regex299NATSUMI = new RegExp('esawo ')
        let regex300NATSUMI = new RegExp('Esawo ')
        let regex301NATSUMI = new RegExp('esavo ')
        let regex302NATSUMI = new RegExp('Esavo ')
        let regex303NATSUMI = new RegExp('https://chat')
        let regex304NATSUMI = new RegExp('hutho ')
        let regex305NATSUMI = new RegExp('Hutho ')
        let regex306NATSUMI = new RegExp('pamka')
        let regex307NATSUMI = new RegExp('Pamka')
        let regex308NATSUMI = new RegExp('Humkapan')
        let regex309NATSUMI = new RegExp('humkapan')
        let regex310NATSUMI = new RegExp('humtha')
        let regex311NATSUMI = new RegExp('Humtha')
        let regex312NATSUMI = new RegExp('Humtho')
        let regex313NATSUMI = new RegExp('humtho')
        let regex314NATSUMI = new RegExp('Pamko')
        let regex315NATSUMI = new RegExp('pamko')
        let regex316NATSUMI = new RegExp('kamriya')
        let regex317NATSUMI = new RegExp('Kamriya')
        let regex318NATSUMI = new RegExp('wemsi')
        let regex319NATSUMI = new RegExp('Wemsi')
        let regex320NATSUMI = new RegExp('pussy')
        let regex321NATSUMI = new RegExp('piss')
        let regex322NATSUMI = new RegExp('xnxx')
        let regex323NATSUMI = new RegExp('Piss ')
        let regex324NATSUMI = new RegExp('Pussy')
        let regex325NATSUMI = new RegExp('vulva')
        let regex326NATSUMI = new RegExp('Vulva')
        let regex327NATSUMI = new RegExp('penis')
        /*
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        let regex❤NATSUMI = new RegExp('😁')
        
        */
        
        /*Spam Kick By t.me/Dinuka */
        
        
        let regex1aaNATSUMI = new RegExp('ท้เึางืผ')
        let regex2aaNATSUMI = new RegExp('๒')
        let regex3aaNATSUMI = new RegExp('৭')
        let regex4aaNATSUMI = new RegExp('୧')
        let regex5aaNATSUMI = new RegExp('୪')
        let regex6aaNATSUMI = new RegExp('୨')
        let regex7aaNATSUMI = new RegExp('ดุ')
        let regex8aaNATSUMI = new RegExp('ۦོ͢⇣͢✰͢↬Â')
        let regex9aaNATSUMI = new RegExp('๑')
        let regex10aaNATSUMI = new RegExp('ห')
        let regex11aaNATSUMI = new RegExp('ฬ')
        let regex12aaNATSUMI = new RegExp('ฆ')
        let regex13aaNATSUMI = new RegExp('ۦོ͢⇣͢✰͢↬')
        let regex14aaNATSUMI = new RegExp('๓')
        let regex15aaNATSUMI = new RegExp('ฤ')
        let regex16aaNATSUMI = new RegExp('ຼ์๘ຼ์')
        let regex17aaNATSUMI = new RegExp('໒')
        let regex18aaNATSUMI = new RegExp('๕')
        let regex19aaNATSUMI = new RegExp('๘')
        let regex20aaNATSUMI = new RegExp('ค')
        let regex21aaNATSUMI = new RegExp('Ꮛ')
        
        if (regex1aaNATSUMI.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,BNATSUMI, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ANATSUMI, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸', MessageType.text )
        } 
        else if (regex2aaNATSUMI.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,BNATSUMI, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ANATSUMI, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸', MessageType.text )
        }
         else if (regex3aaNATSUMI.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,BNATSUMI, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ANATSUMI, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸', MessageType.text )
        }
        else if (regex4aaNATSUMI.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,BNATSUMI, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ANATSUMI, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸', MessageType.text )

        }
        else if (regex5aaNATSUMI.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,BNATSUMI, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ANATSUMI, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸', MessageType.text )

        }
        else if (regex6aaNATSUMI.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,BNATSUMI, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ANATSUMI, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸', MessageType.text )

        }
        else if (regex7aaNATSUMI.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,BNATSUMI, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ANATSUMI, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸', MessageType.text )

        }
        else if (regex8aaNATSUMI.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,BNATSUMI, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ANATSUMI, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸', MessageType.text )

        }
        else if (regex9aaNATSUMI.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,BNATSUMI, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ANATSUMI, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸', MessageType.text )

        }
        else if (regex10aaNATSUMI.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,BNATSUMI, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ANATSUMI, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸', MessageType.text )

        }
        else if (regex11aaNATSUMI.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,BNATSUMI, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ANATSUMI, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸', MessageType.text )

        }
        else if (regex12aaNATSUMI.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,BNATSUMI, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ANATSUMI, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸', MessageType.text )

        }
        else if (regex13aaNATSUMI.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,BNATSUMI, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ANATSUMI, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸', MessageType.text )

        }
        else if (regex14aaNATSUMI.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,BNATSUMI, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ANATSUMI, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸', MessageType.text )

        }
        else if (regex15aaNATSUMI.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,BNATSUMI, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ANATSUMI, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸', MessageType.text )

        }
        else if (regex16aaNATSUMI.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,BNATSUMI, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ANATSUMI, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸', MessageType.text )

        }
        else if (regex17aaNATSUMI.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,BNATSUMI, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ANATSUMI, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸', MessageType.text )

        }
        else if (regex18aaNATSUMI.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,BNATSUMI, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ANATSUMI, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸', MessageType.text )

        }
        else if (regex19aaNATSUMI.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,BNATSUMI, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ANATSUMI, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸', MessageType.text )

        }
        else if (regex20aaNATSUMI.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,BNATSUMI, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ANATSUMI, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸', MessageType.text )

        }
        else if (regex21aaNATSUMI.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,BNATSUMI, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ANATSUMI, MessageType.text )
            await message.client.sendMessage(message.jid,'...\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n\n\n\n.....\n\n\n\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n....\n\n\n\n\n\n\n\n👸👸 ᴾᴼᵂᴱᴿᴰ ᴮʸ Qᵁᴱᴱᴺ ᴺᴬᵀˢᵁᴹᴵ 👸👸', MessageType.text )

        }
        else if (regex1NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        } 
        else if (regex2NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
         else if (regex3NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
        else if (regex4NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
        else if (regex5NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
         else if (regex6NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
         else if (regex7NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
         else if (regex8NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
         else if (regex9NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
         else if (regex10NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex11NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex12NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex13NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex14NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex15NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex16NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex17NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex18NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex19NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex20NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex21NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex22NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex23NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex24NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex25NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex26NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex27NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex28NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex29NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }     
        else if (regex30NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex31NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex32NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex33NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex34NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex35NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex36NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex37NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex38NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex39NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex40NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex41NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex42NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex43NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex44NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex45NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex46NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex47NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex48NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex49NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex50NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex51NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex52NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex53NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex54NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex55NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex56NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex57NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex58NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex59NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex60NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex61NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex62NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex63NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex64NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex65NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex66NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex67NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex68NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex69NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex70NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex71NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex72NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex73NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex74NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex75NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex76NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex77NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex78NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex79NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex80NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex81NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex82NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex83NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex84NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex85NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex86NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex87NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex88NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex89NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex90NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex91NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex92NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex93NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex94NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex95NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex96NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex97NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex98NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex99NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex100NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex101NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex102NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex103NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex104NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex105NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex106NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex107NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex108NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex109NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex110NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex111NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex112NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex113NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex114NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex115NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex116NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex117NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex118NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex119NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex120NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex121NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex122NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex123NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex124NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex125NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex126NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex127NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex128NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex129NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex130NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex131NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex132NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex133NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex134NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex135NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex136NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex137NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex138NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex139NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex140NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex141NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex142NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex143NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex144NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex145NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex146NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex147NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex148NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex149NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex150NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex151NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex152NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex153NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex154NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex155NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex156NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex157NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex158NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex159NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex160NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex161NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex162NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex163NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex164NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex165NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex166NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex167NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex168NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex169NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex170NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex171NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex172NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex173NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex174NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex175NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex176NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex177NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex178NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex179NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex180NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex181NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex182NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex183NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex184NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex185NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex186NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex187NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex188NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex189NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex190NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex191NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex192NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex193NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex194NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex195NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex196NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex197NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex198NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex199NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex200NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex201NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex202NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex203NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex204NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex205NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex206NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex207NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex208NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex209NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex210NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex211NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex212NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex213NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex214NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex215NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex216NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex217NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex218NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex219NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex220NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex221NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex222NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex223NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex224NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex225NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex226NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex227NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex228NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex229NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex230NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex231NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex232NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex233NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex234NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex235NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex236NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex237NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex238NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex239NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex240NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex241NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex242NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex243NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex244NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex245NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex246NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex247NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex248NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex249NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex250NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex251NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex252NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex253NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex254NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex255NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex256NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex257NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex258NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex259NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex260NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex261NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex262NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex263NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex264NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex265NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex266NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex267NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex268NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex269NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex270NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex271NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex272NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex273NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex274NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex275NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex276NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex277NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex278NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex279NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex280NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex281NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex282NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex283NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex284NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex285NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex286NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex287NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex288NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex289NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex290NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex291NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex292NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex293NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex294NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex295NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex296NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex297NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex298NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex299NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex300NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex301NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex303NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,NATSUMI, MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'\n    *3*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'\n    *2*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'\n    *1*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'\n    *Bye, Bye!*', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex303NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex304NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex305NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex306NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex307NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex308NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex309NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex310NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex311NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex312NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex313NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex314NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex315NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex316NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex317NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex318NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex319NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex320NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex321NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex322NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex323NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex324NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex325NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex326NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex327NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }    
        /*
          else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (regex302NATSUMI.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        */
    }
}));


// Inbox Block System
// This Plugins By Dark Killer
const INBO = "🔥 𝗜𝗡𝗕𝗢𝗫 𝗕𝗟𝗢𝗖𝗞𝗜𝗡𝗚 𝗦𝗬𝗦𝗧𝗘𝗠 𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗘𝗗 ❣️ \n 👸 𝗜𝗡𝗕𝗢𝗫 𝗡𝗢𝗧 𝗔𝗟𝗟𝗢𝗪𝗘𝗗 𝗕𝗥𝗢 👸... \n 👸 𝗚𝗢𝗢𝗗 𝗕𝗬𝗘 ❣️"
 if (Build.INBO == 'true') {
Natsumi.addComand({on: 'text', fromMe: false, delowndinukacmd: false, onlyPm: true }, (async (message, match) => {
        let regexb1NATSUMI = new RegExp('.')
        let regexb2NATSUMI = new RegExp('a')
        let regexb3NATSUMI = new RegExp('e')
        let regexb4NATSUMI = new RegExp('i')
        let regexb5NATSUMI = new RegExp('o')
        let regexb6NATSUMI = new RegExp('u')
// export data -(Dark Killer)
          if (regexb1NATSUMI.test(message.message)) {
            await message.client.sendMessage(message.jid, '*' + INBO + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          } 
        else if (regexb2NATSUMI.test(message.message)) {
           await message.client.sendMessage(message.jid, '*' + INBO + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb3NATSUMI.test(message.message)) {
            await message.client.sendMessage(message.jid, '*' + INBO + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
        else if (regexb4NATSUMI.test(message.message)) {
            await message.client.sendMessage(message.jid, '*' + INBO + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb5NATSUMI.test(message.message)) {
            await message.client.sendMessage(message.jid, '*' + INBO + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb6NATSUMI.test(message.message)) {
            await message.client.sendMessage(message.jid, '*' + INBO + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
}));

}
}
