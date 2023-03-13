(async () => {
 
  try{
	switch (command) {
	case `${p}`+'add': { 
	if (!m.isGroup) await m.reply('_This command is for groups!_')
    if (!isCreator) await m.reply('_This command only can use owner!_')
    if (!isBotAdmins) await m.reply(`_I'm not admin!_`)
    if (!isAdmins) await m.reply('_This command only for group admins!_')
    let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    await x.groupParticipantsUpdate(m.chat, [users], 'add')
    await m.reply('_Added to group!_')
}
break
}
    } catch (e) {
      console.log(e)
   }
})()
