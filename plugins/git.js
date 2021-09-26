const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/2nYs8dN.jpg"
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.png, caption: `creater *Nithin and Fayas*
    
*owner number wa.me/918137829228*

*owner number wa.me/918075379950*

*whatsapp group : https://chat.whatsapp.com/BRPbS6JHUoCE480MpLLM5z*

*githublink       https://github.com/Chunkindepadayali/LIZA-MWOL*

*audio commads    https://github.com/Chunkindepadayali/media/tree/main/uploads*

*sticker commads  https://github.com/Chunkindepadayali/media/tree/main/stickers*
`}) 

})); 
