import * as React from 'react'

interface DiamondProps {
  [key: string]: any
}

const Diamond: React.FC<DiamondProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={49}
    viewBox="0 0 48 49"
    fill="none"
    {...props}
  >
    <path
      fill="#13E5BF"
      fillOpacity={0.2}
      fillRule="evenodd"
      d="M18.98 6.617h-8.593a1.52 1.52 0 0 0-1.16.527l-6.902 8.717c-.232.274-.338 1.208-.324 1.538h14.326L18.98 6.617ZM28.15 6.617h8.592c.451 0 .878.194 1.16.527l6.902 8.717c.232.274.339 1.208.324 1.538H30.802L28.15 6.617Z"
      clipRule="evenodd"
    />
    <path
      fill="#13E5BF"
      fillOpacity={0.2}
      fillRule="evenodd"
      d="M22.724 40.932c.23.243.53.382.84.428L16.377 16.8H2.6c.014.315.138.625.373.872l19.752 23.26ZM24.405 40.932c-.23.243-.53.382-.84.428l7.188-24.56H44.53a1.347 1.347 0 0 1-.372.872l-19.753 23.26Z"
      clipRule="evenodd"
    />
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M44.757 17.999c.47-.56.555-1.806.118-2.396l-7.582-9.608a1.38 1.38 0 0 0-1.106-.576H10.939c-.43 0-.837.212-1.106.576L2.37 15.602c-.438.591-.472 1.837 0 2.397l20.146 24.06a1.346 1.346 0 0 0 2.094 0l20.147-24.06ZM36.33 6.707l.011.015 7.48 9.48h-12.69l-2.534-9.585h7.59c.028 0 .086.013.143.09Zm-8.972-.09 2.533 9.584H17.235l2.533-9.584h7.59Zm-8.83 0-2.532 9.584H3.42l7.367-9.482.008-.012c.058-.077.116-.09.143-.09h7.59ZM3.43 17.4l18.857 22.518L15.835 17.4H3.43Zm21.41 22.518L43.696 17.4H31.292L24.84 39.918Zm-1.277.106L17.081 17.4h12.965l-6.483 22.624Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1={51.333}
        x2={2.029}
        y1={23.989}
        y2={23.989}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#13E5BF" />
        <stop offset={1} stopColor="#01C38D" />
      </linearGradient>
    </defs>
  </svg>
)
export default Diamond
