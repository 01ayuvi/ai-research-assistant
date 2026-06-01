const fs = require("fs");

function saveHistory(entry) {
    const file = "reports/index.json";

    let history = [];

    if (fs.existsSync(file)) {
        history = JSON.parse(
            fs.readFileSync(file, "utf8")
        );
    }

    history.push(entry);

    fs.writeFileSync(
        file,
        JSON.stringify(history, null, 2),
        "utf8"
    );
}

module.exports = saveHistory;