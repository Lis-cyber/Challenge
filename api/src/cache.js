const mcache = require('memory-cache')

const cache = duration => {
    return (req, res, next) => {
        let key = '__express__' + req.originalUrl || req.url
        let cachedBody = mcache.get(key)
        if(cachedBody){
            console.log("soy la key", key)
            console.log("Soy el cachedBody ", cachedBody)
            res.send(cachedBody)
            return
        }else{
            res.sendResponse = res.send
            console.log("no estoy en el cache")
            console.log("Soy la send response " , res.sendResponse)
            res.send = body => {
                mcache.put(key, body, duration * 1000)
                res.sendResponse(body)
            }
            console.log("me acaban de crear", cachedBody)
            next()
        }
    }
}

module.exports = {
    cache
}


// Trae un JSON por body
// Body llega por JSON.stringify() y parse
// Se guarda como JSON.stringify en cachedBody
// Duration * 1000 ms -> devuelve en segundos
// Usaremos el siguiente endpoint de Mercado Libre https://api.mercadolibre.com/sites/MLA/search?q={query}. 
// Recibe un queryString con el parámetro q con un string que indica el keyword a buscar. 
