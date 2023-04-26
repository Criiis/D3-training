async function draw() {
  // Data
  const dataset = await d3.json("data.json");
  console.log("🚀 ~ file: app.js:4 ~ draw ~ dataset:", dataset);

  // Dimensions
  let dimensions = {
    width: 800,
    height: 400,
    margins: 50,
    padding: 1,
  };

  dimensions.ctrWidth = dimensions.width - dimensions.margins * 2;
  dimensions.ctrHeight = dimensions.height - dimensions.margins * 2;

  // Draw Image
  const svg = d3
    .select("#chart")
    .append("svg")
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);

  const ctr = svg
    .append("g")
    .attr("transform", `translate(${dimensions.margins}, ${dimensions.margins})`);

  const xAxisGroup = ctr
    .append("g")
    .style("transform", `translateY(${dimensions.ctrHeight}px)`)
    .classed("axis", true);

  const yAxisGroup = ctr.append("g").classed("axis", true);

  const labelsGroup = ctr.append("g").classed("bar-label", true);

  //update graph
  function histogram(metric) {
    const xAccessor = (d) => d.currently[metric];
    const yAccessor = (d) => d.length;

    //Scales
    const xScale = d3
      .scaleLinear()
      .domain(d3.extent(dataset, xAccessor))
      .range([0, dimensions.ctrWidth])
      .nice();

    const bin = d3.bin().domain(xScale.domain()).value(xAccessor).thresholds(10);
    const newDataset = bin(dataset);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(newDataset, yAccessor)])
      .range([dimensions.ctrHeight, 0])
      .nice();

    const existTransition = d3.transition().duration(500);
    const updateTransition = existTransition.transition().duration(500);

    //Draw Bars
    const bars = ctr
      .selectAll("rect")
      .data(newDataset)
      .join(
        (enter) =>
          enter
            .append("rect")
            .attr("width", (d) => d3.max([0, xScale(d.x1) - xScale(d.x0) - dimensions.padding * 2]))
            .attr("height", 0)
            .attr("x", (d) => xScale(d.x0))
            .attr("y", dimensions.ctrHeight),
        (update) => update,
        (exit) =>
          exit
            .transition(existTransition)
            .attr("y", dimensions.ctrHeight)
            .attr("height", 0)
            .remove()
      )
      .transition(updateTransition)
      .attr("x", (d) => xScale(d.x0))
      .attr("y", (d) => yScale(yAccessor(d)))
      .attr("width", (d) => d3.max([0, xScale(d.x1) - xScale(d.x0) - dimensions.padding * 2]))
      .attr("height", (d) => dimensions.ctrHeight - yScale(yAccessor(d)));

    labelsGroup
      .selectAll("text")
      .data(newDataset)
      .join(
        (enter) =>
          enter
            .append("text")
            .attr("x", (d) => xScale(d.x0) + (xScale(d.x1) - xScale(d.x0)) / 2)
            .attr("y", dimensions.ctrHeight),
        (update) => update,
        (exit) => exit.transition(existTransition).attr("y", dimensions.ctrHeight).remove()
      )
      .transition(updateTransition)
      .attr("x", (d) => xScale(d.x0) + (xScale(d.x1) - xScale(d.x0)) / 2)
      .attr("y", (d) => yScale(yAccessor(d)) - 10)
      .text(yAccessor);

    // Axes in D3
    // X
    const bottomAxis = d3.axisBottom(xScale);

    xAxisGroup.call(bottomAxis);
    // Y
    const leftAxis = d3.axisLeft(yScale);
    yAxisGroup.call(leftAxis);
  }

  //select the weather type and change histogram
  d3.select("#weather-type").on("change", (e) => {
    e.preventDefault();
    const value = e.target.value;
    histogram(value);
  });

  histogram("humidity");
}

draw();

// console.log(document.querySelector("#weather-type"));
// console.log(d3.select("#weather-type"));

// document.querySelector("#weather-type").addEventListener("change", (e) => {
//   e.preventDefault();
//   console.log("test");
//   console.log(e.target.value);
//   console.log(`You like ${e.target.value}`);
// });
