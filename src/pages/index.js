import React from "react"

import Layout from "../components/layout"


const foodItems = [
  "pizza",
  "hamburger",
  "pickles",
  "gluten-free-waffles"
];

const food = foodItems.find(food => food.startsWith("p"));

const getColor = function() {
  alert(['red', 'orange', 'green'].find(color => color.startsWith('o')));
};

const IndexPage = () => (

  <Layout>

    <h1>{food}</h1>

    <button onClick={getColor}>What color?</button>

  </Layout>

);

export default IndexPage
