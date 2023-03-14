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
                     let jsonnya = {
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
                      url: await tio.profilePictureUrl(m.sender, "image").catch(() => 'https://telegra.ph/file/999b290ecb3e50107a9da.jpg'),
                     }
                     },
                     text: text,
                     replyMessage: {},
                     },
                   ],
                 }
                 const post = await axios.post("https://bot.lyo.su/quote/generate",
                  jsonnya,{
                    headers: { "Content-Type": "application/json"},
                  })
                  let buff = await Buffer.from(post.data.result.image, "base64")
                  if (buff == undefined) return reply('error')
                  x.sendImageAsSticker(m.chat, buff, mek, { packname: 'ᴡʜᴀᴛs-ᴋʀɪᴢ-ᴀɪ', author: 'ᴛᴇᴀᴍ-ᴛᴏxɪᴄ' })
						
                  /**x.sendMessage(m.chat, {
				image: buff,
				caption: `©ᴡʜᴀᴛs-ᴋʀɪᴢ-ᴀɪ`
			}, {
				quoted: m
			})**/
	}
			break
}
    } catch (e) {
      console.log(e)
   }
})()
