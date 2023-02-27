const chrt = require("./lineChart");
function isStr(str) {
  console.log(typeof str === "string");
  chrt("passed to chrt");
}

module.exports = isStr;
