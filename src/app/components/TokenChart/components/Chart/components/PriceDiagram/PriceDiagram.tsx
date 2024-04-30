import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

type Props = {
  tokenData: { timestamp: string; price: number }[];
};

const PriceDiagram: React.FC<Props> = ({ tokenData }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<'line'> | null>(null);

  useEffect(() => {
    if (!tokenData.length || !chartRef.current) return;

    const labels = tokenData.map(({ timestamp }) => timestamp);
    const prices = tokenData.map(({ price }) => price);

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Price',
            data: prices,
            borderColor: 'rgba(1, 195, 141, 1)',
            borderWidth: 2,
            pointStyle: 'line',
            pointRadius: 0,
            tension: 0,
          },
        ],
      },
      options: {
        scales: {
          x: {
            display: false,
          },
          y: {
            position: 'right',
            ticks: {
              color: 'white',
              callback: (value) =>
                typeof value === 'number'
                  ? parseFloat(value.toFixed(2))
                  : value,
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.05)',
            },
          },
        },
        plugins: {
          legend: {
            display: false, // Hide legend
          },
        },
      },
    });
  }, [tokenData]);

  return <canvas ref={chartRef} />;
};

export default PriceDiagram;
