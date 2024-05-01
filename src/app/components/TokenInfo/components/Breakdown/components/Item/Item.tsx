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
  const formatNumber = (number: number): string => {
    const parts = number.toLocaleString('en-US').split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1] ? `.${parts[1]}` : '';
    return `${integerPart}${decimalPart}`;
  };

  return (
    <div className="main2">
      <div className="iconBox">{props.icon}</div>
      <div className="directionBox">
        <div>
          <span>{props.label}</span>
        </div>
        <div className="valueBox">
          <h4>{formatNumber(props.value ?? 0)}</h4>
          {props.percent && (
            <div>
              <span>(</span>
              <span className="bold">{(props.percent * 100).toFixed(2)}%</span>
              <span> of Circulating supply)</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
