(async () => {
 
  try{
	switch (command) {
	case `${p}`+'ai': {
	if (!teks) await m.reply(`_Example : .ai who is what's kriz?_`)
    const gptai = await krizaigpt(teks)
    x.sendMessage(m.chat, { text: gptai }, {quoted: m })
}
break
}
    } catch (e) {
      console.log(e)
   }
})()
