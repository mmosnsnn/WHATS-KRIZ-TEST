(async () => {
 
  try{
	switch (command) {
	case `{p}`+'autoreact': {
	if (!isCreator) await m.reply(`_This feature only owner can enable!._`)
	if (args[0] === "on") {
	if (db.data.chats[m.chat].autoreact) return m.reply(`_Autoreact is already enabled!_`)
	db.data.chats[m.chat].autoreact = true
    m.reply(`_Autoreact is enabled!_`)
    } else if (args[0] === "off") {
    if (!db.data.chats[m.chat].autoreact) return m.reply(`_Autoreact is already enabled!_`)
    db.data.chats[m.chat].autoreact = false
    m.reply(`_Autoreact is disabled!_`)
    } else {
    let buttons = [
    { buttonId: 'autoreact on', buttonText: { displayText: 'Oɴ' }, type: 1 },
    { buttonId: 'autoreact off', buttonText: { displayText: 'Oꜰꜰ' }, type: 1 }
    ]
    await x.sendButtonText(m.chat, buttons, tiny(`Mode autoreact`), m)
    }
	let rm = await pickRandom(["👀", "🦴", "😎", "🫶🏻"])
	x.sendMessage(m.chat, { react: { text: rm, key: m.key }})
	}
	break
}
    } catch (e) {
      console.log(e)
   }
})()
