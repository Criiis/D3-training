import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";

interface DataPoint {
  x: number;
  y: number;
}

interface ChartPreviewProps {
  data: DataPoint[];
}

const ChartPreview = ({ data }: ChartPreviewProps) => {
  const chartRef = useRef<HTMLDivElement>(null);

  const color = useMemo(() => {
    if (data[data.length - 1].y > data[0].y) return "#4ade80";
    return "#ef4444";
  }, [data]);

  useEffect(() => {
    const currentChartRef = chartRef.current;
    const width = 120;
    const height = 60;

    // horizontal line
    const x = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.x) as [number, number])
      .range([0, width]);

    // vertical line
    const y = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.y) as [number, number])
      .range([height, 0]);

    // chart line
    const line = d3
      .line<DataPoint>()
      .x((d) => x(d.x))
      .y((d) => y(d.y));

    const svg = d3
      .select(currentChartRef)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g");

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", color)
      .attr("stroke-width", 2)
      .attr("d", line);

    return () => {
      if (currentChartRef) {
        currentChartRef.innerHTML = "";
      }
    };
  }, [color, data]);

  return <div ref={chartRef}></div>;
};

export default ChartPreview;
