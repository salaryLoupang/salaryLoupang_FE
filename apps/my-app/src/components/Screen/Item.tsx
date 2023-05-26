import React from 'react';

interface Props {
  left?: React.ReactNode;
  right?: React.ReactNode;
}

const Item: React.FC<Props> = ({ left, right }) => {
  return (
    <div className="screen-item">
      {left && <div className="item-left">{left}</div>}
      {right && <div className="item-right">{right}</div>}
    </div>
  );
};

export default Item;
