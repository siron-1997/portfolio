const axios = require('axios')

export default async function submitForm(req, res) {
    const API_KEY = process.env.OPEN_WEATHER_API_KEY

    let apiCallPath = ''

    if (req.method === 'POST') {
        const location = req.body

        if (location.lat && location.lon) {
            apiCallPath = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`
        } else {
            apiCallPath = `https://api.openweathermap.org/data/2.5/weather?lat=${35.68944}&lon=${139.69167}&appid=${API_KEY}`
        }

        const weatherResponse = await axios.get(apiCallPath)
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