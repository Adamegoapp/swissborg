import React from 'react'
import Doughnut from './components/Doughnut/Doughnut'
import './ChartImage.css'

const ChartImage: React.FC = () => {
  return (
    <div className="chartBox">
      <Doughnut radius={120} percent={25} />
    </div>
  )
}

export default ChartImage
