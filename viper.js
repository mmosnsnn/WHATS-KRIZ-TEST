const path = require('path')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const prefa = ['','!','.','#','&']
global.owner = ['919207759062']
const { insta } = require('./lib/scrapers.js')
const { ytMp4, ytMp3, ytPlay } = require('./lib/ytdl.js')
const yts = require('yt-search')

module.exports = viper = async (x, m) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
         var budy = typeof m.text == "string" ? m.text : "";
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~?@$%^©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@$%^&©^]/gi)[0] : "" : prefa ?? ''
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



