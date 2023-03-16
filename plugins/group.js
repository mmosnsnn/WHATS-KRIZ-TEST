(async () => {
 
  try{
	switch (command) {
	case `${p}`+'add': {
                if (!text) await m.reply(`_Give a number to add!_`)
		if (!m.isGroup) await m.reply(`_This command is only for use in groups!_`)
                if (!isBotAdmins) await m.reply(`_I'm not admin!_`)
                let jid = parsedJid(text)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await x.groupParticipantsUpdate(m.chat, [users], 'add')
        await m.reply(`_@${jid.split('@')[0]} added to this group!_`)
	}
	break
}
    } catch (e) {
      console.log(e)
   }
})()
