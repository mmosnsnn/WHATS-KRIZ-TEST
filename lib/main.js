class Bot {
  constructor(x) {
    for (let v in x) {
      this[v] = x[v]
    }
  }

  async serializeM(m) {
    return exports.serialize(this, m)
  }

  parseMention(text) {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
  }
  
  /**
   * 
   * @param {*} id 
   * @param {*} text 
   * @param {*} quoted 
   * @param {*} options 
   */
  
    //console.log(JSON.stringify(m, undefined, 2))

   // console.log('replying to', m.messages[0].key.remoteJid)
    


  
  async sendText(id, text, quoted = {}, options = {}) {
    this.sendMessage(id, { text, ...options }, { quoted, ...options })
  }



  /**
   * 
   * @param {*} message 
   * @param {*} fileName 
   * @returns 
   */
  async downloadMediaMessage(message, fileName) {
    message = message?.msg ? message?.msg : message
    let mimetype = (message.msg || message).mimetype || ''
    let mtype = message.type ? message.type.replace(/Message/gi, "") : mimetype.split("/")[0]
    const stream = await downloadContentFromMessage(message, mtype)
    let buffer = Buffer.from([])
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
    }

    if (fileName) {
      let ftype = await FileType.fromBuffer(buffer)
      let trueFileName = fileName ? (fileName + "." + ftype.ext || mimetype.split("/")[1]) : getRandom(ftype.ext || mimetype.split("/")[1])
      return fs.writeFileSync(trueFileName, buffer)
    } else {
      return buffer
    }
  }

  /**
   * 
   * @param {*} message 
   * @param {*} fileName 
   * @param {*} attachExtension 
   * @returns 
   */
  async downloadAndSaveMediaMessage(message, filename, attachExtension = true) {
    let quoted = message.msg ? message.msg : message
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(quoted, messageType)
    let buffer = Buffer.from([])
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
    }
    let type = await FileType.fromBuffer(buffer)
    let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
    // save to file
    await fs.writeFileSync(trueFileName, buffer)
    return trueFileName
  }

  /**
   * 
   * @param {*} PATH 
   * @param {*} save 
   * @returns 
   */
  async getFile(PATH, save) {
    let filename
    let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await fetchBuffer(PATH) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
    let type = await FileType.fromBuffer(data) || {
      mime: 'application/octet-stream',
      ext: '.bin'
    }
    filename = path.join(__dirname, '../temp/' + new Date * 1 + '.' + type.ext)
    if (data && save) fs.promises.writeFile(filename, data)
    return {
      filename,
      size: await Buffer.byteLength(data),
      ...type,
      data
    }
  }


        async forward(jid, message, options = {}) {
    let m = generateWAMessageFromContent(jid, message, {
      ...options,
      userJid: this.user.id,
    });
    await this.relayMessage(jid, message.message, {
      messageId: message.key.id,
      ...options,
    });
    return message;
  }
  /**
   * 
   * @param {*} code
   * @returns 
   */
  async groupQueryInvite(code) {
    let result = await this.query({
      tag: "iq",
      attrs: {
        type: "get",
        xmlns: "w:g2",
        to: "@g.us"
      },
      content: [{ tag: "invite", attrs: { code } }]
    })
    let group = getBinaryNodeChild(result, "group")
    let descRes = getBinaryNodeChild(group, "description")
    let desc, descId, descOwner, descTime
    if (descRes) {
      desc = getBinaryNodeChild(descRes, "body")?.content?.toString(),
        descId = descRes?.attrs?.id,
        descOwner = descRes?.attrs?.participant,
        descTime = descRes?.attrs?.t
    }
    const hasil = {
      id: group?.attrs?.id.includes("@") ? group?.attrs?.id : group?.attrs?.id + "@g.us",
      owner: group?.attrs?.creator,
      subject: group?.attrs?.subject,
      subjectOwner: group?.attrs?.s_o,
      subjectTime: group?.attrs?.s_t,
      size: group?.attrs?.size,
      creation: group?.attrs?.creation,
      participants: group?.content?.filter(v => v.tag == "participant").map(v => v.attrs),
      desc,
      descId,
      descOwner,
      descTime
    }

    return hasil
  }
}
exports.Bot = Bot