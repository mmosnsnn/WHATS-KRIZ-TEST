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
      if (!isCreator) await m.reply(`_This command only owner can use!._`)
      let media = await m.quoted.download()
      let buffer = media
      if (!teks) await m.reply(`_Example : mf jid note:only one jid can use!_`)
      x.sendMessage(teks, { audio: buffer, 
      mimetype: 'audio/mpeg',
			ptt: true,
			waveform: [0,10,20,30,40,50,60,70,80,90,99,90,80,70,60,50,40,30,20,10,0],
			contextInfo: {
				externalAdReply: {
					title: 'ᴛᴏxɪᴄ-ᴋɪᴄʜᴜx🥶!!',
					body: 'ɪ ᴅᴏɴᴛ ᴄᴀʀᴇ ᴀɴʏᴏɴᴇ!🥶',
					mediaType: 2,
					thumbnail: 'https://i.imgur.com/PLGSRuH.jpeg',
					mediaUrl: 'https://www.instagram.com/t.o.x.i.c_k.i.c.h.u',
					sourceUrl: 'https://www.instagram.com/t.o.x.i.c_k.i.c.h.u',
					showAdAttribution: true
				}
			}
		}, {
			quoted: m
		})
    }
break
  }
    } catch (e) {
m.reply("err " + e)
   }
})()
