const server = require("express").Router();
const axios = require("axios");


// Usaremos el siguiente endpoint de Mercado Libre https://api.mercadolibre.com/sites/MLA/search?q={query}. 
// Recibe un queryString con el parámetro q con un string que indica el keyword a buscar. 

// /api/search
server.get("/api/search", (req, res) => {
  const product = req.query.q;

  axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${product}`)
  
  .then((product) => {
    const result = product.data.results;
    if(result.length > 0) {
      let products = result.map((product) => {
        return {
          id : product.id,
          title : product.title,
          price : product.price,
          currency_id : product.currency_id,
          available_quantity : product.available_quantity,
          thumbnail : product.thumbnail,      
          condition : product.condition
        }
      })
      res.status(200).send(products);

    } else {
      throw "Product not found."
    }
    })
    .catch((err) =>{
      res.status(404).send(err);
    })

    
});



  
module.exports = server;