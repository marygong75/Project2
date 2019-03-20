// Create a map object
var myMap = L.map("map", {
  center: [37.00, -95.00],
  zoom: 4
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
}).addTo(myMap);

// Define a markerSize function that will give each state a different radius based on its wage gap
function markerSize(wage_gap) {
  return wage_gap * 1500;
}

// Each state object contains the state name, location and wage gap
var states = [
  {
    name: "Alabama",
    location: [32.806671, -86.79113],
    wage_gap: 73
  },
  {
    name: "Alaska",
    location: [61.370716, -152.404419],
    wage_gap: 82
  },
  {
    name: "Arizona",
    location: [33.729759, -111.431221],
    wage_gap: 85
  },
  {
    name: "Arkansas",
    location: [34.969704, -92.373123],
    wage_gap: 79
  },
  {
    name: "California",
    location: [36.116203, -119.681564],
    wage_gap: 89
  },
  {
    name: "Colorado",
    location: [39.059811, -105.311104],
    wage_gap: 82
  },
  {
    name: "Connecticut",
    location: [41.597782, -72.755371],
    wage_gap: 83
  },
  {
    name: "Delaware",
    location: [39.318523, -75.507141],
    wage_gap: 86
  },
  {
    name: "Florida",
    location: [27.766279, -81.686783],
    wage_gap: 87
  },
  {
    name: "Georgia",
    location: [33.040619, -83.643074],
    wage_gap: 83
  },
  {
    name: "Hawaii",
    location: [21.094318, -157.498337],
    wage_gap: 81
  },
  {
    name: "Idaho",
    location: [44.240459, -114.478828],
    wage_gap: 75
  },
  {
    name: "Illinois",
    location: [40.349457, -88.986137],
    wage_gap: 78
  },
  {
    name: "Indiana",
    location: [39.849426, -86.258278],
    wage_gap: 73
  },
  {
    name: "Iowa",
    location: [42.011539, -93.210526],
    wage_gap: 75
  },
  {
    name: "Kansas",
    location: [38.5266, -96.726486],
    wage_gap: 77
  },
  {
    name: "Kentucky",
    location: [37.66814, -84.670067],
    wage_gap: 79
  },
  {
    name: "Louisiana",
    location: [31.169546, -91.867805],
    wage_gap: 69
  },
  {
    name: "Maine",
    location: [44.693947, -69.381927],
    wage_gap: 82
  },
  {
    name: "Maryland",
    location: [39.063946, -76.802101],
    wage_gap: 86
  },
  {
    name: "Massachusetts",
    location: [42.230171, -71.530106],
    wage_gap: 83
  },
  {
    name: "Michigan",
    location: [43.326618, -84.536095],
    wage_gap: 78
  },
  {
    name: "Minnesota",
    location: [45.694454, -93.900192],
    wage_gap: 82
  },
  {
    name: "Mississippi",
    location: [32.741646, -89.678696],
    wage_gap: 77
  },
  {
    name: "Missouri",
    location: [38.456085, -92.288368],
    wage_gap: 78
  },
  {
    name: "Montana",
    location: [46.921925, -110.454353],
    wage_gap: 79
  },
  {
    name: "Nebraska",
    location: [41.12537, -98.268082],
    wage_gap: 77
  },
  {
    name: "Nevada",
    location: [38.313515, -117.055374],
    wage_gap: 83
  },
  {
    name: "New Hampshire",
    location: [43.452492, -71.563896],
    wage_gap: 79
  },
  {
    name: "New Jersey",
    location: [40.298904, -74.521011],
    wage_gap: 80
  },
  {
    name: "New Mexico",
    location: [34.840515, -106.248482],
    wage_gap: 83
  },
  {
    name: "New York",
    location: [42.165726, -74.948051],
    wage_gap: 88
  },
  {
    name: "North Carolina",
    location: [35.630066, -79.806419],
    wage_gap: 84
  },
  {
    name: "North Dakota",
    location: [47.528912, -99.784012],
    wage_gap: 79
  },
  {
    name: "Ohio",
    location: [40.388783, -82.764915],
    wage_gap: 78
  },
  {
    name: "Oklahoma",
    location: [35.565342, -96.928917],
    wage_gap: 77
  },
  {
    name: "Oregon",
    location: [44.572021, -122.070938],
    wage_gap: 82
  },
  {
    name: "Pennsylvania",
    location: [40.590752, -77.209755],
    wage_gap: 80
  },
  {
    name: "Rhode Island",
    location: [41.680893, -71.51178],
    wage_gap: 84
  },
  {
    name: "South Carolina",
    location: [33.856892, -80.945007],
    wage_gap: 77
  },
  {
    name: "South Dakota",
    location: [44.299782, -99.438828],
    wage_gap: 77
  },
  {
    name: "Tennessee",
    location: [35.747845, -86.692345],
    wage_gap: 82
  },
  {
    name: "Texas",
    location: [31.054487, -97.563461],
    wage_gap: 81
  },
  {
    name: "Utah",
    location: [40.150032, -111.862434],
    wage_gap: 71
  },
  {
    name: "Vermont",
    location: [44.045876, -72.710686],
    wage_gap: 86
  },
  {
    name: "Virginia",
    location: [37.769337, -78.169968],
    wage_gap: 79
  },
  {
    name: "Washington",
    location: [47.400902, -121.490494],
    wage_gap: 78
  },
  {
    name: "West Virginia",
    location: [38.491226, -80.954453],
    wage_gap: 74
  },
  {
    name: "Wisconsin",
    location: [44.268543, -89.616508],
    wage_gap: 80
  },
  {
    name: "Wyoming",
    location: [42.755966, -107.30249],
    wage_gap: 77
  }

];

//Color of circles based on magnitude 
function getColor(wage_gap) {
  if (wage_gap >70 && wage_gap < 74) {color = "#ffff99"}
    else if (wage_gap >75 && wage_gap < 79) {color = "#ffcc66"}
    else if (wage_gap >80 && wage_gap < 84) {color = "#ff9933"}
    else if (wage_gap >85 && wage_gap < 90) {color = "#ff6600"}
    else {color = "#cc0066"}
  return color
}


// Loop through the states array and create one marker for each state
for (var i = 0; i < states.length; i++) {
  L.circle(states[i].location, {
    color: getColor(states[i].wage_gap),
    // Setting our circle's radius equal to the output of our markerSize function
    radius: markerSize(states[i].wage_gap)
  }).bindPopup("<h1>" + states[i].name + "</h1> <hr> <h3>Wage Gap: " + states[i].wage_gap + "</h3>").addTo(myMap);
}

//Adding legend for wage gap
var legend = L.control({position: "bottomleft"});
legend.onAdd = function() {
  var div = L.DomUtil.create("div", "info legend");
  var colors = ["#ffff99", "#ffcc66", "#ff9933", "#ff6600", "#cc0066"]
  var wage_gap = [70, 75, 80, 85, 90];
  var legendInfo = "<h3> Wage Gap</h3>"
  div.innerHTML = legendInfo
  for (var i=0; i<wage_gap.length; i++) {
    div.innerHTML +=
      '<i style="background:' + colors[i] + '"></i>' +
      wage_gap[i] + (wage_gap[i+1] ? '&ndash;' + wage_gap[i+1] + '<br>' : '+')
  }

  return div;
};

legend.addTo(myMap);
