import * as React from 'react'

interface AmericaProps {
  [key: string]: any
}

const America: React.FC<AmericaProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={30}
      height={30}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#fff"
        d="M15.334 0c8.087 0 14.642 6.555 14.642 14.642s-6.555 14.642-14.642 14.642S.692 22.73.692 14.642 7.247 0 15.334 0Z"
      />
    </mask>
    <g fillRule="evenodd" clipRule="evenodd" mask="url(#a)">
      <path fill="#3F51B5" d="M-5.41-6.101h41.487v41.486H-5.41V-6.101Z" />
      <path fill="#ECEFF1" d="M-13.125-6.101h59.447v41.486h-59.447V-6.101Z" />
    </g>
    <mask
      id="b"
      width={19}
      height={4}
      x={6}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#fff"
        d="M15.428 0a14.58 14.58 0 0 1 9.11 3.254H6.131A14.58 14.58 0 0 1 15.334 0l-.092.001h.186Z"
      />
    </mask>
    <g mask="url(#b)">
      <path
        fill="#F44336"
        fillRule="evenodd"
        d="M-13.12-6.101h59.446V9.354H-13.12V-6.1Z"
        clipRule="evenodd"
      />
    </g>
    <mask
      id="c"
      width={29}
      height={4}
      x={1}
      y={6}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#fff"
        d="M27.51 6.507a14.588 14.588 0 0 1 1.632 3.253H1.525c.41-1.158.96-2.25 1.633-3.253H27.51Z"
      />
    </mask>
    <g mask="url(#c)">
      <path
        fill="#F44336"
        fillRule="evenodd"
        d="M-13.121.407h59.447v15.456h-59.447V.407Z"
        clipRule="evenodd"
      />
    </g>
    <mask
      id="d"
      width={30}
      height={4}
      x={0}
      y={13}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#fff"
        d="M29.887 13.015a14.795 14.795 0 0 1 0 3.254H.78a14.803 14.803 0 0 1 0-3.254h29.106Z"
      />
    </mask>
    <g mask="url(#d)">
      <path
        fill="#F44336"
        fillRule="evenodd"
        d="M-13.12 6.914h59.447V22.37H-13.12V6.914Z"
        clipRule="evenodd"
      />
    </g>
    <mask
      id="e"
      width={29}
      height={4}
      x={1}
      y={19}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#fff"
        d="M29.143 19.523c-.41 1.159-.96 2.25-1.633 3.254H3.158a14.589 14.589 0 0 1-1.633-3.254h27.618Z"
      />
    </mask>
    <g mask="url(#e)">
      <path
        fill="#F44336"
        fillRule="evenodd"
        d="M-13.12 13.422h59.446v15.455H-13.12V13.422Z"
        clipRule="evenodd"
      />
    </g>
    <mask
      id="f"
      width={19}
      height={4}
      x={6}
      y={26}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#fff"
        d="M24.538 26.03a14.58 14.58 0 0 1-9.204 3.254 14.58 14.58 0 0 1-9.203-3.254h18.407Z"
      />
    </mask>
    <g mask="url(#f)">
      <path
        fill="#F44336"
        fillRule="evenodd"
        d="M-13.12 19.93h59.446v15.455H-13.12V19.929Z"
        clipRule="evenodd"
      />
    </g>
    <mask
      id="g"
      width={16}
      height={17}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#fff"
        d="m15.334 0 .196.001V16.27H.78c-.059-.534-.09-1.077-.09-1.627C.692 6.555 7.248 0 15.335 0Z"
      />
    </mask>
    <g mask="url(#g)">
      <path
        fill="#3F51B5"
        fillRule="evenodd"
        d="M-13.12-6.101h34.75v28.47h-34.75V-6.1Z"
        clipRule="evenodd"
      />
    </g>
    <mask
      id="h"
      width={4}
      height={4}
      x={6}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#fff"
        d="m8.28 2.17.5 1.071 1.111.17-.805.835.193 1.177-.998-.555-.998.555.192-1.177-.805-.835 1.112-.17.499-1.071Z"
      />
    </mask>
    <g mask="url(#h)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M.57-3.931h15.422v15.455H.569V-3.93Z"
        clipRule="evenodd"
      />
    </g>
    <mask
      id="i"
      width={4}
      height={4}
      x={10}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#fff"
        d="m12.308 2.17.499 1.071 1.111.17-.805.835.193 1.177-.998-.555-.998.555.193-1.177-.806-.835 1.112-.17.499-1.071Z"
      />
    </mask>
    <g mask="url(#i)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M4.596-3.931H20.02v15.455H4.596V-3.93Z"
        clipRule="evenodd"
      />
    </g>
    <mask
      id="j"
      width={4}
      height={5}
      x={2}
      y={10}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#fff"
        d="m3.986 10.846.499 1.072 1.111.17-.805.834.193 1.178-.998-.555-.998.555.193-1.178-.806-.834 1.112-.17.499-1.072Z"
      />
    </mask>
    <g mask="url(#j)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M-3.726 4.745h15.423v15.456H-3.726V4.745Z"
        clipRule="evenodd"
      />
    </g>
    <mask
      id="k"
      width={4}
      height={5}
      x={6}
      y={10}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#fff"
        d="m8.28 10.846.5 1.072 1.111.17-.805.834.193 1.178-.998-.555-.998.555.192-1.178-.805-.834 1.112-.17.499-1.072Z"
      />
    </mask>
    <g mask="url(#k)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M.57 4.745h15.422v15.456H.569V4.745Z"
        clipRule="evenodd"
      />
    </g>
    <mask
      id="l"
      width={4}
      height={5}
      x={10}
      y={10}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#fff"
        d="m12.308 10.846.499 1.072 1.111.17-.805.834.193 1.178-.998-.555-.998.555.193-1.178-.806-.834 1.112-.17.499-1.072Z"
      />
    </mask>
    <g mask="url(#l)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M4.596 4.745H20.02v15.456H4.596V4.745Z"
        clipRule="evenodd"
      />
    </g>
    <mask
      id="m"
      width={4}
      height={4}
      x={3}
      y={6}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#fff"
        d="m5.06 6.507.499 1.072 1.111.17-.805.834.193 1.178-.998-.555-.999.555.193-1.178-.805-.834 1.111-.17.5-1.072Z"
      />
    </mask>
    <g mask="url(#m)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M-2.652.406H12.77v15.456H-2.652V.406Z"
        clipRule="evenodd"
      />
    </g>
    <mask
      id="n"
      width={4}
      height={4}
      x={7}
      y={6}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#fff"
        d="m9.354 6.507.5 1.072 1.11.17-.804.834.192 1.178-.998-.555-.998.555.193-1.178-.805-.834 1.111-.17.5-1.072Z"
      />
    </mask>
    <g mask="url(#n)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M1.643.406h15.423v15.456H1.643V.406Z"
        clipRule="evenodd"
      />
    </g>
    <mask
      id="o"
      width={4}
      height={4}
      x={11}
      y={6}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#fff"
        d="m13.382 6.507.499 1.072 1.111.17-.805.834.193 1.178-.998-.555-.999.555.193-1.178-.805-.834 1.111-.17.5-1.072Z"
      />
    </mask>
    <g mask="url(#o)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M5.67.406h15.423v15.456H5.67V.406Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
)
export default America
