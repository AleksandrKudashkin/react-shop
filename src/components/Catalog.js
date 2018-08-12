import React from "react";
import ProductCard from "./ProductCard";
import { map } from "lodash";

const Catalog = ({ products }) => {
  return (
    <div>
      <ul>
        {map(products, (product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
