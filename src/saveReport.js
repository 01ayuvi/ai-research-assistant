const fs = require("fs");

function saveReport(filename, content) {
    fs.writeFileSync(filename, content, "utf8");
    console.log(`Saved: ${filename}`);
}

module.exports = saveReport;