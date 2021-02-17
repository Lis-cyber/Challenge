<!-- <p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p> -->

# Labs Challenge 

The objective of the challenge was to build a Front-End and a Back-End that interacts with an external API.

We are going to use the public API of **Free Market**. From it we are going to extract publications that we are going to store in our own back-end using a cache. For the front-end we are going to develop a series of React Components to be able to display and interact with the aforementioned publications.

<br>

## 💻 Demo of Working Project

  <img width="500px" src="client/src/Styles/img/picture1.png" alt="picture1" />


<br>
<br>

# 🌱 Back-End

We use the following Mercado Libre endpoint `https://api.mercadolibre.com/sites/MLA/search?q={query}`.
It receives a queryString with parameter `q` with a string indicating the keyword to search for.

### ✔️ `/api/search`

This route receives a queryString with a search term. For example: `/api/search?query=sneakers`, which returns an array of Mercado Libre items.

### 💼 Memory Cache:

In each search request, a cache is created, so that the next search does not use the Mercado Libre API, but the data is retrieved from the cache.

<br>

# 🌴 Front-End

Our App has the following components:

### 🔎 SearchBar

It has a **controlled** form with a search input, which triggers requests to the API (to our BACK-END, not to Mercado Libre).

### 📑 Product Card

In this component a particular product is shown, with the following detail:

- its image.
- its title.
- its price (with currency).
- its condition.
- if it is in stock or not.

### 📁 Catalog

This component will display an array of products (obtained from the API) using Product Card. It also allows:

- Sort products based on price, ascending or descending.
- Filter by condition.
- Page the product results by page.

<br>

# 🚀 Installation

- Fork the repo into your GitHub account or clone it on your PC.

```bash
git clone https://github.com/Lis-cyber/Challenge.git
```

- Then you must install all the dependencies on both, the back and the front end.

```bash
npm install
```

- Finally initialize the App with the following command in both terminals.

```bash
npm start
```
<br>

## 🐙 Contributors
---
<a href="https://github.com/sacunap" target="_blank" rel="noreferrer">
<span>
  <img width="8%" src="client/src/Styles/img/GitHub-Mark-64px.jpg" alt="sixto" />
  <p> Sacunap </p>
</span>
</a>