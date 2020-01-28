const argv = require('./config/yargs').argv
const apiUbicacion = require('./api/ubicacion')
const apiClima = require('./api/clima')

let ubicacion = argv.ubicacion

const infoClima = async (ubicacion) => {

    try {        
        const coord = await apiUbicacion.ubicar(ubicacion)
        const clima = await apiClima.clima(coord.latitud,coord.longitud)

        return `
            Ciudad: ${coord.ciudad}
            Temperatura: ${clima.temp}°C
            Mayormente: ${clima.principal}
            Descripcion: ${clima.desc}
            ====== Coordanadas ======
            Latitud: ${clima.coord.lat}
            longitud: ${clima.coord.lon}
        `
    } catch (e) {
        return e
    }
}

infoClima(ubicacion)
.then(console.log)
.catch(console.log)
