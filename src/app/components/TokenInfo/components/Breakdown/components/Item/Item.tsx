'use client'

import React, { useEffect, useState, useRef } from 'react'
import { Icons } from '@/components'
import './Item.css'

type TokenProps = {
  label: string
  value: number | undefined
  percent?: number | undefined
}

const Item: React.FC<TokenProps> = (props) => {
  return (
    <div className="main2">
      <div className="label">
        i<h2>{props.label}</h2>
      </div>
      <div className="valueBox">
        <h4>{props?.value?.toLocaleString()}</h4>
        {props.percent && (
          <div>
            <span className="bold">{props.percent}%</span>
            <span> of Circulating supply</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Item
