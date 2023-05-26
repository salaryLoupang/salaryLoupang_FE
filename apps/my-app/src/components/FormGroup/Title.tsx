import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Title: React.FC<Props> = ({ children }) => {
  return <dt>{children}</dt>;
};

export default Title;
