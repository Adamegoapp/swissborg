import React, { useCallback, useState } from 'react'
import './Doughnut.css'

type TokenProps = {
  percent: number
  radius: number
}

const Doughnut: React.FC<TokenProps> = (props) => {
  const [hover, setHover] = useState(false)
  const dashArray = props.radius * Math.PI * 2
  const dashOffset = dashArray - (dashArray * props.percent) / 100
  const dashOffset2 = dashArray - (dashArray * 50) / 100
  const dashOffset3 = dashArray - (dashArray * (25 + 25 + 25)) / 100

  const changeHover = useCallback(() => {
    setHover(!hover)
    console.log('hllo')
    console.log(hover)
  }, [hover])
  console.log(hover)
  return (
    <svg width={500} height={'auto'} className="dropshadow">
      <circle
        cx="50%"
        cy="50%"
        strokeWidth={'40px'}
        r={props.radius}
        className="circle-background"
      />
      <circle
        onMouseEnter={changeHover}
        onMouseLeave={changeHover}
        cx="50%"
        cy="50%"
        strokeWidth={hover ? '45px' : '40px'}
        r={props.radius}
        className="circle-progress3"
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset3,
          transform: 'rotate(-90deg)',
          transformOrigin: 'center',
        }}
      />
      <circle
        cx="50%"
        cy="50%"
        strokeWidth="40px"
        r={props.radius}
        className="circle-progress2"
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset2,
          transform: 'rotate(-90deg)',
          transformOrigin: 'center',
        }}
      />
      <circle
        cx="50%"
        cy="50%"
        strokeWidth="40px"
        r={props.radius}
        className="circle-progress"
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
          transform: 'rotate(-90deg)',
          transformOrigin: 'center',
        }}
      />
    </svg>
  )
}

export default Doughnut
