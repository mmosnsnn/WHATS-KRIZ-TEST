const fs = require('fs')
const chalk = require('chalk')
global.owner = ['919633687665']
global.ownernomer = "919496966726"
global.premium = ['919633687665']
global.packname = 'WʜᴀᴛꜱKʀɪᴢ AI'
global.author = 'TEAM-TOXIC'
global.sessionName = 'session'
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: '✅Done',
    admin: 'Group Admin Special Features!',
    botAdmin: 'Bot Must Become Admin First!',
    premime: 'Special Premium Features If you want to register, type rent / chat owner',
    owner: 'Special Features of Owner Bot',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'Special Features for Bot Number Users',
    wait: 'Loading...',
    error: 'Error!',
    errapi: 'Error Maybe Invalid Apikey!',
    errmor: 'System Error Errors',
    endLimit: 'Your Daily Limit Has Been Expired, The Limit Will Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./media/image/tio.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')
global.mygit = 'https://github.com/BOTCAHX'
global.webmy = 'https://api.botcahx.biz.id'
global.ghme = 'https://github.com/BOTCAHX'
global.gcbot = "https://api.botcahx.biz.id"
global.botname = '*WʜᴀᴛꜱKʀɪᴢ AI*'
global.omlen = '*©WʜᴀᴛꜱKʀɪᴢ AI*'
global.weem = '*WʜᴀᴛꜱKʀɪᴢ AI*'
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
