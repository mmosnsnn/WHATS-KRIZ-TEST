(async () => {
  
  try{
	switch (command) {
    case `${p}`+'menu': {
      


let fek = `Usᴇʀ ${pushname}

✵ ᴊɪᴅ

✵ ᴩʟᴀy

✵ ᴩɪɴɢ

✵ ᴍꜰ

✵ yᴛᴍᴩ3

✵ yᴛᴍᴩ4

✵ ɪɴꜱᴛᴀ

✵ ɢᴇᴛᴊɪᴅꜱ

✵ ʀᴜɴᴛɪᴍᴇ

✵ sᴏɴɢ

✵ ᴏᴡɴᴇʀ

✵ ᴀᴅᴅ

✵ ᴘʀᴏᴍᴏᴛᴇ

✵ ᴅᴇᴍᴏᴛᴇ

✵ ᴋɪᴄᴋ

✵ ᴍᴇɴᴜ`
let { result} = await getJson('https://gist.githubusercontent.com/Djjdkdm/ef1ccb7b34d73726773d0ccf1ab317b9/raw/2412fdfa8225e95b79f76fa4a97e70582b371320/menu.json')
let kriz = result[Math.floor(Math.random()*result.length)]
try {
pp = await x.profilePictureUrl(m.sender, 'image') 
} catch {
pp = 'https://i.imgur.com/LgwJjMF.jpeg'
}
let ppp = await getBuffer(pp)
const buttons = [
  {buttonId:  'ping', buttonText: {displayText: 'ᴩɪɴɢ'}, type: 1}]

const buttonMessage = {
    video: {url: kriz},
    caption: fek,
    footer: 'WʜᴀᴛꜱKʀɪᴢ AI',
    buttons: buttons,
    headerType: 4,
  contextInfo: { externalAdReply: { title: `❗️WʜᴀᴛꜱKʀɪᴢ AI❗️`,renderLargerThumbnail: true, showAdAttribution: true,  body: `ᴛ ᴇ ᴀ ᴍ  ᴛ ᴏ x ɪ ᴄ `, mediaUrl: `www.instagram.com`, mediaType: 2, thumbnail:  ppp }}
      
}

x.sendMessage(m.chat, buttonMessage, {quoted: fvn})
    }

      break
     
  }
    } catch (e) {
m.reply("err " + e)
   }
})()
