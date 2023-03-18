(async () => {
 
  try{
	switch (command) {
		case `${p}`+'song': {
      if (!args[0])
      return x.sendMessage(
        m.chat,
        { text: `_Please provide a song name!_` },
        { quoted: m }
      );
    let search = await yts(text);
    let num = 1;
    let sections = [];
    for (let i of search.all) {
      const list = {
        title: `Rᴇsᴜʟᴛ: ${num++}`,
        rows: [
          {
            title: `${i.title}`,
            rowId: `ytmp3 ${i.url}`,
            description: `Dᴜʀᴀᴛɪᴏɴ: ${i.timestamp}`,
          },
        ],
      };
      sections.push(list);
    }
    var txt = `Hᴇʏ👀 ${pushname}\nYᴏᴜᴛᴜʙᴇ Sᴇᴀʀᴄʜ🔍\n\n🧩Sᴇᴀʀᴄʜ Tᴇʀᴍ : ${args.join(
      " "
    )}\n\n📌 Tᴏᴛᴀʟ Rᴇsᴜʟᴛs : ${search.all.length}\n`;

    let buttonMessage = {
      text: txt,
      footer: `WʜᴀᴛꜱKʀɪᴢ Aɪ`,
      buttonText: "Sᴇʟᴇᴄᴛ ᴀ Sᴏɴɢ:)",
      sections,
    };

  x.sendMessage(m.chat, buttonMessage, { quoted: m });
  }
            break
case `${p}`+'play': {
		if (!text) await m.reply('_sᴏɴɢ xxxᴛᴇɴᴀᴄᴛɪᴏɴ ʜᴏᴘᴇ_')
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'ᴀᴜᴅɪᴏ🎵'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'ᴠɪᴅᴇᴏ▶️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
ᴛɪᴛʟᴇ : ${anu.title}
ᴅᴜʀᴀᴛɪᴏɴ : ${anu.timestamp}
ᴠɪᴇᴡᴇʀꜱ : ${anu.views}
ᴜᴘʟᴏᴀᴅ ᴀᴛ : ${anu.ago}
ᴀᴜᴛʜᴏʀ : ${anu.author.name}
ᴄʜᴀɴɴᴇʟ : ${anu.author.url}
ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ${anu.description}
ᴠɪᴅᴇᴏ ᴜʀʟ : ${anu.url}`,
                    footer: 'ᴡʜᴀᴛꜱ-ᴋʀɪᴢ-ᴀɪ',
                    buttons: buttons,
                    headerType: 4
                }
                x.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case `${p}`+'ytmp3': {
if (!text) await m.reply(`_Send youtube video link!_`)
let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks2) return m.reply(`_Invalid link!_`)
anu = await ytMp4(`${q}`)
m.reply(`_${anu.title} song is downloading...!_`)
x.sendMessage(m.chat, { audio: { url: anu.result }, mimetype: 'audio/mpeg',
    contextInfo:{
        externalAdReply:{
            title: 'ᴡʜᴀᴛꜱ-ᴋʀɪᴢ-ᴀɪ',
            body: pushname,
            thumbnail: await fetchBuffer(anu.thumb),
            mediaType:2,
            mediaUrl: text,
            sourceUrl: text,
            showAdAttribution: true
        }

    },
},{quoted:m})
}
break
case `${p}`+'ytmp4': {
if (!text) await m.reply(`_Send youtube video link!_`)
let isLinks= args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return m.reply(`_Invalid link!_`)
anu = await ytMp4(`${q}`)
m.reply(`_${anu.title} video is downloading..._`)
x.sendMessage(m.chat, { video: { url: anu.result }, mimetype: 'video/mp4',
    contextInfo:{
        externalAdReply:{
            title: 'ᴡʜᴀᴛꜱ-ᴋʀɪᴢ-ᴀɪ',
            body: pushname,
            thumbnail: await fetchBuffer(anu.thumb),
            mediaType:2,
            mediaUrl: text,
            sourceUrl: text,
            showAdAttribution: true
        }

    },
},{quoted:m})
}
break
case `${p}`+'insta': {
if (!link) await m.reply('_Need insta url!_')
let response = await fetchJson(`https://api-viper-x0.vercel.app/api/insta?url=${link}`)
x.sendMessage(m.chat, { video: { url: response.media.url }, fileName: 'ig.mp4', mimetype: 'video/mp4' }, { quoted: m })
}
break
}
    } catch (e) {
      console.log(e)
   }
})()
