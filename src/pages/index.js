import React from "react"

import Layout from "../components/layout"


const foodItems = [
  "pizza",
  "hamburger",
  "pickles",
  "gluten-free-waffles"
];

const food = foodItems.find(food => food.startsWith("p"));

const getFood = function() {
  alert(food);
};

const IndexPage = () => (

  <Layout>

    <h1>{food}</h1>

    <button onClick={getFood}>What food?</button>

  </Layout>

);

export default IndexPage
