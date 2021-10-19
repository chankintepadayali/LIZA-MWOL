const Neotro = require('../events');

const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');

const fs = require('fs');

const axios = require('axios');

const Config = require('../config');

const config = require('../hatzu');

const NEED = "*🍭YOU MUST TYPE SOME WORDS*"

const desc = "Text to image Pack";

let tn = Config.WORKTYPE == 'public' ? false : true

Neotro.addCommand({ pattern: 'wordgreen ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/wordgreen?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'zombie3d ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/zombie3d?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'metal ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/metal?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'cloud ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/cloud?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'graffiticolor ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/graffiticolor?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'nneon ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/neon?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'snake ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/snake?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'lightgalaxy ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/lightgalaxy?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'graffiti5 ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/graffiti5?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'hotmetalic ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/hotmetalic?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'thunder ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/thunder?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'graffiti3 ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/graffiti3?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'neon2 ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/neon2?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'brokenglass ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/brokenglass?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'neondevil ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/neondevil?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'juventus ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/juventus?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'realisticvintage ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/realisticvintage?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'multicolor3d ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/multicolor3d?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: '3dwood ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/3dwood?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'paulscholes ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/paulscholes?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'artpapercut ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/artpapercut?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: '2galaxy ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/galaxy?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'galaxybat ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/galaxybat?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'cake ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/cake?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'writingchalk ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/writingchalk?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'birthdaycake ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/birthdaycake?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'barlog ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/blackpinkneon?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'bearlogo ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/bearlogo?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'fi ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'if ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://${config.BSITE}/api/ephoto/?text=${encodeURIComponent(match[1])}&apikey=${config.BAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
