import React from 'react';

import './Button.css'

interface Props {
  shape: 'default' | 'basic' | 'kakao';
  variant: 'priamry';
  size?: 'wide';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?:boolean;
  children: React.ReactNode;
  onClick?(): void 
}

const Button: React.FC<Props> = ({ 
  shape = 'default', variant, size, iconLeft, iconRight, disabled, children, onClick,
}) => {
  return (
    <button 
      type="button" 
      className={`btn ${shape ? shape : '' }-style ${variant ? variant: ''}-style ${size}-size`} 
      onClick={onClick}
      {...(disabled && { disabled })} 
    >
      {
        iconLeft && <span className="icon-left">{iconLeft}</span>
      }
      {children}
      {
        iconRight && <span className="icon-right">{iconRight}</span>
      }
    </button>
  );
};

export default Button;