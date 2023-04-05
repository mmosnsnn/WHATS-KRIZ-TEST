const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })

global.owner = process.env.OWNER_NUMBER.split(",")
module.exports = {
  VERSION: require('./package.json').version,
  SESSION_ID:process.env.SESSION_ID || " ",
  BRANCH: "master",
  FOOTER: process.env.FOOTER || " ",
  STICKER_DATA: process.env.STICKER_DATA || " ",
  BCAUDIO_IMAGE: process.env.BCAUDIO_IMAGE || " ",
  GPT: process.env.GPT || " ",
  BOTNAME: process.env.BOTNAME || "WHATS-KRIZ-AI",
  OWNERNAME: process.env.OWNERNAME || "KRIZ-SER",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
};

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
