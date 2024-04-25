'use client'

import React, { useEffect, useState, useRef } from 'react'
import './Breakdown.css'
import Item from './components/Item/Item'

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

const Breakdown = () => {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [tokenData, setTokenData] = useState<TokenData>()

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

  if (isLoading) {
    return <div>loading...</div>
  }

  return (
    <div className="container">
      <Item
        label="Remaining circulating supply"
        value={tokenData?.circulatingSupplyTokens}
      />
      <Item
        label="BORG staked"
        value={tokenData?.stakedBorgTokens}
        percent={tokenData?.stakedBorgPercentage}
      />
      <Item
        label="BORG in Yield"
        value={tokenData?.borgInYieldTokens}
        percent={tokenData?.borgInYieldPercentage}
      />
      <Item
        label="Circulating supply burned"
        value={tokenData?.borgBurnedTokens}
      />
      <Item
        label="BORG in buyback pool"
        value={tokenData?.borgInBubackPoolTokens}
      />
    </div>
  )
}

export default Breakdown
