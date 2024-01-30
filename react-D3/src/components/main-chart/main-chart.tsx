import { useEffect, useRef, useState } from "react";
import { createChart } from "lightweight-charts";
import data from "./data";
import Button from "../button";

const lineData = data.map((d) => ({ time: d.time, value: d.close }));

const MainChart = () => {
  const candleChartRef = useRef<HTMLDivElement>(null);
  const [isCandleChart, setIsCandleChart] = useState(false);

  // build chart
  useEffect(() => {
    const currentChartRef = candleChartRef.current;
    if (!currentChartRef) return;

    const handleResize = () => {
      chart.applyOptions({ width: candleChartRef.current?.offsetWidth });
    };

    const chart = createChart(currentChartRef, {
      width: candleChartRef.current?.offsetWidth,
      height: 600,
      layout: {
        background: {
          color: "transparent",
        },
        textColor: "rgba(88, 88, 88, 1)",
      },
      grid: {
        vertLines: {
          color: "rgba(88, 88, 88, 0.2)",
        },
        horzLines: {
          color: "rgba(88, 88, 88, 0.2)",
        },
      },
      rightPriceScale: {
        borderColor: "rgba(197, 203, 206, 0.2)",
      },
      timeScale: {
        borderColor: "rgba(197, 203, 206, 0.2)",
      },
    });

    if (isCandleChart) {
      const candleSeries = chart.addCandlestickSeries({
        upColor: "#26a69a",
        downColor: "#ef5350",
        borderDownColor: "#ef5350",
        borderUpColor: "#26a69a",
        wickDownColor: "#ef5350",
        wickUpColor: "#26a69a",
      });
      candleSeries.setData(data);
    } else {
      const areaSeries = chart.addAreaSeries({
        topColor: "rgb(67, 83, 254, 0.4)",
        bottomColor: "rgba(67, 83, 254, 0.1)",
        lineColor: "rgba(67, 83, 254, 1)",
        lineWidth: 2,
      });
      areaSeries.setData(lineData);
    }

    chart.timeScale().setVisibleRange({
      from: (new Date(data[0].time).getTime() / 1000) as any,
      to: (new Date(data[data.length - 1].time).getTime() / 1000) as any,
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [isCandleChart]);

  const chartLine = () => {
    setIsCandleChart(false);
  };
  const chartCandle = () => {
    setIsCandleChart(true);
  };

  return (
    <div className="w-full flex flex-col items-start justify-start">
      <div className="border border-gray-700 border-solid rounded-lg space-x-1 p-1 mb-1">
        <Button onClick={chartLine} isActive={!isCandleChart} variant="secondary">
          Line
        </Button>
        <Button onClick={chartCandle} isActive={isCandleChart} variant="secondary">
          Candle
        </Button>
      </div>
      <div className="w-full" ref={candleChartRef} />
    </div>
  );
};

export default MainChart;
