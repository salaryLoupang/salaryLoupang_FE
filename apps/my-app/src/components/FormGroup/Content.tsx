import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Content: React.FC<Props> = ({ children }) => {
  return <dd>{children}</dd>;
};

export default Content;
