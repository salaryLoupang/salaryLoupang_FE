import React from 'react';

import './Select.css';

interface Option {
  value: any;
  text: React.ReactNode;
}

interface Props {
  value: any;
  options: [];
  onChange(any): void;
}

const Select: React.FC<Props> = ({ value, options, onChange }) => {
  return (
    <div className="ui-select">
      <select
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
      >
        {options.map(option => {
          return <option value={option.value}>{option.text}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
