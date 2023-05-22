import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Button: React.FC<Props> = props => {
  const { children } = props;

  return <button>{children}</button>;
};

export default Button;
