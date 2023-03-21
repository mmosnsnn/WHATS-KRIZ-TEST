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
    var txt = tiny(`Hey👀 ${pushname}\nYoutube Search🔍\n\n🧩Search Term : ${args.join(
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
let sections = [];
for (let k of search.all) {
const list = [{
title: tiny(`Download Video`),
rowId: `ytmp4 ${k.url}`,
description: tiny(' ')
},
{
title: tiny(`Download Audio`),
rowId: `ytmp3 ${k.url}`,
description: tiny(' ')
},
{
title: tiny(`Download Audio Document`),
rowId: `${prefix}ytmp3doc ${k.url}`,
description: tiny(' ')
},
{
title: tiny(`Download Video Document`),
rowId: `${prefix}ytmp4doc ${k.url}`,
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
}
sections.push(list)
let msg = tiny(`Yotube Downloader⏯️\n\n👤Requested by : ${pushname}\n\n▶️Requested topic : ${teks}`)
let buttonMessage = {
text: msg,
footer: `WʜᴀᴛꜱKʀɪᴢ Aɪ`,
buttonText: "Dᴏᴡɴʟᴏᴀᴅ ɴᴏᴡ",
sections,
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
