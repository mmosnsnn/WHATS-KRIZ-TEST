(async () => {
 
  try{
	switch (command) {
	case `{p}`+'autoreact': {
	if (!isCreator) await m.reply(`_This feature only owner can enable!._`)
	if (!args[0] === "on") {
	if (db.data.chats[m.chat].react) return m.reply(`_Autoreact is already enabled!_`)
	db.data.chats[m.chat].react = true
    m.reply(`_Autoreact is enabled!_`)
    } else if (!args[0] === "off") {
    if (!db.data.chats[m.chat].react) return m.reply(`_Autoreact is already enabled!_`)
    db.data.chats[m.chat].react = false
    m.reply(`_Autoreact is disabled!_`)
    } else {
    const buttons = [
    { buttonId: 'autoreact on', buttonText: { displayText: 'Oɴ' }, type: 1 },
    { buttonId: 'autoreact off', buttonText: { displayText: 'Oꜰꜰ' }, type: 1 }
    ]
    x.sendButtonText(m.chat, buttons, `Mode autoreact`, x.user.name, m, { quoted : m })
	}
}
	break
}
    } catch (e) {
      console.log(e)
   }
})()
