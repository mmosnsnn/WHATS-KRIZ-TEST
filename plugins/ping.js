(async () => {
 
  try{
	switch (command) {
		case `${p}`+'ping': {

let { performance } = require('perf_hooks')
    let old = performance.now()
    await x.sendMessage(m.chat, { text : '_Checking ping..._' }, {quoted : false})
              let neww = performance.now()
    let speed = neww - old
    y = Math.ceil(speed)
        x.sendMessage(m.chat, { text : `_${y} ms_` }, {quoted : false})
            
       }
   break

case `${p}`+'runtime': {
const { runtime } = require('./lib/myfunc.js')
const rntime = |ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}`
    await x.sendMessage(m.chat, { text : runtime }, {quoted : false})
}
break
}
    } catch (e) {
      console.log(e)
   }
})()
