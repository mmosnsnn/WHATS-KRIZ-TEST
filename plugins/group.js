(async () => {
 
  try{
	switch (command) {
	case `${p}`+'add': { 
	    if (!m.isGroup) await m.reply('_This command is for groups!_)
            text = text || m.reply_m.chat;
	    if (!text) await m.reply('_Give a number to add!_')
        if (!isBotAdmins) await m.reply(`_I'm not admin!_`)
        if (!isAdmins) await m.reply('_This command only for group admins!_')
        let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        let jid = parsedJid(match)
        await x.groupParticipantsUpdate(m.chat, [users], 'add')
        await m.reply(`_@${jid[0].split("@")[0]} added to this group!_`, { mentions: jid, })
}
break
}
    } catch (e) {
      console.log(e)
   }
})()
