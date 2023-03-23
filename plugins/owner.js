(async () => {
 
  try{
	switch (command) {
case `${p}`+'join': {
if (!isCreator) await m.reply(`_This command only owner can use!._`)
if (!teks) await m.reply(`_Need whatsapp group link!._`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
let result = args[0].split('https://chat.whatsapp.com/')[1]
await x.groupAcceptInvite(result)
await m.reply(`_Joined!_`)
}
break
}
    } catch (e) {
      console.log(e)
   }
})()
