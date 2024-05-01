'use client';

import React, { useEffect, useState } from 'react';
import Breakdown from './components/Breakdown/Breakdown';
import DoughnutChart from './components/DounatChart/DoughnutChart';
import './TokenInfo.css';

const BASE_URL = 'https://borg-api-techchallenge.swissborg-stage.com';

type TokenData = {
  borgBurnedPercentage: number;
  borgBurnedTokens: number;
  borgInBubackPoolPercentage: number;
  borgInBubackPoolTokens: number;
  borgInYieldPercentage: number;
  borgInYieldTokens: number;
  borgPendingBurnTokens: number;
  borgPendingBuybackTokens: number;
  borgYieldEarnedUsd: number;
  circulatingSupplyPercentage: number;
  circulatingSupplyTokens: number;
  premiumUsers: number;
  stakedBorgPercentage: number;
  stakedBorgTokens: number;
  weeklyPremiumUsers: number;
  weeklyVolumeUsd: number;
};

const TokenInfo = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [tokenData, setTokenData] = useState<TokenData | null>(null);

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/borg-stats`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const tokenData = await response.json();
        setTokenData(tokenData);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTokenData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong with fetching the data.</div>;
  }

  const data = {
    labels: [
      'Staked',
      'Burned',
      'In Yield',
      'In buyback pool',
      'Circulating Supply',
    ],
    datasets: [
      {
        data: [
          tokenData!.stakedBorgTokens,
          tokenData!.borgBurnedTokens,
          tokenData!.borgInYieldTokens,
          tokenData!.borgInBubackPoolTokens,
          tokenData!.circulatingSupplyTokens,
        ],
        backgroundColor: [
          '#13E5BF',
          ' #364053',
          '#AD95FF',
          ' #7ABCFF',
          '#CCF3E8',
        ],
      },
    ],
  };

  return (
    <div className="main">
      <h2 className="onlyMobile">
        BORG Buyback performance Breakdown of BORG`s circulating supply
      </h2>
      <h2 className="onlyDesktop">Breakdown of BORG`s circulating supply</h2>
      <div className="content">
        <Breakdown />
        <div className="chartBox">
          <DoughnutChart data={data} />
        </div>
      </div>
    </div>
  );
};

export default TokenInfo;
