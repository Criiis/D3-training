const dimension = {
  width: 800,
  height: 800,
  margin: {
    top: 50,
    right: 50,
    left: 50,
    bottom: 50,
  },
};

const circleXPosition = (d) => d.currently.humidity;
const circleYPosition = (d) => d.currently.apparentTemperature;

const draw = async () => {
  const containerWidth = dimension.width - dimension.margin.right - dimension.margin.left;
  const containerHeight = dimension.height - dimension.margin.top - dimension.margin.bottom;

  const getData = await d3.json("./data.json");
  console.log(getData);

  //create SVG
  const svg = d3
    .select("#chart")
    .append("svg")
    .attr("viewBox", `0 0 ${dimension.width} ${dimension.height}`);

  //create Container
  const container = svg
    .append("g")
    .attr("transform", `translate(${dimension.margin.left}, ${dimension.margin.top})`);

  //create a X and Y scale for positioning the circles
  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(getData, circleXPosition))
    .rangeRound([0, containerWidth])
    .clamp(true);

  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(getData, circleYPosition))
    .rangeRound([containerHeight, 0])
    .nice()
    .clamp(true);

  //apply the circle in the graph
  container
    .selectAll("circle")
    .data(getData)
    .join("circle")
    .attr("cx", (d) => xScale(circleXPosition(d))) //console.log(d)); //accessor function (it will access the data for each element)
    .attr("cy", (d) => yScale(circleYPosition(d)))
    .attr("r", 5)
    .attr("data-temp", (d) => d.currently.apparentTemperature)
    .attr("data-humid", (d) => d.currently.humidity);

  // create Axes
  const xAxis = d3
    .axisBottom(xScale)
    .ticks(5)
    .tickFormat((d) => `${d * 100}%`);
  const yAxis = d3.axisLeft(yScale);

  const xAxisGroup = container
    .append("g")
    .call(xAxis)
    .style("transform", `translateY(${containerHeight}px)`)
    .classed("axis", true);

  xAxisGroup
    .append("text")
    .text("Humidity")
    .attr("x", containerWidth / 2)
    .attr("y", dimension.margin.bottom - 10)
    .attr("fill", "black");

  const yAxisGroup = container.append("g").call(yAxis).classed("axis", true);

  yAxisGroup
    .append("text")
    .html("Temperature &deg;F")
    .attr("x", -containerHeight / 2)
    .attr("y", -dimension.margin.left + 15)
    .attr("fill", "black")
    .style("transform", "rotate(270deg)")
    .style("text-anchor", "middle");
};

draw();
