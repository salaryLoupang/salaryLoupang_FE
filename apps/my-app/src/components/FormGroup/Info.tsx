import React from 'react';

interface Props {
  on: boolean;
  children?: React.ReactNode;
}

const Info = ({ on, children }) => {
  return <div className={`info ${on && 'on'}`}>{on && children}</div>;
};

export default Info;
