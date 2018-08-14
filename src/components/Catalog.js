import React, { Fragment } from "react";
import ProductCard from "./ProductCard";
import { map } from "lodash";
import Bucket from "./Bucket";

const Catalog = ({ products }) => {
  return (
    <Fragment>
      <Bucket />
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
