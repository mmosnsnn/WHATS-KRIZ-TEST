(async () => {
 
  try{
	switch (command) {
	case `${p}`+'ai': {
	if (!text) await m.reply(`_Example : .ai who is what's kriz?_`)
    var api = await fetchJson(`https://mfarels.my.id/api/openai?text=${text}`)
    x.sendMessage(m.chat, { text: api.result }, {quoted: m })
}
break
}
    } catch (e) {
      console.log(e)
   }
})()
