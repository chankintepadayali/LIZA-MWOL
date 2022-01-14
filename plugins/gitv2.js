const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'git ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by saidali
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:LIZA MWOL [OWNER]\n' // full name
            + 'ORG:Amalser;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=918075379950:+91 8137829228\n' // WhatsApp ID + phone number
            + 'TEL;type=CELL;type=VOICE;waid=918137829228:+91 8075379950\n' // 
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "LIZA MWOL [OWNER]", vcard: vcard}, MessageType.contact)
}))
