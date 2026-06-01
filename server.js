const fs = require("fs");
const express = require("express");
const path = require("path");
const { marked } = require("marked");
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

        const markdown =
            fs.readFileSync(
                file,
                "utf8"
            );

        const html =
            marked(markdown);

        res.send(`
<!DOCTYPE html>
<html>
<head>

<title>${topic}</title>

<style>

body{
    max-width:900px;
    margin:auto;
    padding:40px;
    font-family:Arial,sans-serif;
    line-height:1.7;
}

h1,h2,h3{
    color:#222;
}

pre{
    background:#f4f4f4;
    padding:10px;
}

code{
    background:#f4f4f4;
    padding:2px 4px;
}

</style>

</head>

<body>

${html}

</body>

</html>
`);

    } catch {

        res.send("Report not found");

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