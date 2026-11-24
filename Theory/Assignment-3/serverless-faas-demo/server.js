const express = require("express");
const path = require("path");

const processResult = require("./functions/processResult");

const app = express();

// Read JSON data sent by the frontend
app.use(express.json());

// Serve files from the public folder
app.use(express.static(path.join(__dirname, "public")));

// HTTP event endpoint
app.post("/api/process-result", async (req, res) => {

    try {
        console.log("\n==============================");
        console.log("HTTP EVENT RECEIVED");
        console.log("==============================");

        console.log("Event Data:");
        console.log(req.body);

        // Trigger the FaaS function
        const result = await processResult(req.body);

        console.log("FUNCTION EXECUTED");
        console.log("==============================\n");

        res.json(result);

    } catch (error) {

        console.error("Function Error:", error);

        res.status(500).json({
            success: false,
            message: "Function execution failed."
        });
    }
});

const PORT = 3000;

app.listen(PORT, () => {

    console.log("");
    console.log("=================================");
    console.log("      SERVERLESS FaaS DEMO");
    console.log("=================================");
    console.log(`App: http://localhost:${PORT}`);
    console.log("Waiting for events...");
    console.log("=================================");
    console.log("");

});