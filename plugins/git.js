const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const config = require('../config');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var respoimage = await axios.get(config.LIZA, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , thumbnail: fs.readFileSync('20210811_082543.jpg'), mimetype: Mimetype.png, caption: `*≈≈≈≈≈≈≈Links ☟︎︎︎≈≈≈≈≈≈≈≈*
 
*owner number http://Wa.me/+916238440754?text=*😌🤍⧍𝞒لᕰ𐌿+𝙎𝞝𝞒+FAN+AAHN+KETTO+🦋🌟💖
   
*owner number wa.me/916238440754*


*whatsapp group : https://chat.whatsapp.com/J5Z3gyoxidd1JDiJzA9a9x*


*githublink       ______private______Ask pm*


*𝐌𝐘 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 ☛︎ https://instagram.com/arjun_mom_z?utm_medium=copy_link*

*Bot Make Video ytube -https://youtu.be/JsHtSqSkdOU*

*sticker commads  ______✨👀IN LUB_💕___*     
`}) 

})); 
