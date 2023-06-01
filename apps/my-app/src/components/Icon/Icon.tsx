import React from 'react';

import './Icon.css';

interface Props {
  icon: 'string';
  onClick?: () => void;
}

const Icon: React.FC<Props> = ({ icon, onClick }) => {
  return (
    <span className={`icon icon-${icon}`} {...(onClick && { onClick })}></span>
  );
};

export default Icon;
