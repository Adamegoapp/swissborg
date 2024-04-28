import React, { useEffect, useState } from 'react'
import './Chart.css'
import Header from './components/Header/Header'
import Toggle from './components/Toggle/Toggle'

const BASE_URL = 'https://borg-api-techchallenge.swissborg-stage.com'
const ENDPOINTS = ['/day', '/month', '/year', '/all']

type TokenData = {
  timestamp: string
  price: number
}

const Chart: React.FC = () => {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedEndpoint, setSelectedEndpoint] = useState<string>('/day')
  const [tokenData, setTokenData] = useState<TokenData | null>(null)

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/api/historical-price${selectedEndpoint}`
        )
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`)
        }
        const tokenData = (await response.json()) as TokenData
        setTokenData(tokenData)
      } catch (e: any) {
        setError(e.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTokenData()
  }, [selectedEndpoint])

  const handleEndpointChange = (endpoint: string) => {
    setSelectedEndpoint(endpoint)
  }

  if (isLoading) {
    return <div className="loading">Loading...</div>
  }

  if (error || !tokenData) {
    return (
      <div className="error">
        Error: {error || 'Failed to fetch token data.'}
      </div>
    )
  }

  return (
    <div className="chartContainer">
      <Header />
      <div>
        <p>Timestamp: {tokenData.timestamp}</p>
        <p>Price: {tokenData.price}</p>
      </div>
      <div className="buttonContainer">
        {ENDPOINTS.map((endpoint) => (
          <Toggle
            key={endpoint}
            endpoint={endpoint}
            onClick={() => handleEndpointChange(endpoint)}
            isActive={selectedEndpoint === endpoint}
          />
        ))}
      </div>
    </div>
  )
}

export default Chart
