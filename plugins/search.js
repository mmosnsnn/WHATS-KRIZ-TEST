(async () => {
 
  try{
	switch (command) {
case `${p}`+'weather':{
if(!teks) await m.reply(`_Please provide place or location name._`)
try{
let response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${teks}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
let res = await response
let name = res.data.name
let Country = res.data.sys.country
let Weather = res.data.weather[0].description
let Temperature = res.data.main.temp + '°C'
let Minimum_Temperature = res.data.main.temp_min + '°C'
let Maximum_Temperature = res.data.main.temp_max + '°C'
let Humidity= res.data.main.humidity + '%'
let Wind= res.data.wind.speed + 'km/h'
m.reply(`🌍Place: ${name}\n🗾Country: ${Country}\n🌁Weather: ${Weather}\n🌡️Temperature: ${Temperature}\n🤒Minimum Temperature: ${Minimum_Temperature}\n📛Maximum Temperature: ${Maximum_Temperature}\n🥵Humidity: ${Humidity}\n🥶Wind: ${Wind}`)
}catch(e){
m.reply('_Location not found, please enter country name._')
 }
 }
break
case `${p}`+'true': {
if (!teks && !args[0]) await m.reply(`_Mention any user or give a number like 91xxxxxxxxx_`)
const kriztrue = await fetchJson(`https://outrageous-fish-dress.cyclic.app/api/other/truecaller?number=${args[0]}`)
const tmsg = tiny(`╭╼━━⌜Number Info⌟━━╾✵
╽Name : ${kriztrue.data.data[0].name}
┃Score : ${kriztrue.data.data[0].score}
┃Access : ${kriztrue.data.data[0].access}
┃Career : ${kriztrue.data.data[0].phones[0].carrier}
┃Dialing Code : ${kriztrue.data.data[0].phones[0].dialingCode}
┃Country : ${kriztrue.data.data[0].phones[0].countryCode}
┃City : ${kriztrue.data.data[0].phones[0].city}
┃Type : ${kriztrue.data.data[0].phones[0].type}
╿Time Zone : ${kriztrue.data.data[0].addresses[0].timeZone}
╰╼━━━━━━━━━━━━╾✵`)
await m.reply(tmsg)
}
break
}
    } catch (e) {
      console.log(e)
   }
})()
