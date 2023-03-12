(async () => {
  
  try{
	switch (command) {
    case 'jid': {
      if (m.quoted) { m.reply(m.quoted.sender)} else {
      m.reply(m.chat)}
      
    }
      break
     
  }
    } catch (e) {
m.reply("err " + e)
   }
})()
