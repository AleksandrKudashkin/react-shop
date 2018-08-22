import React from 'react';

const Image = ({ src, width, height, alt }) => (
  <img src={src} width={width} height={height} alt={alt} />
);

Image.defaultProps = {
  width: 100,
  height: 100,
  alt: 'tea sample'
};

export default Image;
