(async (match) => {
 
  try{
	switch (command) {
	case `${p}`+'add': { 
	    if (!m.isGroup) await m.reply('_This command is for groups!_')
	    match = match || m.reply_m.jid;
	    if (!match) await m.reply('_Give a number to add!_')
        if (!isBotAdmins) await m.reply(`_I'm not admin!_`)
        if (!isAdmins) await m.reply('_This command only for group admins!_')
        let jid = parsedJid(match)
        let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await x.groupParticipantsUpdate(m.chat, [users], 'add')
        await m.reply(`_@${jid[0].split("@")[0]} added to this group!_`, { mentions: jid, })
}
break
}
    } catch (e) {
      console.log(e)
   }
})()
