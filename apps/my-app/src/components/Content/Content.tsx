import React from 'react';

import './Content.css';

interface Props {
  title: React.ReactNode;
  img: string;
  contentTitle: React.ReactNode;
  children: React.ReactNode;
}

const Content: React.FC<Props> = ({ title, img, contentTitle, children }) => {
  return (
    <div className="content">
      <div className="content-title-comp">
        <h1 className="content-title">{title}</h1>
      </div>
      <div className="content-img">
        <img src={img} alt="" />
      </div>
      <p className="content-article-title">{contentTitle}</p>
      <div className="content-article">{children}</div>
    </div>
  );
};

export default Content;
