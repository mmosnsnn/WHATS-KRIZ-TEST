const { tiny } = require('./db/fancy.js')

const allmenu = tiny(`
1)Menu
Use : Show all commands.
2)Ai
Use : Artificial Intelligence give a question ai will give definition.
3)Mp3
Use : Converters to mp3 format.
4)Qc
Use : Give a text it will convert to text sticker.
5)Sticker
Use : Image/Video convert to sticker.
6)Take
Use : It will change packname and author name.
7)Photo
Use : It will convert sticker to image.
8)Tts
Use : Give a text it will convert to audio.
9)Song
Use : Song downloader.
10)Play
Use : Song downloader.
11)Ytmp3
Use : Song downloader with youtube link.
12)Ytmp4
Use : Video downloader with youtube link.
`)
module.exports = {
allmenu }
