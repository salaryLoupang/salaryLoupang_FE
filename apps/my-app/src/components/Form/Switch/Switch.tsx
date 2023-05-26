import React from 'react';

import './Switch.css';

interface Props {
  id: string;
  checked: boolean;
  onChange(checked: boolean): void;
}

const Switch: React.FC<Props> = ({ id, checked, onChange }) => {
  return (
    <div className="ui-switch">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={e => {
          onChange(e.target.checked);
        }}
      />
      <label htmlFor={id}>{id}</label>
    </div>
  );
};

export default Switch;
