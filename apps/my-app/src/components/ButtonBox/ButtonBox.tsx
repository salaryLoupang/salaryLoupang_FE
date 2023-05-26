import React from 'react';

import './ButtonBox.css';

interface Props {
  children: React.ReactNode;
}

const ButtonBox = ({ children }) => {
  return <div className="btn-box">{children}</div>;
};

export default ButtonBox;
