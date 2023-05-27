import React from 'react';

interface Props {
  on: boolean;
  children: React.ReactNode;
}

const Box: React.FC<Props> = ({ on, children }) => {
  return <div className={`screen-box ${on ? 'on' : ''}`}>{children}</div>;
};

export default Box;
