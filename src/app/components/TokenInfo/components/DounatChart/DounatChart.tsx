import React, { useEffect, useRef } from 'react';
import './DounatChart.css';
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
            cutout: '70%',
            plugins: {
              legend: {
                display: false,
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
