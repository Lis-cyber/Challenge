const server = require("express").Router();
const axios = require("axios");
const { cache } = require('../cache');

// Search -->
server.get("/api/search", cache(60), (req, res) => {
  const product = req.query.q;
  const regex = /-I./;

  axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${product}`)
  
  .then((product) => {
    const result = product.data.results;
    
    if(result.length > 0) {
      let products = result.map((product) => {
        return {
          id : product.id,
          title : product.title,
          price : Math.round(product.price),
          currency_id : product.currency_id,
          available_quantity : product.available_quantity,
          thumbnail : product.thumbnail.replace(regex, "-O."),      
          condition : product.condition,
          address : product.address.state_name,
          category : product.category_id,
          permalink : product.permalink
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