import { useEffect, useRef } from "react";
import data from "../../data/data-ibm.json";
import * as d3 from "d3";

const dailyData: { [key: string]: { [key: string]: string } } = data["Time Series (Daily)"];
// get all the dates
const dates = Object.keys(dailyData);
// get all the closing prices
const closingPrices = dates.map((date) => {
  return {
    date,
    close: Number(dailyData[date]["4. close"]),
  };
});

const MainChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentChartRef = chartRef.current;
    const WIDTH = 800;
    const HEIGHT = 450;
    const MARGIN = { top: 10, right: 10, bottom: 20, left: 30 };
    const INNER_WIDTH = WIDTH - MARGIN.left - MARGIN.right;
    const INNER_HEIGHT = HEIGHT - MARGIN.top - MARGIN.bottom;

    console.log(dailyData);
    // build svg
    const svg = d3
      .select(currentChartRef)
      .append("svg")
      .attr("width", WIDTH)
      .attr("height", HEIGHT)
      .attr("style", "width: 100%; height: 100%; max-height: 600px;")
      .append("g")
      .attr("transform", `translate(${MARGIN.left},${MARGIN.top})`);

    // const x = d3_scaleLinear().domain([0, 1]).range([0, INNER_WIDTH]);
    // const y = d3_scaleLinear().domain([0, 1]).range([INNER_HEIGHT, 0]);
    // const xAxis = d3_axisBottom(x).ticks(10);
    // const yAxis = d3_axisLeft(y).ticks(10);
    // const xAxisGrid = d3_axisBottom(x).tickSize(-INNER_HEIGHT).tickFormat(null).ticks(10);
    // const yAxisGrid = d3_axisLeft(y).tickSize(-INNER_WIDTH).tickFormat(null).ticks(10);

    // const svg = d3_select(currentChartRef)
    //   .append("svg")
    //   .attr("width", WIDTH)
    //   .attr("height", HEIGHT)
    //   //   .attr("preserveAspectRatio", "xMinYMin meet")
    //   .attr("viewBox", `0 0 ${WIDTH} ${HEIGHT}`)
    //   .attr("style", "width: 100%; height: 100%; max-height: 600px;")
    //   .append("g")
    //   .attr("transform", "translate(" + MARGIN.left + "," + MARGIN.top + ")");

    // // svg
    // //   .append("g")
    // //   .attr("color", "#666")
    // //   .attr("class", "x axis-grid")
    // //   .attr("transform", "translate(0," + INNER_HEIGHT + ")")
    // //   .call(xAxisGrid);
    // // svg.append("g").attr("color", "#666").attr("class", "y axis-grid").call(yAxisGrid);

    // // Create axes.
    // svg.append("g").call(yAxis);

    return () => {
      if (currentChartRef) {
        currentChartRef.innerHTML = "";
      }
    };
  }, []);

  return <div ref={chartRef}></div>;
};

export default MainChart;
