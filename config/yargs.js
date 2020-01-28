const argv = require('yargs').option({
    ubicacion:{
        alias: 'u',
        desc: 'Busca el sitio por medio del nombre proporcionado por el usuario',
        demand:true
    }
})
.help()
.argv

module.exports = {
    argv
}