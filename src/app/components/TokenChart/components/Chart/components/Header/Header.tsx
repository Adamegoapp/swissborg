'use client';

import { Icons } from '@/components*';
import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="priceHeader">
      <div className="relative">
        <img src="fiat.png" alt="americaFlag" />
        <Icons.BorgTokenFilled />
        <div className="absolute">
          <Icons.Arrow />
        </div>
      </div>
      <span className="">price</span>
    </div>
  );
};

export default Header;
