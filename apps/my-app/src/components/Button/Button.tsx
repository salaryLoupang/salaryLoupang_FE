import React from 'react';

import './Button.css'

interface Props {
  shape: 'default' | 'basic' | 'kakao';
  variant: 'priamry';
  size?: 'wide',
  children: React.ReactNode;
  onClick?(): void 
}

const Button: React.FC<Props> = ({ shape = 'default',variant, size, children, onClick }) => {
  return <button type="button" className={`btn ${shape ? shape : '' }-style ${variant ? variant: ''}-style ${size}-size`} onClick={onClick}>{children}</button>;
};

export default Button;