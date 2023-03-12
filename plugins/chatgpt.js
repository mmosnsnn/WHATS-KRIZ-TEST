const config = require('./config.js')
const { Configuration, OpenAIApi } = require('openai')
const keyopenai = config.OPENAI_API_KEY

(async () => {

 try {
    switch (command) {
case 'ai': {
try {   
             if (keyopenai === "ISI_APIKEY_OPENAI_DISINI") m.reply("ᴀᴘɪ ᴋᴇʏ ʜᴀꜱ ɴᴏᴛ ʙᴇᴇɴ ꜰɪʟʟᴇᴅ ɪɴ\n\nᴘʟᴇᴀꜱᴇ ꜰɪʟʟ ɪɴ ᴛʜᴇ ᴀᴘɪᴋᴇʏ ꜰɪʀꜱᴛ ɪɴ ᴛʜᴇ ᴏᴘᴇɴᴀɪ_ᴀᴘɪ_ᴋᴇʏ ᴠᴀʀ\n\nᴛʜᴇ ᴀᴘɪᴋᴇʏ ᴄᴀɴ ʙᴇ ᴍᴀᴅᴇ ᴏɴ ᴛʜᴇ ᴡᴇʙꜱɪᴛᴇ : https://beta.openai.com/account/api-keys");   
             if (!text) return m.reply(`ᴄʜᴀᴛ ᴡɪᴛʜ ᴀɪ.\n\nᴇxᴀᴍᴘʟᴇ:\n${prefix} ${command} ᴡʜᴀᴛ ɪꜱ ʀᴇᴄᴇꜱꜱɪᴏɴ`);   
             const configuration = new Configuration({   
               apiKey: config.OPENAI_API_KEY || "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",
             });   
             const openai = new OpenAIApi(configuration);   
             const response = await openai.createCompletion({  
               model: "text-davinci-003",   
               prompt: text,   
               temperature: 0.3,   
               max_tokens: 3000,   
               top_p: 1.0, 
               frequency_penalty: 0.0,   
               presence_penalty: 0.0,   
             });   
             m.reply(`${response.data.choices[0].text}`);   
           }
break
  }
    } catch (e) {
      console.log(e)
   }
})()
