const webshot = require("webshot-node");

var options = {
  screenSize: {
    width: 1920,
    height: 1080,
  },
  shotSize: {
    width: 1920,
    height: "all",
  },
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
};

webshot(
  "https://test-ssoweb.tyymt.com/system/user/login",
  "./dist/test.png",
  options,
  function (err) {
    if (!err) {
      console.log("Success!");
    }
  }
);
