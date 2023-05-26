import React from 'react';

import './Thumbnail.css';

interface Props {
  children?: React.ReactNode;
}

const Thumbnail: React.FC<Props> = ({ children }) => {
  return <div className="thumbnail">{children}</div>;
};

export default Thumbnail;
