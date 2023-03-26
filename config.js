const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })

global.owner = process.env.OWNER_NUMBER.split(",")
module.exports = {
  VERSION: require('./package.json').version,
  SESSION_ID:process.env.SESSION_ID || " ",
  BRANCH: "master",
  MENU_MEDIA: process.env.MENUMEDIA || " ",
  FOOTER: process.env.FOOTER || " ",
  PACKNAME: process.env.PACKNAME || "WHATS-KRIZ-AI",
  BCAUDIO_IMAGE: process.env.BCAUDIO_IMAGE || " ",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || " ",
  MENTION_IMG: process.env.MENTION_IMG || " ",
  MENTION_MURL: process.env.MENTION_MURL || " ",
  MENTION_TITLE: process.env.MENTION_TITLE || " ",
  MENTION_BODY: process.env.MENTION_BODY || " ",
  MENTION_SURL: process.env.MENTION_SURL || " ",
  AUTHOR: process.env.AUTHOR || "TEAM-TOXIC",
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
