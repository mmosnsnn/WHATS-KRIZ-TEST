(async () => {
 
  try{
	switch (command) {
	case `${p}`+'restart': {
	await x.sendMessage(`_Restarting...!_`)
	await heroku.delete(baseURI + "/dynos").catch(async (error) => {
	await x.sendMessage(`HEROKU : ${error.body.m}`)
	})
	}
	break
    case `${p}`+'shutdown': {
    await heroku
    .get(baseURI + "/formation")
    .then(async (formation) => {
    await x.sendMessage(`_Shutting down...!_`)
    await heroku.patch(baseURI + "/formation/" + formation[0].id, {
    body: {
      quantity: 0,
    },
    })
    })
    .catch(async (error) => {
    await x.sendMessage(`HEROKU : ${error.body.m}`)
    })
    }
    break
   case `${p}`+'setvar': {
   if (!text) await m.reply(`_Example : .setvar BOT_NAME:WHATS-KRIZ-AI_`)
   const [key, value] = text.split(":")
   if (!key || !value)
   return await m.reply(`_Example : .setvar BOT_NAME:WHATS-KRIZ-AI_`)
   heroku
   .patch(baseURI + "/config-vars", {
   body: {
     [key.toUppercase()]: value,
     },
     })
     .then(async () => {
     await x.sendMessage(`_${key.toUpperCase()}: ${value}_`)
     })
     .catch (async (error) => {
     await x.sendMessage(`HEROKU : ${error.body.m}`)
     })
     }
    break
    }
    } catch (e) {
      console.log(e)
   }
})()
