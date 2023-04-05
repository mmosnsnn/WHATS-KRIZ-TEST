
const config = require("../config.js")
const gptapikey = config.GPTAPIKEY
const {
  getJson
} = require("../lib")
const Amarok = require("../lib/events")

Amarok.addCMD({
  pattern: "ai ?(.*)",	
  isOwner: false,
  type: 'search',
}, 
async (conn, match) => {
if (!match) return await conn.sendMessage("_need text example ai who is diegoson_");
var api  = await getJson(`https://api-viper-x0.vercel.app/api/openai?openaiapikey=${gptapikey}&text=${match}`)

await conn.reply(api.data.text);

});
