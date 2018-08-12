import React from 'react';
import Products from "../constants/Products";
import Catalog from './Catalog';

const MainPage = () => (
  <div>
    <Catalog products={Products} />
  </div>
);

export default MainPage;