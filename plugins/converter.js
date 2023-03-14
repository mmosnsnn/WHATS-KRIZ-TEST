(async () => {
 
  try{
	switch (command) {
	case `${p}`+'mp3': {
	if (/document/.test(mime)) m.reply(`_Reply to audio or video..!_`)
            if (!/video/.test(mime) && !/audio/.test(mime)) m.reply(`_Reply to audio or video..!_`)
            if (!quoted) m.reply(`_Reply to audio or video..!_`)
            let media = await quoted.download()
            let audio = await toAudio(media, 'mp4')
            x.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg', fileName: `ᴡʜᴀᴛꜱ-ᴋʀɪᴢ-ᴀɪ.mp3`}, { quoted: m})                 
            }
            break
}
    } catch (e) {
      console.log(e)
   }
})()
