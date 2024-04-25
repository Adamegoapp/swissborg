'use client'

import React, { useEffect, useState, useRef } from 'react'
import Breakdown from './components/Breakdown/Breakdown'
import './TokenInfo.css'

const BASE_URL = 'https://borg-api-techchallenge.swissborg-stage.com'

type TokenData = {
  timestamp: string
  price: number
}

const TokenInfo = () => {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [tokenData, setTokenData] = useState<TokenData[]>([])

  useEffect(() => {
    // const abortControllerRef = useRef<AbortController | null>(null)

    const fetchTokenData = async () => {
      // abortControllerRef.current?.abort()
      // abortControllerRef.current = new AbortController()
      setIsLoading(true)
      try {
        const response = await fetch(`${BASE_URL}/api/borg-stats`)
        const tokenData = (await response.json()) as TokenData[]
        setTokenData(tokenData)
      } catch (e: any) {
        if (e.name === 'AbortError') {
          return
        }
        setError(e)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTokenData()
  }, [])

  console.log('test', tokenData)

  if (error) {
    return <div>wrong with data</div>
  }

  if (isLoading) {
    return <div>loading...</div>
  }

  return (
    <div className="main">
      <h2>Breakdown of BORG’s circulating supply</h2>
      <Breakdown />
    </div>
  )
}

export default TokenInfo
