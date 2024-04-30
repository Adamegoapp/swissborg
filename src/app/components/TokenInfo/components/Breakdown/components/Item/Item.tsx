'use client';

import React, { useEffect, useState, useRef } from 'react';
import './Item.css';

type TokenProps = {
  label: string;
  value: number | undefined;
  percent?: number | undefined;
  icon: React.ReactNode | JSX.Element;
};

const Item: React.FC<TokenProps> = (props) => {
  return (
    <div className="main2">
      <div className="iconBox">{props.icon}</div>
      <div className="directionBox">
        <div>
          <span>{props.label}</span>
        </div>
        <div className="valueBox">
          <h4>{props?.value?.toLocaleString()}</h4>
          {props.percent && (
            <div>
              <span>(</span>
              <span className="bold">{props.percent}%</span>
              <span> of Circulating supply)</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
