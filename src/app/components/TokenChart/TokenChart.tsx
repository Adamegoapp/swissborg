'use client'

import React, { useEffect, useState } from 'react'
import Chart from './components/Chart/Chart'
import './TokenChart.css'

const TokenChart = () => {
  return (
    <div className="header">
      <h1>BORG Token Metrics</h1>
      <p>
        Deep-dive into the statistics of BORG and the mechanics of the full
        SwissBorg Ecosystem.
      </p>
      <Chart />
    </div>
  )
}

export default TokenChart
