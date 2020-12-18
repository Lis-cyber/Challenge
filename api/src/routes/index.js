const server = require("express").Router();
const axios = require("axios");


// Usaremos el siguiente endpoint de Mercado Libre https://api.mercadolibre.com/sites/MLA/search?q={query}. 
// Recibe un queryString con el parámetro q con un string que indica el keyword a buscar. 


// /api/search
server.get("/api/search", (req, res) => {
  const { product } = req.query;

  axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${product}`)
    .then((producto) => {

      console.log("product: ", product);
      console.log("producto: ", producto);


    })
    .catch((err) => {
      console.log(err)
    })
})
 

module.exports = server;



//   {
//     "site_id": "MLA",
//     "query": "iphone",
//     "paging": {},
//     "results": [{
//         "id": "MLA851931164",
//       "site_id": "MLA",
//       "title": "iPhone 11 128 Gb Morado 4 Gb Ram",
//       "seller": {},
//       "price": 182240,
//       ...
//     }],
//     "secondary_results": [
//       ...
//     ],
//     "related_results": [
//         ...
//     ],
//     "sort": {
//       "id": "relevance",
//       "name": "More relevant"
//     },
//     "available_sorts": [],
//     "filters": [],
//     "available_filters": []
//   }