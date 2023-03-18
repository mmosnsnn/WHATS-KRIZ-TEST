(async () => {
 
  try{
	switch (command) {
case `${p}`+'add': {
if (!teks) await m.reply(`_Give a number to add!_`)
if (!m.isGroup) await m.reply(`_This command is only for use in groups!_`)
if (!isBotAdmins) await m.reply(`_I'm not admin!_`)
let users = m.quoted ? m.quoted.sender : teks.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await x.groupParticipantsUpdate(m.chat, [users], 'add')
await m.reply(`@${users.split('@')[0]} added to this group!`)
}
break
case `${p}`+'kick': {
if (!teks) await m.reply(`_Give a user to kick!_`)
if (!m.isGroup) await m.reply(`_This command is only for use in groups!_`)
if (!isBotAdmins) await m.reply(`_I'm not admin!_`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : teks.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await x.groupParticipantsUpdate(m.chat, [users], 'remove')
await m.reply(`@${users.split('@')[0]} kicked out from this group!`)
}
break
case `${p}`+'promote': {
if (!teks) await m.reply(`_Give a user to promote!_`)
if (!m.isGroup) await m.reply(`_This command is only for use in groups!_`)
if (!isBotAdmins) await m.reply(`_I'm not admin!_`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : teks.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await x.groupParticipantsUpdate(m.chat, [users], 'promote')
await m.reply(`@${users.split('@')[0]} promoted as admin!`)
}
break
case `${p}`+'demote': {
if (!teks) await m.reply(`_Give a user to demote!_`)
if (!m.isGroup) await m.reply(`_This command is only for use in groups!_`)
if (!isBotAdmins) await m.reply(`_I'm not admin!_`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : teks.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await x.groupParticipantsUpdate(m.chat, [users], 'demote')
m.reply(`@${users.split('@')[0]} demoted as member!`)
}
break
case `${p}`+'tagall': {
if (!m.isGroup) await m.reply(`_This command is only for use in groups!_`)
if (!isAdmins) await m.reply(`_This command only can use group admins and bot owners!_`)
let tmsg = `╭─────❮ᴛᴀɢᴀʟʟ❯──────✱`;
let count `│🪀✱:`;
for (let mem of participants) {
tmsg += `${count} @${mem.id.split('@')[0]}\n`;
}
tmsg += `╰─────────────────✱`;
x.sendMessage(m.chat, { text : tmsg, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case `${p}`+'tag': {
if (!teks) await m.reply(`_Example : .tag hello_\n_Or_\n_Reply to a text .tag!_`)
if (!m.isGroup) await m.reply(`_This command is only for use in groups!_`)
if (!isAdmins) await m.reply(`_This command only can use group admins and bot owners!_`)
x.sendMessage(m.chat, { text : teks, mentions: participants.map(a => a.id)}, { quoted: m })
}
break
}
    } catch (e) {
      console.log(e)
   }
})()
