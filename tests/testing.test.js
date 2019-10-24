import makeProductObj from "../src/actions/makeProductObj-possibleRefile.js";
const util = require("util");

test("adds 1 + 2 to equal 3", async () => {
	let returnVal = await makeProductObj(7);
	console.log(util.inspect(returnVal, false, null, true));
});
