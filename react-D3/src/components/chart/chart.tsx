import { useEffect, useRef, useState } from "react";
import classes from "./chart.module.css";
import dataSet from "../../../public/data-1.json";

import * as d3 from "d3";

// Dimensions
const dimensions = {
  width: 500,
  height: 125,
  box: 25,
};

const Chart = () => {
  const chartRef = useRef(null);
  const tooltipRef = useRef(null);
  const [data, setData] = useState(dataSet);

  useEffect(() => {
    const colorDomain = d3.extent(data) as [number, number];
    const colorScale = d3.scaleLinear<string>().domain(colorDomain).range(["#333", "green"]);

    const svg = d3
      .select(chartRef.current)
      .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`);

    const tooltip = d3.select(tooltipRef.current);

    const g = svg
      .append("g")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("width", dimensions.box - 5)
      .attr("height", dimensions.box - 5)
      .attr("rx", 5)
      .attr("x", (_, i) => dimensions.box * (i % 20)) // 0, 30, 60
      .attr("y", (_, i) => dimensions.box * ((i / 20) | 0))
      .attr("data-value", (d) => d)
      .style("fill", colorScale)
      .on("mouseover", function (e, d) {
        const left = e.target.attributes.getNamedItem("x").value;
        const top = e.target.attributes.getNamedItem("y").value;

        d3.select(this).attr("stroke", "#eee");
        tooltip
          .style("opacity", 1)
          .style("left", `${left - 10}px`)
          .style("top", `${top - dimensions.box - 10}px`)
          .text(d);
      })
      .on("mouseout", function (d) {
        d3.select(this).attr("stroke", null);
        tooltip.style("opacity", null).style("left", null).style("top", null).text(null);
      });

    return () => {
      return d3.select("g").remove();
    };
  }, [data]);

  return (
    <>
      <h3>Linear Scale</h3>
      <div className={classes.chart} id="heatmap1">
        <div className={classes.tooltip} ref={tooltipRef}></div>
        <svg viewBox={`0, 0, ${dimensions.width}, ${dimensions.height}`} ref={chartRef} />
      </div>
    </>
  );
};

export default Chart;
