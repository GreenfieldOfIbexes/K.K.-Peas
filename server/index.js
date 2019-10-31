const express = require("express");
const app = express();

const port = 3000;

app.use(express.static(__dirname + "/../dist"));
app.use("/images", express.static(__dirname + "/../images"));

app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});
