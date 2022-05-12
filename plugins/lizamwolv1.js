/* Amalser Bo
Re-edit Amalser + chunkindepadayali
*/

const LizaMwol = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
const {lizabuffer} = require('../buffer');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


let whb = Config.WORKTYPE == 'public' ? false : true

LizaMwol.addCommand({pattern: 'alive', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
var img = await lizabuffer(Config.LIZA)
// send a buttons message!credit Amal
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: Config.ALIVE_BUTTON }, type: 1},
        {buttonId: 'id2', buttonText: {displayText: Config.ALIVEBUTTON }, type: 1}
      ]
      
      const buttonMessage = {
          contentText: '```'+Config.BOTV2+'\n\n```'+Config.ALIVEMSG+'\n',
          footerText: ''+Config.BOTV2+'™ ',
          buttons: buttons,
          headerType: 1
      }
      
await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, { mimetype: Mimetype.buttonsMessage, quoted: message.data, ptt: true,quoted: { key: { participant : '0@s.whatsapp.net'},message: {orderMessage: {itemCount : 990,status: 1,surface : 1,message: Config.BOTV2,orderTitle: `THIS IS NEW?`,thumbnail: img, sellerJid: Config.JID }}}});

}));
