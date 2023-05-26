import React from 'react';

import Title from './Title';
import Content from './Content';
import Info from './Info';

import './FormGroup.css';

interface Props {
  children: React.ReactNode;
}

const FormGroup: React.FC<Props> & {
  Title: React.ReactNode,
  Content: React.ReactNode,
  Info: React.ReactNode,
} = ({ children }) => {
  return <dl className="form-group">{children}</dl>;
};

FormGroup.Title = Title;
FormGroup.Content = Content;
FormGroup.Info = Info;

export default FormGroup;
