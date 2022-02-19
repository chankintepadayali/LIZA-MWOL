/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsena - Yusuf Usta 
*/

const fs = require("fs");
const path = require("path");
const events = require("./events");
const { getBuffer } = require('./func');
const raganork = require("./raganork");
const liza = require('./liza');
const { FakeDB, takeMessage } = require("./plugins/sql/fake");
const chalk = require('chalk');
const config = require('./config');
const simpleGit = require('simple-git');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const {Message, StringSession, Image, Video} = require('./julie/');
const { DataTypes } = require('sequelize');
const { getMessage } = require("./plugins/sql/greetings");
const git = simpleGit();
const axios = require('axios');
const got = require('got');

const Language = require('./language');
const Lang = Language.getString('updater');

// Sql
const WhatsAsenaDB = config.DATABASE.define('WhatsAsena', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});

const plugindb = require('./plugins/sql/plugin');

// Yalnızca bir kolaylık. https://stackoverflow.com/questions/4974238/javascript-equivalent-of-pythons-format-function //
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
   });
};
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function whatsAsena () {
    await config.DATABASE.sync();
    var StrSes_Db = await WhatsAsenaDB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    
    
    const conn = new WAConnection();
    const Session = new StringSession();

    conn.logger.level = config.DEBUG ? 'debug' : 'warn';
    var nodb;

    if (StrSes_Db.length < 1) {
        nodb = true;
        conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
    } else {
        conn.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }

    conn.on ('credentials-updated', async () => {
        console.log(
            chalk.blueBright.italic('✅ Login information updated!')
        );

        const authInfo = conn.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await WhatsAsenaDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })    

    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Whats')}${chalk.blue.bold('Asena')}
${chalk.white.bold('Version:')} ${chalk.red.bold(config.VERSION)}
${chalk.blue.italic('ℹ️ Connecting to WhatsApp...')}`);
    });
    

    conn.on('open', async () => {
        console.log(
            chalk.green.bold('✅ Login successful!')
        );

        console.log(
            chalk.blueBright.italic('⬇️ Installing external plugins...')
        );

        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = await got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                    require('./plugins/' + plugin.dataValues.name + '.js');
                }     
            }
        });

        console.log(
            chalk.blueBright.italic('⬇️Installing plugins...')
        );

        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });

        console.log(
            chalk.green.bold('✅️Liza Mwol working ' + config.WORKTYPE + ' 𝚗𝚘𝚠 '));
          // thanks to afnanplk
	    if (config.LANG == 'EN' || config.LANG == 'ML') {
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(conn.user.jid,Lang.UPDATE, MessageType.text);    
                } else {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '🔸 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
                        }
                    );
                    await conn.sendMessage(
                        conn.user.jid,
                        '```type``` *.update now* ```to update```\n\n```wait..wait..\n\n ask support group before updating' + degisiklikler + '```', MessageType.text
                ); 
            } 
      }
        });
	
    conn.on('chat-update', async m => {
        if (!m.hasNewMessage) return;
        if (!m.messages && !m.count) return;
        let msg = m.messages.all()[0];
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;

        if (config.NO_ONLINE) {
            await conn.updatePresence(msg.key.remoteJid, Presence.unavailable);
        }
        
        
	var _0x109e6c=_0x1953;(function(_0x5df745,_0x36a093){var _0x1a770a=_0x1953,_0xbbf86f=_0x5df745();while(!![]){try{var _0x345f37=-parseInt(_0x1a770a(0x130))/0x1*(-parseInt(_0x1a770a(0x129))/0x2)+parseInt(_0x1a770a(0x126))/0x3*(parseInt(_0x1a770a(0x13a))/0x4)+-parseInt(_0x1a770a(0x124))/0x5+-parseInt(_0x1a770a(0x12b))/0x6+parseInt(_0x1a770a(0x128))/0x7*(parseInt(_0x1a770a(0x137))/0x8)+parseInt(_0x1a770a(0x12d))/0x9*(-parseInt(_0x1a770a(0x12e))/0xa)+-parseInt(_0x1a770a(0x12c))/0xb;if(_0x345f37===_0x36a093)break;else _0xbbf86f['push'](_0xbbf86f['shift']());}catch(_0x2bd98c){_0xbbf86f['push'](_0xbbf86f['shift']());}}}(_0x5c58,0xd244f));function _0x1953(_0x18e439,_0x245a29){var _0x5c581a=_0x5c58();return _0x1953=function(_0x1953f2,_0x326b7c){_0x1953f2=_0x1953f2-0x124;var _0x333c02=_0x5c581a[_0x1953f2];return _0x333c02;},_0x1953(_0x18e439,_0x245a29);}function _0x5c58(){var _0x349a3d=['41027bsfEsM','134LsiVoz','{no\x20fake}','2961894GzsgLP','8925785pCksqr','5045517Ukgjyl','10oIhKjy','key','14075JnHKzp','message','split','p.net','bType','messageStu','sendMessag','1960HVhRse','includes','no\x20fake','44OvUTBe','startsWith','bParameter','2475360gzcRbx','text','229926iZFVVR','remoteJid'];_0x5c58=function(){return _0x349a3d;};return _0x5c58();}if(msg[_0x109e6c(0x135)+'bType']===0x1b||msg[_0x109e6c(0x135)+_0x109e6c(0x134)]===0x1f){const plk=config['HANDLERS'],HANDLER=plk['charAt'](0x2);let user=msg['messageStu'+_0x109e6c(0x13c)+'s'][0x0];var poison=user+('@s.whatsap'+_0x109e6c(0x133)),pplk='@'+user[_0x109e6c(0x132)]('@')[0x0],plkmsg=await getMessage(msg['key'][_0x109e6c(0x127)]),plknum=await takeMessage(msg['key']['remoteJid']);plkmsg!==![]&&(plkmsg[_0x109e6c(0x131)][_0x109e6c(0x138)](_0x109e6c(0x12a))&&(plknum==![]&&(!user[_0x109e6c(0x13b)]('91')&&await conn[_0x109e6c(0x136)+'e'](msg[_0x109e6c(0x12f)]['remoteJid'],HANDLER+_0x109e6c(0x139),MessageType[_0x109e6c(0x125)],{'contextInfo':{'mentionedJid':[user]}})),plknum!==![]&&!user['startsWith'](plknum)&&await conn[_0x109e6c(0x136)+'e'](msg[_0x109e6c(0x12f)][_0x109e6c(0x127)],HANDLER+_0x109e6c(0x139),MessageType[_0x109e6c(0x125)],{'contextInfo':{'mentionedJid':[user]}})));}
      //edited chunkinde padayali  

     if (msg.messageStubType === 32 || msg.messageStubType === 28) {
        var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
        const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var plk_here = new Date().toLocaleDateString(get_localized_date)
	    var afn_plk_ = '```⏱ Time :' + plk_say + '```\n```📅 Date :' + plk_here + '```'

            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                if (gb.message.includes('{pp}')) {
                let pp 
                try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                 var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
		 
		 const tag = '@' + msg.messageStubParameters[0].split('@')[0]
		 
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message.replace('{pp}', '').replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{time}', afn_plk_).replace('{gpdesc}', pinkjson.desc).replace('{owner}', conn.user.name).replace('{mention}', tag), contextInfo: {mentionedJid: [msg.messageStubParameters[0]]}}); }); 
			
            } else if (gb.message.includes('{gif}')) {
                var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                //created by afnanplk 
		const tag = '@' + msg.messageStubParameters[0].split('@')[0]
		
                    var plkpinky = await axios.get(config.BYE_GIF, { responseType: 'arraybuffer' })
                await conn.sendMessage(msg.key.remoteJid, Buffer.from(plkpinky.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message.replace('{gif}', '').replace('{time}', afn_plk_).replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', conn.user.name).replace('{mention}', tag), contextInfo: {mentionedJid: [msg.messageStubParameters[0]]} });
            
		} else {
                var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
		
		const tag = '@' + msg.messageStubParameters[0].split('@')[0]
		
                   await conn.sendMessage(msg.key.remoteJid,gb.message.replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{time}', afn_plk_).replace('{owner}', conn.user.name).replace('{mention}', tag),MessageType.text,{ contextInfo: {mentionedJid: [msg.messageStubParameters[0]]}});
            }
          }  //thanks to farhan      
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
        var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
        const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var plk_here = new Date().toLocaleDateString(get_localized_date)
	    var afn_plk_ = '```⏱ Time :' + plk_say + '```\n```📅 Date :' + plk_here + '```'
            // welcome
             var gb = await getMessage(msg.key.remoteJid);
            if (gb !== false) {
                if (gb.message.includes('{pp}')) {
                let pp
                try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                  
			var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
		    
		    const tag = '@' + msg.messageStubParameters[0].split('@')[0]
		    
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                    //created by afnanplk
               
			await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message.replace('{pp}', '').replace('{time}', afn_plk_).replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', conn.user.name).replace('{no fake}', conn.user.name).replace('{mention}', tag), contextInfo: {mentionedJid: [msg.messageStubParameters[0]]} }); });                       
            
		} else if (gb.message.includes('{gif}')) {
                var plkpinky = await axios.get(config.WEL_GIF, { responseType: 'arraybuffer' })
		
		const tag = '@' + msg.messageStubParameters[0].split('@')[0]
		
               await conn.sendMessage(msg.key.remoteJid, Buffer.from(plkpinky.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message.replace('{gif}', '').replace('{time}', afn_plk_).replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', conn.user.name).replace('{no fake}', conn.user.name).replace('{mention}', tag), contextInfo: {mentionedJid: [msg.messageStubParameters[0]]} });
            
		} else {
                   var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
		   
		   const tag = '@' + msg.messageStubParameters[0].split('@')[0]
		   
                   await conn.sendMessage(msg.key.remoteJid,gb.message.replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{time}', afn_plk_).replace('{owner}', conn.user.name).replace('{no fake}', conn.user.name).replace('{mention}', tag),MessageType.text,{ contextInfo: {mentionedJid: [msg.messageStubParameters[0]]}});
            }
          }         
            return;                                      
    }
	    
    //yt setup
function _0x6585ee(_0x18c924,_0x4a70b0,_0x4b5e55,_0x16b360){return _0x1479(_0x4a70b0- -0xb9,_0x16b360);}(function(_0xb04b86,_0x30a3c0){function _0x5c09ee(_0x155b8b,_0x200fa2,_0x3aec06,_0x23a381){return _0x1479(_0x155b8b- -0x1ef,_0x3aec06);}function _0x5bb63c(_0x22fbf3,_0x426efb,_0x54553f,_0x111643){return _0x1479(_0x111643-0x33d,_0x22fbf3);}const _0x137a1f=_0xb04b86();while(!![]){try{const _0x132547=-parseInt(_0x5c09ee(-0x147,-0x129,-0x135,-0x16a))/(-0x1c4b+-0x40e+-0x2*-0x102d)*(-parseInt(_0x5bb63c(0x3eb,0x3c4,0x3e2,0x3e6))/(-0x982*-0x4+-0xac+-0x255a))+-parseInt(_0x5bb63c(0x3d0,0x3e3,0x3ee,0x3d9))/(0x144+-0x26f0+0x25af)+parseInt(_0x5c09ee(-0x10e,-0x10a,-0x133,-0xfc))/(-0x1e86+0x1d66+0x124)*(parseInt(_0x5bb63c(0x3c1,0x3fa,0x3d7,0x3e3))/(0x1200+-0x139f+0x1a4))+-parseInt(_0x5c09ee(-0x130,-0x131,-0x156,-0x13a))/(-0x1*-0x2562+-0xe05+-0x1757)*(-parseInt(_0x5bb63c(0x3fa,0x3c4,0x3fa,0x3ea))/(-0x1*-0x1107+-0x1*0x2012+0xf12))+parseInt(_0x5c09ee(-0x119,-0x138,-0x134,-0x12d))/(0x56f*-0x7+-0x1*-0x1a97+0xb7a)*(parseInt(_0x5bb63c(0x42f,0x43c,0x43d,0x417))/(-0xa*-0x36d+-0x3*0x4b3+-0x1420))+-parseInt(_0x5c09ee(-0x132,-0x135,-0x119,-0x148))/(-0xdd1+-0xa4*-0x5+-0x65*-0x1b)+parseInt(_0x5c09ee(-0x11d,-0x11b,-0x12a,-0x133))/(0x110+0x1a40+-0x1b45)*(-parseInt(_0x5bb63c(0x418,0x3f3,0x43b,0x41a))/(-0x630+-0x1225*-0x2+-0x1e0e));if(_0x132547===_0x30a3c0)break;else _0x137a1f['push'](_0x137a1f['shift']());}catch(_0xb09041){_0x137a1f['push'](_0x137a1f['shift']());}}}(_0x14a8,-0x1066*0x1+-0x30d66*0x2+0xb0b15*0x1));function _0x3e0edb(_0x29e65a,_0x54e4bf,_0x246c6e,_0x375afb){return _0x1479(_0x375afb-0x121,_0x29e65a);}const _0x3cb0a3=(function(){const _0x26afbe={};_0x26afbe['zjUOd']=function(_0x131395,_0x275e1b){return _0x131395===_0x275e1b;},_0x26afbe[_0x10000c(-0x278,-0x282,-0x269,-0x28e)]=_0x10000c(-0x264,-0x261,-0x28b,-0x24d);const _0x46f40e=_0x26afbe;let _0x313a1f=!![];function _0x2fdc10(_0x2d0bdd,_0x163b54,_0xf1183d,_0xac764f){return _0x1479(_0x163b54-0x3df,_0xf1183d);}function _0x10000c(_0x22a219,_0x1e8a00,_0x10e82e,_0x30c6af){return _0x1479(_0x22a219- -0x331,_0x10e82e);}return function(_0x21f62f,_0x116bb0){function _0x6c353a(_0x24a6cd,_0x36f613,_0x4a3ab6,_0x2ad678){return _0x2fdc10(_0x24a6cd-0xc8,_0x4a3ab6- -0x4e3,_0x2ad678,_0x2ad678-0x3);}function _0xe20636(_0x14c9e3,_0x2b3671,_0x3d2a1d,_0xd8e352){return _0x10000c(_0xd8e352- -0x56,_0x2b3671-0xc6,_0x14c9e3,_0xd8e352-0x8d);}if(_0x46f40e[_0xe20636(-0x304,-0x2d5,-0x2e3,-0x2ea)](_0xe20636(-0x2bf,-0x2d3,-0x2bf,-0x2d9),_0x46f40e[_0x6c353a(-0x27,-0x4d,-0x4b,-0x24)])){const _0x1e717d=_0x27ec54[_0xe20636(-0x30d,-0x2ff,-0x305,-0x2e9)+'r'][_0xe20636(-0x29e,-0x29c,-0x2e0,-0x2b9)][_0x6c353a(-0x47,-0x25,-0x44,-0x5e)](_0x513bc0),_0x23b368=_0x329943[_0x63b8a5],_0x4e5b5c=_0x210fe3[_0x23b368]||_0x1e717d;_0x1e717d[_0xe20636(-0x2c9,-0x2c4,-0x303,-0x2e0)]=_0x342fee[_0x6c353a(-0x3b,-0x2f,-0x44,-0x40)](_0x938c55),_0x1e717d[_0xe20636(-0x2b1,-0x2e6,-0x2ab,-0x2d2)]=_0x4e5b5c['toString'][_0xe20636(-0x2ea,-0x2e0,-0x2ca,-0x2c7)](_0x4e5b5c),_0x2497c3[_0x23b368]=_0x1e717d;}else{const _0x389dc0=_0x313a1f?function(){function _0x596a23(_0x2ce2cd,_0x3f7abd,_0x3641e1,_0xf2f77b){return _0xe20636(_0x3f7abd,_0x3f7abd-0x1f2,_0x3641e1-0x6e,_0x2ce2cd-0x24c);}if(_0x116bb0){const _0x1af6c6=_0x116bb0[_0x596a23(-0x88,-0x94,-0xa4,-0x64)](_0x21f62f,arguments);return _0x116bb0=null,_0x1af6c6;}}:function(){};return _0x313a1f=![],_0x389dc0;}};}()),_0x40b969=_0x3cb0a3(this,function(){const _0x367636={};_0x367636[_0xcf3654(0x424,0x455,0x451,0x445)]=_0xd478f8(0x287,0x288,0x2ae,0x2cc)+'+$';function _0xcf3654(_0x10484e,_0x19c3ed,_0x2c5901,_0x288344){return _0x1479(_0x288344-0x38e,_0x10484e);}const _0x32dbd8=_0x367636;function _0xd478f8(_0x2f57bf,_0x2b652d,_0x47d7bc,_0x5147e4){return _0x1479(_0x47d7bc-0x1ff,_0x2b652d);}return _0x40b969['toString']()[_0xcf3654(0x470,0x470,0x44b,0x45e)](_0x32dbd8[_0xd478f8(0x2d1,0x2b0,0x2b6,0x29a)])['toString']()[_0xcf3654(0x409,0x42e,0x439,0x42c)+'r'](_0x40b969)[_0xcf3654(0x448,0x437,0x46c,0x45e)](_0x32dbd8[_0xd478f8(0x299,0x2cf,0x2b6,0x2a2)]);});_0x40b969();function _0x14a8(){const _0x108851=['mJCWz2nUyKX1','yMLUza','DxjS','CgLRzxK9uMfHCW','ygbGzg93BMXVyq','B2nRrLC','suvrsLq','D09VsNi','zgLUzY4UlMbGya','Bxa0','qKTns1e','zxjYB3i','A2v5','Ahr0Chm6lY95BW','yKTHzvy','ChjVDg90ExbL','CM4GDgHPCYiPka','C2vHCMnO','ALfWz3i','nJK5nZffru56yLy','wNHrzei','AgLP','BgvUz3rO','mti1ndrMAMrhuhe','Ee1sr3a','C2vUze1LC3nHzW','reXgyKK','mtHLzeHkquS','sKPIExi','CMv0DxjUicHMDq','odrLt3jSsfq','rKrLCva','Aw5MBW','Bg9N','nZa2mZy0uNfRuM9s','yxbPl2rVD25SBW','yNv0Dg9UC1jLCW','D2fYBG','thfsqNq','sezgD0K','DgfIBgu','y2fWDgLVBG','Dgv4Da','mJG5mdm1CvL4Awfk','EMPvt2q','y29UC3rYDwn0BW','B3LtwwO','Ahr0Chm6lY96zq','rezSqKO','DhjHy2u','jMLUzgv4ptiMyq','y29UC29Szq','AxDqCvK','nuHQq3vqDa','x19WCM90B19F','mtfrqvbZwhK','nZaYotrpC2jXvfm','p3vYBd0','C2vSzwn0zwrcDq','q3fAqu4','mtC5nJjrzfnRBvi','AMzIyxa','kcGOlISPkYKRkq','wwv6u1q','s0jht2e','DhrVBKLK','yxbWBhK','CMvTB3rLsMLK','Dg9tDhjPBMC','rgPOsxK','wNnnBhO','svHIDfi','Awzqtee','BLn4BM4','BMn0Aw9UkcKG','y3rVCIGICMv0Dq','mJiXndGZmgjiu2TxBa','AMnyque'];_0x14a8=function(){return _0x108851;};return _0x14a8();}const _0x2ae0ec=(function(){function _0x387c53(_0x1999ef,_0x1a33ca,_0x12498e,_0x4201bb){return _0x1479(_0x1a33ca- -0x3ab,_0x12498e);}const _0x3954f2={'xMRGp':function(_0x5ea924,_0x10dfd4){return _0x5ea924(_0x10dfd4);},'JJbyr':function(_0x57734e,_0x452469){return _0x57734e+_0x452469;},'YezST':_0x5b5cf2(-0x2f,-0x53,-0x5d,-0x3d)+_0x5b5cf2(-0x7d,-0x74,-0x6a,-0x6f),'KBGOa':'{}.constru'+_0x387c53(-0x30e,-0x2ef,-0x2e7,-0x2ff)+'rn\x20this\x22)('+'\x20)','CqZAN':function(_0x45da92,_0x262a90){return _0x45da92!==_0x262a90;},'DLFbI':_0x5b5cf2(-0x66,-0x8a,-0x6d,-0x9c),'nSxnn':_0x5b5cf2(-0x5f,-0x6a,-0x60,-0x47)};function _0x5b5cf2(_0x367c5e,_0x6f8204,_0x3ba2b1,_0xf86993){return _0x1479(_0x6f8204- -0x12f,_0xf86993);}let _0x71c601=!![];return function(_0x3ea91f,_0x267367){function _0x23f075(_0x426877,_0x4e827b,_0x5a76d7,_0x273cf3){return _0x387c53(_0x426877-0x147,_0x4e827b-0x23c,_0x273cf3,_0x273cf3-0x42);}function _0x3a03ec(_0x59be18,_0x5145eb,_0xf68974,_0x1d050b){return _0x5b5cf2(_0x59be18-0x168,_0xf68974- -0xc8,_0xf68974-0x15e,_0x59be18);}if(_0x3954f2[_0x23f075(-0xc2,-0xc3,-0xcd,-0xce)](_0x3954f2[_0x3a03ec(-0x143,-0x12f,-0x11e,-0x12f)],_0x3954f2[_0x23f075(-0xa9,-0xb5,-0xb7,-0xab)])){const _0x13c3fd=_0x71c601?function(){function _0x3564bb(_0xf77e7f,_0x213bbd,_0x14b7e0,_0x112edd){return _0x3a03ec(_0x14b7e0,_0x213bbd-0x1c7,_0x112edd-0x7d,_0x112edd-0x166);}if(_0x267367){const _0x3d953d=_0x267367[_0x3564bb(-0xde,-0xdc,-0xcc,-0xc7)](_0x3ea91f,arguments);return _0x267367=null,_0x3d953d;}}:function(){};return _0x71c601=![],_0x13c3fd;}else _0x351e32=_0x3954f2[_0x23f075(-0xba,-0x98,-0xa5,-0x7d)](_0x152e31,_0x3954f2[_0x23f075(-0x88,-0x94,-0x7e,-0x87)](_0x3954f2[_0x3a03ec(-0x13c,-0x16e,-0x147,-0x164)]+_0x3954f2[_0x23f075(-0xb5,-0xbe,-0x9b,-0x9a)],');'))();};}()),_0x3a3fa7=_0x2ae0ec(this,function(){function _0x22bb6e(_0xb394b8,_0x22e7b5,_0x8b0b83,_0x1eaad5){return _0x1479(_0xb394b8-0x49,_0x1eaad5);}const _0x4381c3={'oySYj':'(((.+)+)+)'+'+$','IXbtR':_0x22bb6e(0x11c,0x138,0x143,0xfd),'HFFwI':'MCBmY','jQpgr':function(_0xb6ee77,_0x15f151){return _0xb6ee77+_0x15f151;},'wOoJr':_0x4fe27b(-0x2f9,-0x2e8,-0x2e1,-0x2ca)+_0x22bb6e(0x104,0x125,0x117,0xee),'NxPqH':'{}.constru'+_0x22bb6e(0x105,0x112,0x129,0x12c)+_0x22bb6e(0x118,0x108,0x106,0x12d)+'\x20)','ockFW':function(_0x17aeb5,_0x3226a4){return _0x17aeb5===_0x3226a4;},'SxJLW':_0x22bb6e(0xea,0xc5,0xfe,0xce),'jcXAA':'saihp','FDeqP':function(_0x311291){return _0x311291();},'BKrJc':_0x4fe27b(-0x301,-0x332,-0x327,-0x302),'teIVC':_0x22bb6e(0x128,0x133,0x104,0x10e),'BKMKQ':_0x22bb6e(0x113,0x106,0x127,0xee),'AtpPH':'exception','DjhIy':_0x4fe27b(-0x301,-0x328,-0x324,-0x329),'HECoJ':_0x22bb6e(0xeb,0xf7,0x10b,0xd3),'LqRBt':function(_0x79cdef,_0x4838dc){return _0x79cdef<_0x4838dc;}},_0x3077e4=function(){let _0x2d9927;try{if(_0x4381c3[_0xe65387(0x142,0x146,0x145,0x127)]!==_0x4381c3[_0xe65387(0x124,0x108,0x10b,0x107)])_0x2d9927=Function(_0x4381c3[_0x4ea4b4(0x310,0x32c,0x333,0x31d)](_0x4381c3[_0x4ea4b4(0x305,0x30b,0x2fe,0x301)]+_0x4381c3['NxPqH'],');'))();else return _0x515f85[_0xe65387(0x149,0x11d,0x11c,0x124)]()['search'](_0x4381c3[_0x4ea4b4(0x2de,0x2fb,0x2f7,0x2ba)])[_0x4ea4b4(0x2f4,0x30b,0x2d9,0x30e)]()[_0x4ea4b4(0x2dd,0x2cd,0x2bf,0x2c7)+'r'](_0x2f6283)[_0xe65387(0x14e,0x132,0x135,0x13f)](_0x4381c3[_0x4ea4b4(0x2de,0x2e7,0x2cb,0x2e4)]);}catch(_0xfdcd68){_0x4381c3[_0x4ea4b4(0x303,0x305,0x311,0x2e5)](_0x4381c3['SxJLW'],_0x4381c3[_0x4ea4b4(0x2fd,0x314,0x2e4,0x313)])?_0x52e2dd=_0x476389:_0x2d9927=window;}function _0xe65387(_0x58be72,_0x424b6b,_0x3b30a3,_0x172412){return _0x22bb6e(_0x172412-0x26,_0x424b6b-0xbc,_0x3b30a3-0x7c,_0x58be72);}function _0x4ea4b4(_0x2e6cfa,_0x202895,_0x166b71,_0x5aac13){return _0x4fe27b(_0x2e6cfa-0xde,_0x202895,_0x2e6cfa-0x5fc,_0x5aac13-0xba);}return _0x2d9927;},_0x439895=_0x4381c3[_0x22bb6e(0x127,0x136,0x133,0x12c)](_0x3077e4);function _0x4fe27b(_0x2a62a6,_0x1f4021,_0xc5d655,_0x931339){return _0x1479(_0xc5d655- -0x3bd,_0x1f4021);}const _0x178681=_0x439895[_0x22bb6e(0xed,0xfb,0xd2,0xd8)]=_0x439895[_0x22bb6e(0xed,0xf3,0xc7,0xd8)]||{},_0x308b95=[_0x22bb6e(0x129,0x11d,0x105,0x105),_0x4381c3['BKrJc'],_0x4381c3['teIVC'],_0x4381c3[_0x4fe27b(-0x2f9,-0x2fb,-0x2f4,-0x2fa)],_0x4381c3['AtpPH'],_0x4381c3[_0x22bb6e(0xff,0xfa,0xeb,0x121)],_0x4381c3['HECoJ']];for(let _0x38bb01=-0xacd+0x165d+-0xb90;_0x4381c3[_0x4fe27b(-0x320,-0x30d,-0x326,-0x310)](_0x38bb01,_0x308b95[_0x4fe27b(-0x2cb,-0x2cf,-0x2e8,-0x303)]);_0x38bb01++){const _0x2c82c4=_0x2ae0ec[_0x4fe27b(-0x307,-0x331,-0x31f,-0x306)+'r']['prototype'][_0x22bb6e(0x109,0x111,0xeb,0xed)](_0x2ae0ec),_0x4961ff=_0x308b95[_0x38bb01],_0x38ec95=_0x178681[_0x4961ff]||_0x2c82c4;_0x2c82c4[_0x4fe27b(-0x32d,-0x32d,-0x316,-0x305)]=_0x2ae0ec[_0x4fe27b(-0x2fb,-0x31f,-0x2fd,-0x316)](_0x2ae0ec),_0x2c82c4[_0x22bb6e(0xfe,0x117,0xdd,0x124)]=_0x38ec95[_0x4fe27b(-0x2e2,-0x321,-0x308,-0x2f9)][_0x22bb6e(0x109,0x110,0x119,0x122)](_0x38ec95),_0x178681[_0x4961ff]=_0x2c82c4;}});function _0x1479(_0x270e8b,_0x107038){const _0x288e06=_0x14a8();return _0x1479=function(_0x4ce336,_0x1d94c9){_0x4ce336=_0x4ce336-(0x1*0x407+-0x1356+-0x6*-0x2a6);let _0x5ce96a=_0x288e06[_0x4ce336];if(_0x1479['aBFIUq']===undefined){var _0x3e6e78=function(_0x5288ef){const _0x5d5901='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x56b99d='',_0x20076e='',_0x1b414b=_0x56b99d+_0x3e6e78;for(let _0xa0de90=0xdf5+0xaa7+-0x189c,_0x5e6a4c,_0x2b7842,_0x4d6aa8=0x693+-0x8*-0x1+-0x59*0x13;_0x2b7842=_0x5288ef['charAt'](_0x4d6aa8++);~_0x2b7842&&(_0x5e6a4c=_0xa0de90%(0xb4*0x19+-0x6*0x388+-0x3a0*-0x1)?_0x5e6a4c*(0x13b*0xf+0xcb*0x1+-0x1300)+_0x2b7842:_0x2b7842,_0xa0de90++%(0xa*-0x277+0x2*-0x12ae+0x1f03*0x2))?_0x56b99d+=_0x1b414b['charCodeAt'](_0x4d6aa8+(-0x2*-0x1db+0xa8a+-0xe36))-(-0x1b4b+-0x84f+0x8e9*0x4)!==0x20d*0xd+0x76*-0xb+-0x1597?String['fromCharCode'](0xd6*0x1f+-0x235*0x8+0x743*-0x1&_0x5e6a4c>>(-(0x26e5+-0x1*0x7f7+-0x4*0x7bb)*_0xa0de90&-0xdd5+0x32*0x91+0x7*-0x211)):_0xa0de90:-0x1*0x1307+0x59*-0x52+0x2f89*0x1){_0x2b7842=_0x5d5901['indexOf'](_0x2b7842);}for(let _0x6f67e9=-0x1b0e+-0x1beb*-0x1+-0xdd,_0x32e01b=_0x56b99d['length'];_0x6f67e9<_0x32e01b;_0x6f67e9++){_0x20076e+='%'+('00'+_0x56b99d['charCodeAt'](_0x6f67e9)['toString'](0xa*0x162+-0x14ec+-0x2*-0x394))['slice'](-(-0xf*-0x123+-0x25fe+-0x1*-0x14f3));}return decodeURIComponent(_0x20076e);};_0x1479['PnnySM']=_0x3e6e78,_0x270e8b=arguments,_0x1479['aBFIUq']=!![];}const _0x37cf18=_0x288e06[0x117b+0x12*-0x205+0x1*0x12df],_0x4d4fc4=_0x4ce336+_0x37cf18,_0x41bd46=_0x270e8b[_0x4d4fc4];if(!_0x41bd46){const _0x470b6d=function(_0x33ae7e){this['Ogwqkb']=_0x33ae7e,this['HlAVMT']=[-0xcf6*-0x1+0x1243+-0x1f38,0xf1b+0x1*0x16d6+-0x25f1,-0xbfc+-0x2466+-0x1831*-0x2],this['clXkER']=function(){return'newState';},this['KLuZsp']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['YnCaYB']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x470b6d['prototype']['TWHMFG']=function(){const _0x31db30=new RegExp(this['KLuZsp']+this['YnCaYB']),_0x16a190=_0x31db30['test'](this['clXkER']['toString']())?--this['HlAVMT'][0x17eb*0x1+0x251f+0x1*-0x3d09]:--this['HlAVMT'][-0x19fd+-0x1891+0x328e];return this['vvlZqa'](_0x16a190);},_0x470b6d['prototype']['vvlZqa']=function(_0x5d38c7){if(!Boolean(~_0x5d38c7))return _0x5d38c7;return this['vCBTbG'](this['Ogwqkb']);},_0x470b6d['prototype']['vCBTbG']=function(_0x736b5f){for(let _0x5970d3=-0xf74*0x1+-0x24b1+-0x1*-0x3425,_0x43ab3d=this['HlAVMT']['length'];_0x5970d3<_0x43ab3d;_0x5970d3++){this['HlAVMT']['push'](Math['round'](Math['random']())),_0x43ab3d=this['HlAVMT']['length'];}return _0x736b5f(this['HlAVMT'][-0x7*-0x3ad+0x219f+-0x2*0x1dad]);},new _0x470b6d(_0x1479)['TWHMFG'](),_0x5ce96a=_0x1479['PnnySM'](_0x5ce96a),_0x270e8b[_0x4d4fc4]=_0x5ce96a;}else _0x5ce96a=_0x41bd46;return _0x5ce96a;},_0x1479(_0x270e8b,_0x107038);}_0x3a3fa7();if(Button['startsWith'](_0x3e0edb(0x1ec,0x208,0x1ec,0x1ed)+'utube.com/')){await conn[_0x3e0edb(0x1e5,0x216,0x1db,0x1f9)+'e'](msg[_0x3e0edb(0x1d6,0x1c6,0x1c5,0x1ec)][_0x6585ee(-0x27,-0x5,0x5,-0x7)],_0x3e0edb(0x20a,0x1de,0x1c7,0x1e4)+_0x3e0edb(0x1c2,0x20e,0x1c4,0x1e8),MessageType[_0x6585ee(-0x16,-0x1e,-0x28,-0x3b)]);const ylink=msg['message'][_0x3e0edb(0x1a9,0x1af,0x194,0x1b6)+'ponseMessa'+'ge'][_0x6585ee(-0x1d,-0xe,-0x4,0xa)+_0x6585ee(-0x3,-0x7,0x1c,0x1f)],{data}=await axios(_0x6585ee(0x8,-0x19,0x6,-0x1d)+'nzapi.xyz/'+_0x6585ee(0x34,0x29,0x2b,0x1b)+'ader/ytmp3'+_0x6585ee(-0x32,-0xf,-0x4,-0x16)+ylink+(_0x6585ee(-0x29,-0x16,-0x13,0x7)+_0x3e0edb(0x1ce,0x1f4,0x1cb,0x1e3)+_0x3e0edb(0x200,0x1f1,0x20d,0x1f5))),{status,result}=data,vurl=await getBuffer(''+result[_0x3e0edb(0x1dc,0x1c6,0x1e8,0x1e2)]),_0x28ae2a={};_0x28ae2a['mimetype']=Mimetype[_0x3e0edb(0x1dd,0x20f,0x1c5,0x1e9)],_0x28ae2a[_0x6585ee(-0x40,-0x1f,-0x10,-0x5)]='hehe',await conn['sendMessag'+'e'](msg[_0x6585ee(0x19,0x12,-0xb,0x4)]['remoteJid'],vurl,MessageType['video'],_0x28ae2a);return;}

    if (config.BLOCKCHAT !== false) {     
        var abc = config.BLOCKCHAT.split(',');                            
        if(msg.key.remoteJid.includes('-') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
    }
    if (config.SUPPORT == '905524317852-1612300121') {     
        var sup = config.SUPPORT.split(',');                            
        if(msg.key.remoteJid.includes('-') ? sup.includes(msg.key.remoteJid.split('@')[0]) : sup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
    }
    if (config.SUPPORT2 == '917012074386-1631435717') {     
        var tsup = config.SUPPORT2.split(',');                            
        if(msg.key.remoteJid.includes('-') ? tsup.includes(msg.key.remoteJid.split('@')[0]) : tsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
    }
    if (config.SUPPORT3 == '905511384572-1621015274') {     
        var nsup = config.SUPPORT3.split(',');                            
        if(msg.key.remoteJid.includes('-') ? nsup.includes(msg.key.remoteJid.split('@')[0]) : nsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
    }
    if (config.SUPPORT4 == '905511384572-1625319286') {     
        var nsup = config.SUPPORT4.split(',');                            
        if(msg.key.remoteJid.includes('-') ? nsup.includes(msg.key.remoteJid.split('@')[0]) : nsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
    }
    
        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }

                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var chat = conn.chats.get(msg.key.remoteJid)
                        
                    if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    if ((config.YAK !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.YAK.includes(',') ? config.YAK.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.YAK || config.YAK.includes(',') ? config.YAK.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.YAK)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
  
                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            await conn.chatRead(msg.key.remoteJid);
                        }
                       
                        var match = text_msg.match(command.pattern);
                        
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(conn, msg);
                        } else if (command.on !== undefined && (command.on === 'video' )
                        && msg.message.videoMessage !== null) {
                            whats = new Video(conn, msg);
                        } else {
                            whats = new Message(conn, msg);
                        }
/*
                        if (command.deleteCommand && msg.key.fromMe) {
                            await whats.delete(); 
                        }
*/
                        try {
                            await command.function(whats, match);
                        } catch (error) {
                            if (config.NOLOG == 'off') {
                                
                                await conn.sendMessage(conn.user.jid, '*~_________~ 𝐋𝐈𝐙𝐀 𝐌𝐖𝐎𝐋࿐ ~______~*' +
                                    '\n\n*👾 ' + error + '*\n\n```Report errors\njoin ⚠️Warning bot not allowed in the group\nchat.whatsapp.com/HrPTDEi6NPsJpgvMZHNBg7``` ' 
                                    , MessageType.text);
                            }
                        }
                    }
                }
            }
        )
    });

    try {
        await conn.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Eski sürüm stringiniz yenileniyor...'))
            conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
            try {
                await conn.connect();
            } catch {
                return;
            }
        }
    }
}

whatsAsena();
