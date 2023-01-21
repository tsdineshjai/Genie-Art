const express = require("express");
const app = express();

const port = 5500;

app.use("/", (req, res) => {
	res.send("welcome to the express server on the port 5500");
});

app.listen(port, () => {
	console.log(`server running at the port http:\\localhost:${port}`);
});
