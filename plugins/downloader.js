const { insta } = require('./lib/scrapers.js')
const { ytMp4, ytMp3, ytPlay } = require('./lib/ytdl.js')
const yts = require('yt-search')


if (m.text.includes("https://www.instagram.com")) {
	insta(m.text).then(({ url }) => {
 
   try { x.sendMessage(m.chat , { video : { url : url } } )
       } catch {
	       console.log("umm")
    // x.sendMessage("ᴇʀʀᴏʀ ᴏᴄᴄᴜʀᴇᴅ!!"); }
    }
    })
}


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
		if (!text) await m.reply('_${p} sᴏɴɢ xxxᴛᴇɴᴀᴄᴛɪᴏɴ ʜᴏᴘᴇ_')
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
}
    } catch (e) {
m.reply("err " + e)
   }
})()
