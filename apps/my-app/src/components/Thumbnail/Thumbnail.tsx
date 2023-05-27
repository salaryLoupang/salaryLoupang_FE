import React from 'react';

import './Thumbnail.css';

interface Props {
  on: boolean;
  title: React.ReactNode;
  children?: React.ReactNode;
  onClick(): void;
}

const Thumbnail: React.FC<Props> = ({ on, title, children, onClick }) => {
  return (
    <div
      className={`thumbnail ${on ? 'on' : ''}`}
      onClick={() => {
        onClick();
      }}
    >
      <div className="thumbnail-img">{children}</div>
      <p className="thumbnail-title">{title}</p>
    </div>
  );
};

export default Thumbnail;
