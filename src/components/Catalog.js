import React, { Fragment } from "react";
import ProductCard from "./ProductCard";
import { map } from "lodash";
import Cart from "./Cart";

const Catalog = ({ products }) => {
  return (
    <Fragment>
      <Cart />
      <ul>
        {map(products, (product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default Catalog;
