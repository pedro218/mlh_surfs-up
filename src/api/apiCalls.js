import axios from 'axios'

const KEY = '88d2f89aded6927c2ff1b5106766f255'

export const getBeaches = async () => {
  const response = await axios.get('https://api.coastal.ca.gov/access/v1/locations')
  return response.data
}

export const getWeather = async (lat, lon) =>{
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=Imperial&appid=${KEY}`)
  return response.data
}