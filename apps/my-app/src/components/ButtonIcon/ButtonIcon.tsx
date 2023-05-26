import React from 'react';

import './ButtonIcon.css';

interface Props {
  icon: string;
  onClick(): void;
}

const ButtonIcon: React.FC<Props> = ({ icon, onClick }) => {
  return (
    <button
      className={`btn-icon ${icon}-icon`}
      onClick={() => {
        onClick();
      }}
    ></button>
  );
};

export default ButtonIcon;
