async function draw(el, scale) {
  // Data

  const dataset = await d3.json("data.json");
  console.log("🚀 ~ file: app.js:4 ~ draw ~ dataset:", dataset);

  const chartColor = ["white", "pink", "red"];

  const colorDomain = d3.extent(dataset); // return array with lowest and height number
  let colorScale;
  if (scale == "linear") colorScale = d3.scaleLinear().domain(colorDomain).range(["white", "red"]);
  if (scale == "quantize") colorScale = d3.scaleQuantize().domain(colorDomain).range(chartColor);
  if (scale == "quantile") colorScale = d3.scaleQuantile().domain(dataset).range(chartColor);
  if (scale == "threshold")
    colorScale = d3.scaleThreshold().domain([45200, 136000]).range(chartColor); //u can create the "breakpoints"


  // Dimensions
  let dimensions = {
    width: 500,
    height: 150,
  };
  const box = 25;

  // Draw Image
  const svg = d3
    .select(el)
    .append("svg")
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);

  const rectangles = svg
    .append("g")
    .attr("transform", "translate(2,2)")
    .selectAll("rect")
    .data(dataset)
    .join("rect")
    .attr("width", box - 3)
    .attr("height", box - 3)
    .attr("stroke", "#eee")
    .attr("rx", 5)
    .attr("x", (_, i) => box * (i % 20)) // 0, 30, 60
    .attr("y", (_, i) => box * ((i / 20) | 0))
    .attr("data-value", (d) => d)
    .style("fill", colorScale);
}

draw("#heatmap1", "linear");
draw("#heatmap2", "quantize");
draw("#heatmap3", "quantile");
draw("#heatmap4", "threshold");
