// Se guarda en una constante server para utilizarse directamente con las rutas
const server = require("express").Router();
const axios = require("axios"); // Se requiere axios para hacer las llamadas a la api
const { cache } = require('../cache');

// Usaremos el siguiente endpoint de Mercado Libre https://api.mercadolibre.com/sites/MLA/search?q={query}.
// Recibe un queryString con el parámetro q con un string que indica el keyword a buscar.

// Se crea la ruta /api/search, que utilizará el front para hacer la conexión. Una petición GET.
// /api/search
server.get("/api/search", cache(20), (req, res) => {
  // Se guarda en una constante product el valor que llega por query
  const product = req.query.q;
  // Esta constante se crea debido a que las imagenes obtenidas de mercadolibre vienen en una resolución pequeña
  // cuando tienen el formato https://http2.mlstatic.com/D_916062-MLA43654417337_102020-I.jpg, y al 
  // cambiar el -I. por -O. se ven en mejor resolución cuando se agrandan.
  const regex = /-I./;

  // Se realiza la petición GET a axios para obtener los datos de la API de mercadolibre, a través de un query.
  axios
    .get(`https://api.mercadolibre.com/sites/MLA/search?q=${product}`)

    .then((product) => {
      // Esta constante trae todos los resultados que se obtienen de la API, pero no se necesitan todos, solo
      // los que son llamados más abajo.
      const result = product.data.results;
      // Este condicional se utiliza como validación, si el input del usuario trae resultados, se muestran.
      if (result.length > 0) {
        let products = result.map((product) => {
          return {
            // Aca se muestran todas las variables que se necesitan para mostrar en front.
            id: product.id,
            title: product.title, // Este es el nombre del producto
            price: product.price, // Este es el precio del producto
            currency_id: product.currency_id, // Esto es la moneda del producto, ejemplo ARS
            available_quantity: product.available_quantity, // Esto es la cantidad disponible para comprar del producto
            thumbnail: product.thumbnail.replace(regex, "-O."), // Esto es la imagen del producto, acá se hace el reemplazo de -I. por -O
            condition: product.condition, // Esta es la condición del producto, ya sea nuevo o usado
            permalink : product.permalink // Este es el link del producto, que redirige a mercadolibre
          };
        });
        // Por lo cual, si la promesa fue resuelta, envía un status 200, y envía el producto.
        res.status(200).send(products);
      } 
      // Si fue rechazada, arroja un error, que el producto no fue encontrado.
      else {
        throw "Product not found.";
      }
    })
    // Aquí se captura el error, enviando un status 404, y mostrando el error.
    .catch((err) => {
      res.status(404).send(err);
    });
});

// Principal Categories --->
server.get("/api/categories", cache(20), (req, res) => {
  
  axios.get('https://api.mercadolibre.com/sites/MLA/categories')
  .then(({data}) => {
    res.status(200).send(data)
  }
  )
  .catch((err) =>{
    res.status(404).send(err);
  })
});

// Secundary Categories -->
server.get("/api/categories/:id", cache(20), (req, res) => {
  const id = req.params.id;
  axios.get(`https://api.mercadolibre.com/categories/${id}`)
  .then((id) => {
    // /sites/MLA/search?category=
    const category = id.data.children_categories;
    console.log("Soy permalink ", id.data.permalink)
    res.status(200).send(category);
  })
  .catch((err) =>{
    res.status(404).send(err);
  })
});

  
module.exports = server;


