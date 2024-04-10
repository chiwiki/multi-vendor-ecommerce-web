import React, { useEffect, useState } from "react";
import style from "../../styles/style";
import { ProductCard } from "../../components";
import { productData } from "../../static/data";

const BestDeals = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const d =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);
    const firstFive = d.slice(0, 5);
    setData(firstFive);
  }, []);
  return (
    <div>
      <div className={`${style.section} `}>
        <div className={`${style.heading}`}>
          <h1>Best Deals</h1>
        </div>
        <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:gap-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
          {data && data.map((i, index) => <ProductCard key={index} data={i} />)}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
