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
  }
    } catch (e) {
      console.log(e)
   }
})()

case `${p}`+'runtime': {
const { runtime } = require('../lib')
let rntime = `Runtime : ${runtime(process.uptime())}`
x.sendMessage(m.chat, { text: rntime })
}
break
}
    } catch (e) {
      console.log(e)
   }
})()
