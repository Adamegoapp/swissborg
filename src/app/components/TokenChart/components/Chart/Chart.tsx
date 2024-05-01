import React, { useEffect, useState } from 'react';
import './Chart.css';
import Header from './components/Header/Header';
import PriceDiagram from './components/PriceDiagram/PriceDiagram';
import Toggle from './components/Toggle/Toggle';
import moment from 'moment'; // Import moment library

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
  const [formattedFirstDate, setFormattedFirstDate] = useState<string>('');
  const [formattedLastDate, setFormattedLastDate] = useState<string>('');
  const [formattedDates, setFormattedDates] = useState<string[]>([]);

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

  useEffect(() => {
    if (tokenData.length === 0) return;

    const firstDateIndex = 0;
    const lastDateIndex = tokenData.length - 1;

    // Calculate the interval between dates
    const interval = Math.floor((lastDateIndex - firstDateIndex) / 4);

    const dateFormatMap: { [key: string]: string } = {
      '/day': 'HH:mm',
      '/month': 'DD/MM',
      '/year': 'DD/MM',
      '/all': 'DD/MM',
    };

    setFormattedFirstDate(
      moment(tokenData[firstDateIndex].timestamp).format(
        dateFormatMap[selectedEndpoint]
      )
    );
    setFormattedLastDate(
      moment(tokenData[lastDateIndex].timestamp).format(
        dateFormatMap[selectedEndpoint]
      )
    );

    // Calculate and format the evenly spaced dates
    const formattedDatesArray: string[] = [];
    for (let i = 0; i < 4; i++) {
      const index = firstDateIndex + (i + 1) * interval;
      formattedDatesArray.push(
        moment(tokenData[index].timestamp).format(
          dateFormatMap[selectedEndpoint]
        )
      );
    }

    setFormattedDates(formattedDatesArray);
  }, [tokenData, selectedEndpoint]);

  const handleEndpointChange = (endpoint: string) => {
    setSelectedEndpoint(endpoint);
  };

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!tokenData.length) {
    return <div className="loading">Loading...</div>;
  }

  // To make the line less sharp
  const filteredTokenData = tokenData.filter(
    (_, index) => (index + 1) % 4 === 0
  );

  return (
    <div className="chartContainer">
      <Header
        tokenData={tokenData}
        activeEndpointLabel={endpointLabels[selectedEndpoint]}
      />
      <div className="priceContainer">
        <PriceDiagram tokenData={filteredTokenData} />
        <div className="timeContainer">
          <p> {formattedFirstDate}</p>
          {formattedDates.map((date, index) => (
            <p key={index}>{date}</p>
          ))}
          <p>{formattedLastDate}</p>
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
