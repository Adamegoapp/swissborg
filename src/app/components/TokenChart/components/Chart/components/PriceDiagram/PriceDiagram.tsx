'use client';
import React, { useEffect, useRef } from 'react';
import Chart, { LineOptions } from 'chart.js/auto';

type Props = {
  tokenData: { timestamp: string; price: number }[];
};

type GradientColor = { offset: number; color: string };

interface CustomLineLineOptions extends LineOptions<'line'> {
  belowLineGradient?: {
    colors: GradientColor[];
  };
}

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
              color: 'white', // Change the color of the text on the y-axis to white
              callback: function (value) {
                if (typeof value === 'number') {
                  return parseFloat(value.toFixed(2));
                }
                return value;
              },
            },
            grid: {
              color: ' rgba(255, 255, 255, 0.05)', // Change the color of the y-axis lines
            },
          },
        },
        plugins: {
          legend: false,
          title: false,
          belowLineGradient: {
            colors: [
              { offset: 0, color: 'rgba(1, 195, 141, 0.6)' },
              { offset: 1, color: 'rgba(1, 195, 141, 0)' },
            ],
          },
        } as CustomLineLineOptions['options'],
      },
      plugins: [
        {
          id: 'belowLineGradient',
          beforeDraw(chart) {
            const ctx = chart.ctx as CanvasRenderingContext2D;
            const colors = chart.options.plugins?.belowLineGradient?.colors;
            const yAxis = chart.scales.y;

            if (!colors) return;

            const firstPoint = chart
              .getDatasetMeta(0)
              .data[0].getProps(['x', 'y']);
            const lastPoint = chart
              .getDatasetMeta(0)
              .data[chart.getDatasetMeta(0).data.length - 1].getProps([
                'x',
                'y',
              ]);

            const gradient = ctx.createLinearGradient(
              0,
              yAxis.top,
              0,
              yAxis.bottom
            );
            colors.forEach((color: GradientColor) => {
              gradient.addColorStop(color.offset, color.color);
            });

            ctx.save();
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.moveTo(firstPoint.x, firstPoint.y);
            chart.getDatasetMeta(0).data.forEach((point) => {
              ctx.lineTo(
                point.getProps(['x', 'y']).x,
                point.getProps(['x', 'y']).y
              );
            });
            ctx.lineTo(lastPoint.x, lastPoint.y);
            ctx.lineTo(lastPoint.x, yAxis.bottom);
            ctx.lineTo(firstPoint.x, yAxis.bottom);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
          },
        },
      ],
    });
  }, [tokenData]);

  return <canvas ref={chartRef} />;
};

export default PriceDiagram;

// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';

// type Props = {
//   tokenData: { timestamp: string; price: number }[];
// };

// const PriceDiagram: React.FC<Props> = ({ tokenData }) => {
//   const chartRef = useRef<HTMLCanvasElement>(null);
//   const chartInstance = useRef<Chart<'line'> | null>(null);

//   useEffect(() => {
//     if (!tokenData.length || !chartRef.current) return;

//     const labels = tokenData.map(({ timestamp }) => timestamp);
//     const prices = tokenData.map(({ price }) => price);

//     if (chartInstance.current) {
//       chartInstance.current.destroy();
//     }

//     const ctx = chartRef.current.getContext('2d');
//     if (!ctx) return;

//     chartInstance.current = new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels,
//         datasets: [
//           {
//             label: 'Price',
//             data: prices,
//             borderColor: 'rgba(1, 195, 141, 1)',
//             borderWidth: 2,
//             pointStyle: 'line',
//             pointRadius: 0,
//             tension: 0,
//           },
//         ],
//       },
//       options: {
//         scales: {
//           x: {
//             display: false,
//           },
//           y: {
//             position: 'right',
//             ticks: {
//               color: 'white',
//               callback: (value) =>
//                 typeof value === 'number'
//                   ? parseFloat(value.toFixed(2))
//                   : value,
//             },
//             grid: {
//               color: 'rgba(255, 255, 255, 0.05)',
//             },
//           },
//         },
//         plugins: {
//           legend: {
//             display: false, // Hide legend
//           },
//         },
//       },
//     });
//   }, [tokenData]);

//   return <canvas ref={chartRef} />;
// };

// export default PriceDiagram;
