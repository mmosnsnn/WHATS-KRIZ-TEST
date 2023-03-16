(async () => {
 
  try{
	switch (command) {
	case `${p}`+'add': {
                if (!text) await m.reply(`_Give a number to add!_`)
		if (!m.isGroup) await m.reply(`_This command is only for use in groups!_`)
                if (!isBotAdmins) await m.reply(`_I'm not admin!_`)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		let jid = parsedJid(users)
		await x.groupParticipantsUpdate(m.chat, [users], 'add')
        await m.reply(`_@${jid.split('@')[0]} added to this group!_`)
	}
	break
case `${p}`+'promote': {
		                if (!text) await m.reply(`_Give a number to add!_`)
		if (!m.isGroup) await m.reply(`_This command is only for use in groups!_`)
                if (!isBotAdmins) await m.reply(`_I'm not admin!_`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		let jid = parsedJid(users)
		await kriz.groupParticipantsUpdate(m.chat, [users], 'promote')
        await m.reply(`_@${jid.split('@')[0]} promoted as admin!_`)
	}
	break
}
    } catch (e) {
      console.log(e)
   }
})()
