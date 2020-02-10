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

const refrigerator = {
  pizza: 2,
  carrot: 1,
  cheese: 3,
  wine: 4,
  beer: 6,
};

const getRefrigerator = function() {
  alert(Object.values(refrigerator));
};


const IndexPage = () => (

  <Layout>
    <p>
      <button onClick={getFood}>What food?</button>
    </p>
    <p>
      <button onClick={getRefrigerator}>Get refrigerator</button>
    </p>
  </Layout>

);

export default IndexPage
