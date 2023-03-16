const path = require('path')
const axios = require('axios')
const config = require('./config.js')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const prefa = ['','!','.','#','&','/',',','!','?']
global.prefix = ['','!','.','#','&','/',',','!','?']
global.owner = ['919207759062','919961857267','919633687665','919496966726']
const { insta } = require('./lib/scrapers.js')
const { ytMp4, ytMp3, ytPlay } = require('./lib/ytdl.js')
const { toAudio } = require('./lib/converter.js')
const yts = require('yt-search')
const { jslbuffer } = require('abu-bot')
const { parsedJid, fetchJson, sleep, fetchBuffer } = require('./lib/myfunc.js')

module.exports = viper = async (x, m, chatUpdate) => {
try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = typeof m.text == "string" ? m.text : "";
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        //var perf = '.'
        const isCmd = body.startsWith(prefix)
        const perf = "#"
        const p = ""
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const cmnd = body.replace(perf, perf).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await x.decodeJid(x.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const teks = text ? text : m.quoted && m.quoted.text
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const groupMetadata = m.isGroup ? await x.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        var randomColor = ['#ef1a11', '#89cff0', '#660000', '#87a96b', '#e9f6ff', '#ffe7f7', '#ca86b0', '#83a3ee', '#abcc88', '#80bd76', '#6a84bd', '#5d8d7f', '#530101', '#863434', '#013337', '#133700', '#2f3641', '#cc4291', '#7c4848', '#8a496b', '#722f37', '#0fc163', '#2f3641', '#e7a6cb', '#64c987', '#e6e6fa', '#ffa500'];
	const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];
//autodl yt
if (budy.startsWith("https://youtu")) {
takes = budy.replace('https://youtube.com/shorts/','').replace('?feature=share','').replace('https://youtube.com/watch?v=','').replace('https://youtu.be/','')   
let yts = require("yt-search")
let search = await yts(`https://youtu.be/${takes}`)
msg = `
ᴛɪᴛʟᴇ : ${search.videos[0].title}
ɪᴅ : ${search.videos[0].videoId}
ᴅᴜʀᴀᴛɪᴏɴ : ${search.videos[0].timestamp}
ᴠɪᴇᴡᴇʀs : ${search.videos[0].views}
ᴜᴘʟᴏᴀᴅᴇᴅ : ${search.videos[0].ago}
ᴀᴜᴛʜᴏʀ : ${search.videos[0].author.name}
ᴄʜᴀɴɴᴇʟ : ${search.videos[0].author.url}
ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ${search.videos[0].description}
`

const buttons = [
  {buttonId: `ytmp3  ${search.videos[0].url} 320kbps`, buttonText: {displayText: 'ᴀᴜᴅɪᴏ🎵'}, type: 1},
  {buttonId: `ytmp4 ${search.videos[0].url}`, buttonText: {displayText: 'ᴠɪᴅᴇᴏ▶️'}, type: 1}
]

const buttonMessage = {
    text: msg,
    footer: 'ᴡʜᴀᴛꜱ-ᴋʀɪᴢ-ᴀɪ',
    buttons: buttons,
    image: { url: search.videos[0].thumbnail },
    headerType: 1
}
 x.sendMessage(m.chat, buttonMessage)

}


let time = moment.tz('Asia/Kolkata').format("hh:mm:ss")
  /*
if (!isCmd) {
console.log( chalk.red(time), chalk.white('\nRecieved ➡️   '), '[ ' ,chalk.green(budy || m.mtype), ' ]\n\nFrom ➡️   ', chalk.white(pushname)+'\n\n')
} else {
  
console.log( chalk.red(time), chalk.white('\nRecieved ➡️   '), '[ ' ,chalk.yellow(budy || m.mtype), ' ]\n\nFrom ➡️   ', chalk.white(pushname)+'\n\n')
}*/
  //console.log(m)

   if (m.message) {
            x.readMessages([m.key])
            console.log('\n' + chalk.white('• User ➡️  ') + chalk.blue(pushname) + '\n' +chalk.white('• Message ➡️  ') +chalk.blue(m.body || m.mtype))
        }



  /////////////////////////////////////////////////////////////
 fs.readdirSync('./plugins').forEach((file) => {
			if (path.extname(file).toLowerCase() == '.js') {
				eval(fs.readFileSync('./plugins/' + file,  'utf8'))
			}
		})





  

  
    } catch (err) {
       console.log(util.format(err))
}
}



