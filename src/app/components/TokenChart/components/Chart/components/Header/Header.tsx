import { Icons } from '@/components*';
import React from 'react';
import './Header.css';

type HeaderProps = {
  tokenData: { timestamp: string; price: number }[];
  activeEndpointLabel: string; // New prop for the active endpoint label
};

const Header: React.FC<HeaderProps> = ({ tokenData, activeEndpointLabel }) => {
  const getPriceChange = (): string => {
    if (tokenData.length < 2) {
      return 'N/A';
    }
    const firstPrice = tokenData[0].price;
    const lastPrice = tokenData[tokenData.length - 1].price;
    const priceChange = ((lastPrice - firstPrice) / firstPrice) * 100;

    return `${priceChange.toFixed(2)}%`;
  };

  return (
    <div className="priceHeader">
      <div className="relative">
        <img src="fiat.png" alt="americaFlag" width={30} height={30} />
        <Icons.BorgTokenFilled />
        <div className="absolute">
          <Icons.Arrow />
        </div>
      </div>
      <div className="priceBox">
        <span className="price">USD 0.188</span>
        <span className="priceChange">
          {getPriceChange()} ({activeEndpointLabel})
        </span>
      </div>
    </div>
  );
};

export default Header;
