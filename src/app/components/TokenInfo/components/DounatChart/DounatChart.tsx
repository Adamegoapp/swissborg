import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const DoughnutChart: React.FC = () => {
  const chartRef = (useRef < HTMLCanvasElement) | (null > null)

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d')
      if (ctx) {
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['CL', 'ML', 'Spl.L', 'PD', 'Other Permissions'],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: [
                  '#F0CB8C',
                  '#EE97A1',
                  '#A9D5D4',
                  '#E8A3D7',
                  '#CFA3FD',
                ],
                data: [7, 3, 3, 4, 8],
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                position: 'right',
              },
            },
          },
        })
      }
    }
  }, [])

  return <canvas ref={chartRef}></canvas>
}

export default DoughnutChart
