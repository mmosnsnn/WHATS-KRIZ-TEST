(async () => {
 
  try{
	switch (command) {
		case `${p}`+'ping': {

let { performance } = require('perf_hooks')
    let old = performance.now()
    await m.reply('_Cʜᴇᴄᴋɪɴɢ ʀᴇꜱᴘᴏɴꜱᴇ ꜱᴘᴇᴇᴅ!_')
              let neww = performance.now()
    let speed = neww - old
   var y = Math.ceil(speed)
     await m.reply('_Rᴇꜱᴘᴏɴꜱᴇ ɪɴ ' + (y) + ' ᴍꜱ_')
            
       }
   break

case `${p}`+'runtime': {
const { runtime } = require('./lib/myfunc.js')
const rntime = `ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}`
    await x.sendMessage(m.chat, { text : rntime }, {quoted : false})
}
break
}
    } catch (e) {
      console.log(e)
   }
})()
