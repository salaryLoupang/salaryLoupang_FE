import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Box: React.FC<Props> = ({ children }) => {
  return <div className="screen-box">{children}</div>;
};

export default Box;
