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
   case 'qc': {
                     if (!text) return m.reply(`_Example : .qc whatskriz_`)
                     let json = {
                     type: "quoted",
                     format: "webp",
                     backgroundColor: apiColor,
                     width: 768,
                     height: 768,
                     scale: 2,
                     messages: [
                   {
                   entities: [],
                   avatar: true,
                   from: {
                     id: 1,
                     name: pushname,
                    photo: {
                      url: await x.profilePictureUrl(m.sender, "image").catch(() => 'https://telegra.ph/file/999b290ecb3e50107a9da.jpg'),
                     }
                     },
                     text: text,
                     replyMessage: {},
                     },
                   ],
                 }
                 const post = await axios.post("https://bot.lyo.su/quote/generate",
                  json,{
                    headers: { "Content-Type": "application/json"},
                  })
                  let buff = await Buffer.from(post.data.result.image, "base64")
                  if (buff == undefined) return reply('error')
                  x.sendImageAsSticker(m.chat, buff, m, { packname: config.PACKNAME, author: config.AUTHOR })
						
                  /**x.sendMessage(m.chat, {
				image: buff,
				caption: `©ᴡʜᴀᴛs-ᴋʀɪᴢ-ᴀɪ`
			}, {
				quoted: m
			})**/
	}
			break
case `${p}`+'sticker': {
            if (!quoted) m.reply('_Reply to photo or video!_')
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await x.sendImageAsSticker(m.chat, media, m, { packname: config.PACKNAME, author: config.AUTHOR })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('_Maximum 10 second video!_')
                let media = await quoted.download()
                let encmedia = await x.sendVideoAsSticker(m.chat, media, m, { packname: config.PACKNAME, author: config.AUTHOR })
                await fs.unlinkSync(encmedia)
            } else {
                await m.reply('_Reply to photo or video!_')
                }
            }
            break
case `${p}`+'take': {
	if (!text && !quoted) await m.reply(`_Reply to sticker!_`)
	let buff = await x.downloadMediaMessage()
	let [packname, author] = match.split(",")
	if (/image/.test(mime)) {
	let encmedia = await x.sendImageAsSticker(m.chat, buff, m, { packname : packname || config.PACKNAME, author : author || config.AUTHOR })
	await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maximum 10 seconds!')
                let buff = await x.downloadMediaMessage()
                let encmedia = await kriz.sendVideoAsSticker(m.chat, buff, m, { packname : packname || config.PACKNAME, author : author || config.AUTHOR })
	await fs.unlinkSync(encmedia)
	}
	}
	break
}
    } catch (e) {
      console.log(e)
   }
})()
