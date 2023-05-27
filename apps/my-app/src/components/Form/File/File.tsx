import React from 'react';

import { Input } from '../Input';

import './File.css';

interface Props {
  id: string;
  value: any;
  onChange(): void;
}

const File: React.FC<Props> = ({ id, value, onChange }, ref) => {
  console.log('name', value?.name);
  return (
    <div className="ui-file">
      <Input value={value?.name} onChange={() => {}} />
      <input
        ref={ref}
        type="file"
        id={id}
        onChange={e => {
          onChange(e.target.files);
        }}
      />
      <label htmlFor={id}>파일 선택하기</label>
    </div>
  );
};

export default React.forwardRef(File);
