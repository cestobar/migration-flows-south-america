// ---- 1. COUNTRY COORDINATES [longitude, latitude] ----
const coords = {
  "China": [104.195397, 35.86166], "Indonesia": [113.921327, -0.789275], "Vanuatu": [167.954712, -15.376706],
  "Australia": [133.775136, -25.274398], "Ghana": [-1.023194, 7.946527], "United States Virgin Islands": [-64.896335, 18.335765],
  "Peru": [-75.015152, -9.189967], "Somalia": [46.199616, 5.152149], "Israel": [34.851612, 31.046051],
  "Morocco": [-7.09262, 31.791702], "Iraq": [43.679291, 33.223191], "Bolivia": [-63.588653, -16.290154],
  "Türkiye": [35.243322, 38.963745], "Trinidad and Tobago": [-61.222503, 10.691803], "Paraguay": [-58.443832, -23.442503],
  "Viet Nam": [108.277199, 14.058324], "Uzbekistan": [64.585262, 41.377491], "United States": [-95.712891, 37.09024],
  "Czechia": [15.472962, 49.817492], "Canada": [-106.346771, 56.130366], "Saint Kitts and Nevis": [-62.782998, 17.357822],
  "Switzerland": [8.227512, 46.818188], "Austria": [13.333333, 47.333333], "France": [2.213749, 46.227638],
  "Norway": [8.468946, 60.472024], "Nicaragua": [-85.207229, 12.865416], "Guinea-Bissau": [-15.180413, 11.803749],
  "Croatia": [15.2, 45.1], "Tunisia": [9.537499, 33.886917], "Cyprus": [33.429859, 35.126413],
  "Bulgaria": [25.48583, 42.733883], "South Africa": [22.937506, -30.559482], "Armenia": [45.038189, 40.069099],
  "Burkina Faso": [-1.561593, 12.238333], "Jamaica": [-77.297508, 18.109581], "Brazil": [-51.92528, -14.235004],
  "Barbados": [-59.543198, 13.193887], "Cameroon": [12.354722, 7.369722], "Latvia": [24.603189, 56.879635],
  "Chile": [-71.542969, -35.675147], "Ecuador": [-78.183406, -1.831239], "Costa Rica": [-83.753428, 9.748917],
  "Greece": [21.824312, 39.074208], "Guinea": [-9.696645, 9.945587], "Ireland": [-8.24389, 53.41291],
  "Mozambique": [35.529562, -18.665695], "Malaysia": [101.975766, 4.210484], "Netherlands": [5.291266, 52.132633],
  "Venezuela": [-66.58973, 6.42375], "Puerto Rico": [-66.590149, 18.220833], "Liberia": [-9.429499, 6.428055],
  "Ukraine": [31.16558, 48.379433], "Portugal": [-8.224454, 39.399872], "India": [78.96288, 20.593684],
  "China, Macao SAR": [113.543873, 22.198745], "Aruba": [-69.968338, 12.52111], "Philippines": [121.774017, 12.879721],
  "Serbia": [21.005859, 44.016521], "Guatemala": [-90.230759, 15.783471], "Belgium": [4.469936, 50.503887],
  "Albania": [20.168331, 41.153332], "Japan": [138.252924, 36.204824], "Nepal": [84.124008, 28.394857],
  "Mali": [-3.996166, 17.570692], "Finland": [25.748151, 61.92411], "Senegal": [-14.452362, 14.497401],
  "Italy": [12.56738, 41.87194], "Guyana": [-58.93018, 4.860416], "State of Palestine": [35.233154, 31.952162],
  "Singapore": [103.819836, 1.352083], "Antigua and Barbuda": [-61.796428, 17.060816], "Uruguay": [-55.765835, -32.522779],
  "French Guiana": [-53.125782, 3.933889], "Romania": [24.96676, 45.943161], "Honduras": [-86.241905, 15.199999],
  "Thailand": [100.992541, 15.870032], "Gambia": [-15.310139, 13.443182], "Algeria": [1.659626, 28.033886],
  "Ethiopia": [40.489673, 9.145], "Mauritania": [-10.940835, 21.00789], "Lao People's Democratic Republic": [102.495496, 19.85627],
  "Estonia": [25.013607, 58.595272], "Slovenia": [14.995463, 46.151241], "Sierra Leone": [-11.779889, 8.460555],
  "South Korea": [127.766922, 35.907757], "Iran": [53.688046, 32.427908], "New Zealand": [174.885971, -40.900557],
  "Suriname": [-56.027783, 3.919305], "Mexico": [-102.552784, 23.634501], "Benin": [2.315834, 9.30769],
  "Cayman Islands": [-80.566956, 19.3133], "Bermuda": [-64.7505, 32.3078], "Afghanistan": [67.709953, 33.93911],
  "United Republic of Tanzania": [34.888822, -6.369028], "Colombia": [-74.297333, 4.570868], "Saudi Arabia": [45.079162, 23.885942],
  "Spain": [-3.74922, 40.463667], "Cuba": [-77.781167, 21.521757], "Argentina": [-63.616672, -38.416097],
  "Holy See": [12.453389, 41.902916], "Iceland": [-19.020835, 64.963051], "Hungary": [19.503304, 47.162494],
  "Nigeria": [8.675277, 9.081999], "Burundi": [29.918886, -3.373056], "Poland": [19.145136, 51.919438],
  "Montenegro": [19.37439, 42.708678], "Haiti": [-72.285215, 18.971187], "Germany": [10.451526, 51.165691],
  "Panama": [-80.782127, 8.537981], "Togo": [0.824782, 8.619543], "Côte d'Ivoire": [-5.54708, 7.539989],
  "China, Taiwan Province of China": [120.960515, 23.69781], "Democratic Republic of the Congo": [21.758664, -4.038333],
  "Falkland Islands (Malvinas)": [-59.523613, -51.796253], "Denmark": [9.501785, 56.26392], "Bangladesh": [90.356331, 23.684994],
  "Qatar": [51.183884, 25.354826], "Congo": [15.827659, -0.228021], "Lithuania": [23.881275, 55.169438],
  "Syria": [38.996815, 34.802075], "Jordan": [36.238414, 31.240008], "Belize": [-88.49765, 17.189877],
  "El Salvador": [-88.89653, 13.794185], "Slovakia": [19.699024, 48.669026], "Cabo Verde": [-23.616667, 16.5388],
  "Angola": [17.873887, -11.202692], "Sudan": [30.217636, 12.862807], "Egypt": [30.802498, 26.820553],
  "Russia": [105.318756, 61.52401], "Sweden": [18.643501, 60.128161], "Libya": [17.228331, 26.3351],
  "French Polynesia": [-149.406843, -17.679742], "Lebanon": [35.862285, 33.854721],
  "Dominican Republic": [-70.162651, 18.735693], "United Kingdom": [-3.435973, 55.378051],
  "Pakistan": [69.345116, 30.375321], "Georgia": [43.356892, 42.315407], "Oman": [55.923255, 21.512583]
};

// ---- 2. COLOR PER DESTINATION COUNTRY ----
const destColors = {
  "Colombia": "#2a78d6", "Argentina": "#eb6834",
  "Brazil": "#1baf7a", "Chile": "#eda100", "Peru": "#e87ba4"
};

// ---- 3. GLOBAL SETUP ----
let flows = [];           // We will store the CSV data here
let activeFilter = "Colombia";  // null = show all destinations
let widthScale;           // We will set this dynamically once data loads

const svg = d3.select("#map");
const W = 960, H = 540;

// The projection turns [longitude, latitude] into [x, y] pixels
const projection = d3.geoNaturalEarth1()
  .scale(175)
  .translate([W / 2, H / 2 + 30]);

const geoPathGen = d3.geoPath().projection(projection);

function arcPath(originName, destName) {
  const [x1, y1] = projection(coords[originName]);
  const [x2, y2] = projection(coords[destName]);

  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const dist = Math.hypot(x2 - x1, y2 - y1);

  // always lift UP, cap the height, clamp inside canvas
  const lift = Math.min(dist * 0.28, 110);
  const cy = Math.max(14, midY - lift);

  return `M${x1},${y1} Q${midX},${cy} ${x2},${y2}`;
}

const tooltip = d3.select("#tooltip");

// ---- 4. LOAD DATA (Map + CSV) ----
Promise.all([
  d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"),
  
  // Load the newly generated flows.csv!
  d3.csv("data/flows.csv", d => ({
    origin: d.origin,
    destination: d.destination,
    migrants: +d.migrants // Convert the string count into a number
  }))
]).then(([world, csvData]) => {
  
  flows = csvData;

  // Set the dynamic scale now that we have data
  const maxMigrants = d3.max(flows, d => d.migrants);
  widthScale = d3.scalePow().exponent(0.5)
    .domain([0, maxMigrants]).range([0.8, 11]);

  // Draw the world map
  const countries = topojson.feature(world, world.objects.countries).features;
  svg.selectAll("path.country")
    .data(countries).join("path")
    .attr("class", "country")
    .attr("d", geoPathGen)
    .attr("fill", "#e5e5e0")
    .attr("stroke", "#c5c5bd");

  drawFlows();
  buildFilterButtons();
}).catch(error => {
  console.error("Error loading the map or CSV data:", error);
});


// ---- 5. VISUALIZATION FUNCTIONS ----
function drawFlows() {
  const visible = activeFilter
    ? flows.filter(f => f.destination === activeFilter)
    : flows;

  svg.selectAll("path.flow").remove();

  visible.forEach(flow => {
    // Skip if we don't have coordinates in our lookup dictionary
    if (!coords[flow.origin] || !coords[flow.destination]) {
      console.warn("Missing coords for:", flow.origin, "or", flow.destination);
      return;
    }

    svg.append("path")
      .attr("class", "flow")
      .attr("d", arcPath(flow.origin, flow.destination))
      .attr("fill", "none")
      .attr("stroke", destColors[flow.destination] || "#999")
      .attr("stroke-width", widthScale(flow.migrants))
      .attr("stroke-linecap", "round")
      .attr("opacity", 0.6)
      .on("mousemove", (event) => showTooltip(event, flow))
      .on("mouseout", hideTooltip);
  });
}

function showTooltip(event, flow) {
  tooltip
    .style("opacity", 1)
    .style("left", (event.pageX + 12) + "px")
    .style("top", (event.pageY - 12) + "px")
    .html(`${flow.origin} &rarr; ${flow.destination}: ${flow.migrants.toLocaleString()} migrants`);
}

function hideTooltip() {
  tooltip.style("opacity", 0);
}

function buildFilterButtons() {
  const destinations = [...new Set(flows.map(f => f.destination))];
  const controls = d3.select("#controls");

  // Optional: clear existing buttons if re-running
  controls.selectAll("button").remove();

  function makeButton(label, value) {
    controls.append("button")
      .text(label)
      .classed("active", activeFilter === value)
      .on("click", (event) => {
        activeFilter = value;
        controls.selectAll("button").classed("active", false);
        d3.select(event.currentTarget).classed("active", true);
        drawFlows();
      });
  }

//  makeButton("All", null);
  destinations.forEach(dest => makeButton(dest, dest));
}