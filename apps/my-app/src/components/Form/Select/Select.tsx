import React from 'react';

import './Select.css';

interface Option {
  value: any;
  text: React.ReactNode;
}

interface Props {
  multi?: boolean;
  value: any;
  options: [];
  onChange(any): void;
}

const Select: React.FC<Props> = ({
  multi = false,
  value,
  options,
  onChange,
}) => {
  return (
    <div className={`ui-select ${multi ? 'multi' : ''}`}>
      <select
        multiple={multi}
        value={value}
        onChange={e => {
          onChange(!multi ? e.target.value : e.target.selectedOptions);
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
