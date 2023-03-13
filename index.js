const { DisconnectReason, useMultiFileAuthState, makeInMemoryStore, jidDecode , BufferJSON, default: makeWASocket } = require('@adiwajshing/baileys');
const { Boom } = require("@hapi/boom");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
console.log("starting...");
const P = require("pino")
const { MakeSession } = require("./lib/session");
const fetch = require("node-fetch");
const fs = require("fs");
const {smsg} = require("./lib/function")
const store = makeInMemoryStore({});
const {multiauthState} = require("./lib/multiauth");

  
/*async function Singmulti() {
  
  if (!fs.existsSync(__dirname + "/session.json"))
    await MakeSession("REZBNV_XASENA_V_XASENA_yTTg=", __dirname + "/session.json").then(async() => { 
     const { state } = useMultiFileAuthState(__dirname + "/auth_info_baileys");
      await sleep(40000)
  await multiauthState("session.json", __dirname + "/auth_info_baileys", state);
  })
}
Singmulti()*/

async function Singmulti() {
  if (!fs.existsSync(__dirname + "/session.json"))
    await MakeSession("UDd1cHV_XASENA_lcnU=", __dirname + "/session.json");
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
  console.log("Connected ✓")
  }

    if (connection === 'close') {
      let reason = new Boom(lastDisconnect.error).output.statusCode;
      if (reason === DisconnectReason.badSession) {
        console.log(`ᴜʜ ᴏʜ ꜱᴇꜱꜱɪᴏɴ ᴇʀʀᴏʀ ᴘʟᴇᴀꜱᴇ ʀᴇꜱᴄᴀɴ ᴀɴᴅ ᴛʀʏ`)
        x.logout()
      } else if (reason === DisconnectReason.connectionClosed) {
        console.log("ʀᴇᴄᴏɴɴᴇᴄᴛɪɴɢ ...")
        connectToWhatsApp()
      } else if (reason === DisconnectReason.connectionLost) {
        console.log("ᴄᴏɴɴᴇᴄᴛɪᴏɴ ʟᴏꜱᴛ  ʀᴇᴛʀʏɪɴɢ...")
        connectToWhatsApp()
      } else if (reason === DisconnectReason.connectionReplaced) {
        console.log("ᴄᴏɴɴᴇᴄᴛɪᴏɴ ʀᴇᴘʟᴀᴄᴇᴅ")
        x.logout()
      } else if (reason === DisconnectReason.loggedOut) {
        console.log(`ᴄᴏɴɴᴇᴄᴛɪᴏɴ ʟᴏꜱᴛ ᴅᴇᴠɪᴄᴇ ʟᴏɢɢᴇᴅ ᴏᴜᴛ`)
        x.logout()
      } else if (reason === DisconnectReason.restartRequired) {
        console.log("ʀᴇꜱᴛᴀʀᴛ ʀᴇQᴜɪʀᴇᴅ")
        console.log("ʀᴇꜱᴛᴀʀᴛɪɴɢ ...")
        connectToWhatsApp()
      } else if (reason === DisconnectReason.timedOut) {
        console.log("ᴄᴏɴɴᴇᴄᴛɪᴏɴ ᴛɪᴍᴇᴅᴏᴜᴛ ʀᴇᴛʀʏɪɴɢ ...")
        connectToWhatsApp()
      } else {
        x.end(`ᴄᴏɴɴᴇᴄᴛɪᴏɴ ꜱᴛᴏᴘᴘᴇᴅ : ${reason}|${lastDisconnect.error}`)
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
  //x.ev.on('creds.update', saveCreds)
x.sendText = (jid, text, quoted = '', options) => x.sendMessage(jid, { text: text, ...options }, { quoted, ...options })



                                                                                                  

    


}
  connectToWhatsApp()
  
  }, 4000)
// run in main file
/*sleep(6000).then(() => {
connectToWhatsApp()
  })*/
