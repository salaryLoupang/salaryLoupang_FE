import React from 'react';

interface Props {
  icon?: string;
  children: React.ReactNode;
}

const Item: React.FC<Props> = ({ icon, children }) => {
  return <li className={`${icon ? `icon-${icon}` : ''}`}>{children}</li>;
};

export default Item;
