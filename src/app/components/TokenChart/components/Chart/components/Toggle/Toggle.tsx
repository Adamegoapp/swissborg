import React from 'react';
import './Toggle.css';

type ToggleProps = {
  endpoint: string;
  label: string; // New prop for label text
  onClick: () => void;
  isActive: boolean; // Add a prop to indicate whether the button is active
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
      {/* Use the label prop instead of the endpoint prop */}
    </button>
  );
};

export default Toggle;
