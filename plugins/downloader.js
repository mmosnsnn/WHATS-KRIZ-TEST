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
        title: tiny(`Result: ${num++}`),
        rows: [
          {
            title: tiny(`${i.title}`),
            rowId: `ytmp3 ${i.url}`,
            description: tiny(`Duration: ${i.timestamp}`),
          },
        ],
      };
      sections.push(list);
    }
    var txt = tiny(`User: ${pushname}\n\nYoutube Search🔍\n\n🧩Search Term : ${args.join(
      " "
    )}\n\n📌 Total Results : ${search.all.length}\n`);

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
if (!teks) await m.reply(`_Need a topic!._`)
let search = await yts(teks)
let anu = search.videos[0];
let list = [{
title: tiny(`Download Video`),
rowId: `ytmp4 ${anu.url}`,
description: tiny(' ')
},
{
title: tiny(`Download Audio`),
rowId: `ytmp3 ${anu.url}`,
description: tiny(' ')
},
{
title: tiny(`Download Audio Document`),
rowId: `ytmp3doc ${anu.url}`,
description: tiny(' ')
},
{
title: tiny(`Download Video Document`),
rowId: `$ytmp4doc ${anu.url}`,
description: tiny(' ')
},
{
title: tiny(`Search More Videos`),
rowId: `ytvs ${teks}`,
description: ' '
},
{
title: tiny(`Search More Audios`),
rowId: `ytas ${teks}`,
description: ' '
}]
let msg = tiny(`${anu.title}`)
let sections  = [{
title: "Dᴏᴡɴʟᴏᴀᴅ ɴᴏᴡ",
rows: list
}]
let buttonMessage = {
text: msg,
footer: config.FOOTER,
title: ``,
buttonText: "Dᴏᴡɴʟᴏᴀᴅ ɴᴏᴡ",
sections
}
return x.sendMessage(m.chat, buttonMessage, { quoted: m })
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
case `${p}`+'yts': {
      if (!args[0])
      return x.sendMessage(
        m.chat,
        { text: `_Please provide a name!_` },
        { quoted: m }
      );
    let search = await yts(text);
    let num = 1;
    let sections = [];
    for (let i of search.all) {
      const list = {
        title: tiny(`Result: ${num++}`),
        rows: [
          {
            title: tiny(`Tɪᴛʟᴇ: ${i.title}`),
            rowId: `🗿`,
            description: `Vɪᴇᴡꜱ: ${i.views}\nAᴜᴛʜᴏʀ: ${i.author.name}\nDᴜʀᴀᴛɪᴏɴ: ${i.timestamp}\nVɪᴅᴇᴏ ᴜʀʟ: ${i.url}`,
          },
        ],
      };
      sections.push(list);
    }
    var txt = tiny(`Youtube Search🔍\n\n👤Requested By: ${pushname}\n\n🔎Search Topic : ${args.join(
      " "
    )}\n\n Total Results : ${search.all.length}\n`);

    let buttonMessage = {
      text: txt,
      footer: `WʜᴀᴛꜱKʀɪᴢ Aɪ`,
      buttonText: "Sᴇʟᴇᴄᴛ",
      sections,
    };

  x.sendMessage(m.chat, buttonMessage, { quoted: m });
  }
            break
case `${p}`+'ytmp3doc': {
if (!text) await m.reply(`_Send youtube video link!_`)
let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks2) return m.reply(`_Invalid link!_`)
anu = await ytMp4(`${q}`)
m.reply(`_${anu.title} song is downloading...!_`)
x.sendMessage(m.chat, { document: { url: anu.result }, fileName: anu.title, mimetype: 'audio/mpeg',
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
case `${p}`+'ytmp4doc': {
await m.reply(`_Sorry currently this feature is not work._\n_Don't worry it will be coming soon._`)
}
break
case `${p}`+'ytvs': {
await m.reply(`_Sorry currently this feature is not work._\n_Don't worry it will be coming soon._`)
}
break
case `${p}`+'ytas': {
await m.reply(`_Sorry currently this feature is not work._\n_Don't worry it will be coming soon._`)
}
break
}
    } catch (e) {
      console.log(e)
   }
})()
