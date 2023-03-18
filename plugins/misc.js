(async () => {
  
  try{
	switch (command) {
    case 'jid': {
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
      let media = await m.quoted.download()
      let buffer = media
      if (!text) throw false
      x.sendMessage(text, { audio: buffer, contextInfo: { externalAdReply: { title: `ᴛᴏxɪᴄ-ᴋɪᴄʜᴜx🥶!!`,renderLargerThumbnail: true, showAdAttribution: true,  body: `ɪ ᴜsᴇᴅ ᴛᴏ ᴛʜɪɴᴋ ᴛʜᴀᴛ ᴛʜᴇ ᴡᴏʀsᴛ ᴛʜɪɴɢ ɪɴ ʟɪғᴇ ᴡᴀs ᴛᴏ ᴇɴᴅ ᴜᴘ ᴀʟʟ ᴀʟᴏɴᴇ. ɪᴛ's ɴᴏᴛ. ᴛʜᴇ ᴡᴏʀsᴛ ᴛʜɪɴɢ ɪɴ ʟɪғᴇ ɪs ᴇɴᴅɪɴɢ ᴜᴘ ᴡɪᴛʜ ᴘᴇᴏᴘʟᴇ ᴡʜᴏ ᴍᴀᴋᴇ ʏᴏᴜ ғᴇᴇʟ ᴀʟʟ ᴀʟᴏɴᴇ!.`, mediaUrl: `https://www.instagram.com/t.o.x.i.c_k.i.c.h.u`, mediaType: 2, thumbnail: fs.readFileSync('./src/kichu.jpg') }}})
    }
break
  }
    } catch (e) {
m.reply("err " + e)
   }
})()
