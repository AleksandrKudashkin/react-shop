import React from 'react';
import Image from './Image';
import Products from './constants/Products';

const MainPage = () => (
  <Image src={Products[0].imageUrl} width="570" height="427" alt="The tea" />
);

export default MainPage;