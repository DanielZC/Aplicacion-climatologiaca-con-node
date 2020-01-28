const axios = require('axios')

const ubicar = async (ubicacion) => {

    let UrlParam = encodeURI(ubicacion)
    const apiConnect = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${UrlParam}`,
        timeout: 1000,
        headers: {'x-rapidapi-key': '3c7f648106msh61de1fdbe9a1396p1f4e35jsn73125b0444e5'}
    })

    let result = await apiConnect.get()
    
    if(result.data.Results.length === 0){
        throw new Error(`No se han encontrado resultados para ${ubicacion}`)
    }
    
    let data = result.data.Results[0]
    const ciudad = data.name
    const latitud = data.lat
    const longitud = data.lon
    return {
        ciudad,
        latitud,
        longitud
    }
}

module.exports = {
    ubicar
}
