import React from "react"

import Layout from "../components/layout"


const getFood = function() {
  alert([
    "pizza",
    "hamburger",
    "pickles",
    "gluten-free-waffles"
  ].find(food => food.startsWith('p')));
};

const IndexPage = () => (

  <Layout>
    <p>
      <button onClick={getFood}>What food?</button>
    </p>
  </Layout>

);

export default IndexPage
