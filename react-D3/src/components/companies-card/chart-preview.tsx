import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";

const ChartPreview = ({ data }: any) => {
  const chartRef = useRef<HTMLDivElement>(null);

  const color = useMemo(() => {
    if (data[data.length - 1].y > data[0].y) {
      return "#4ade80"; // black color
    }
    return "#ef4444"; // white color
  }, [data]);

  useEffect(() => {
    // Create chart
    // const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 120;
    const height = 60;

    const x = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.x))
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.y))
      .range([height, 0]);

    const line = d3
      .line()
      .x((d) => x(d.x))
      .y((d) => y(d.y));

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g");

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", color)
      .attr("stroke-width", 1.5)
      .attr("d", line);

    return () => {
      if (chartRef.current) {
        chartRef.current.innerHTML = "";
      }
    };
  }, [data]);

  return <div ref={chartRef}></div>;
};

export default ChartPreview;
