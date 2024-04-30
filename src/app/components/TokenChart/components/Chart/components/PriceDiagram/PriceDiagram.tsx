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
  const chartInstance = useRef<Chart<'line' | 'bar'> | null>(null);

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
            borderWidth: 1,
            pointStyle: 'line',
            pointRadius: 0,
            tension: 0.1,
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
        } as CustomLinePluginOptions['options'],
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
