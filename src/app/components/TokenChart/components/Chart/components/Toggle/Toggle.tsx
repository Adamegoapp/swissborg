import React from 'react';
import './Toggle.css';

type ToggleProps = {
  endpoint: string;
  label: string;
  onClick: () => void;
  isActive: boolean;
};

const Toggle: React.FC<ToggleProps> = ({
  endpoint,
  label,
  onClick,
  isActive,
}) => {
  return (
    <button onClick={onClick} className={isActive ? 'button active' : 'button'}>
      <span>{label}</span>{' '}
    </button>
  );
};

export default Toggle;
