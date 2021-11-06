/* Copyright (C) 2021 JIHAD.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
J-I-H-A-D - Jihad
wa.me/917736703116
*/

const Asena = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Asena.addCommand({pattern: 'helpp', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: 'ALIVE', description: " ", rowId:" rowid1"},
        {title: '.MENU', description: "  ", rowId:" rowid2"},
        {title: '.XMEDIA', description: "", rowId:" rowid3"},
        {title: 'OWNER', description: " ", rowId:" rowid4"},
        {title: 'GIT', description: "  ", rowId:" rowid5"}
       ]

       const sections = [{title: "*ωнαтsαρρ вσт™*", rows: rows}]

       const button = {
        buttonText: '𝗖𝗟𝗜𝗖𝗞 𝗛𝗘𝗥𝗘',
        description: "  𝐋𝐈𝐙𝐀 𝐌𝐖𝐎𝐋࿐  ",
        sections: sections,
        listType: 1
       }

       await message.client.sendMessage(message.jid, button, MessageType.listMessage)

    }));
