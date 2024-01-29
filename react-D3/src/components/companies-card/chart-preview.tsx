import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";

interface DataPoint {
  x: number;
  y: number;
}

interface ChartPreviewProps {
  data: DataPoint[];
  symbol: string;
}

const ChartPreview = ({ data, symbol }: ChartPreviewProps) => {
  const chartRef = useRef<HTMLDivElement>(null);

  const color = useMemo(() => {
    if (data[data.length - 1].y > data[0].y) return "#4ade80";
    return "#ef4444";
  }, [data]);

  useEffect(() => {
    const currentChartRef = chartRef.current;
    const width = 170;
    const height = 75;

    const createGradient = (select: d3.Selection<SVGGElement, unknown, null, undefined>) => {
      const gradient = select
        .select("defs")
        .append("linearGradient")
        .attr("id", `gradient-${symbol}`)
        .attr("x1", "0%")
        .attr("y1", "100%")
        .attr("x2", "0%")
        .attr("y2", "0%");

      gradient
        .append("stop")
        .attr("offset", "0%")
        .attr("style", `stop-color:${color};stop-opacity:0`);

      gradient
        .append("stop")
        .attr("offset", "100%")
        .attr("style", `stop-color:${color};stop-opacity:.3`);
    };

    const svg = d3
      .select(currentChartRef)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g");

    svg.append("defs");
    svg.call(createGradient);

    // Define clip path
    svg
      .append("clipPath")
      .attr("id", "clip-path")
      .append("rect")
      .attr("width", width)
      .attr("height", height);

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
      .y((d) => y(d.y))
      .curve(d3.curveCatmullRom.alpha(0.5));

    // apply the line
    svg
      .append("path")
      .datum(data)
      .attr("d", line)
      .attr("stroke-width", "1")
      .style("fill", "none")
      .attr("stroke", color)
      .attr("clip-path", "url(#clip-path)");

    // apply the gradient
    svg
      .append("path")
      .datum(data)
      .attr("fill", `url(#gradient-${symbol})`)
      .attr("clip-path", "url(#clip-path)")
      .attr("d", (d) => {
        const area = d3
          .area<DataPoint>()
          .x((d) => x(d.x))
          .y0(height)
          .y1((d) => y(d.y))
          .curve(d3.curveCatmullRom.alpha(0.5));
        return area(d);
      });

    return () => {
      if (currentChartRef) {
        currentChartRef.innerHTML = "";
      }
    };
  }, [color, data, symbol]);

  return <div ref={chartRef}></div>;
};

export default ChartPreview;
