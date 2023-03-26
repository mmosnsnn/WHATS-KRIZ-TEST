(async () => {
  
  try{
	switch (command) {
    case `${p}`+'jid': {
    if (m.quoted) { m.reply(m.quoted.sender)} else {
    m.reply(m.chat)}
      
    }
    break
    case `${p}`+'owner': {
    x.sendContact(m.chat, global.owner, m)
    }
    break
    case `${p}`+'getjids': {
const _0x13b783=_0x43f1;function _0x40da(){const _0x21dfda=['reply','ᴊɪᴅ:-\x20','521991awAEsY','ᴀʟʟ\x20ɢʀᴏᴜᴘꜱ\x20ᴊɪᴅ\x0a\x0a','6yjMcob','length','participants','35bEfzTC','12069750qqjWXX','323816QEqsvY','subject','slice','entries','groupFetchAllParticipating','395196VujviG','39804WTjAdh','24sVGgqt','1972565KRmwgm','map','ᴍᴇᴍʙᴇʀ:-\x20','54364ANGnIT'];_0x40da=function(){return _0x21dfda;};return _0x40da();}(function(_0x55eeba,_0xf969d5){const _0x315e01=_0x43f1,_0x1ceeb1=_0x55eeba();while(!![]){try{const _0x264076=-parseInt(_0x315e01(0xa9))/0x1+-parseInt(_0x315e01(0xaf))/0x2+-parseInt(_0x315e01(0xae))/0x3+-parseInt(_0x315e01(0xb4))/0x4*(parseInt(_0x315e01(0xa7))/0x5)+parseInt(_0x315e01(0xa4))/0x6*(-parseInt(_0x315e01(0xb1))/0x7)+-parseInt(_0x315e01(0xb0))/0x8*(parseInt(_0x315e01(0xa2))/0x9)+parseInt(_0x315e01(0xa8))/0xa;if(_0x264076===_0xf969d5)break;else _0x1ceeb1['push'](_0x1ceeb1['shift']());}catch(_0x209866){_0x1ceeb1['push'](_0x1ceeb1['shift']());}}}(_0x40da,0x2c174));if(!isCreator)await m[_0x13b783(0xa0)]('_Only\x20for\x20owner!_');let getGroups=await x[_0x13b783(0xad)](),groups=Object[_0x13b783(0xac)](getGroups)[_0x13b783(0xab)](0x0)['map'](_0x59b8d7=>_0x59b8d7[0x1]),anu=groups[_0x13b783(0xb2)](_0x43e901=>_0x43e901['id']),gjidmsg=_0x13b783(0xa3);for(let i of anu){let metadata=await x['groupMetadata'](i);gjidmsg+='ꜱᴜʙᴊᴇᴄᴛ:-\x20'+metadata[_0x13b783(0xaa)]+'\x0a',gjidmsg+=_0x13b783(0xb3)+metadata[_0x13b783(0xa6)][_0x13b783(0xa5)]+'\x0a',gjidmsg+=_0x13b783(0xa1)+i+'\x0a\x0a';}function _0x43f1(_0x3c0b9f,_0x2b29ba){const _0x40dacc=_0x40da();return _0x43f1=function(_0x43f1cd,_0x445e57){_0x43f1cd=_0x43f1cd-0xa0;let _0x5267a3=_0x40dacc[_0x43f1cd];return _0x5267a3;},_0x43f1(_0x3c0b9f,_0x2b29ba);}m[_0x13b783(0xa0)](gjidmsg);
       }  
    break
     case `${p}`+'mf': {
      if (!isCreator) await m.reply(`_This command only owner can use!._`)
      if (!teks) await m.reply(`_Reply to a audio with one jid!._`)
      let media = await m.quoted.download()
      let buffer = media

    let  waveform = [0,10,20,30,40,50,60,70,80,90,99,90,80,70,60,50,40,30,20,10,0]
      x.sendMessage(text, {   audio: buffer,mimetype: 'audio/mpeg',ptt: true, waveform,                                       
                            
contextInfo: { externalAdReply: { title: `ᴛᴏxɪᴄ-ᴋɪᴄʜᴜx🥶!!`,renderLargerThumbnail: false, showAdAttribution: true,  body: `ɪ ᴅᴏɴᴛ ᴄᴀʀᴇ ᴀɴʏᴏɴᴇ!🥶`, mediaUrl: `https://www.instagram.com/t.o.x.i.c_k.i.c.h.u`, mediaType: 2, thumbnail:  fs.readFileSync('./src/kriz.jpg') }}})
    }
break
case '>': {
if (!isCreator) return m.reply(`_This command only owner can use!._`)
try {
let evaled = await eval(q)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}
break
case `${p}`+'git': {
let { data } = await axios.get(`https://api.github.com/repos/Djjdkdm/WHATS-KRIZ-TEST`)
let buttons = [{
urlButton: {
                                    displayText: tiny(`Git Link`),
                                    url: 'https://github.com/TOXIC-KICHUX/WHATS-KRIZ-AI'
                            },{
                                quickReplyButton: {
                                    displayText: tiny(`Speed Test`),
                                    id: 'ping'
                                }  
                            },{
                                quickReplyButton: {
                                    displayText: tiny(`Contact Owner`),
                                    id: 'owner'
                                }  
                            }
}]
let buttonMessage = {
image: { url: `https://i.imgur.com/5Si3Gl5.jpeg` },
caption: tiny(`WhatsKrizAi\n\n⭐Stars : ${data.stargazers_count}\n\n⛓️Forks : ${data.forks_count}\n\n👁️‍🗨️Watchers : ${data.watchers_count}\n\n📑Language : ${data.language}\n\n🌿Branch : ${data.default_branch}\n\n💡Created At : ${data.created_at}\n\n📈Last Update : ${data.updated_at}\n\n👁️Visibility : private\n\n`),
footer: tiny(`whats-kriz-ai`),
buttons: buttons,
headerType: 4
}
x.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
  }
    } catch (e) {
m.reply("err " + e)
   }
})()
