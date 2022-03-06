const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../Config');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var respoimage = await axios.get(config.LIZA, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , thumbnail: fs.readFileSync('liza mwol v2.jpg'), mimetype: Mimetype.png, caption: `~========~ ʟɪɴᴋs ~========~ 
 
ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ wa.me/918137829228
   
ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ wa.me/918075379950

ʙᴏᴛ ᴜsᴇʀ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ wa.me/ 'Config.NU'


Wʜᴀᴛsᴀᴘᴘ ɢʀᴏᴜᴘ : https://chat.whatsapp.com/EfzzqyQ0JANCvyATuhAaKe


ɢɪᴛʜᴜʙ ʟɪɴᴋ : https://github.com/Chunkindepadayali/LIZA-MWOL

 
`}) 

})); 
