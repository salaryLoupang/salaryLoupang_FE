import React from 'react';

import './Input.css';

interface Props {
  type: string;
  value: any;
  text?: React.ReactNode;
  onChange(any): void;
}

const Input: React.FC<Props> = ({ type, value, text, onChange }) => {
  return (
    <div className="ui-input">
      <input
        type={type}
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
      {text && <span className="text">{text}</span>}
    </div>
  );
};

export default Input;
