'use client'

import React, { useEffect, useState, useRef } from 'react'
import './TokenChart.css'

const BASE_URL = 'https://borg-api-techchallenge.swissborg-stage.com'

type TokenData = {
  timestamp: string
  price: number
}

const TokenChart = () => {
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
    <div className="header">
      <h1>BORG Token Metrics</h1>
      <p>
        Deep-dive into the statistics of BORG and the mechanics of the full
        SwissBorg Ecosystem.
      </p>
    </div>
  )
}

export default TokenChart
