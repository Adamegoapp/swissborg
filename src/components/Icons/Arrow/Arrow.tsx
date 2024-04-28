import * as React from 'react'

interface ArrowProps {
  [key: string]: any
}

const Arrow: React.FC<ArrowProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={11}
    viewBox="0 0 11 11"
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <ellipse cx={5.196} cy={5.704} fill="#191E29" rx={4.881} ry={4.943} />
      <path
        fill="#8F96A1"
        d="M7.636 5.704 5.856 7.65a.337.337 0 0 1-.577-.13.345.345 0 0 1 .079-.336l1.041-1.137H3.1a.343.343 0 1 1 0-.685h3.3L5.358 4.224a.345.345 0 0 1 .172-.571.337.337 0 0 1 .326.106l1.78 1.945Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.315.761h9.761v9.886H.316z" />
      </clipPath>
    </defs>
  </svg>
)
export default Arrow
