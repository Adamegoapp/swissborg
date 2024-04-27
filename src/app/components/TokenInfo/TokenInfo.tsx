'use client'

import React, { useEffect, useState } from 'react'
import Breakdown from './components/Breakdown/Breakdown'
import ChartImage from './components/ChartImage/ChartImage'
import DoughnutChart from './components/DounatChart/DounatChart'
import './TokenInfo.css'

const BASE_URL = 'https://borg-api-techchallenge.swissborg-stage.com'

type TokenData = {
  borgBurnedPercentage: number
  borgBurnedTokens: number
  borgInBubackPoolPercentage: number
  borgInBubackPoolTokens: number
  borgInYieldPercentage: number
  borgInYieldTokens: number
  borgPendingBurnTokens: number
  borgPendingBuybackTokens: number
  borgYieldEarnedUsd: number
  circulatingSupplyPercentage: number
  circulatingSupplyTokens: number
  premiumUsers: number
  stakedBorgPercentage: number
  stakedBorgTokens: number
  weeklyPremiumUsers: number
  weeklyVolumeUsd: number
}

const TokenInfo = () => {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [tokenData, setTokenData] = useState<TokenData>()

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
        data: [100, 50, 50, 70, 300],
        backgroundColor: [
          '#13E5BF',
          ' #364053',
          '#AD95FF',
          ' #7ABCFF',
          '#CCF3E8',
        ],
      },
    ],
  }

  useEffect(() => {
    const fetchTokenData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`${BASE_URL}/api/borg-stats`)
        const tokenData = (await response.json()) as TokenData
        setTokenData(tokenData)
      } catch (e: any) {
        setError(e)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTokenData()
  }, [])

  console.log('test', tokenData?.circulatingSupplyTokens)

  if (error) {
    return <div>wrong with data</div>
  }

  if (isLoading) {
    return <div>loading...</div>
  }

  return (
    <div className="main">
      <h2>Breakdown of BORG’s circulating supply</h2>
      <div className="content">
        <Breakdown />
        {/* <ChartImage /> */}
        <div className="chartBox">
          <DoughnutChart data={data} />
        </div>
      </div>
    </div>
  )
}

export default TokenInfo
