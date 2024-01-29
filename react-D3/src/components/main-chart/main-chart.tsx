import { useEffect, useRef, useState } from "react";
import { createChart } from "lightweight-charts";
import data from "./data";
import { useTheme } from "next-themes";

const lineData = data.map((d) => ({ time: d.time, value: d.close }));

const MainChart = () => {
  const { theme } = useTheme();
  const candleChartRef = useRef<HTMLDivElement>(null);
  const [isCandleChart, setIsCandleChart] = useState(true);
  const [parentWidth, setParentWidth] = useState(candleChartRef.current?.offsetWidth);

  // update parent.current?.offsetWidth when resize window
  useEffect(() => {
    const handleResize = () => {
      setParentWidth(candleChartRef.current?.offsetWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // build chart
  useEffect(() => {
    const currentChartRef = candleChartRef.current;
    if (!currentChartRef) return;

    const chart = createChart(currentChartRef, {
      width: parentWidth,
      height: 600,
      layout: {
        background: {
          color: "transparent",
        },
        textColor: theme === "dark" ? "#fff" : "#000",
      },
      grid: {
        vertLines: {
          color: theme === "dark" ? "rgba(88, 88, 88, 0.2)" : "rgba(197, 203, 206, 0.2)",
        },
        horzLines: {
          color: theme === "dark" ? "rgba(88, 88, 88, 0.2)" : "rgba(197, 203, 206, 0.2)",
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
        topColor: "rgb(72, 74, 255, 0.4)",
        bottomColor: "rgba(67, 83, 254, 0.1)",
        lineColor: "rgba(67, 83, 254, 1)",
        lineWidth: 2,
      });
      areaSeries.setData(lineData);
    }

    return () => {
      if (currentChartRef) {
        currentChartRef.innerHTML = "";
      }
    };
  }, [isCandleChart, parentWidth, theme]);

  const chartLine = () => {
    setIsCandleChart(false);
  };
  const chartCandle = () => {
    setIsCandleChart(true);
  };

  return (
    <section className="w-full flex flex-col items-start justify-start">
      <div className="border border-gray-700 border-solid rounded-lg space-x-1 p-1 mb-1">
        <button
          onClick={chartLine}
          className={`${
            isCandleChart ? "bg-transparent" : "bg-zinc-300 dark:bg-zinc-800"
          }  border border-transparent cursor-pointer rounded-md justify-center relative text-base font-bold hover:bg-zinc-900`}
        >
          Line
        </button>
        <button
          onClick={chartCandle}
          className={`${
            !isCandleChart ? "bg-transparent" : "bg-zinc-300 dark:bg-zinc-800"
          }  border border-transparent cursor-pointer rounded-md justify-center relative text-base font-bold hover:bg-zinc-900`}
        >
          Candle
        </button>
      </div>
      <div className="w-full" ref={candleChartRef} />
    </section>
  );
};

export default MainChart;
