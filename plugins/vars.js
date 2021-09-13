/* 
*/

const MyPnky = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

   var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var BGM_on = ''
    var BGM_off = ''
    if (config.LANG == 'EN') {
        l_dsc = 'turn on and turn of bgm. -bot owner command'
        BGM_on = 'bgm option turned on!'
        BGM_off = 'bgm option turned off'
    }
    if (config.LANG == 'ML') {
        l_dsc = 'turn on and turn of bgm. -bot owner command'        
        BGM_on = 'bgm option turned on'
        BGM_off = 'bgm option turned off'
    }
 else {
        l_dsc = 'turn on and turn of bgm. -bot owner command'
        BGM_on = 'bgm option turned on!'
        BGM_off = 'bgm option turned off'
    }
    MyPnky.addCommand({pattern: 'bgm ?(.*)', fromMe: true, desc: l_dsc, usage: '.bgm on / off' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BGM_FILTER']: 'false'
                    } 
                });
                await message.sendMessage(BGM_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BGM_FILTER']: 'true'
                    } 
                });
                await message.sendMessage(BGM_on)
        }
    }));


   var l_dss = ''
    var alr_on = ''
    var alr_off = ''
    var THERI_on = ''
    var THERI_off = ''
    var THERI_onp = ''
    var THERI_offp = ''
   

    if (config.LANG == 'ML') {
        l_dss = 'THERI_LIST ൽ നൽകിയിരിക്കുന്ന നിർദ്ദിഷ്ട മോശം വാക്കുകൾ ഉപയോഗിക്കുകയാണെങ്കിൽ അംഗങ്ങളെ തടയുക/നീക്കം ചെയ്യുക'
        THERI_on = 'മോശം വാക്കുകൾ ഉപയോഗിച്ചാൽ അംഗങ്ങളെ നീക്കം ചെയ്യും'
        THERI_off = 'മോശം വാക്കുകൾ ഉപയോഗിച്ചാൽ അംഗങ്ങളെ നീക്കം ചെയ്യില്ല'
        THERI_onp = 'മോശം വാക്കുകൾ ഉപയോഗിച്ചാൽ ഉപയോക്താക്കളെ തടയും'
        THERI_offp = 'മോശം വാക്കുകൾ ഉപയോഗിച്ചാൽ ഉപയോക്താക്കളെ തടയില്ല'
    }
   else {
        l_dss = 'to block/remove members if they use specified words given in THERI_LIST'        
        THERI_on = 'ᴍᴇᴍʙᴇʀꜱ ᴡɪʟʟ ʙᴇ ʀᴇᴍᴏᴠᴇᴅ ɪꜰ ʙᴀᴅ ᴡᴏʀᴅꜱ ᴀʀᴇ ᴜꜱᴇᴅ'
        THERI_off = 'ᴍᴇᴍʙᴇʀꜱ ᴡɪʟʟ ɴᴏᴛ ʙᴇ ʀᴇᴍᴏᴠᴇᴅ ɪꜰ ʙᴀᴅ ᴡᴏʀᴅꜱ ᴀʀᴇ ᴜꜱᴇᴅ'
        THERI_onp = 'ᴜꜱᴇʀꜱ ᴡɪʟʟ ʙᴇ ʙʟᴏᴄᴋᴇᴅ ɪꜰ ɢɪᴠᴇɴ ʙᴀᴅ ᴡᴏʀᴅꜱ ᴀʀᴇ ᴜꜱᴇᴅ'
        THERI_offp = 'ᴜꜱᴇʀꜱ ᴡɪʟʟ ɴᴏᴛ ʙᴇ ʙʟᴏᴄᴋᴇᴅ ɪꜰ ɢɪᴠᴇɴ ʙᴀᴅ ᴡᴏʀᴅꜱ ᴀʀᴇ ᴜꜱᴇᴅ'
    }
   
    MyPnky.addCommand({pattern: 'theri ?(.*)', fromMe: true, desc: l_dss, usage: 'for pm .theri pm no / pm yes \n for group .theri gp no / gp yes' }, (async (message, match) => {
        if (match[1] == 'pm yes') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['THERI_KICK_PM']: 'false'
                    } 
                });
                await message.sendMessage(THERI_offp)
        } else if (match[1] == 'pm no') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['THERI_KICK_PM']: 'true'
                    } 
                });
                await message.sendMessage(THERI_onp)
        } else if (match[1] == 'gp no') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['THERI_KICK_GP']: 'true'
                    } 
                });
                await message.sendMessage(THERI_on)
         } else if (match[1] == 'gp yes') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['THERI_KICK_GP']: 'false'
                    } 
                });
                await message.sendMessage(THERI_on)
        }
    }));

 var plk_desc = ''
 var BGM_ONE = ''
 var BGM_TWO = ''

    if (config.LANG == 'ML') {
      
      plk_desc = 'മറുപടി bgm മോഡ് മാറ്റാൻ'
      BGM_ONE = '𝐁𝐆𝐌 തരം ഒന്നാം മോഡിലേക്ക് മാറ്റി'
      BGM_TWO = '𝐁𝐆𝐌 തരം രണ്ടാം മോഡിലേക്ക് മാറ്റി'
    }
     else {
    
    plk_desc = 'change reply message BGM mode'
    BGM_ONE = '𝐁𝐆𝐌 𝐭𝐲𝐩𝐞 𝐜𝐡𝗮𝐧𝐠𝐞𝐝 𝐭𝐨 𝟭𝘀𝘁 𝐦𝐨𝐝𝐞'
    BGM_TWO = '𝐁𝐆𝐌 𝐭𝐲𝐩𝐞 𝐜𝐡𝗮𝐧𝐠𝐞𝐝 𝐭𝐨 𝟐𝐧𝐝 𝐦𝐨𝐝𝐞'
    }


 MyPnky.addCommand({pattern: 'bgm ?(.*)', fromMe: true, desc: plk_desc, usage: '.bgm one / two' }, (async (message, match) => {
        if (match[1] == 'two') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['CHANGE_BGM_TO']: 'two'
                    } 
                });
                await message.sendMessage(BGM_TWO)
        } else if (match[1] == 'one') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['CHANGE_BGM_TO']: 'one'
                    } 
                });
                await message.sendMessage(BGM_ONE)
        }
    }));

   var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var succ_on = ''
    var succ_off = ''
    if (config.LANG == 'TR') {
        l_dsc = 'Antilink aracını etkinleştirir.'
        alr_on = 'Antilink halihazırda açık!'
        alr_off = 'Antilink halihazırda kapalı!'
        succ_on = 'Antilink Başarıyla Açıldı!'
        succ_off = 'Antilink Başarıyla Kapatıldı!'
    }
    if (config.LANG == 'EN') {
        l_dsc = 'Activates the Antilink tool.'
        alr_on = 'Antilink is already open!'
        alr_off = 'Antilink is currently closed!'
        succ_on = 'Antilink Opened Successfully!'
        succ_off = 'Antilink Closed Successfully!'
    }
    if (config.LANG == 'AZ') {
        l_dsc = 'Antilink alətini aktivləşdirir.'
        alr_on = 'Antilink hazırda açıqdır!'
        alr_off = 'Antilink hazırda bağlıdır!'
        succ_on = '*Antilink Uğurla Açıldı!*'
        succ_off = '*Antilink Uğurla Bağlandı!*'
    }
    if (config.LANG == 'HI') {
        l_dsc = 'एंटीलिंक टूल को सक्रिय करता है।'
        alr_on = 'एंटीलिंक पहले से ही खुला है!'
        alr_off = 'एंटीलिंक वर्तमान में बंद है!'
        succ_on = 'एंटीलिंक सफलतापूर्वक खोला गया!'
        succ_off = 'एंटीलिंक सफलतापूर्वक बंद!'
    }
    if (config.LANG == 'ML') {
        l_dsc = 'ആന്റിലിങ്ക് ഉപകരണം സജീവമാക്കുന്നു.'
        alr_on = 'ആന്റിലിങ്ക് ഇതിനകം തുറന്നു!'
        alr_off = 'ആന്റിലിങ്ക് നിലവിൽ അടച്ചിരിക്കുന്നു!'
        succ_on = 'ആന്റിലിങ്ക് വിജയകരമായി തുറന്നു!'
        succ_off = 'ആന്റിലിങ്ക് വിജയകരമായി അടച്ചു!'
    }
    if (config.LANG == 'PT') {
        l_dsc = 'Ativa a ferramenta Antilink.'
        alr_on = 'O Antilink já está aberto!'
        alr_off = 'Antilink está fechado no momento!'
        succ_on = 'Antilink aberto com sucesso!'
        succ_off = 'Antilink fechado com sucesso!'
    }
    if (config.LANG == 'RU') {
        l_dsc = 'Активирует инструмент Antilink.'
        alr_on = 'Антилинк уже открыт!'
        alr_off = 'Антилинк сейчас закрыт!'
        succ_on = 'Антилинк успешно открыт!'
        succ_off = 'Антилинк успешно закрыт!'
    }
    if (config.LANG == 'ES') {
        l_dsc = 'Activa la herramienta Antilink.'
        alr_on = '¡Antilink ya está abierto!'
        alr_off = '¡Antilink está cerrado actualmente!'
        succ_on = '¡Antilink se abrió con éxito!'
        succ_off = 'Antilink cerrado correctamente!'
    }
    if (config.LANG == 'ID') {
        l_dsc = 'Mengaktifkan alat Antilink.'
        alr_on = 'Antilink sudah terbuka!'
        alr_off = 'Antilink saat ini ditutup!'
        succ_on = 'Antilink Berhasil Dibuka!'
        succ_off = 'Antilink Berhasil Ditutup!'
    }
    MyPnky.addCommand({pattern: 'antilink ?(.*)', fromMe: true, desc: l_dsc, usage: '.antilink on / off' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTİ_LİNK']: 'false'
                    } 
                });
                await message.sendMessage(succ_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTİ_LİNK']: 'true'
                    } 
                });
                await message.sendMessage(succ_on)
        }
    }));


   var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var TLINK_on = ''
    var TLINK_off = ''
   
    if (config.LANG == 'EN') {
        l_dsc = '.antilink does not ban all links but mlink does'
        alr_on = '!'
        alr_off = '!'
        LINKT_on = '*M_LINK TURNED ON*'
        LINKT_off = '*M_LINK TURNED OFF*'
    }
    if (config.LANG == 'ML') {
        l_dsc = '.antilink എല്ലാ ലിങ്കുകളും നിരോധിക്കുന്നില്ല, പക്ഷേ mlink ചെയ്യുന്നു'
        alr_on = '!'
        alr_off = '!'
        LINKT_on = 'M_LINK TURNED ON'
        LINKT_off = 'M_LINK TURNED Off'
    }
   
    MyPnky.addCommand({pattern: 'mlink ?(.*)', fromMe: true, desc: l_dsc, usage: '.mlink on / of' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ALL_LINK_BAN']: 'false'
                    } 
                });
                await message.sendMessage(LINKT_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ALL_LINK_BAN']: 'true'
                    } 
                });
                await message.sendMessage(LINKT_on)
        }
    }));


 var plk_desc = ''
 var BGM_ONE = ''
 var BGM_TWO = ''

    if (config.LANG == 'ML') {
      
      plk_desc = 'ഓട്ടോ സ്റ്റിക്കർ ഓണാക്കാനും ഓഫാക്കാനും'
      BGM_ONE = 'ഓട്ടോ സ്റ്റിക്കർ ഓണാക്കി'
      BGM_TWO = 'ഓട്ടോ സ്റ്റിക്കർ ഓഫാക്കി'
    }
     else {
    
    plk_desc = 'to turn on and off auto sticker'
    STR_ON = '🇦​🇺​🇹​🇴​ 🇸​🇹​🇮​🇨​🇰​🇪​🇷​ 🇹​🇺​🇷​🇳​🇪​🇩​ 🇴​🇳​'
    STR_OFF = '🇦​🇺​🇹​🇴​ 🇸​🇹​🇮​🇨​🇰​🇪​🇷​ 🇹​🇺​🇷​🇳​🇪​🇩​ 🇴​🇫​🇫​'
    }


 MyPnky.addCommand({pattern: 'austick ?(.*)', fromMe: true, desc: plk_desc, usage: '.austick on / off' }, (async (message, match) => {
        if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['STICKER_REPLY']: 'true'
                    } 
                });
                await message.sendMessage(STR_ON)
        } else if (match[1] == 'true') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['STICKER_REPLY']: 'false'
                    } 
                });
                await message.sendMessage(STR_OFF)
        }
    }));

    
 var W_PUB = ''
 var W_PRI = ''
 var W_ADM = ''
  if (config.LANG == 'EN') {
    
    W_ADM = 'ᴡᴏʀᴋ ᴛʏᴘᴇ ɪꜱ ᴀᴅᴍɪɴ ɴᴏᴡ' 
    W_PUB = 'ᴡᴏʀᴋ_ᴛʏᴘᴇ ɪꜱ ɴᴏᴡ ᴘᴜʙʟɪᴄ'
    W_PRI = 'ᴡᴏʀᴋ_ᴛʏᴘᴇ ɪꜱ ɴᴏᴡ ᴘʀɪᴠᴀᴛᴇ'
    }

    if (config.LANG == 'ML') {
      
      W_ADM = 'ᴡᴏʀᴋ ᴛʏᴘᴇ ɪꜱ ᴀᴅᴍɪɴ ɴᴏᴡ'
      W_PUB = 'ᴡᴏʀᴋ_ᴛʏᴘᴇ ɪꜱ ɴᴏᴡ ᴘᴜʙʟɪᴄ'
      W_PRI = 'ᴡᴏʀᴋ_ᴛʏᴘᴇ ɪꜱ ɴᴏᴡ ᴘʀɪᴠᴀᴛᴇ'
    }

    MyPnky.addCommand({pattern: 'work ?(.*)', fromMe: true,dontAddCommandList: true, }, (async (message, match) => {
        if (match[1] == 'public') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['WORK_TYPE']: 'public'
                    } 
                });
                await message.sendMessage(W_PUB)
        } else if (match[1] == 'private') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['WORK_TYPE']: 'private'
                    } 
                });
                await message.sendMessage(W_PRI)
         } else if (match[1] == 'private') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['WORK_TYPE']: 'admin'
                    } 
                });
                await message.sendMessage(W_ADM)
        }
    }));
