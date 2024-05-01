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
  const [tokenData, setTokenData] = useState<TokenData>([]);

  useEffect(() => {
    fetchData(selectedEndpoint);
  }, [selectedEndpoint]);

  const fetchData = async (endpoint: string) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/historical-price${endpoint}`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      const data = await response.json();
      setTokenData(data);
      setError(null); // Reset error state if successful
    } catch (e: any) {
      setError(e.message);
    }
  };

  const handleEndpointChange = (endpoint: string) => {
    setSelectedEndpoint(endpoint);
  };

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!tokenData.length) {
    return <div className="loading">Loading...</div>;
  }

  // Filter token data to get every fourth element
  const filteredTokenData = tokenData.filter(
    (_, index) => (index + 1) % 4 === 0
  );

  const firstDate = tokenData[0].timestamp; // First date
  const lastDate = tokenData[tokenData.length - 1].timestamp; // Last date
  const interval = Math.floor(tokenData.length / 5); // Interval between dates

  // Calculate evenly spread dates
  const evenlySpreadDates = Array.from({ length: 4 }, (_, i) => {
    const index = (i + 1) * interval;
    return tokenData[index].timestamp;
  });

  return (
    <div className="chartContainer">
      <Header tokenData={tokenData} />
      <div className="priceContainer">
        <PriceDiagram tokenData={filteredTokenData} />
        <div className="timeContainer">
          <p> {firstDate}</p>
          {evenlySpreadDates.map((date, index) => (
            <p key={index}>{date}</p>
          ))}
          <p> {lastDate}</p>
        </div>
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
