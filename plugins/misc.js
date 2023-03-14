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
     
  }
    } catch (e) {
m.reply("err " + e)
   }
})()
