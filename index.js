const lineChrt = require("./lineChart");
const barChrt = require("./barChart");

function lineChart(props) {
  lineChrt(props);
}

function barChart(props) {
  barChrt(props);
}

module.exports = { lineChart, barChart };
