import React from 'react';

import './List.css';

import Item from './Item';

interface Props {
  shape: 'default';
  children: React.ReactNode;
}

const List: React.FC<Props> & {
  Item: React.ReactNode,
} = ({ shape, children }) => {
  return <ul className={`list ${shape}-style`}>{children}</ul>;
};

List.Item = Item;

export default List;
