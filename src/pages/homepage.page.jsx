import React from "react";
import { Header } from "../components/Layout";
import { BestDeals, Categories, Hero } from "../components/Route";

const Homepage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
    </div>
  );
};

export default Homepage;
