(async () => {
 
  try{
	switch (command) {
case `${p}`+'weather':{
if(!args[0]) await m.reply(`_Please provide place or location name._`)
try{
let response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
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
}
    } catch (e) {
      console.log(e)
   }
})()
