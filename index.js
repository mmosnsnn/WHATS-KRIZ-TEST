const { DisconnectReason, useMultiFileAuthState, downloadContentFromMessage, makeInMemoryStore, jidDecode , BufferJSON, default: makeWASocket } = require('@adiwajshing/baileys');
const { Boom } = require("@hapi/boom");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
console.log("Starting...📶");
const P = require("pino")
const FileType = require('file-type')
const PhoneNumber = require('awesome-phonenumber')
const { MakeSession } = require("./lib/session")
const fetch = require("node-fetch")
const path = require('path')
const fs = require("fs");
const axios = require('axios')
const {smsg} = require("./lib/function")
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif.js')
const config = require('./config.js')
const store = makeInMemoryStore({});
const {multiauthState} = require("./lib/multiauth");

  
/*async function Singmulti() {
  
  if (!fs.existsSync(__dirname + "/session.json"))
    await MakeSession("config.SESSION_ID", __dirname + "/session.json").then(async() => { 
     const { state } = useMultiFileAuthState(__dirname + "/auth_info_baileys");
      await sleep(40000)
  await multiauthState("session.json", __dirname + "/auth_info_baileys", state);
  })
}
Singmulti()*/

async function Singmulti() {
  if (!fs.existsSync(__dirname + "/session.json"))
    await MakeSession("config.SESSION_ID", __dirname + "/session.json");
  const { state } = await useMultiFileAuthState(__dirname + "/session");
  await multiauthState("session.json", __dirname + "/session", state);
}
Singmulti()



setTimeout(() => {
  
  async function connectToWhatsApp() {
  const { state } = await useMultiFileAuthState(__dirname + "/session");

  const x = makeWASocket({
    auth: state,
    printQRInTerminal: true,
    logger: P({ level: "silent" }),
    patchMessageBeforeSending: (message) => {

    const requiresPatch = !!(
        message.buttonsMessage || message.templateMessage || message.listMessage
    );
    if (requiresPatch) {
        message = {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadataVersion: 2,
                        deviceListMetadata: {},
                    },
                    ...message,
                },
            },
        };
    }
    return message;
},
    syncFullHistory: false
  })

    
    
  x.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update


    if (connection === "connecting") {
      console.log("ℹ️ Connecting to WhatsApp... Please Wait.");
    }
if (connection == "open") {
  console.log("Connected to WhatsApp Web✅")
  console.log("WHATS-KRIZ-AI Is Now Online..✅")
  }

    if (connection === 'close') {
      let reason = new Boom(lastDisconnect.error).output.statusCode;
      if (reason === DisconnectReason.badSession) {
        console.log(`Uhh Session Error Please Rescan And Try Again...⚠️`)
        x.logout()
      } else if (reason === DisconnectReason.connectionClosed) {
        console.log("Reconnecting...🔁")
        connectToWhatsApp()
      } else if (reason === DisconnectReason.connectionLost) {
        console.log("Connection Is Lost  Retrying...🔁")
        connectToWhatsApp()
      } else if (reason === DisconnectReason.connectionReplaced) {
        console.log("Connection Is Replaced...❗")
        x.logout()
      } else if (reason === DisconnectReason.loggedOut) {
        console.log(`Connection Is Lost Device Logged Out...🔚`)
        x.logout()
      } else if (reason === DisconnectReason.restartRequired) {
        console.log("Restart Required...❗")
        console.log("Restarting...🔁")
        connectToWhatsApp()
      } else if (reason === DisconnectReason.timedOut) {
        console.log("Connection Timeout Retrying...🔁")
        connectToWhatsApp()
      } else {
        x.end(`Connection stopped🛑 : ${reason}|${lastDisconnect.error}`)
      }
    }
  })



  x.ev.on('messages.upsert', message => {
  try {
    let ms = message.messages[0]
      m = smsg(x, ms)
        require("./viper.js")(x, m, connectToWhatsApp , message)
     } catch (e) {
            console.log(e)
        }
    
  })

  x.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    x.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = x.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    x.getName = (jid, withoutContact  = false) => {
        id = x.decodeJid(jid)
        withoutContact = x.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = x.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === x.decodeJid(x.user.id) ?
            x.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }

    x.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await x.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await x.getName(i + '@s.whatsapp.net')}\nFN:${await x.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Mobile\nitem2.EMAIL;type=INTERNET: whatskrizaiofficial@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://github.com/TOXIC-KICHUX/WHATS-KRIZ-AI\nitem3.X-ABLabel:Repository\nitem4.ADR:;;India;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	x.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }

     x.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await tio.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif.js')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : config.PACKNAME, author: options.author ? options.author : config.AUTHOR, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await x.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

    x.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await x.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

  
    x.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await x.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
 
    x.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    x.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 

  //x.ev.on('creds.update', saveCreds)
x.sendText = (jid, text, quoted = '', options) => x.sendMessage(jid, { text: text, ...options }, { quoted, ...options })



                                                                                                  

    


}
  connectToWhatsApp()
  
  }, 4000)
// run in main file
/*sleep(6000).then(() => {
connectToWhatsApp()
  })*/
