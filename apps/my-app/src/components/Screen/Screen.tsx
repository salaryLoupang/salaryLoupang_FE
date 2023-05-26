import React from 'react';

import './Screen.css';

import Item from './Item';
import Box from './Box';

interface Props {
  children: React.ReactNode;
}

const Screen: React.FC<Props> & {
  Item: React.ReactNode,
  Box: React.ReactNode,
} = ({ children }) => {
  return <div className="screen">{children}</div>;
};

Screen.Item = Item;
Screen.Box = Box;

export default Screen;
