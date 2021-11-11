const WhatsAlexa = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

WhatsAlexa.addCommand({pattern: 'help', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    const buttons = [

        {buttonId: 'id1', buttonText: {displayText: 'MENU'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: '.menu'}, type: 1},
        {buttonId: 'id3', buttonText: {displayText: 'GIT'}, type: 1},

      ]
      
      const buttonMessage = {
          contentText: ' ʜʏ ᴅᴜᴅᴇ....👋🏻\n\n         ☆ *𝙱𝙾𝚃 𝙸𝙽𝙵𝙾* ☆\n,🌹 ɴᴀᴍᴇ  : ⁱᵗˢᵐᵉ ʟɪᴢᴀ ᴍᴡᴏʟ²•⁰      \n🌹 sᴛᴀᴛᴇs : ᴘᴜʙʟɪᴄ\n🌹 ᴛɪᴍᴇ   : ᴍᴜᴋᴀʟɪʟᴏᴏᴛᴛ ɴᴏᴋᴋᴜ\n🌹 ᴘᴇʀғɪx : [ . ]\n\n         ☆ *𝙲𝚁𝙴𝚃𝙴𝚁𝚂* ☆\n\n🌹__________\n🌹__________\n          ☆ *𝚃𝙷𝙰𝙽𝙺𝚂* ☆\n\n🌹 ᴄʟɪᴄᴋ ᴍᴇɴᴜ ᴀɴᴅ ᴇɴᴊᴏʏ ᴛʜᴇ ʙᴏᴛ\n',
          footerText: '© ʟɪᴢᴀ ᴍᴡᴏʟ™',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
