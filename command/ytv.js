/* 
 ██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗
██╔═══██╗██║   ██║██╔════╝██╔════╝████╗  ██║
██║   ██║██║   ██║█████╗  █████╗  ██╔██╗ ██║
██║▄▄ ██║██║   ██║██╔══╝  ██╔══╝  ██║╚██╗██║
╚██████╔╝╚██████╔╝███████╗███████╗██║ ╚████║
 ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═══╝

                                           
███╗   ██╗ █████╗ ████████╗███████╗██╗   ██╗███╗   ███╗██╗
████╗  ██║██╔══██╗╚══██╔══╝██╔════╝██║   ██║████╗ ████║██║
██╔██╗ ██║███████║   ██║   ███████╗██║   ██║██╔████╔██║██║
██║╚██╗██║██╔══██║   ██║   ╚════██║██║   ██║██║╚██╔╝██║██║
██║ ╚████║██║  ██║   ██║   ███████║╚██████╔╝██║ ╚═╝ ██║██║
╚═╝  ╚═══╝╚═╝  ╚═╝   ╚═╝   ╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝ 
*/




const Natsumi = require('../control');
const { MessageType, Mimetype } = require('queen-natsumi-web-api');
const got = require('got');
const NatsumiPro = require('../natsumipro');
const LOAD_ING = "*⬇️ DOWNLOADING YOUR VIDEO ➠ 🌟🎥*"
const UPLOAD_ING = "*🌟 UPLOADING YOUR VIDEO ➠ 💫🔥...*"
const axios = require('axios')
const Axios = require('axios')



const builder = require('../build');
let NatsumiWork = builder.WORKTYPE == 'public' ? false : true

Natsumi.addCommand({Pnatsumi: 'ytv ?(.*)', fromMe: NatsumiWork, desc: 'video downloading links from youtube \n 🔥 Coded By CyberDraxo 🔥️'}, async (message, match) => {
	
const ig = await Axios.get('https://avatars.githubusercontent.com/u/85664936?s=120&v=4', {responseType: 'arraybuffer'})
const options = {}
options.linkPreview = {
               head: "QueenNatsumi",
               body: "© CyberDraxo ©",
               mediaType: 2, //3 for video
               thumbnail: Buffer.from(ig.data) ,
               sourceUrl: "https://github.com/CyberDraxo/QueenNatsumi",
                }

	
var reply = await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, options);

        const {data} = await axios(`https://api.zeks.me/api/ytplaymp4?apikey=ApiKannappi&q=${match[1]}`)
	
        const { status, result } = data


	const videoBuffer = await axios.get(`${result.url_video}`, {responseType: 'arraybuffer'})

        if(!status) return await message.sendMessage('*❌ NO RESULT FOUND❗*')

	reply = await message.client.sendMessage(message.jid,UPLOAD_ING , MessageType.text, options);

        let msg = '```'
        msg +=  `*🔖TITLE :${result.title}🔖*\n\n`
        msg +=  `*📸 THUMBNAIL :${result.thumbnail} 📸*\n\n`
        msg +=  `*💎 SOURCE :${result.source} 💎*\n\n`
        msg +=  `*⚙️ SIZE :${result.size} ⚙️*\n\n`
        msg +=  `*🔗 DOWNLOADING LINK :${result.url_video} 🔗*\n\n`
        msg += '```' 
	 return await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false , caption: msg , thumbnail: NatsumiPro.tumb}); 
});