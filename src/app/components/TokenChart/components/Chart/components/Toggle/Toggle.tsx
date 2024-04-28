import React from 'react'
import './Toggle.css'

type ToggleProps = {
  endpoint: string
  onClick: () => void
  isActive: boolean // Add a prop to indicate whether the button is active
}

const Toggle: React.FC<ToggleProps> = ({ endpoint, onClick, isActive }) => {
  return (
    <button onClick={onClick} className={isActive ? 'button active' : 'button'}>
      <span>{endpoint}</span>
    </button>
  )
}

export default Toggle
