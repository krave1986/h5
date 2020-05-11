const fs = require("fs");
const path = require("path");

module.exports = {
	devServer: {
		// host: "h5.wulicoco.online",
		https: true,
		key: fs.readFileSync(path.resolve(__dirname, "./2_h5.wulicoco.online.key")),
		cert: fs.readFileSync(path.resolve(__dirname, "./1_h5.wulicoco.online_bundle.crt"))
	}
};
