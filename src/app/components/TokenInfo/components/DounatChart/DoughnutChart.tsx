'use client';

import React, { useEffect, useRef } from 'react';
import './DoughnutChart.css';
import Chart, { ChartConfiguration } from 'chart.js/auto';

type DoughnutChartProps = {
  data: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
    }[];
  };
};

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let chartInstance: Chart<'doughnut'> | null = null;

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (ctx) {
        const chartConfig: ChartConfiguration<'doughnut'> = {
          type: 'doughnut',
          data: {
            labels: data.labels,
            datasets: data.datasets,
          },
          options: {
            aspectRatio: 1.2, // Adjust aspect ratio to make it more rectangular
            cutout: '70%',
            plugins: {
              legend: {
                position: 'right',
                labels: {
                  boxWidth: 11, // Change the width of the colored boxes close to the legends
                },
              },
            },
            elements: {
              arc: {
                borderWidth: 0,
                borderRadius: 0,
                hoverBorderWidth: 0,
              },
            },
          },
        };

        chartInstance = new Chart(ctx, chartConfig);
      }
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} className="dropshadow"></canvas>;
};

export default DoughnutChart;
