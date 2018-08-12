import React from 'react';
import Image from './Image';
import Products from '../constants/Products';
import TextBox from './TextBox';

const MainPage = () => (
  <div>
    <p>
      <TextBox text="Sample tea" />
    </p>
    <Image src={Products[0].imageUrl} width="570" height="427" alt="The tea" />
  </div>
);

export default MainPage;