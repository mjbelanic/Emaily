if (process.env.NODE_ENV === "production") {
	//use product set of keys
	module.exports = require("./production");
} else {
	//use dev set of keys
	module.exports = require("./dev");
}
