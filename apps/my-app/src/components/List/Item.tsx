import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Item: React.FC<Props> = ({ children }) => {
  return <li>{children}</li>;
};

export default Item;
