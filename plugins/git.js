const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const config = require('../config');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var rashi = await axios.get(config.RASHI, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer(rashi.data), MessageType.image, {quoted: message.data , thumbnail: fs.readFileSync('20210811_082543.jpg'), mimetype: Mimetype.png, caption: `*≈≈≈≈≈≈≈Links ☟︎︎︎≈≈≈≈≈≈≈≈*
 
*owner number wa.me/918137829228*
   
*owner number wa.me/918075379950*


*whatsapp group : https://chat.whatsapp.com/BRPbS6JHUoCE480MpLLM5z*


*githublink       https://github.com/Chunkindepadayali/LIZA-MWOL*


*audio commads    https://github.com/Chunkindepadayali/media/tree/main/uploads*


*sticker commads  https://github.com/Chunkindepadayali/media/tree/main/stickers*     
`}) 

})); 
