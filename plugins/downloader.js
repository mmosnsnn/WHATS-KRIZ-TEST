(async () => {
 
  try{
	switch (command) {
		case `${p}`+'song': {
		if (!text) await m.reply('_${p} ꜱᴏɴɢ xxxᴛᴇɴᴀᴄᴛɪᴏɴ ʜᴏᴘᴇ_')
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'ᴀᴜᴅɪᴏ🎵'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'ᴠɪᴅᴇᴏ▶️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
ᴛɪᴛʟᴇ : ${anu.title}
ᴅᴜʀᴀᴛɪᴏɴ : ${anu.timestamp}
ᴠɪᴇᴡᴇʀꜱ : ${anu.views}
ᴜᴘʟᴏᴀᴅ ᴀᴛ : ${anu.ago}
ᴀᴜᴛʜᴏʀ : ${anu.author.name}
ᴄʜᴀɴɴᴇʟ : ${anu.author.url}
ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ${anu.description}
ᴠɪᴅᴇᴏ ᴜʀʟ : ${anu.url}`,
                    footer: 'ᴡʜᴀᴛꜱ-ᴋʀɪᴢ-ᴀɪ',
                    buttons: buttons,
                    headerType: 4
                }
                x.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case `${p}`+'play': {
		if (!text) await m.reply('_sᴏɴɢ xxxᴛᴇɴᴀᴄᴛɪᴏɴ ʜᴏᴘᴇ_')
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'ᴀᴜᴅɪᴏ🎵'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'ᴠɪᴅᴇᴏ▶️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
ᴛɪᴛʟᴇ : ${anu.title}
ᴅᴜʀᴀᴛɪᴏɴ : ${anu.timestamp}
ᴠɪᴇᴡᴇʀꜱ : ${anu.views}
ᴜᴘʟᴏᴀᴅ ᴀᴛ : ${anu.ago}
ᴀᴜᴛʜᴏʀ : ${anu.author.name}
ᴄʜᴀɴɴᴇʟ : ${anu.author.url}
ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ${anu.description}
ᴠɪᴅᴇᴏ ᴜʀʟ : ${anu.url}`,
                    footer: 'ᴡʜᴀᴛꜱ-ᴋʀɪᴢ-ᴀɪ',
                    buttons: buttons,
                    headerType: 4
                }
                x.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case `${p}`+'ytmp3': {
if (!text) await m.reply(`_Sᴇɴᴅ ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ ʟɪɴᴋ...!_`)
let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks2) return m.reply(`_Iɴᴠᴀʟɪᴅ ʟɪɴᴋ!_`)
m.reply('_Yᴏᴜʀ ꜱᴏɴɢ ɪꜱ ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ...!_')
anu = await ytMp4(`${q}`)
x.sendMessage(m.chat, { audio: { url: anu.result }, mimetype: 'audio/mpeg', fileName: `${anu.title}.mp3` }, { quoted: m })
}
break
case `${p}`+'ytmp4': {
if (!text) await m.reply(`_Sᴇɴᴅ ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ ʟɪɴᴋ...!_`)
let isLinks= args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return m.reply(`_Iɴᴠᴀʟɪᴅ ʟɪɴᴋ!_`)
m.reply('_Yᴏᴜʀ ᴠɪᴅᴇᴏ ɪꜱ ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ...!_')
anu = await ytMp4(`${q}`)
x.sendMessage(m.chat, { video: { url: anu.result }, mimetype: 'video/mp4', fileName: `${anu.title}.mp4` }, { quoted: m })
}
break
case `${p}`+'insta': {
if (!quoted && !text) await m.reply('_Need insta url!_)
const response = await fetchJson(`https://api-viper-x0.up.railway.app/api/insta?url=${text}`)
x.sendMessage(m.chat, { video: { url: response.media.url }, fileName: 'ig.mp4', mimetype: 'video/mp4' }, { quoted: m })
}
break
}
    } catch (e) {
      console.log(e)
   }
})()
