const mcache = require("memory-cache");

const cache = (duration) => {
  return (req, res, next) => {
    // Se genera una key basada en el req.url para verificar si dicha búsqueda ya se encuentra en el cache.
    let key = "cache" + req.url;
    // De ser encontrada, se guarda en el cachedBody.
    let cachedBody = mcache.get(key); // En la primera entrada, cachedBody = null
    if (cachedBody) {
      // Si la búsqueda es true, devuelve los datos encontrados
      // console.log("soy la key", key)
      // console.log("Soy el cachedBody ", cachedBody)
      res.send(cachedBody);
      return;
    } else {
      // En caso de no encontrar la búsqueda en el caché, la request es procesada normalmente y se guarda en sendResponse para ser actualizada en el cache.
      res.sendResponse = res.send;
      // console.log("no estoy en el cache")
      res.send = (body) => {
        // Duration * 1000 ms -> devuelve en segundos
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };
      // console.log("me acaban de crear", cachedBody)
      // Finalización del ciclo de solicitud-respuesta
      next();
    }
  };
};

module.exports = {
  cache,
};

// Body llega por JSON.stringify() y parse
// Se guarda como JSON.stringify en cachedBody
// Usaremos el siguiente endpoint de Mercado Libre https://api.mercadolibre.com/sites/MLA/search?q={query}.
// Recibe un queryString con el parámetro q con un string que indica el keyword a buscar.
