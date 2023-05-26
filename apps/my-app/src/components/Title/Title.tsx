import React from 'react';

import './Title.css';

interface Props {
  shape: 'default';
  children: React.ReactNode;
}

const Title: React.FC<Props> = ({ shape = 'default', children }) => {
  return (
    <div className={`${shape}-title`}>
      <h1>{children}</h1>
    </div>
  );
};

export default Title;
