import React from 'react';

import './Text.css';

interface Props {
  color?: 'priamry' | 'text';
  children: React.ReactNode;
}

const Text: React.FC<Props> = ({ children }) => {
  return <span className={`text ${color}-color`}>{children}</span>;
};

export default Text;
