(async () => {
 
  try{
	switch (command) {
	case `${p}`+'mp3': {
	if (/document/.test(mime)) m.reply(`_Reply to audio or video..!_`)
            if (!/video/.test(mime) && !/audio/.test(mime)) m.reply(`_Reply to audio or video..!_`)
            if (!quoted) m.reply(`_Reply to audio or video..!_`)
            let media = await m.quoted.download()
            let audio = await toAudio(media, 'mp4')
            x.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg', fileName: `ᴡʜᴀᴛꜱ-ᴋʀɪᴢ-ᴀɪ.mp3`}, { quoted: m})                 
            }
            break
        case `${p}`+'qc': {
                     if (!teks) return m.reply(`_Reply to a text_\nOr\n_Example : ${p}qc whatskriz_`)
const _0x4c8f62=_0x5d06;(function(_0x4f6686,_0x39f71d){const _0x67e002=_0x5d06,_0x5aef00=_0x4f6686();while(!![]){try{const _0x2f05d8=parseInt(_0x67e002(0x1b7))/0x1*(-parseInt(_0x67e002(0x1af))/0x2)+-parseInt(_0x67e002(0x1c7))/0x3+parseInt(_0x67e002(0x1b3))/0x4+-parseInt(_0x67e002(0x1bf))/0x5*(parseInt(_0x67e002(0x1b0))/0x6)+-parseInt(_0x67e002(0x1ba))/0x7+parseInt(_0x67e002(0x1bd))/0x8*(parseInt(_0x67e002(0x1b9))/0x9)+-parseInt(_0x67e002(0x1c5))/0xa*(-parseInt(_0x67e002(0x1c8))/0xb);if(_0x2f05d8===_0x39f71d)break;else _0x5aef00['push'](_0x5aef00['shift']());}catch(_0x5b7682){_0x5aef00['push'](_0x5aef00['shift']());}}}(_0x1c16,0x62941));function _0x5d06(_0x263096,_0x3de922){const _0x1c164c=_0x1c16();return _0x5d06=function(_0x5d0699,_0x6a88b3){_0x5d0699=_0x5d0699-0x1ae;let _0x460b37=_0x1c164c[_0x5d0699];return _0x460b37;},_0x5d06(_0x263096,_0x3de922);}let json={'type':_0x4c8f62(0x1b2),'format':_0x4c8f62(0x1bb),'backgroundColor':apiColor,'width':0x300,'height':0x300,'scale':0x2,'messages':[{'entities':[],'avatar':!![],'from':{'id':0x1,'name':pushname,'photo':{'url':await x[_0x4c8f62(0x1c6)](m[_0x4c8f62(0x1c0)],_0x4c8f62(0x1c2))['catch'](()=>_0x4c8f62(0x1b1))}},'text':teks,'replyMessage':{}}]};function _0x1c16(){const _0xab735c=['https://bot.lyo.su/quote/generate','10bmzASg','application/json','1341NxIXRT','1428098uuvSmb','webp','sendImageAsSticker','42736GuGBOF','result','72620RHmOFI','sender','PACKNAME','image','AUTHOR','base64','4479920eHgQzK','profilePictureUrl','1208190bosdun','11ePqttg','post','126056ldOkjl','12GIBIad','https://telegra.ph/file/999b290ecb3e50107a9da.jpg','quoted','1703596iRwQYq','chat','data'];_0x1c16=function(){return _0xab735c;};return _0x1c16();}const post=await axios[_0x4c8f62(0x1ae)](_0x4c8f62(0x1b6),json,{'headers':{'Content-Type':_0x4c8f62(0x1b8)}});let buff=await Buffer['from'](post[_0x4c8f62(0x1b5)][_0x4c8f62(0x1be)][_0x4c8f62(0x1c2)],_0x4c8f62(0x1c4));if(buff==undefined)return reply('error');x[_0x4c8f62(0x1bc)](m[_0x4c8f62(0x1b4)],buff,m,{'packname':config[_0x4c8f62(0x1c1)],'author':config[_0x4c8f62(0x1c3)]});
	}
			break
           case `${p}`+'sticker': {
            if (!quoted) m.reply('_Reply to photo or video!_')
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await x.sendImageAsSticker(m.chat, media, m, { packname: config.STICKER_DATA.split(",")[0], author: config.STICKER_DATA.split(",")[1] })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('_Maximum 10 second video!_')
                let media = await quoted.download()
                let encmedia = await x.sendVideoAsSticker(m.chat, media, m, { packname: config.STICKER_DATA.split(",")[0], author: config.STICKER_DATA.split(",")[1]})
                await fs.unlinkSync(encmedia)
            } else {
                await m.reply('_Reply to photo or video!_')
                }
            }
            break
        case `${p}`+'take': {
	if (!m.quoted) await m.reply(`_Reply to sticker!_`)
	let [packname, author] = text.split(",")
    if (/image/.test(mime)) {
    let media = await quoted.download()
	let encmedia = await x.sendImageAsSticker(m.chat, media, m, { packname : packname || config.PACKNAME, author : author || config.AUTHOR })
	await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                if (!m.quoted) return m.reply('Maximum 10 seconds!')
                let buff = await quoted.download()
                let encmedia = await x.sendVideoAsSticker(m.chat, buff, m, { packname : packname || config.PACKNAME, author : author || config.AUTHOR })
	await fs.unlinkSync(encmedia)
	}
	}
	break
       case `${p}`+'photo': {
                if (!quoted) await m.reply(`_Reply to image sticker!_`)
                if (!/webp/.test(mime)) await m.reply(`_Reply to image sticker!_`)
                let media = await x.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    x.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
case `${p}`+'tts': {
let texttts = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text;
const ttsurl = googleTTS.getAudioUrl(texttts, {
lang: "en",
slow: false,
host: "https://translate.google.com",
});
x.sendMessage(m.chat, {
audio: {
url: ttsurl,
},
mimetype: "audio/mpeg",
fileName: `${pushname}.mp3`,
}, {
quoted: m,
})
}
break
}
    } catch (e) {
      console.log(e)
   }
})()
