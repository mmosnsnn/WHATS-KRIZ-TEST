(async () => {
 
  try{
	switch (command) {
	case `${p}`+'ai': {
	if (!teks) await m.reply(`_Example : .ai who is what's kriz?_`)
    let response = await axios (`https://api-viper-x0.vercel.app/api/openai?openaiapikey=${gptapikey}&text=${teks}`)
    x.sendMessage(m.chat, { text: response.data.text }, {quoted: m })
}
break
}
    } catch (e) {
      console.log(e)
   }
})()
