const fs = require("fs");
const express = require("express");
const path = require("path");
const { exec } = require("child_process");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "public", "index.html")
    );
});

app.get("/history", (req, res) => {

    try {

        const history = JSON.parse(
            fs.readFileSync(
                "reports/index.json",
                "utf8"
            )
        );

        res.json(history);

    } catch {

        res.json([]);

    }

});

app.get("/report/:topic", (req, res) => {

    const topic = req.params.topic;

    const file =
        `reports/${topic}-analysis.md`;

    try {

        const content =
            fs.readFileSync(
                file,
                "utf8"
            );

        res.send(
            `<pre>${content}</pre>`
        );

    } catch {

        res.send(
            "Report not found"
        );

    }

});

app.post("/research", (req, res) => {

    const topic = req.body.topic;

    exec(
        `node app.js "${topic}"`,
        {
            maxBuffer: 1024 * 1024 * 20
        },
        (error, stdout, stderr) => {

            if (error) {
                return res.json({
                    success: false,
                    error: error.message
                });
            }

            res.json({
                success: true,
                topic,
                output: stdout
            });
        }
    );
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(
        `Server running at http://localhost:${PORT}`
    );
});