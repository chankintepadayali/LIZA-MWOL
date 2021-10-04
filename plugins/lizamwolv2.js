/* Copyright (C) 2021 Chunkindepadayali.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const Neotro = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Neotro.addCommand({pattern: 'help', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: '.ALIVE', description: "", rowId:" rowid1"},
        {title: '.MENU', description: "", rowId:" rowid2"},
        {title: '.XMEDIA', description: "", rowId:" rowid3"},
        {title: '.OWNER', description: "\n\n\n```creater Nithin and Fayas```\n\n```owner number wa.me/918137829228```\n\n```owner number wa.me/918075379950```\n\n ", rowId:" rowid4"},
        {title: '.GIT', description: "\n\n\n```creater Nithin and Fayas```\n\n```owner number wa.me/918137829228```\n\n```owner number wa.me/918075379950```\n\n```whatsapp group : https://chat.whatsapp.com/BRPbS6JHUoCE480MpLLM5z```\n\n```githublink       https://github.com/Chunkindepadayali/LIZA-MWOL```\n\n```audio commads    https://github.com/Chunkindepadayali/media/tree/main/uploads```\n\n```sticker commads  https://github.com/Chunkindepadayali/media/tree/main/stickers```\n  ", rowId:" rowid5"}
       ]

       const sections = [{title: "ωнαтsαρρ вσт™", rows: rows}]

       const button = {
        buttonText: '𝗖𝗟𝗜𝗖𝗞 𝗛𝗘𝗥𝗘',
        description: "𝐋𝐈𝐙𝐀 𝐌𝐖𝐎𝐋࿐",
        sections: sections,
        listType: 1
       }

       await message.client.sendMessage(message.jid, button, MessageType.listMessage)

    }));
