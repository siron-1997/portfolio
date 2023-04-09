const axios = require('axios')

export default async function submitForm(req, res) {
    const API_KEY = process.env.OPEN_WEATHER_API_KEY

    if (req.method === 'POST') {
        const location = req.body
        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`)
        const weatherData = JSON.stringify(weatherResponse?.data)
        res.setHeader('Cache-Control', 'max-age=3600, s-maxage=3600')
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(weatherData)
        console.log(weatherData)
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('error')
    }
}