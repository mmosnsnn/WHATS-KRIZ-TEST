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
      if (!isCreator) await m.reply('_Only for owner!_')
            let getGroups = await x.groupFetchAllParticipating();
            let groups = Object.entries(getGroups)
                .slice(0)
                .map((entry) => entry[1]);
            let anu = groups.map((v) => v.id);
            let gjidmsg = `ᴀʟʟ ɢʀᴏᴜᴘꜱ ᴊɪᴅ\n\n`
            for (let i of anu) {
                let metadata = await x.groupMetadata(i);
                gjidmsg += `ꜱᴜʙᴊᴇᴄᴛ:- ${metadata.subject}\n`
                gjidmsg += `ᴍᴇᴍʙᴇʀ:- ${metadata.participants.length}\n`
                gjidmsg += `ᴊɪᴅ:- ${i}\n\n`

            }
            m.reply(gjidmsg)

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
case `${p}`+'mention': {
var audios = ["https://i.imgur.com/NTSnK6q.mp4" ,"https://i.imgur.com/GRlWXJh.mp4"]
var logo = 'https://i.imgur.com/LgwJjMF.jpeg'
if (teks.includes(owner[any])) {
const audio = audios[Math.floor(Math.random() * audios.length)]
const Audio = await getBuffer(audio)
let image1 = await getBuffer(logo)
let image2 = await getBuffer(logo)
var res = await toAudio(Audio, 'mp4')
x.sendMessage(m.chat, {
audio: res,
mimetype: 'audio/mpeg',
ptt: true,
waveform: [99,50,99,50,99],
contextInfo: {
				externalAdReply: {
				title: 'WʜᴀᴛꜱKʀɪᴢ Aɪ',
				body: 'ᴛᴏxɪᴄ-ᴋɪᴄʜᴜx🥶!!',
				mediaType: 2,
				thumbnail: image2,
				mediaUrl: 'https://www.instagram.com/t.o.x.i.c_k.i.c.h.u',
				sourceUrl: 'https://www.instagram.com/t.o.x.i.c_k.i.c.h.u',
				showAdAttribution: true
                }}
                },
                { quoted: m})
                }
                }
                break
  }
    } catch (e) {
m.reply("err " + e)
   }
})()
