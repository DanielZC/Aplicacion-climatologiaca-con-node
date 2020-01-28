const axios = require('axios')

const clima = async (lat,lon) => {
    
    const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7d773fcfae8374ebec58ec1ff43c954c&lang=es&units=metric`)
    const temp = res.data.main.temp
    const desc = res.data.weather[0].description
    const principal = res.data.weather[0].main
    const coord = res.data.coord

    return {
        temp,
        desc,
        principal,
        coord
    }
}

module.exports = {
    clima
}