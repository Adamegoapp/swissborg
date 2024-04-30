import React, { useEffect, useState } from 'react';
import './Chart.css';
import Header from './components/Header/Header';
import PriceDiagram from './components/PriceDiagram/PriceDiagram';
import Toggle from './components/Toggle/Toggle';

const BASE_URL = 'https://borg-api-techchallenge.swissborg-stage.com';
const ENDPOINTS = ['/day', '/month', '/year', '/all'];

// Mapping of endpoints to labels
const endpointLabels: { [key: string]: string } = {
  '/day': '1D',
  '/month': '1M',
  '/year': '1Y',
  '/all': 'All',
};

type TokenData = {
  timestamp: string;
  price: number;
}[];

const Chart: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [selectedEndpoint, setSelectedEndpoint] = useState<string>('/day');
  const [tokenData, setTokenData] = useState<TokenData[]>([]);

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/api/historical-price${selectedEndpoint}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const tokenData = (await response.json()) as TokenData[];
        setTokenData(tokenData);
      } catch (e: any) {
        setError(e.message);
      }
    };

    fetchTokenData();
  }, [selectedEndpoint]);

  const handleEndpointChange = (endpoint: string) => {
    setSelectedEndpoint(endpoint);
  };

  if (!tokenData.length) {
    // Check if tokenData is an empty array
    return <div className="error">Loading</div>;
  }

  // To select fewer points so the line is not as sharp, %4 make us select a number then skip 3.
  const filteredTokenData = tokenData.filter(
    (_, index) => (index + 1) % 4 === 0
  );

  return (
    <div className="chartContainer">
      <Header />
      <div className="priceContainer">
        <PriceDiagram tokenData={filteredTokenData} />
        <div className="timeContainer">hello price ptiekcel nlnln ljnjlkn</div>
      </div>
      <div className="buttonContainer">
        {ENDPOINTS.map((endpoint) => (
          <Toggle
            key={endpoint}
            endpoint={endpoint}
            label={endpointLabels[endpoint]}
            onClick={() => handleEndpointChange(endpoint)}
            isActive={selectedEndpoint === endpoint}
          />
        ))}
      </div>
    </div>
  );
};

export default Chart;
